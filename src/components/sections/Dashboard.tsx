import { useCallback, useState } from "react";
import updatePath from "../../assets/img/update.webp";
import settingsPath from "../../assets/img/settings.webp";
import computerPath from "../../assets/img/computer.webp";
import ArrowSVG from "../../assets/svg/arrow.svg?react";

/** Dashboard section with multiple pages to navigate */
const Dashboard = () => {
  const [pageIndex, setPageIndex] = useState(0);

  /** Variable content to display (changes with another pageIndex) */
  const content = useCallback(
    (index: number) =>
      index === 0
        ? {
            title: "Jederzeit alle Computer verwalten",
            description:
              "Mit dem ClassInsights Dashboard behalten Sie stets alle Computer im Überblick und können Informationen auslesen, diese manuell herunterfahren, neustarten oder den aktuellen Nutzer abmelden.",
          }
        : index === 1
        ? {
            title: "Einfach Änderungen vornehmen",
            description:
              "Das ClassInsights Dashboard ermöglicht es, schnell und einfach zentrale Änderungen am System vorzunehmen. Einige Einstellungen können sogar automatisch vom Active Directory übernommen werden.",
          }
        : {
            title: "Automatische Updates",
            description:
              "Sie können mit nur einem Klick das gesamte ClassInsights System automatisch aktualisieren. Keine nervigen manuellen Updates mehr!",
          },

    []
  );

  /** Navigate to previous or next page */
  const navigatePage = useCallback(
    (direction: "prev" | "next") => {
      if (direction === "prev" && pageIndex > 0) {
        setPageIndex(pageIndex - 1);
      } else if (direction === "next" && pageIndex < 2) {
        setPageIndex(pageIndex + 1);
      }
    },
    [pageIndex]
  );

  /** Get specific navigation button */
  const getArrowSVG = useCallback(
    (direction: "prev" | "next", isMobile: boolean) => {
      const isDisabled =
        direction === "prev" ? pageIndex === 0 : pageIndex === 2;

      return (
        <ArrowSVG
          key={`page-${direction}`}
          width={25}
          className={`shrink-0 fill-black ${
            direction === "prev" ? "rotate-180 " : ""
          }${isDisabled ? "opacity-20 " : "cursor-pointer "}${
            isMobile ? "lg:hidden" : "hidden lg:inline"
          }`}
          onClick={() => !isDisabled && navigatePage(direction)}
          onKeyDown={() => !isDisabled && navigatePage(direction)}
          aria-label={
            direction === "prev" ? "Vorherige Seite" : "Nächste Seite"
          }
        />
      );
    },
    [pageIndex, navigatePage]
  );

  return (
    <section className="flex w-full flex-col items-center gap-10 lg:flex-row ">
      <div className="w-full select-none">
        {pageIndex === 0 ? (
          <img
            src={computerPath}
            alt="Room Page of the ClassInsights Dashboard"
          />
        ) : pageIndex === 1 ? (
          <img
            src={settingsPath}
            alt="Settings Page of the ClassInsights Dashboard"
          />
        ) : (
          <img
            src={updatePath}
            alt="Update Page of the ClassInsights Dashboard"
          />
        )}
      </div>
      {/* Explaining Content */}
      <div className="flex w-full items-center xl:w-4/5 2xl:w-3/5">
        {getArrowSVG("prev", false)}
        <div className="relative flex flex-col justify-center text-center md:px-5">
          {/* Mobile Placeholder for identical height */}
          <div className="-z-10 relative select-none opacity-0 lg:hidden">
            <h2 className="pb-4 ">{content(1).title}</h2>
            <p className="">{content(1).description}</p>
          </div>
          {/* Display Content */}
          <div className="absolute top-0 lg:static">
            <h2 className="pb-4">{content(pageIndex).title}</h2>
            <p>{content(pageIndex).description}</p>
          </div>
          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-12 md:mt-4 lg:hidden">
            {getArrowSVG("prev", true)}
            <p className="lg:hidden">Seite {pageIndex + 1}</p>
            {getArrowSVG("next", true)}
          </div>
        </div>
        {getArrowSVG("next", false)}
      </div>
    </section>
  );
};

export default Dashboard;
