import { Fragment } from "react/jsx-runtime";
import CheckSVG from "../assets/svg/check.svg?react";

const keyPoints = [
	[
		"Praxiserprobt",
		"Seit Beginn des Projektes arbeiten wir in einer realen Schulumgebung und haben alle Herausforderungen gemeistert",
	],
	[
		"Datenschutz First",
		"Sensible Schuldaten verbleiben dank lokaler API-Architektur im internen Netzwerk und werden nicht an unsere Server gesendet",
	],
	[
		"WebUntis Partner",
		"Wir sind offizielle seit November 2024 WebUntis-Integrationspartner und können somit eine nahtlose und aktuelle Stundenplananbindung gewährleisten",
	],
];

const Properties = () => (
	<div className="flex flex-col items-center gap-x-20 md:grid md:grid-cols-[auto_1fr] md:place-items-start md:gap-y-6">
		{keyPoints.map(([title, description], index) => (
			<Fragment key={title}>
				<div className="flex items-center gap-2 pb-3 md:items-start md:pb-0">
					<CheckSVG className="w-5 shrink-0" />
					<p className="font-bold">{title}</p>
				</div>
				<p className={`flex-grow text-center md:text-start ${index === keyPoints.length - 1 ? "" : "pb-8 md:pb-0"}`}>
					{description}
				</p>
			</Fragment>
		))}
	</div>
);

export default Properties;
