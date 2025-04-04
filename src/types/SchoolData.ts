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
		data.Roles.every((role) => role in Role)
	);
}

export enum Role {
	ADMIN = "Admin",
	TEACHER = "Teacher",
	STUDENT = "Student",
}

export const translateRole = (role: Role): string => {
	switch (role) {
		case Role.ADMIN:
			return "Administrator";
		case Role.TEACHER:
			return "Lehrer";
		case Role.STUDENT:
			return "Schüler";
	}
};
