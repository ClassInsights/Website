import PriceModel from "@/components/PriceModel";
import Button from "../components/Button";
import Spacing from "../components/Spacing";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

/** The pricing page */
const Pricing = () => (
  <div className="top-0 min-h-dvh w-full">
    <section className="pt-52">
      <h1 className="pb-6 text-6xl">Lizensierung & Preise</h1>
      <p className="max-w-3xl">Einfach, transparent und fair. Wählen Sie das passende Packet für Ihre Schule basierend auf der Anzahl der Computer. Alle Lizenzen sind <span className="text-primary">für 1 Jahr gültig ab Erhalt der Lizenz *</span> und beinhalten den vollen Funktionsumfang von ClassInsights. Wir sagen nein zu vergessenen Abonnements!</p>
      <p className="mt-10 pb-3 font-bold">
        Für Neukunden bieten wir eine unverbindliche Testphase von drei Monaten.
        <Link
          to="/demo"
          className="ml-4 items-center gap-1.5 text-primary inline-flex"
        >
          Demo anfordern
          <ChevronRight className="shrink-0" />
        </Link>
      </p>
    </section>
    <Spacing />
    <ul className="list-none flex gap-8 flex-col lg:flex-row">
      <PriceModel title="CI Small" computerLimit="bis zu 50 Computer" pricePerYear="199,90" />
      <PriceModel title="CI Medium" computerLimit="bis zu 125 Computer" pricePerYear="249,90" />
      <PriceModel title="CI Large" computerLimit="mehr als 125 Computer" pricePerYear="299,90" />
    </ul>
    <small className="block text-center max-w-3xl mx-auto mt-8">* Die CI Small, Medium und Large Lizenzen ermöglichen es, ClassInsights für ein Jahr zu nutzen. Der Gültigkeitszeitraum beginnt mit dem Erhalt der Lizenz. Es gelten stets die <Link to="/agb">AGB</Link>!</small>
    <Spacing />
    <div className="text-center">
      <h2 className="pb-3">Sie haben spezielle Anforderung?</h2>
      <p className="max-w-3xl mx-auto">Benötigen Sie eine individuelle Lösung oder haben spezifische Wünsche bezüglich der Laufzeit? Kontaktieren Sie uns für ein maßgeschneidertes Angebot <a className="text-primary" href="mailto:office@classinsights.at?subject=Spezielle%20Anfrage">per Email</a>!</p>
    </div>
    <Spacing />
    <section className="flex flex-col items-center justify-between gap-8 pb-10 md:flex-row md:gap-20">
      <h2 className="text-center md:text-start">Lass uns gemeinsam Strom sparen!</h2>
      <Button label="Demo anfordern" onPress="/demo" arrowed />
    </section>
    <Spacing />
  </div>
);

export default Pricing;
