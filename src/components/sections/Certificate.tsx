import { useCallback } from "react";
import HintSVG from "../../assets/svg/hint.svg?react";
import { useCertificate } from "../../contexts/CertificateContext";

const Certificate = () => {
	const certificate = useCertificate();

	const openCertificate = useCallback(
		() =>
			certificate.show({
				name: "HAK/HLW Landeck",
				memberSince: new Date(1726092000000),
				website: "https://eco-landeck.at",
			}),
		[certificate.show],
	);

	return (
		<section className="flex w-full flex-col items-center justify-between gap-10 md:flex-row">
			<div className="text-center md:w-3/5 md:text-left">
				<h2 className="pb-4">Zertifikat für teilnehmende Schulen</h2>
				<p>
					Alle Schulen mit aktivem ClassInsights erhalten ein Zertifikat, das
					sie in ihre Website einbinden können. Zudem können Schule ihre
					maßgeschneiderte Zertifikatsseite als Link einfügen.
				</p>
			</div>
			<div className="flex items-end gap-3">
				<HintSVG className="mb-1 w-16 md:w-24" />
				<div
					onClick={openCertificate}
					onKeyDown={openCertificate}
					className="certificate h-40 w-40 cursor-pointer rounded-full shadow-md md:h-40 md:w-40 lg:h-60 lg:w-60"
				/>
			</div>
		</section>
	);
};

export default Certificate;
