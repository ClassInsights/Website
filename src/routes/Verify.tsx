import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowSVG from "../assets/svg/arrow.svg?react";
import ProgressSVG from "../assets/svg/progress.svg?react";
import { conf } from "../config";

const Verify = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const { token } = useParams();

	useEffect(() => {
		if (!token) return;
		try {
			fetch(`${conf().VITE_API_URL}/demo/verify`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: token }),
			}).then((response) => {
				if (!response.ok) setIsError(true);
			});
		} catch (e) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	}, [token]);

	return (
		<div className="flex min-h-dvh flex-col items-center justify-center py-24">
			<h1 className="text-center text-6xl">
				{isError ? "Ungültiger Link" : isLoading ? "Anfrage wird bestätigt" : "Anfrage erfolgreich bestätigt!"}
			</h1>
			<p className="mt-6 pb-8 text-center text-lg md:w-3/4">
				{isError
					? "Der Bestätigungslink, den Sie aufgerufen haben, wurde entweder bereits verwendet oder ist ungültig. Sollte dieser Fehler weiterhin auftreten, ohne dass Sie bereits eine Bestätigung erhalten haben, wenden Sie sich bitte an den"
					: isLoading
						? "Anfrage wird gerade automatisch bestätigt. Sie werden automatisch weitergeleitet, sobald die Bestätigung abgeschlossen ist."
						: "Vielen Dank für Ihre Anfrage. Wir werden Ihnen binnen 48 Stunden den Demo Lizenzschlüssel zusenden. Diesen müssen Sie dann im Installationsprozess angeben."}
				{isError && (
					<>
						{" "}
						<a
							href={`mailto:office@classinsights.at?subject=Verifizierung%20Problem%20-%20${token}&body=Problem%20mit%20ID%3A%20${token}%0D%0A%0D%0A---%20Fügen%20Sie%20hier%20optional%20weitere%20Details%20an%20---%0D%0A`}
							className="text-primary"
						>
							ClassInsights Kundenservice
						</a>
						.
					</>
				)}
			</p>
			{isLoading && <ProgressSVG width={60} height={60} className="shrink-0 animate-spin fill-primary" />}
			{!isLoading && !isError && (
				<Link to="/" className="flex w-max items-center gap-1.5 pb-2">
					<ArrowSVG className="shrink-0 rotate-180 fill-black" />
					<p>Zurück zur Startseite</p>
				</Link>
			)}
		</div>
	);
};

export default Verify;
