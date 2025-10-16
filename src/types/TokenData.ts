import { isSchoolData, type SchoolData } from "./SchoolData";

/** Data structure for decoded JWT id_token data */
export type TokenData = {
  id: string;
  name: string;
  email: string;
  schools: SchoolData[];
};

/** Type guard for the TokenData type */
export function isTokenData(data: unknown): data is TokenData {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    typeof data.id === "string" &&
    "name" in data &&
    typeof data.name === "string" &&
    "email" in data &&
    typeof data.email === "string" &&
    "schools" in data &&
    Array.isArray(data.schools) &&
    data.schools.every(isSchoolData)
  );
}
