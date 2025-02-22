import PrivacySVG from "../../assets/svg/ci-lock.svg?react";

/** Note for local api (privacy) */
const PrivacyNote = () => (
	<section className="flex w-full flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-20">
		<div className="text-center md:mt-8 md:text-left">
			<h2 className="pb-4">Datenschutz ist uns wichtig</h2>
			<p>
				Unsere schulinterne API verarbeitet sensible Daten (Hostnamen, Raumzuordnungen) ausschließlich lokal. Externe
				Abfragen laufen verschlüsselt über die ClassInsights-API - so verbinden wir lokale Datensicherheit mit einer
				effizienter Infrastruktur.
			</p>
		</div>
		<div className="md:flex md:justify-end">
			<PrivacySVG className="max-w-2xl shrink-0" />
		</div>
	</section>
);

export default PrivacyNote;
