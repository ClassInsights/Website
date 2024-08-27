import { Link } from "react-router-dom";
import ArrowSVG from "../assets/svg/arrow.svg?react";
import CallSVG from "../assets/svg/call.svg?react";
import MailSVG from "../assets/svg/mail.svg?react";
import Spacing from "../components/Spacing";

const Impress = () => (
	<>
		<div className="pt-32 pb-8">
			<Link to="/" className="flex w-max items-center gap-1.5 pb-2">
				<ArrowSVG className="rotate-180 fill-black" />
				<p>Zurück zur Startseite</p>
			</Link>
			<h1 className="text-5xl">Impressum</h1>
		</div>
		<b>Jakob Wassertheurer</b>
		<p>Brixnerstraße 16</p>
		<p>A-6500 Landeck</p>
		<p>Österreich</p>
		{/* <p className="pt-3">UID: </p>
			<p>FN: </p>
			<p>FB-Gericht: </p>
			<p className="pt-3">Mitglied der WKÖ, Wirtschaftskammer Tirol</p>
			<p className="pt-3">Berufsrecht</p>
			<a
				href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10007517"
				rel="noreferrer"
				target="_blank"
				className="underline"
			>
				Gewerbeordnung
			</a>
			:{" "}
			<a
				href="https://www.ris.bka.gv.at/"
				rel="noreferrer"
				target="_blank"
				className="underline"
			>
				https://www.ris.bka.gv.at/
			</a>
			<p className="pt-3">Bezirkshauptmannschaft Landeck</p> */}
		<h3 className="pt-6 pb-1">Kontakt</h3>
		<div className="flex items-center gap-2">
			<CallSVG className="fill-black" width={20} />
			<p>Bald für Sie telefonisch erreichbar!</p>
		</div>
		<div className="flex items-center gap-2">
			<MailSVG className="fill-black" width={20} />
			<a href="mailto:office@classinsights.at">office@classinsights.at</a>
		</div>
		<h3 className="pt-6 pb-1">Umsetzung Webdesign</h3>
		<p>Jakob Wassertheurer</p>
		<div className="flex items-center gap-2">
			<MailSVG className="fill-black" width={20} />
			<a href="mailto:jakob@classinsights.at">jakob@classinsights.at</a>
		</div>
		<h3 className="pt-6 pb-1">Beschwerden</h3>
		<p>
			Verbraucher haben die Möglichkeit, Beschwerden an die
			Online-Streitbeilegungsplattform der EU zu richten:{" "}
			<a
				href="http://ec.europa.eu/odr"
				rel="noreferrer"
				target="_blank"
				className="text-primary"
			>
				http://ec.europa.eu/odr
			</a>
			.
		</p>
		<p>
			Sie können Ihre Beschwerde auch direkt bei uns bei folgender
			E-Mail-Adresse einbringen:
			<span className="flex items-center gap-2">
				<MailSVG className="fill-black" width={20} />
				<a href="mailto:beschwerde@classinsights.at">
					beschwerde@classinsights.at
				</a>
			</span>
		</p>
		<h3 className="pt-6 pb-1">Datenschutz</h3>
		<p>
			Sie haben Bedenken bezüglich des Datenschutzes? Kontaktieren Sie uns gerne
			unter:
		</p>
		<div className="flex items-center gap-2 pb-2">
			<MailSVG className="fill-black" width={20} />
			<a href="mailto:datenschutz@classinsights.at">
				datenschutz@classinsights.at
			</a>
		</div>
		<Link
			to="/datenschutz"
			className="hidden items-center gap-1.5 text-primary md:flex"
		>
			<p>Datenschutzerklärung</p>
			<ArrowSVG className="fill-primary" />
		</Link>
		<Spacing />
	</>
);

export default Impress;
