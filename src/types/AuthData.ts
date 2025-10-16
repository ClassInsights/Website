/** Default authentification cookie type */
export type AuthData = {
  id_token: string;
  access_token: string;
  refresh_token: string;
  /** Number of seconds since midnight, January 1, 1970 Universal Coordinated Time (UTC)*/
  expires_at: number;
  delete_at: number;
};

/** Type guard for the AuthData type */
export function isAuthData(data: unknown): data is AuthData {
  return (
    typeof data === "object" &&
    data !== null &&
    "id_token" in data &&
    typeof data.id_token === "string" &&
    "access_token" in data &&
    typeof data.access_token === "string" &&
    "refresh_token" in data &&
    typeof data.refresh_token === "string" &&
    "expires_at" in data &&
    typeof data.expires_at === "number" &&
    "delete_at" in data &&
    typeof data.delete_at === "number"
  );
}
