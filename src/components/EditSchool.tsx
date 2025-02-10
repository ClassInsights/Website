import { useMemo } from "react";
import CloseSVG from "../assets/svg/close.svg?react";
import { useSchoolModal } from "../contexts/SchoolContext";
import Button from "./Button";
import TextInput from "./TextInput";

/** Modal to edit the school */
const EditSchool = () => {
	const schoolModal = useSchoolModal();

	const data = useMemo(() => schoolModal.getData(), [schoolModal]);

	if (!schoolModal.isVisible || !data) return null;

	return (
		<dialog className="fixed top-0 z-20 flex h-dvh w-screen items-end justify-center bg-transparent md:items-center">
			<div
				className="h-full w-full cursor-pointer bg-black opacity-30"
				onClick={schoolModal.hide}
				onKeyDown={schoolModal.hide}
			/>
			<div className="absolute h-[88%] w-full rounded-t-2xl bg-background p-4 md:h-auto md:w-10/12 md:rounded-2xl lg:w-4/6 xl:w-1/2 2xl:w-2/5">
				{/* Title Bar */}
				<div className="flex items-start justify-between bg-background pb-2">
					<CloseSVG className="shrink-0 opacity-0" />
					<div className="flex select-none items-center gap-2">
						<p className="font-bold">{data.Name}</p>
					</div>
					<CloseSVG className="shrink-0 cursor-pointer" onClick={schoolModal.hide} />
				</div>
				{/* Certificate Content */}
				<div className="scrollbar h-full overflow-y-scroll px-6 pt-8">
					<h3 className="pb-1">Lokale API URL</h3>
					<p>
						Hier können Sie die URL der lokalen ClassInsights API bearbeiten. Diese ist wichtig, da sie die
						Schnittstelle zu unserem Server darstellt.
					</p>
					<TextInput
						id="api"
						label="API URL"
						initialValue={data.LocalApiUrl}
						onChange={(value) => schoolModal.updateData({ ...data, LocalApiUrl: value })}
					/>
					<h3 className="mt-8 pb-1">Lokale Dashboard URL</h3>
					<p>Zu dieser URL werden Sie mit einem Klick auf "Zum Dashboard" weitergeleitet.</p>
					<TextInput
						id="dashboard"
						label="Dashboard URL"
						initialValue={data.LocalDashboardUrl}
						onChange={(value) => schoolModal.updateData({ ...data, LocalDashboardUrl: value })}
					/>
					<div className="mt-8 flex justify-end">
						<Button label="Speichern" onPress={() => schoolModal.save()} disabled={!schoolModal.hasChanges} />
					</div>
				</div>
			</div>
		</dialog>
	);
};

export default EditSchool;
