import { useCallback } from "react";
import SettingsSVG from "../assets/svg/settings.svg?react";
import { useSchoolModal } from "../contexts/SchoolContext";
import { type SchoolData, translateRole } from "../types/SchoolData";
import ExternalLink from "./ExternalLink";

type SchoolProps = {
	school: SchoolData;
	multiple: boolean;
};

/** The School component with redirect to local dashboard */
const School = ({ school, multiple }: SchoolProps) => {
	const schoolModal = useSchoolModal();

	const editSchool = useCallback(() => schoolModal.show(school), [school, schoolModal]);

	return (
		<div className={`w-full ${multiple ? "school" : "rounded-md border-2 border-[#F1F4FF] px-8 py-4"}`}>
			<div className="flex items-start justify-between gap-2">
				<h2 className="text-2xl">{school.Name}</h2>
				<SettingsSVG
					onClick={editSchool}
					onKeyDown={editSchool}
					width={26}
					height={26}
					className="mt-[0.2rem] shrink-0 cursor-pointer fill-primary"
				/>
			</div>
			<p>Rolle: {school.Roles.map((role) => translateRole(role)).join(", ")}</p>
			<ExternalLink href={school.LocalDashboardUrl} label="Zum Dashboard" newPage />
		</div>
	);
};

export default School;
