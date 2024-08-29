import AwarenessSVG from "../../assets/svg/awareness.svg?react";
import ElectricitySVG from "../../assets/svg/electricity.svg?react";
import MeasureSVG from "../../assets/svg/measure.svg?react";
import MonitorSVG from "../../assets/svg/monitor.svg?react";

const KeyPoints = () => {
	return (
		<section className="w-full">
			<h2 className="pb-10 text-center">
				<span className="text-primary">ClassInsights</span> macht es möglich...
			</h2>
			<div className="mx-auto grid gap-x-10 gap-y-8 md:w-3/4 md:grid-cols-2 md:gap-y-20 xl:w-3/5">
				{/** List of highlights */}
				{[
					[
						"Effizient und einfach Strom sparen",
						<ElectricitySVG
							key="electricity"
							className="h-14 w-14 fill-primary"
						/>,
					],
					[
						"Stromverbrauch der Computer messen",
						<MeasureSVG key="measure" className="h-14 w-14 fill-primary" />,
					],
					[
						"Awareness für Energieverbrauch schaffen",
						<AwarenessSVG key="awareness" className="h-14 w-14 fill-primary" />,
					],
					[
						"Computer Verbrauch überwachen",
						<MonitorSVG key="monitor" className="h-14 w-14 fill-primary" />,
					],
				].map(([title, svg]) => (
					<div
						key={title.toString()}
						className="flex flex-col items-center gap-3"
					>
						{svg}
						<h3 className="text-center text-lg lg:w-3/4 xl:w-3/5">{title}</h3>
					</div>
				))}
			</div>
		</section>
	);
};

export default KeyPoints;
