import { useMemo, useState } from "react";
import roomPath from "../../assets/img/room.webp";
import settingsPath from "../../assets/img/settings.webp";

const Dashboard = () => {
	const [pageIndex, setPageIndex] = useState(0);
	const content = useMemo(() => {
		switch (pageIndex) {
			case 0:
				return {
					title: "Jederzeit alle Computer verwalten",
					description:
						"Mit dem ClassInsights Dashboard behalten Sie stets alle Computer im Überblick und können Informationen auslesen, diese manuell herunterfahren, neustarten oder den aktuellen Nutzer abmelden.",
				};
			case 1:
				return {
					title: "Einfache Verwaltung",
					description:
						"Das ClassInsights Dashboard ermöglicht es, schnell und einfach das System zu aktualisieren und zentral Änderungen am Ökosystem vorzunehmen. Einige Einstellungen werden sogar automatisiert zu Schulbeginn geändert!",
				};
			default:
				return null;
		}
	}, [pageIndex]);

	if (!content) return <></>;

	return (
		<section className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-stretch">
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
			<div className="flex w-4/5 flex-col justify-center text-center xl:w-3/5">
				<h2 className="pb-4">{content.title}</h2>
				<p className="pb-5">{content.description}</p>
				<div className="flex select-none justify-center gap-3">
					<button
						type="button"
						onClick={() => (pageIndex !== 0 ? setPageIndex(0) : null)}
						className={`h-2 w-2 rounded-full bg-primary transition-opacity duration-200 ${pageIndex !== 0 ? "opacity-30" : "cursor-default"}`}
					/>
					<button
						type="button"
						onClick={() => (pageIndex !== 1 ? setPageIndex(1) : null)}
						className={`h-2 w-2 rounded-full bg-primary transition-opacity duration-200 ${pageIndex !== 1 ? "opacity-30" : "cursor-default"}`}
					/>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
