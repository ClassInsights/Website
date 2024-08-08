import Button from "./Button";
import Highlight from "./Highlight";

const Hero = () => {
	return (
		<section className="flex min-h-dvh flex-col items-center justify-end">
			<div className="mt-32 mb-48 flex min-h-dvh w-min flex-col items-center justify-center text-center sm:min-h-0 sm:justify-normal">
				<h1 className="pb-6 text-7xl sm:text-8xl">
					ClassInsights<span className="text-primary">.</span>
				</h1>
				<p className="pb-6 text-lg sm:w-8/12">
					Die innovative Energie-Management Lösung für Schulen auf Basis des
					Stundenplanes
				</p>
				<div className="flex items-center justify-center gap-8">
					<Button label="Demo anfordern" onPress="/demo" arrowed />
					<a href="#features" className="underline">
						Mehr erfahren
					</a>
				</div>
			</div>
			<div className="mb-12 flex gap-10">
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
