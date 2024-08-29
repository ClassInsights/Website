import { useCallback, useState } from "react";
import roomPath from "../../assets/img/room.webp";
import settingsPath from "../../assets/img/settings.webp";
import ArrowSVG from "../../assets/svg/arrow.svg?react";

const Dashboard = () => {
	const [pageIndex, setPageIndex] = useState(0);

	/** Variable content to display (changes with another pageIndex) */
	const content = useCallback(
		(index: number) =>
			index === 0
				? {
						title: "Jederzeit alle Computer verwalten",
						description:
							"Mit dem ClassInsights Dashboard behalten Sie stets alle Computer im Überblick und können Informationen auslesen, diese manuell herunterfahren, neustarten oder den aktuellen Nutzer abmelden.",
					}
				: {
						title: "Einfach Änderungen vornehmen",
						description:
							"Das ClassInsights Dashboard ermöglicht es, schnell und einfach das System zu aktualisieren und zentral Änderungen am Ökosystem vorzunehmen. Einige Einstellungen werden sogar automatisiert zu Schulbeginn geändert!",
					},
		[],
	);

	/** Update the current page index if it's different from the current one */
	const updatePageIndex = useCallback(
		(index: number) => (index !== pageIndex ? setPageIndex(index) : null),
		[pageIndex],
	);

	/** Get specific navigation button */
	const getArrowSVG = useCallback(
		(index: number, isMobile: boolean) => (
			<ArrowSVG
				key={`page-${index}`}
				width={25}
				className={`flex-shrink-0 fill-black ${index === 0 ? "rotate-180 " : ""}${pageIndex === index ? "opacity-20 " : "cursor-pointer "}${isMobile ? "lg:hidden" : "hidden lg:inline"}`}
				onClick={() => updatePageIndex(index)}
				onKeyDown={() => updatePageIndex(index)}
				aria-label={index === 0 ? "Vorherige Seite" : "Nächste Seite"}
			/>
		),
		[pageIndex, updatePageIndex],
	);

	return (
		<section className="flex w-full flex-col items-center gap-10 lg:flex-row ">
			<div className="w-full select-none">
				{pageIndex === 0 ? (
					<img src={roomPath} alt="Room Page of the ClassInsights Dashboard" />
				) : (
					<img
						src={settingsPath}
						alt="Settings Page of the ClassInsights Dashboard"
					/>
				)}
			</div>
			{/* Explaining Content */}
			<div className="flex w-full items-center xl:w-4/5 2xl:w-3/5">
				{getArrowSVG(0, false)}
				<div className="relative flex flex-col justify-center px-5 text-center">
					{/* Mobile Placeholder for identical height */}
					<div className="-z-10 relative select-none opacity-0 lg:hidden">
						<h2 className="pb-4 ">{content(1).title}</h2>
						<p className="">{content(1).description}</p>
					</div>
					{/* Display Content */}
					<div className="absolute top-0 lg:static">
						<h2 className="pb-4">{content(pageIndex).title}</h2>
						<p>{content(pageIndex).description}</p>
					</div>
					{/* Mobile Navigation */}
					<div className="mt-4 flex items-center justify-center gap-12 lg:hidden">
						{getArrowSVG(0, true)}
						<p className="lg:hidden">Seite {pageIndex + 1}</p>
						{getArrowSVG(1, true)}
					</div>
				</div>
				{getArrowSVG(1, false)}
			</div>
		</section>
	);
};

export default Dashboard;
