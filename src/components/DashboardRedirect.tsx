import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CloseSVG from "../assets/svg/close.svg?react";
import { useAuth } from "../contexts/AuthContext";
import { Role } from "../types/SchoolData";
import ProgressSVG from "../assets/svg/progress.svg?react";
import Button from "./Button";

/** The local dashboard redirect indicator */
const DashboardRedirect = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [countdown, setCountdown] = useState(10);
	const countdownRef = useRef<number>();

	const auth = useAuth();

	const school = useMemo(() => auth.data?.user.schools[0], [auth.data]);

	const redirect = useCallback(
		() => location.replace(`${school?.LocalDashboardUrl}?token=${auth.data?.access_token}`),
		[school, auth.data],
	);

	const cancelRedirect = useCallback(() => {
		clearInterval(countdownRef.current);
		countdownRef.current = undefined;
		setIsVisible(false);
	}, []);

	useEffect(() => {
		if (!auth.data) return;

		if (
			// Check if the user has multiple schools
			auth.data?.user.schools.length !== 1 ||
			// Check if the user is just a student
			auth.data?.user.schools[0].Roles.every((role) => role === Role.STUDENT) ||
			// Check if the user is an admin
			auth.data.user.schools[0].Roles.includes(Role.ADMIN)
		)
			return;

		if (countdownRef.current) return;

		countdownRef.current = setInterval(() => {
			setCountdown((prev) => {
				if (prev === 1) {
					clearInterval(countdownRef.current);
					countdownRef.current = undefined;
					console.log("Redirecting...");
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		setIsVisible(true);
		return () => cancelRedirect();
	}, [auth.data, cancelRedirect]);

	if (!isVisible || !school) return <></>;

	return (
		<dialog className="fixed top-0 z-20 flex h-dvh w-screen items-end justify-center bg-transparent md:items-center">
			<div
				className="h-full w-full cursor-pointer bg-black opacity-30"
				onClick={cancelRedirect}
				onKeyDown={cancelRedirect}
			/>
			<div className="absolute h-[88%] w-full rounded-t-2xl bg-background p-4 md:h-auto md:w-3/5 md:rounded-2xl lg:w-2/5">
				{/* Title Bar */}
				<div className="flex items-start justify-between bg-background pb-2">
					<CloseSVG className="shrink-0 opacity-0" />
					<div className="flex select-none items-center gap-2">
						<p className="font-bold">Automatische Weiterleitung</p>
					</div>
					<CloseSVG className="shrink-0 cursor-pointer" onClick={cancelRedirect} />
				</div>
				{/* Modal Content */}
				<div className="px-6">
					<p className="pt-2">
						Sie werden in Kürze Sekunden zum Lokalen Dashboard der Schule{" "}
						<span className="text-primary">{school.Name}</span> ({school.LocalDashboardUrl}) weitergeleitet.
					</p>
					<p className="pt-2 pb-6">
						Um das Konto zu wechseln, klicken Sie auf "Abbrechen" und anschließend auf "Abmelden".
					</p>
					<div className="flex justify-center">
						<ProgressSVG width={60} height={60} className="shrink-0 animate-spin fill-primary" />
					</div>
					<div className="mt-8 flex items-center justify-center gap-6">
						<button className="cursor-pointer text-primary" type="button" onClick={cancelRedirect}>
							Abbrechen
						</button>
						<Button label={`Weiter (${countdown})`} arrowed onPress={redirect} />
					</div>
				</div>
			</div>
		</dialog>
	);
};

export default DashboardRedirect;
