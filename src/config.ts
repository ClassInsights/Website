import { ConfigData } from "./types/ConfigData";

const env: Record<keyof ConfigData, undefined | string> = {
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_AUTH_URL: import.meta.env.VITE_AUTH_URL,
  VITE_JWKS_URL: import.meta.env.VITE_JWKS_URL,
};

// returns config value from environment or config.js
function getValue(key: keyof ConfigData): string {
  let windowValue = (window as any)?.__CONFIG__?.[key];
  if (windowValue !== null && windowValue !== undefined && windowValue.length === 0) windowValue = undefined;
  return env[key] ?? windowValue ?? "";
}

export function conf(): ConfigData {
  return {
    VITE_API_URL: getValue("VITE_API_URL"),
    VITE_AUTH_URL: getValue("VITE_AUTH_URL"),
    VITE_JWKS_URL: getValue("VITE_JWKS_URL"),
  };
}
