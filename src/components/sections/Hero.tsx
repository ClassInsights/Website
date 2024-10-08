import { Link } from "react-router-dom";
import ArrowDownSVG from "../../assets/svg/arrow-down.svg?react";
import Button from "../Button";
import Highlight from "../Highlight";

const Hero = () => {
	return (
		<section className="flex min-h-lvh flex-col items-center justify-end">
			{/* Hero C2A Section */}
			<div className="relative flex min-h-svh w-full flex-grow items-center justify-center pt-20 md:min-h-0">
				<div className="flex flex-col items-center md:pb-14">
					<h1 className="pb-6 text-5xl sm:text-8xl">
						ClassInsights<span className="text-primary">.</span>
					</h1>
					<p className="pb-6 text-center text-lg sm:w-8/12">
						Die innovative Energie-Management Lösung für Schulen auf Basis des
						Stundenplans
					</p>
					{/* Work in Progress Hint */}
					<div className="mx-auto mb-6 flex flex-col items-center rounded-lg bg-container px-5 py-2 text-center shadow-sm">
						<h2 className="pb-2 text-xl">
							&#9888;&#65039; ClassInsights befindet sich noch in der
							Entwicklung &#9888;&#65039;
						</h2>
						<p className="hidden pb-1 md:inline">
							Schriftliche Anfragen werden jedoch jederzeit entgegengenommen.
						</p>
						<b>Voraussichtlicher Release: Herbst 2024</b>
					</div>
					{/* C2A Buttons */}
					<div className="flex flex-col items-center justify-center gap-5 sm:flex-row md:gap-8">
						<Button
							label="Demo anfordern"
							onPress={`mailto:office@classinsights.at?subject=Demo%20Anfrage%20${new Date().toLocaleDateString()}`}
							arrowed
						/>
						<Link to="/#features" aria-label="Lösungen" className="underline">
							Mehr erfahren
						</Link>
					</div>
				</div>
				{/* Mobile arrow button to the features */}
				<Link to="/#features" aria-label="Lösungen">
					<ArrowDownSVG
						className="absolute right-0 bottom-4 left-0 mx-auto animate-bounce md:hidden"
						width={35}
						height={35}
					/>
				</Link>
			</div>
			{/* ClassInsights Highlights */}
			<div className="mt-5 mb-12 flex w-4/5 flex-col items-center gap-10 md:mt-0 md:w-full md:flex-row md:items-start">
				{[
					[
						"Energieeffizienz",
						"Automatisiertes Steuern der Computer ermöglicht maximale Effizienz und Kostenersparnis für Schulen.",
					],
					[
						"Verbrauch Monitoring",
						"Der Stromverbrauch der Computer wird automatisch gemessen und in Echtzeit in der App angezeigt.",
					],
					[
						"Einfache Einrichtung",
						"Unser intuitiver Setup Guide in Kombination mit Docker macht die Einrichtung fast zu einem Kinderspiel.",
					],
				].map(([title, description]) => (
					<Highlight
						key={title.slice(0, 5)}
						title={title}
						description={description}
					/>
				))}
			</div>
		</section>
	);
};

export default Hero;
