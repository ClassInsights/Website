export type DashboardResponse = {
  dashboard_token: string;
};

export const isDashboardResponse = (data: unknown): data is DashboardResponse =>
  typeof data === "object" &&
  data !== null &&
  "dashboard_token" in data &&
  typeof data.dashboard_token === "string";
