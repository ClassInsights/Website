import { useCallback } from "react";
import ArrowSVG from "../assets/svg/arrow.svg?react";
import SettingsSVG from "../assets/svg/settings.svg?react";
import { useAuth } from "../contexts/AuthContext";
import { useSchoolModal } from "../contexts/SchoolContext";
import { Role, type SchoolData, translateRole } from "../types/SchoolData";
import { useToast } from "../contexts/ToastContext";
import { conf } from "../config";

type SchoolProps = {
	school: SchoolData;
	multiple: boolean;
};

type DashboardResponse = {
	dashboard_token: string;
};

const isDashboardResponse = (data: unknown): data is DashboardResponse =>
	typeof data === "object" && data !== null && "dashboard_token" in data && typeof data.dashboard_token === "string";

/** The School component with redirect to local dashboard */
const School = ({ school, multiple }: SchoolProps) => {
	const schoolModal = useSchoolModal();
	const auth = useAuth();
	const toast = useToast();

	const editSchool = useCallback(() => schoolModal.show(school), [school, schoolModal]);

	const navigateToDashboard = useCallback(async () => {
		try {
			const response = await fetch(`${conf().VITE_API_URL}/schools/${school.SchoolId}/dashboard`, {
				headers: {
					Authorization: `Bearer ${auth.data?.access_token}`,
				},
			});

			if (!response.ok) throw new Error();

			const data = await response.json();
			if (!isDashboardResponse(data)) throw new Error();

			window.location.replace(`${school.LocalDashboardUrl}?token=${data.dashboard_token}`);
		} catch {
			toast.showMessage("Fehler beim Weiterleiten zum Dashboard", "error");
		}
	}, [school, auth.data, toast.showMessage]);

	return (
		<div className={`w-full ${multiple ? "school" : "rounded-md border-2 border-[#F1F4FF] px-8 py-4"}`}>
			<div className="flex items-start justify-between gap-2">
				<h2 className="text-2xl">{school.Name}</h2>
				{school.Roles.includes(Role.ADMIN) && (
					<SettingsSVG
						onClick={editSchool}
						onKeyDown={editSchool}
						width={26}
						height={26}
						className="mt-[0.2rem] shrink-0 cursor-pointer fill-primary"
					/>
				)}
			</div>
			<p>
				{school.Roles.length === 1 ? "Rolle" : "Rollen"}: {school.Roles.map((role) => translateRole(role)).join(", ")}
			</p>
			<div
				className="mt-3 flex cursor-pointer items-center gap-1.5 text-primary"
				onClick={navigateToDashboard}
				onKeyDown={navigateToDashboard}
			>
				<p>Zum Dashboard</p>
				<ArrowSVG className="shrink-0 fill-primary" />
			</div>
		</div>
	);
};

export default School;
