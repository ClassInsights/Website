import * as jose from "jose";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, removeCookie, setCookie } from "typescript-cookie";
import { conf } from "../config";
import { type AuthData, isAuthData } from "../types/AuthData";
import { type AuthResponse, isAuthResponse } from "../types/AuthResponse";
import { type TokenData, isTokenData } from "../types/TokenData";
import type { UserData } from "../types/UserData";
import { useToast } from "./ToastContext";
import { isDashboardResponse } from "../types/DashboardResponse";

type AuthContextType = {
	/** True if the user is authenticated */
	isAuthenticated: boolean;
	/** The user data if authenticated, otherwise null */
	data: UserData | null;
	/** Redirect the user to the school selection (if logged in) or authentification server */
	handleLogin: () => void;
	/** Exchange them microsoft code for the auth data */
	exchangeCode: (code: string) => Promise<number>;
	/** Refresh the access token with the refresh token and update cookie */
	refreshToken: (refreshToken: string) => Promise<AuthResponse | undefined>;
	/** Logout the user and remove the cookie */
	logout: () => void;
	/** Navigate to dashboard */
	navigateToDashboard: (schoolId: number) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [authData, setAuthData] = useState<UserData | null>(null);
	const refreshTimeout = useRef<number>();

	const toast = useToast();
	const navigate = useNavigate();

	const isAuthenticated = useMemo(() => authData !== null && authData.expires_at > Date.now() / 1000, [authData]);
	const JWKS = useMemo(() => jose.createRemoteJWKSet(new URL(conf().VITE_JWKS_URL)), []);

	/** Redirect the user to the school selection (if logged in) or authentification server */
	const handleLogin = useCallback(
		() => (isAuthenticated ? navigate("/schulen") : window.location.replace(conf().VITE_AUTH_URL)),
		[isAuthenticated, navigate],
	);

	/**
	 * Decode the auth data with the json web key set
	 * @returns The user data if the token is valid, otherwise undefined
	 */
	const decodeAuthData = useCallback(
		async (data: AuthData | AuthResponse) => {
			let idData: TokenData | null = null;
			try {
				const { payload } = await jose.jwtVerify(data.id_token, JWKS);
				if (!isTokenData(payload)) return;
				idData = payload;
			} catch {}

			if (!idData) return;

			const userData: UserData = {
				user: idData,
				id_token: data.id_token,
				refresh_token: data.refresh_token,
				access_token: data.access_token,
				expires_at: isAuthData(data) ? data.expires_at : Math.floor(data.expires_in + Date.now() / 1000),
			};

			return userData;
		},
		[JWKS],
	);

	/** Update the cookie with the new auth data and set user application context */
	const updateCookie = useCallback(
		async (data: AuthResponse) => {
			const expirationDate = Math.floor(data.expires_in + Date.now() / 1000);

			const cookieData: AuthData = {
				id_token: data.id_token,
				access_token: data.access_token,
				refresh_token: data.refresh_token,
				expires_at: expirationDate,
			};

			const encodedData = btoa(JSON.stringify(cookieData));

			const cookieExpirationDate = new Date();
			cookieExpirationDate.setDate(cookieExpirationDate.getDate() + 30);

			setCookie("tasty", encodedData, {
				expires: cookieExpirationDate,
				secure: !import.meta.env.DEV,
				sameSite: "Lax",
			});

			const userData = await decodeAuthData(cookieData);
			if (userData) setAuthData(userData);
		},
		[decodeAuthData],
	);

	/**
	 * Refresh the access token with the refresh token and update cookie
	 * @returns The new auth response if the token was successfully refreshed, otherwise undefined
	 */
	const refreshToken = useCallback(
		async (refreshToken: string) => {
			let result: Response;

			try {
				result = await fetch(`${conf().VITE_API_URL}/token`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ refresh_token: refreshToken, grant_type: "refresh_token" }),
				});

				if (!result.ok) return;
			} catch {
				return;
			}

			const data = await result.json();
			if (!isAuthResponse(data)) return;

			await updateCookie(data);
			return data;
		},
		[updateCookie],
	);

	/**
	 * Validate the cookie with expiration date and json web key
	 * @returns The user data if the cookie is valid, otherwise undefined
	 */
	const validateCookie = useCallback(
		async (cookie: string) => {
			let data: unknown;
			try {
				data = JSON.parse(atob(cookie));
			} catch {
				return;
			}

			if (!isAuthData(data)) return;

			// Try refreshing the token if already expired
			if (data.expires_at < Date.now() / 1000) {
				const newData = await refreshToken(data.refresh_token);
				if (!newData) return;

				const userData = await decodeAuthData(newData);
				if (userData) return userData;
			}

			// Check if the id token is valid (JWK signed by CI server)
			const userData = await decodeAuthData(data);
			if (userData) return userData;
		},
		[refreshToken, decodeAuthData],
	);

	/** Start the refresh timeout */
	const startRefreshTimeout = useCallback(
		(expiresAt: number, refresh_token: string) => {
			if (refreshTimeout.current) clearTimeout(refreshTimeout.current);

			// Refresh the token 5 minutes before expiration
			const timeLeft = Math.floor(expiresAt * 1000 - Date.now() - 1000 * 60 * 5);

			refreshTimeout.current = setTimeout(async () => {
				const response = await refreshToken(refresh_token);
				await decodeCookie();
				if (!response) return;

				startRefreshTimeout(Math.floor(response.expires_in + Date.now() / 1000), response.refresh_token);
			}, timeLeft);
		},
		[refreshToken],
	);

	/** Decode the cookie and set the user data */
	const decodeCookie = useCallback(async () => {
		const cookieData = getCookie("tasty");
		if (!cookieData) return;

		const data = await validateCookie(cookieData);
		if (!data) {
			removeCookie("tasty");
			return;
		}

		setAuthData(data);
		startRefreshTimeout(data.expires_at, data.refresh_token);
	}, [validateCookie, startRefreshTimeout]);

	/** Exchange the code for the auth data */
	const exchangeCode = useCallback(
		async (code: string) => {
			let result: Response;

			try {
				result = await fetch(`${conf().VITE_API_URL}/azure/login?code=${code}`);
				if (!result.ok) return result.status;
			} catch {
				return -1;
			}

			const data = await result.json();

			if (!isAuthResponse(data)) return -1;

			updateCookie(data);
			startRefreshTimeout(Math.floor(data.expires_in + Date.now() / 1000), data.refresh_token);
			return 200;
		},
		[updateCookie, startRefreshTimeout],
	);

	/** Logout the user and remove the cookie */
	const logout = useCallback(async () => {
		removeCookie("tasty");
		localStorage.setItem("logout", Date.now().toString());
		if (!authData) {
			window.location.replace(conf().VITE_LOGOUT_URL);
			return;
		}

		await fetch(`${conf().VITE_API_URL}/token/revoke`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ token: authData.refresh_token, token_type_hint: "refresh_token" }),
		});

		window.location.replace(conf().VITE_LOGOUT_URL);
	}, [authData]);

	const navigateToDashboard = useCallback(
		async (schoolId: number) => {
			if (!authData) {
				toast.showMessage("Melden Sie sich erneut an!", "error");
				return;
			}

			try {
				const response = await fetch(`${conf().VITE_API_URL}/schools/${schoolId}/dashboard`, {
					headers: {
						Authorization: `Bearer ${authData.access_token}`,
					},
				});

				if (!response.ok) throw new Error();

				const data = await response.json();

				if (!isDashboardResponse(data)) throw new Error();

				const school = authData.user.schools.find((s) => s.SchoolId === schoolId);
				if (!school) throw new Error();

				window.location.replace(`${school.LocalDashboardUrl}?token=${data.dashboard_token}`);
			} catch {
				toast.showMessage("Fehler beim Weiterleiten zum Dashboard", "error");
			}
		},
		[authData, toast.showMessage],
	);

	/** Initialize the authentification context */
	const initializeAuth = useCallback(async () => {
		await decodeCookie();
		setIsLoading(false);
	}, [decodeCookie]);

	useEffect(() => {
		const logoutTime = localStorage.getItem("logout");
		if (logoutTime) {
			localStorage.removeItem("logout");
			if (Date.now() - Number.parseInt(logoutTime) < 10000)
				setTimeout(() => toast.showMessage("Erfolgreich abgemeldet"), 0);
		}
		if (isLoading) initializeAuth();
	}, [toast.showMessage, isLoading, initializeAuth]);

	useEffect(() => {
		return () => {
			if (refreshTimeout.current) clearTimeout(refreshTimeout.current);
		};
	}, []);

	if (isLoading) return;

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				data: authData,
				handleLogin,
				exchangeCode,
				refreshToken,
				logout,
				navigateToDashboard,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
