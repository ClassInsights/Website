import Button from "../Button";

const BuyDemo = () => {
	return (
		<section className="w-full">
			<h2 className="pb-4">Noch skeptisch?</h2>
			<div className="flex flex-col items-center gap-5 md:flex-row md:items-start md:justify-between">
				<p className="md:w-3/5">
					Die kostenlose Demophase wird Sie definitiv überzeugen. Mit nur
					wenigen Klicks erhalten Sie Zugriff auf das gesamte ClassInsights
					Ökosystem. So können Sie sich selbst ein Bild machen.
				</p>
				<Button label="Demo anfordern" onPress="/demo" arrowed />
			</div>
		</section>
	);
};

export default BuyDemo;
