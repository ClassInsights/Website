import type { ConfigData } from "./types/ConfigData";

declare global {
  interface Window {
    __CONFIG__: ConfigData | undefined;
  }
}

const env: Record<keyof ConfigData, undefined | string> = {
  VITE_AUTH_URL: import.meta.env.VITE_AUTH_URL,
  VITE_LOGOUT_URL: import.meta.env.VITE_LOGOUT_URL,
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_JWKS_URL: import.meta.env.VITE_JWKS_URL,
  VITE_TURNSTILE_SITE_KEY: import.meta.env.VITE_TURNSTILE_SITE_KEY,
};

// returns config value from environment or config.js
function getValue(key: keyof ConfigData): string {
  let windowValue = window.__CONFIG__?.[key];
  if (windowValue !== null && windowValue !== undefined && windowValue.length === 0)
    windowValue = undefined;
  return env[key] ?? windowValue ?? "";
}

export function conf(): ConfigData {
  return {
    VITE_AUTH_URL: getValue("VITE_AUTH_URL"),
    VITE_LOGOUT_URL: getValue("VITE_LOGOUT_URL"),
    VITE_API_URL: getValue("VITE_API_URL"),
    VITE_JWKS_URL: getValue("VITE_JWKS_URL"),
    VITE_TURNSTILE_SITE_KEY: getValue("VITE_TURNSTILE_SITE_KEY"),
  };
}
