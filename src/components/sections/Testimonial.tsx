import NETG from "../../assets/img/netg.webp";
import JobSVG from "../../assets/svg/job.svg?react";

const Testimonial = () => {
	return (
		<section className="mx-auto flex w-full flex-col items-center gap-5 rounded-xl md:flex-row md:gap-10 lg:w-4/5">
			<a
				href="https://www.eco-landeck.at/personen/lehrerinnen"
				className="aspect-square w-1/5 overflow-hidden rounded-full shadow-lg md:w-2/5 lg:w-1/3 xl:w-1/4"
			>
				<img src={NETG} alt="Portrait of Gerhard Netzer" className="w-full" />
			</a>
			<div className="w-full text-center md:text-left">
				<p>
					"Als Mitverantwortlicher für die stetige Optimierung des
					Energieverbrauches an unserer Schule kann ich mit gutem Gewissen
					behaupten, dass ClassInsights die perfekte Balance zwischen hoher
					Energieeffizienz und einfacher Computerverwaltung darstellt." ~{" "}
					<span className="text-primary">Gerhard Netzer</span>
				</p>
				<a
					href="https://eco-landeck.at"
					className="mt-1 flex w-full justify-center gap-1.5 md:w-max md:items-center md:justify-start"
				>
					<JobSVG width={20} className="hidden md:inline" />
					<small className="text-center italic md:text-left md:not-italic">
						stellv. Direktor & Netzwerkadministrator HAK/HLW Landeck
					</small>
				</a>
			</div>
		</section>
	);
};

export default Testimonial;
