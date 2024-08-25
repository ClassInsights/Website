import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Question from "../Question";

const FAQ = () => {
	const [currentQuestion, setCurrentQuestion] = useState(-1);

	return (
		<section>
			<h2 className="pb-4">Fragen & Antworten</h2>
			<div className="relative grid w-full gap-x-5 gap-y-4 pb-12 md:grid-cols-2">
				{[
					[
						"Was ist ClassInsights überhaupt?",
						<p key="general">
							Bei ClassInsights handelt es sich um eine Software Lösung für
							Schulen, die es ermöglicht, den Energieverbrauch von Computern
							deutlich zu optimieren. Dabei werden die Computer nach der letzten
							Unterrichtsstunde eines Raumes automatisch heruntergefahren. Das
							spart nicht nur Energie, sondern auch Geld.
						</p>,
					],
					[
						"Welche Vorteile hat man dadurch?",
						<Fragment key="benefits">
							<p>
								Eine ClassInsights zertifierte Schule erhält zahlreiche
								Vorteile:
							</p>
							<ul className="list-inside list-disc">
								<li>Energie und Kostenersparnis</li>
								<li>Lebensdauer der Computer wird potenziell erhöht</li>
								<li>Zertifikat für Schulwebsite/Social Media</li>
								<li>Echtzeit Strommessung der Computer</li>
							</ul>
						</Fragment>,
					],
					[
						"Wie erhält man das Zertifikat?",
						<p key="certificate">
							Mit der Aktivierung einer Lizenz, kann man das Zertifkat in
							veschiedenen Größen im ClassInsights Dashboard herunterladen. Der
							Link zum Anklicken auf der eigenen Schulwebsite ist ebenfalls im
							Dashboard vorzufinden.
						</p>,
					],
					[
						"Wie kann ich ClassInsights testen?",
						<p key="test">
							Um ClassInsights zu testen, können Sie sich einfach auf unserer{" "}
							<Link to="/demo" className="text-primary">
								Demo Anfrage Seite
							</Link>{" "}
							registrieren. Nach erfolgreicher Registrierung und Installation
							können Sie mit dem zugesendeten Lizenzschlüssel ClassInsights für
							30 Tage testen.
						</p>,
					],
					[
						"Handelt es sich um ein Abonnement?",
						<p key="subscription">
							ClassInsights sagt NEIN zu vergessenen Abonnements oder
							umständlichen Kündigungsverfahren. Sie können eine einjährige
							Lizenz erwerben, die automatisch ausläuft. Wenn kein Interesse
							mehr besteht, kann man einfach die Zeit auslaufen lassen.
						</p>,
					],
					[
						"Wie funktioniert die Installation?",
						<p key="installation">
							Wir sind stets bemüht, den Installationsprozess so einfach wie
							möglich zu gestalten. Daher haben wir einen intuitiven{" "}
							<Link to="/installation" className="text-primary">
								Setup Guide
							</Link>{" "}
							erstellt, der die Einrichtung nahezu zu einem Kinderspiel macht!
							;&#41;
						</p>,
					],
				].map(([question, answer], index) => (
					<Question
						key={question.toString()}
						qId={index}
						setQuestion={setCurrentQuestion}
						currentQuestion={currentQuestion}
						question={question.toString()}
					>
						{answer}
					</Question>
				))}
			</div>
			<p>
				Noch Fragen? Wir sind für Sie immer unter{" "}
				<a
					href="mailto:office@classinsights.at"
					className="select-auto text-primary"
				>
					office@classinsights.at
				</a>{" "}
				erreichbar.
			</p>
		</section>
	);
};

export default FAQ;
