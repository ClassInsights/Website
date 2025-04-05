import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, removeCookie, setCookie } from "typescript-cookie";
import CloseSVG from "../assets/svg/close.svg?react";

const CookieConsent = () => {
	const [alreadyAccepted, setAlreadyAccepted] = useState(false);

	const navigate = useNavigate();

	const acceptCookie = useCallback(() => {
		const expirationDate = new Date();
		expirationDate.setDate(expirationDate.getDate() + 30);

		setCookie("cookie_consent", import.meta.env.PACKAGE_VERSION, {
			expires: expirationDate,
		});

		setAlreadyAccepted(true);
	}, []);

	const openPrivacyPolicy = useCallback(() => navigate("/datenschutz#cookies"), [navigate]);

	useEffect(() => {
		const cookie = getCookie("cookie_consent");
		if (!cookie) return;
		if (cookie !== import.meta.env.PACKAGE_VERSION) {
			removeCookie("cookie_consent");
			return;
		}
		setAlreadyAccepted(true);
	}, []);

	if (alreadyAccepted) return <></>;

	return (
		<div className="fixed right-3 bottom-2 left-3 z-50 flex gap-2 rounded-lg bg-container px-5 py-3 shadow-lg md:right-6 md:bottom-6 md:left-auto md:max-w-lg">
			<p className="cookie-text">
				Wir verwenden <span className="font-bold">technisch notwendige Cookies </span> für die sichere Anmeldung und den
				Softwarebetrieb. Diese benötigen keine explizite Zustimmung. Details:{" "}
				<span onClick={openPrivacyPolicy} onKeyDown={openPrivacyPolicy} className="cursor-pointer underline">
					Datenschutzerklärung
				</span>
			</p>
			<CloseSVG onClick={acceptCookie} className="mt-1 h-5 w-5 shrink-0 cursor-pointer" />
		</div>
	);
};

export default CookieConsent;
