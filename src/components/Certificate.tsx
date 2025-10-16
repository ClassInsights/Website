import { Award, ChevronRight, X } from "lucide-react";
import { useCertificate } from "../contexts/CertificateContext";

/** Modal to showcase the certificate of schools */
const Certificate = () => {
  const certificate = useCertificate();
  if (!certificate.isVisible) return null;
  return (
    <dialog className="fixed top-0 z-20 flex h-dvh w-screen items-end justify-center bg-transparent md:items-center">
      <div
        className="h-full w-full cursor-pointer bg-black opacity-30"
        onClick={certificate.hide}
        onKeyDown={certificate.hide}
      />
      <div className="absolute h-[88%] w-full rounded-t-2xl bg-background p-4 md:h-auto md:w-10/12 md:rounded-2xl lg:w-4/6 xl:w-1/2 2xl:w-2/5">
        {/* Title Bar */}
        <div className="flex items-center justify-between bg-background pb-2">
          <X className="shrink-0 opacity-0" />
          <div className="flex items-center gap-2 select-none">
            <Award />
            <b>Zertifikat</b>
          </div>
          <X className="shrink-0 cursor-pointer" onClick={certificate.hide} />
        </div>
        {/* Certificate Content */}
        <div className="scrollbar h-full max-h-[90svh] overflow-y-scroll px-3 pt-12 pb-16 md:px-16 md:py-16">
          <h2 className="pb-1.5 text-primary">{certificate.certificateData?.name}</h2>
          <h3>
            ist Teil von ClassInsights.
            <span className="ml-2 text-sm font-light">
              (seit{" "}
              {new Date(certificate.certificateData?.member_since ?? "").toLocaleDateString(
                "de-AT",
                {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                },
              )}
              )
            </span>
          </h3>
          <p className="mt-8">
            Das bedeutet, dass diese Schule eine innovative Softwarelösung zur Optimierung des
            Stromverbrauches verwendet &#x2015; <span className="text-primary">ClassInsights</span>.
          </p>
          <p className="my-6">
            Das Team von ClassInsights bedankt sich herzlich bei {certificate.certificateData?.name}{" "}
            für die tolle Zusammenarbeit.
          </p>
          <b>Gemeinsam kämpfen wir gegen Energieverschwendung!</b>
          <a
            href={certificate.certificateData?.website}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex w-max items-center gap-1.5 text-primary"
          >
            <p>Schulwebsite</p>
            <ChevronRight className="shrink-0" />
          </a>
          <div className="mt-14 flex w-full flex-col gap-8 md:flex-row md:gap-20">
            {["Jakob Wassertheurer", "Julian Grill"].map((name) => (
              <h2
                key={name.split(" ")[0]}
                className="signatures font-light text-primary select-none"
              >
                {name}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Certificate;
