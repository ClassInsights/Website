const timelineData = [
	{ date: "Februar 2024", description: "Fertigstellung der Diplomarbeit" },
	{ date: "März 2024", description: "Hohes Energie-Sparpotential an eigener Schule bewiesen" },
	{ date: "April 2024", description: "Präsentation der Diplomarbeit" },
	{ date: "November 2024", description: "Integrationspartnerschaft mit WebUntis" },
	{ date: "Dezember 2024", description: "Veröffentlichung Website" },
	{ date: "Mai 2025", description: "Gründung ClassInsights OG" },
	{ description: "Ihre Schule wird ClassInsights Partner", isCurrent: true },
];

const Timeline = () => (
	<ul className="relative">
		{timelineData.map((item, index) => {
			const isLast = index === timelineData.length - 1;
			return (
				<li key={`${item.date}-${item.description}`} className="relative flex items-baseline gap-6 pb-4">
					<div
						className={isLast ? "" : "before:absolute before:left-[4px] before:h-full before:w-[2px] before:bg-black"}
					>
						<div className={`h-[0.625rem] w-[0.625rem] rounded-full bg-black ${isLast ? "bg-primary" : "bg-black"}`} />
					</div>
					<div>
						<p className="font-bold">{item.date}</p>
						<p className={isLast ? "text-primary italic" : ""}>{item.description}</p>
					</div>
				</li>
			);
		})}
	</ul>
);

export default Timeline;
