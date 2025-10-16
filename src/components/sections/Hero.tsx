import { ChevronDown } from "lucide-react";
import { Link } from "react-router";
import Button from "../Button";
import Highlight from "../Highlight";

/** The homepage hero section */
const Hero = () => {
  return (
    <section className="flex min-h-lvh flex-col items-center justify-end">
      {/* Hero C2A Section */}
      <div className="relative flex min-h-dvh w-full flex-grow items-center justify-center pt-20 md:min-h-0">
        <div className="flex flex-col items-center md:pb-14">
          <h1 className="pb-6 text-5xl sm:text-8xl">
            ClassInsights<span className="text-primary">.</span>
          </h1>
          <p className="pb-6 text-center text-lg sm:w-8/12">
            <span className="font-bold">Spare bis zu 30% Stromkosten*</span> mit der innovativen
            Energie-Management Lösung für Schulen auf Basis des Stundenplans
          </p>
          {/* C2A Buttons */}
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row md:gap-8">
            <Button label="Demo anfordern" onPress="/demo" arrowed />
            <Link to="/#features" aria-label="Lösungen" className="underline">
              Mehr erfahren
            </Link>
          </div>
        </div>
        {/* Mobile arrow button to the features */}
        <Link to="/#features" aria-label="Lösungen">
          <ChevronDown
            className="right-0 bottom-4 left-0 mx-auto shrink-0 animate-bounce md:hidden portrait:absolute landscape:hidden"
            width={35}
            height={35}
          />
        </Link>
      </div>
      {/* ClassInsights Highlights */}
      <div className="mt-5 mb-12 flex w-4/5 flex-col items-center gap-10 md:mt-0 md:w-full md:flex-row md:items-start">
        {[
          [
            "Energieeffizienz",
            "Automatisiertes Steuern der Computer ermöglicht maximale Effizienz und Kostenersparnis für Schulen.",
          ],
          [
            "Insights & Steuerung",
            "Erhalten Sie detailierte Einblicke über die Computer Ihrer Schule. Zudem können Computer manuell gesteuert werden.",
          ],
          [
            "Einfache Einrichtung",
            "Unser intuitiver Setup Guide in Kombination mit Docker macht die Einrichtung fast zu einem Kinderspiel.",
          ],
        ].map(([title, description]) => (
          <Highlight key={title.slice(0, 5)} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
