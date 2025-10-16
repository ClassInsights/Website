/** Default authentification server response */
export type AuthResponse = {
  id_token: string;
  access_token: string;
  refresh_token: string;
  /** Number of seconds the token is valid */
  expires_in: number;
};

/** Type guard for the AuthResponse type */
export function isAuthResponse(data: unknown): data is AuthResponse {
  return (
    typeof data === "object" &&
    data !== null &&
    "id_token" in data &&
    typeof data.id_token === "string" &&
    "access_token" in data &&
    typeof data.access_token === "string" &&
    "refresh_token" in data &&
    typeof data.refresh_token === "string" &&
    "token_type" in data &&
    data.token_type === "Bearer" &&
    "expires_in" in data &&
    typeof data.expires_in === "number"
  );
}
