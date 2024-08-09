import { Link } from "react-router-dom";
import ArrowDown from "../assets/svg/arrow-down.svg";
import Button from "./Button";
import Highlight from "./Highlight";

const Hero = () => {
	return (
		<section className="flex min-h-lvh flex-col items-center justify-end">
			{/* Hero C2A Section */}
			<div className="relative flex min-h-svh w-full flex-col items-center justify-center text-center md:min-h-0 md:w-min">
				<h1 className="pb-6 text-5xl sm:text-8xl">
					ClassInsights<span className="text-primary">.</span>
				</h1>
				<p className="pb-6 text-lg sm:w-8/12">
					Die innovative Energie-Management Lösung für Schulen auf Basis des
					Stundenplanes
				</p>
				<div className="flex flex-col items-center justify-center gap-5 sm:flex-row md:gap-8">
					<Button label="Demo anfordern" onPress="/demo" arrowed />
					<a href="#features" className="underline">
						Mehr erfahren
					</a>
				</div>
				<Link to="/#features">
					<img
						src={ArrowDown}
						alt="Scroll Indicator"
						width={40}
						className="absolute right-0 bottom-4 left-0 mx-auto animate-bounce md:hidden"
					/>
				</Link>
			</div>
			{/* ClassInsights Highlights */}
			<div className="mt-5 mb-12 flex w-3/4 flex-col items-center gap-10 md:mt-0 md:w-full md:flex-row">
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
