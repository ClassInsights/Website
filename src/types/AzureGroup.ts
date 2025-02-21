/** The Azure group type */
export type AzureGroup = {
	id: string;
	displayName: string;
};

/** Type guard for the AzureGroup type */
export function isAzureGroup(data: unknown): data is AzureGroup {
	return (
		typeof data === "object" &&
		data !== null &&
		"id" in data &&
		typeof data.id === "string" &&
		"displayName" in data &&
		typeof data.displayName === "string"
	);
}
