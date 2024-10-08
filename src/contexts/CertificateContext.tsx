import { createContext, useCallback, useContext, useState } from "react";

type CertificateData = {
	name: string;
	memberSince: Date;
	website: string;
};

type CertificateContextType = {
	isVisible: boolean;
	certificateData: CertificateData | undefined;
	show: (data: CertificateData) => void;
	hide: () => void;
};

const CertificateContext = createContext<CertificateContextType | undefined>(
	undefined,
);

export const CertificateProvider = ({
	children,
}: { children: React.ReactNode }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [certificateData, setCertificateData] = useState<
		CertificateData | undefined
	>(undefined);

	const onEscKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") hide();
	}, []);

	const show = useCallback(
		(data: CertificateData) => {
			setCertificateData(data);
			setIsVisible(true);
			document.body.style.overflow = "hidden";
			document.body.addEventListener("keydown", onEscKeyDown);
		},
		[onEscKeyDown],
	);

	const hide = useCallback(() => {
		setIsVisible(false);
		console.log("hide");
		document.body.style.overflow = "auto";
		document.body.removeEventListener("keydown", onEscKeyDown);
	}, [onEscKeyDown]);

	return (
		<CertificateContext.Provider
			value={{ isVisible, certificateData, show, hide }}
		>
			{children}
		</CertificateContext.Provider>
	);
};

export const useCertificate = () => {
	const context = useContext(CertificateContext);
	if (context === undefined) {
		throw new Error("useCertificate must be used within a CertificateProvider");
	}
	return context;
};
