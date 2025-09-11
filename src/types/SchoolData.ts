/** Data structure for school data */
export type SchoolData = {
  SchoolId: number;
  Name: string;
  Website: string;
  LocalApiUrl: string;
  LocalDashboardUrl: string;
  TeacherGroups: string[];
  Roles: Role[];
};

/** Type guard for the SchoolData type */
export function isSchoolData(data: unknown): data is SchoolData {
  return (
    typeof data === "object" &&
    data !== null &&
    "SchoolId" in data &&
    typeof data.SchoolId === "number" &&
    "Name" in data &&
    typeof data.Name === "string" &&
    "Website" in data &&
    typeof data.Website === "string" &&
    "LocalApiUrl" in data &&
    typeof data.LocalApiUrl === "string" &&
    "LocalDashboardUrl" in data &&
    typeof data.LocalDashboardUrl === "string" &&
    "TeacherGroups" in data &&
    Array.isArray(data.TeacherGroups) &&
    data.TeacherGroups.every((group) => typeof group === "string") &&
    "Roles" in data &&
    Array.isArray(data.Roles) &&
    data.Roles.every(isRole)
  );
}

export type Role = "Owner" | "Admin" | "Teacher" | "Student";
export const isRole = (role: unknown): role is Role => {
  return role === "Owner" || role === "Admin" || role === "Teacher" || role === "Student";
};

export const translateRole = (role: Role): string => {
  switch (role) {
    case "Admin":
      return "Administrator";
    case "Teacher":
      return "Lehrer";
    case "Student":
      return "Schüler";
    case "Owner":
      return "CI";
  }
};
