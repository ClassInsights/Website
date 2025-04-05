export type DemoRequest = {
	turnstiletoken: string;
	name: string;
	street: string;
	house: string;
	zip: string;
	city: string;
	website: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
};

export function isDemoRequest(data: unknown): boolean {
	return (
		typeof data === "object" &&
		data !== null &&
		"turnstile" in data &&
		typeof data.turnstile === "string" &&
		data.turnstile !== "" &&
		"name" in data &&
		typeof data.name === "string" &&
		data.name !== "" &&
		"street" in data &&
		typeof data.street === "string" &&
		data.street !== "" &&
		"house" in data &&
		typeof data.house === "string" &&
		data.house !== "" &&
		"zip" in data &&
		typeof data.zip === "string" &&
		data.zip !== "" &&
		"city" in data &&
		typeof data.city === "string" &&
		data.city !== "" &&
		"website" in data &&
		typeof data.website === "string" &&
		data.website !== "" &&
		"firstName" in data &&
		typeof data.firstName === "string" &&
		data.firstName !== "" &&
		"lastName" in data &&
		typeof data.lastName === "string" &&
		data.lastName !== "" &&
		"email" in data &&
		typeof data.email === "string" &&
		data.email !== "" &&
		data.email.includes("@") &&
		"phone" in data &&
		typeof data.phone === "string" &&
		data.phone !== ""
	);
}
