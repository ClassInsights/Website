import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressSVG from "../assets/svg/progress.svg?react";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import { useToast } from "../contexts/ToastContext";

/** The login page */
const Login = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const alreadyExchanged = useRef(false);

	const auth = useAuth();
	const toasts = useToast();

	const navigate = useNavigate();
	const loginCode = useMemo(() => new URLSearchParams(location.search).get("code"), []);

	const navigateHome = useCallback(() => navigate("/"), [navigate]);

	useEffect(() => {
		window.history.replaceState({}, "", `${window.location.origin}${window.location.pathname}`);
		setError(null);

		if (!loginCode) {
			setIsLoading(false);
			if (auth.isAuthenticated) navigate("/schulen");
			return;
		}

		if (alreadyExchanged.current) return;
		alreadyExchanged.current = true;

		auth.exchangeCode(loginCode).then((code) => {
			switch (code) {
				case 200:
					toasts.showMessage("Erfolgreich angemeldet");
					navigate("/schulen");
					return;
				case 400:
					setError("Es wurde ein ungültiger Authentifizierungscode übergeben. Bitte versuchen Sie es später erneut.");
					break;
				case 401:
					setError(
						"Dieser Microsoft Account ist in keiner Schule, die ClassInsights verwendet. Probieren Sie es mit einem anderen Microsoft Konto.",
					);
					break;
				case 500:
					setError("Ein unerwarteter Serverfehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
					break;
				default:
					setError("Ein unbekannter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
					break;
			}

			setIsLoading(false);
		});
	});

	return (
		<div className="flex min-h-dvh flex-col items-center justify-center py-24">
			<h1 className="text-center text-6xl">
				{isLoading ? "Anmeldung" : error ? "Anmeldung fehlgeschlagen" : "Anmeldung erforderlich"}
			</h1>
			<p className="mt-6 pb-8 text-center text-lg md:w-3/4">
				{isLoading
					? "Der Anmeldevorgang wird gerade durchlaufen. Sie sind gleich startklar!"
					: error
						? error
						: "Um auf die ClassInsights Dienste zugreifen zu können, müssen Sie sich mit einem  Microsoft Konto Ihrer Schule anmelden."}
			</p>
			{isLoading ? (
				<ProgressSVG width={60} height={60} className="shrink-0 animate-spin fill-primary" />
			) : (
				<div className="flex gap-6">
					<div
						className="flex cursor-pointer items-center text-primary"
						onClick={navigateHome}
						onKeyDown={navigateHome}
					>
						<p>Zur Startseite</p>
					</div>
					<Button label={error ? "Erneut versuchen" : "Anmelden"} onPress={auth.handleLogin} arrowed />
				</div>
			)}
		</div>
	);
};

export default Login;
