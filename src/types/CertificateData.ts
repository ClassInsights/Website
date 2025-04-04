export type CertificateData = {
	name: string;
	member_since: string;
	website: string;
};

export function isCertificateData(data: unknown): data is CertificateData {
	return (
		typeof data === "object" &&
		data !== null &&
		"name" in data &&
		typeof data.name === "string" &&
		"member_since" in data &&
		typeof data.member_since === "string" &&
		"website" in data &&
		typeof data.website === "string"
	);
}
