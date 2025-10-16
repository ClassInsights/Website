import { conf } from "@/config";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { type CertificateData, isCertificateData } from "../types/CertificateData";
import { useToast } from "./ToastContext";

type CertificateContextType = {
  isVisible: boolean;
  certificateData: CertificateData | undefined;
  show: (data: CertificateData) => void;
  hide: () => void;
};

const CertificateContext = createContext<CertificateContextType | undefined>(undefined);

export const CertificateProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [certificateData, setCertificateData] = useState<CertificateData | undefined>(undefined);

  const toast = useToast();

  const onEscKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") hide();
  }, []);

  const show = useCallback(
    (data: CertificateData) => {
      setCertificateData(data);
      setIsVisible(true);
      const scrollTop = document.scrollingElement?.scrollTop;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${Math.abs(window.innerWidth - document.documentElement.clientWidth)}px`;
      if (document.scrollingElement && scrollTop) document.scrollingElement.scrollTop = scrollTop;
      document.body.addEventListener("keydown", onEscKeyDown);
    },
    [onEscKeyDown],
  );

  const hide = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete("sid");
    window.history.pushState({}, "", url.toString());
    setIsVisible(false);
    setCertificateData(undefined);
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "";
    document.body.removeEventListener("keydown", onEscKeyDown);
  }, [onEscKeyDown]);

  const fetchSchoolData = useCallback(
    async (sid: string) => {
      const response = await fetch(`${conf().VITE_API_URL}/schools/${sid}/certificate`);
      if (!response.ok) {
        toast.showMessage("Diese Schule nutzt kein ClassInsights mehr", "error");
        return;
      }
      const data = await response.json();
      if (!isCertificateData(data)) return;
      show(data);
    },
    [toast.showMessage, show],
  );

  useEffect(() => {
    const url = new URL(window.location.href);
    const sid = url.searchParams.get("sid");
    if (!sid) return;
    fetchSchoolData(sid);
  }, [fetchSchoolData]);

  return (
    <CertificateContext.Provider value={{ isVisible, certificateData, show, hide }}>
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
