import { useCallback, useRef, useState } from "react";
import Spacing from "../components/Spacing";
import TextInput from "../components/TextInput";
import { isDemoRequest } from "../types/DemoRequest";
import Turnstile from "react-turnstile";
import { conf } from "../config";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../contexts/ToastContext";

const Demo = () => {
	const [missingFields, setMissingFields] = useState<string[]>([]);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);

	const demoRef = useRef<Record<string, string>>({});
	const toast = useToast();
	const navigate = useNavigate();

	const handleChange = useCallback((key: string, value: string) => {
		if (value === "") setMissingFields((prev) => [...prev, key]);
		else setMissingFields((prev) => prev.filter((field) => field !== key));

		demoRef.current = {
			...demoRef.current,
			[key]: value,
		};
	}, []);

	const handleSubmit = useCallback(async () => {
		setIsSubmitting(true);

		if (!isDemoRequest(demoRef.current)) {
			const missingFields = [];
			for (const key of [
				"turnstile",
				"name",
				"street",
				"house",
				"zip",
				"city",
				"website",
				"firstName",
				"lastName",
				"email",
				"phone",
			]) {
				if ((key === "email" && !demoRef.current[key].includes("@")) || demoRef.current[key].split("@").length !== 2) {
					missingFields.push(key);
					continue;
				}
				if (key in demoRef.current && demoRef.current[key] !== "") continue;
				missingFields.push(key);
			}
			setMissingFields(missingFields);
			setIsSubmitting(false);
			return;
		}

		try {
			const result = await fetch(`${conf().VITE_API_URL}/demo`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					turnstile: demoRef.current.turnstile,
					schoolName: demoRef.current.name,
					schoolAddress: `${demoRef.current.street} ${demoRef.current.house}`,
					schoolCity: `${demoRef.current.zip} ${demoRef.current.city}`,
					firstName: demoRef.current.firstName,
					lastName: demoRef.current.lastName,
					website: demoRef.current.website,
					email: demoRef.current.email,
					phone: demoRef.current.phone,
				}),
			});

			if (!result.ok) {
				navigate("/");
				toast.showMessage("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut!", "error");
				setIsSubmitting(false);
				return;
			}

			navigate("/");
			toast.showMessage(
				"Demo-Anfrage erfolgreich gesendet. Sie erhalten in Kürze eine Bestätigung per E-Mail.",
				"success",
				10000,
			);
		} catch (e) {
			navigate("/");
			toast.showMessage("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut!", "error");
		} finally {
			setIsSubmitting(false);
		}
	}, [toast.showMessage, navigate]);

	return (
		<div className="top-0 min-h-dvh w-full">
			<section className="w-full pt-52 pb-8 md:w-3/5">
				<h1 className="pb-6 text-6xl">Demo Anfrage</h1>
				<p className="pb-4">
					Vielen Dank für Ihr Interesse und Ihr Vertrauen in ClassInsights. Mit Ihrem Demo-Zugang erhalten Sie einen{" "}
					<span className="text-primary">dreimonatigen, uneingeschränkten Zugriff</span> auf das komplette ClassInsights
					Ökosystem. Nach Ablauf dieser Testphase steht es Ihnen frei, eine reguläre Lizenz zu erwerben. Der Übergang
					vom Demo-Zugang zur Vollversion erfolgt nahtlos und unkompliziert.
				</p>
			</section>
			<form className="flex w-full flex-col gap-4 lg:w-3/5">
				<TextInput
					id="name"
					label="Schulname"
					onChange={(value) => handleChange("name", value)}
					error={missingFields.includes("name")}
					maxLength={100}
					disabled={isSubmitting}
				/>
				<div className="flex gap-6">
					<TextInput
						id="street"
						label="Straße"
						onChange={(value) => handleChange("street", value)}
						error={missingFields.includes("street")}
						maxLength={90}
						disabled={isSubmitting}
					/>
					<div className="w-2/5 lg:w-1/4">
						<TextInput
							id="house"
							label="Hausnummer"
							onChange={(value) => handleChange("house", value)}
							error={missingFields.includes("house")}
							maxLength={10}
							disabled={isSubmitting}
						/>
					</div>
				</div>
				<div className="flex gap-6">
					<div className="w-2/5 lg:w-1/4">
						<TextInput
							id="zip"
							label="PLZ"
							onChange={(value) => handleChange("zip", value)}
							error={missingFields.includes("zip")}
							maxLength={10}
							disabled={isSubmitting}
						/>
					</div>
					<TextInput
						id="city"
						label="Stadt"
						onChange={(value) => handleChange("city", value)}
						error={missingFields.includes("city")}
						maxLength={90}
						disabled={isSubmitting}
					/>
				</div>
				<TextInput
					id="website"
					label="Schulwebsite"
					onChange={(value) => handleChange("website", value)}
					error={missingFields.includes("website")}
					maxLength={100}
					disabled={isSubmitting}
				/>
				<h2 className="mt-8">Kontaktperson</h2>
				<TextInput
					id="firstName"
					label="Vorname"
					onChange={(value) => handleChange("firstName", value)}
					error={missingFields.includes("firstName")}
					maxLength={100}
					disabled={isSubmitting}
				/>
				<TextInput
					id="lastName"
					label="Nachname"
					onChange={(value) => handleChange("lastName", value)}
					error={missingFields.includes("lastName")}
					maxLength={100}
					disabled={isSubmitting}
				/>
				<TextInput
					id="email"
					label="Email"
					onChange={(value) => handleChange("email", value)}
					error={missingFields.includes("email")}
					maxLength={100}
					disabled={isSubmitting}
				/>
				<TextInput
					id="phone"
					label="Telefonnummer"
					onChange={(value) => handleChange("phone", value)}
					error={missingFields.includes("phone")}
					maxLength={100}
					disabled={isSubmitting}
				/>
				<div>
					<input
						type="checkbox"
						name="terms"
						id="terms"
						checked={hasAcceptedTerms}
						onChange={(e) => setHasAcceptedTerms(e.target.checked)}
						className="mr-2"
					/>
					<label htmlFor="terms">
						Hiermit bestätige ich, dass ich die geltenden{" "}
						<Link to="/agb" className="text-primary">
							Allgemeinen Geschäftsbedingungen
						</Link>{" "}
						vollumfänglich zur Kenntnis genommen habe und diesen zustimme. Des Weiteren erkläre ich mein Einverständnis
						zur Verarbeitung meiner personenbezogenen Daten gemäß den Bestimmungen der{" "}
						<Link to="/datenschutz" className="text-primary">
							Datenschutzerklärung
						</Link>
						.
					</label>
				</div>
				<div className="relative mt-4 flex flex-col items-start justify-center gap-4 pb-10 xl:flex-row xl:items-center xl:justify-start xl:pb-4">
					<Button
						label="Anfrange absenden"
						onPress={() => handleSubmit()}
						disabled={
							missingFields.length > 0 ||
							isSubmitting ||
							!hasAcceptedTerms ||
							demoRef.current.turnstile === "" ||
							demoRef.current.turnstile === undefined
						}
					/>
					{missingFields.length > 0 && !isSubmitting && (
						<p className="absolute bottom-0 text-error xl:static">Bitte füllen Sie alle erforderlichen Felder aus.</p>
					)}
				</div>
				<Turnstile
					sitekey={conf().VITE_TURNSTILE_SITE_KEY}
					refreshExpired="auto"
					fixedSize={true}
					theme="light"
					onVerify={(token) => handleChange("turnstile", token)}
					onError={() => toast.showMessage("Bot-Überprüfung fehlgeschlagen! Versuchen Sie es später erneut.", "error")}
					appearance="interaction-only"
				/>
			</form>
			<Spacing />
		</div>
	);
};

export default Demo;
