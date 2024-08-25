import { Link } from "react-router-dom";
import ArrowSVG from "../assets/svg/arrow.svg?react";
import PageWrapper from "../components/PageWrapper";

const About = () => (
	<PageWrapper>
		<div className="top-0 flex min-h-dvh w-full items-center justify-center">
			<div className="rounded-lg bg-container px-10 py-6 text-center shadow-md md:w-3/4 xl:w-1/2">
				<h1 className="pb-4 text-2xl">Über uns</h1>
				<p className="pb-2">
					Die Unternehmensseite wird aktuell noch entwickelt. Wir geben unser
					Bestes, sie sobald wie möglich zu veröffentlichen!
				</p>
				<p className="pb-4">
					Bei auftretenden Fragen können Sie sich bei uns via{" "}
					<a href="mailto:office@classinsights.at" className="text-primary">
						E-Mail
					</a>{" "}
					melden.
				</p>
				<Link
					to="/"
					className="mx-auto flex w-max items-center gap-1.5 pb-2 text-primary"
				>
					<ArrowSVG className="rotate-180 fill-primary" />
					<p>Zurück zur Startseite</p>
				</Link>
			</div>
		</div>
	</PageWrapper>
);

export default About;
