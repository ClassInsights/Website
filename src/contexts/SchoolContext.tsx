import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { SchoolData } from "../types/SchoolData";
import { useAuth } from "./AuthContext";
import { conf } from "../config";

type SchoolContextType = {
	isVisible: boolean;
	getData: () => SchoolData | undefined;
	updateData: (data: SchoolData) => void;
	hasChanges: boolean;
	save: () => void;
	show: (data: SchoolData) => void;
	hide: () => void;
};

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

export const SchoolProvider = ({ children }: { children: React.ReactNode }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [data, setData] = useState<SchoolData | undefined>(undefined);
	const [updatedData, setUpdatedData] = useState<SchoolData | undefined>(undefined);

	const auth = useAuth();

	const getData = useCallback(() => (updatedData ? updatedData : data), [data, updatedData]);

	const onEscKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") hide();
	}, []);

	const show = useCallback(
		(data: SchoolData) => {
			setData(data);
			setIsVisible(true);
			document.body.style.overflow = "hidden";
			document.body.addEventListener("keydown", onEscKeyDown);
		},
		[onEscKeyDown],
	);

	const hide = useCallback(() => {
		setIsVisible(false);
		setData(undefined);
		setUpdatedData(undefined);
		document.body.style.overflow = "auto";
		document.body.removeEventListener("keydown", onEscKeyDown);
	}, [onEscKeyDown]);

	const updateData = useCallback((newData: SchoolData) => setUpdatedData(newData), []);

	const hasChanges = useMemo(
		() => updatedData !== undefined && JSON.stringify(data) !== JSON.stringify(updatedData),
		[data, updatedData],
	);

	const save = useCallback(() => {
		if (!updatedData || !data || !auth.data) return;

		if (!hasChanges) {
			setUpdatedData(undefined);
			return;
		}

		const backup = { ...data };
		try {
			hide();
			setData(updatedData);

			const body = {
				school_id: updatedData.SchoolId,
				local_api_url: updatedData.LocalApiUrl,
				local_dashboard_url: updatedData.LocalDashboardUrl,
			};

			fetch(`${conf().VITE_API_URL}/school`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${auth.data.access_token}`,
				},
				body: JSON.stringify(body),
			}).then((response) => {
				if (!response.ok) setData(backup);
				else if (auth.data) auth.refreshToken(auth.data.refresh_token);
			});
		} catch {
			setData(backup);
		} finally {
			setUpdatedData(undefined);
		}
	}, [updatedData, data, auth.data, auth.refreshToken, hasChanges, hide]);

	return (
		<SchoolContext.Provider value={{ isVisible, getData, updateData, hasChanges, save, show, hide }}>
			{children}
		</SchoolContext.Provider>
	);
};

export const useSchoolModal = () => {
	const context = useContext(SchoolContext);
	if (context === undefined) {
		throw new Error("useSchool must be used within a SchoolProvider");
	}
	return context;
};
