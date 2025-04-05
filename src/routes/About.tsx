import Jakob from "../assets/img/jakob.webp";
import Julian from "../assets/img/julian.webp";
import Button from "../components/Button";
import Member from "../components/Member";
import Properties from "../components/Properties";
import Spacing from "../components/Spacing";
import Timeline from "../components/Timeline";

/** The about page */
const About = () => (
	<div className="top-0 min-h-dvh w-full">
		<section className="flex items-center justify-between gap-20 pt-52">
			<div className="w-full md:w-3/5 ">
				<h1 className="pb-6 text-6xl">Über uns</h1>
				<p className="pb-4">
					Wir automatisieren seit 2023 die Energiesteuerung von Schulcomputern - intelligent integriert mit dem
					WebUntis-Stundenplan, um Ressourcen zu schonen und das Schulbudget zu entlasten.
				</p>
				<p>
					Entstanden aus einer Diplomarbeit und weiterentwickelt für die universelle Anwendung bieten wir eine
					innovative Lösung und leisten einen positiven Beitrag zum Umweltschutz.
				</p>
			</div>
			<div className="logo my-4 hidden h-40 w-[35%] bg-right md:block" />
		</section>
		<Spacing />
		<section className="mx-auto w-10/12 lg:w-3/4">
			<h2 className="pb-10 text-center">Was uns auszeichnet</h2>
			<Properties />
		</section>
		<Spacing />
		<section className="flex flex-col items-center justify-center md:flex-row md:gap-32">
			<h2 className="pb-10">Unsere Geschichte</h2>
			<Timeline />
		</section>
		<Spacing />
		<section className="flex flex-col items-center gap-16 md:gap-8">
			<Member
				imgPath={Jakob}
				name="Jakob Wassertheurer"
				position="Co-CEO ClassInsights"
				tasks="Web- & Mobile-Entwicklung, Design, Buchhaltung, Kundenbetreuung"
				mail="jakob@classinsights.at"
			/>
			<Member
				imgPath={Julian}
				name="Julian Grill"
				position="Co-CEO ClassInsights"
				tasks="Backend-Entwicklung, Software-Architektur, Kundenbetreuung"
				mail="julian@classinsights.at"
			/>
			<p className="mx-auto mt-6 w-4/5 text-center md:w-2/3">
				Wir bedanken uns zudem herzlich bei <span className="font-bold">Anja Ladner</span> und{" "}
				<span className="font-bold">Mona Rueland</span> für die herausragende Zusammenarbeit sowie ihre fachliche
				Expertise, die wesentlich zum Erfolg unserer Diplomarbeit beigetragen haben.
			</p>
		</section>

		<Spacing />
		<section className="flex flex-col items-center justify-between gap-8 pb-10 md:flex-row md:gap-20">
			<h2 className="text-center md:text-start">Lass uns gemeinsam Strom sparen!</h2>
			<Button label="Demo anfordern" onPress="/demo" arrowed />
		</section>
		<Spacing />
	</div>
);

export default About;
