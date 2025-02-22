import Monitor from "../../assets/img/monitor.webp";

/** WPF showcase and explanation */
const WPF = () => (
	<section className="flex w-full flex-col items-center justify-between gap-10 md:flex-row md:gap-20">
		<div className="w-full max-w-lg select-none">
			<img src={Monitor} alt="ClassInsights Automatisches Herunterfahren Meldung" />
		</div>
		<div className="text-center md:w-3/5 md:text-left">
			<h2 className="pb-4">Kein zwanghaftes Herunterfahren</h2>
			<p>
				Nutzer können das Herunterfahren des Computers jederzeit verhindern, um ungespeicherte Arbeit zu schützen. Bei
				Inaktivität schaltet sich das Gerät nach einstellbarer Zeit automatisch aus.
			</p>
		</div>
	</section>
);

export default WPF;
