import { type TokenData, isTokenData } from "./TokenData";

/** Full decoded user data with all needed details */
export type UserData = {
	user: TokenData;
	id_token: string;
	access_token: string;
	refresh_token: string;
	/** Number of seconds since midnight, January 1, 1970 Universal Coordinated Time (UTC)*/
	expires_at: number;
};

/** Type guard for the UserData type */
export function isUserData(data: unknown): data is UserData {
	return (
		typeof data === "object" &&
		data !== null &&
		"user" in data &&
		isTokenData(data.user) &&
		"id_token" in data &&
		typeof data.id_token === "string" &&
		"access_token" in data &&
		typeof data.access_token === "string" &&
		"refresh_token" in data &&
		typeof data.refresh_token === "string" &&
		"expires_at" in data &&
		typeof data.expires_at === "number"
	);
}
