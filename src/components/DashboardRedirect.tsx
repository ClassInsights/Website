import ProgressSVG from "@/assets/svg/progress.svg?react";
import { X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";

/** The local dashboard redirect indicator */
const DashboardRedirect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const countdownRef = useRef<number | undefined>(undefined);

  const auth = useAuth();

  const school = useMemo(() => auth.data?.user.schools[0], [auth.data]);

  const cancelRedirect = useCallback(() => {
    clearInterval(countdownRef.current);
    countdownRef.current = undefined;
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (!auth.data || !school) return;

    if (
      // Check if the user has multiple schools
      auth.data?.user.schools.length !== 1 ||
      // Check if the user is just a student
      school.Roles.every((role) => role === "Student")
    )
      return;

    const params = new URLSearchParams(window.location.search);
    if (school.Roles.includes("Admin") && params.get("auto-redirect") !== "true") return;

    if (countdownRef.current) return;

    countdownRef.current = window.setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(countdownRef.current);
          countdownRef.current = undefined;
          if (!school) return 0;
          auth.navigateToDashboard(school.SchoolId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setIsVisible(true);
    return () => cancelRedirect();
  }, [auth.data, cancelRedirect, auth.navigateToDashboard, school]);

  if (!isVisible || !school) return <></>;

  return (
    <dialog className="fixed top-0 z-20 flex h-dvh w-screen items-end justify-center bg-transparent md:items-center">
      <div
        className="h-full w-full cursor-pointer bg-black opacity-30"
        onClick={cancelRedirect}
        onKeyDown={cancelRedirect}
      />
      <div className="absolute w-full rounded-t-2xl bg-background p-4 md:h-auto md:w-3/5 md:rounded-2xl lg:w-2/5">
        {/* Title Bar */}
        <div className="flex items-start justify-between bg-background pb-2">
          <X className="shrink-0 opacity-0" />
          <div className="flex items-center gap-2 select-none">
            <p className="font-bold">Automatische Weiterleitung</p>
          </div>
          <X className="shrink-0 cursor-pointer" onClick={cancelRedirect} />
        </div>
        {/* Modal Content */}
        <div className="px-6">
          <p className="pt-2">
            Sie werden in Kürze Sekunden zum Lokalen Dashboard der Schule{" "}
            <span className="text-primary">{school.Name}</span> ({school.LocalDashboardUrl})
            weitergeleitet.
          </p>
          <p className="pt-2 pb-6">
            Um das Konto zu wechseln, klicken Sie auf "Abbrechen" und anschließend auf "Abmelden".
          </p>
          <div className="flex justify-center">
            <ProgressSVG width={60} height={60} className="shrink-0 animate-spin text-primary" />
          </div>
          <div className="mt-8 flex items-center justify-center gap-6">
            <button className="cursor-pointer text-primary" type="button" onClick={cancelRedirect}>
              Abbrechen
            </button>
            <Button
              label={`Weiter (${countdown})`}
              arrowed
              onPress={() => auth.navigateToDashboard(school.SchoolId)}
            />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default DashboardRedirect;
