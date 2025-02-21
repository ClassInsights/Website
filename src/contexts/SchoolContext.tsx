import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { conf } from "../config";
import type { SchoolData } from "../types/SchoolData";
import { useAuth } from "./AuthContext";
import { isAzureGroup, type AzureGroup } from "../types/AzureGroup";
import type { SchoolConfig } from "../types/SchoolConfig";

type SchoolContextType = {
	isVisible: boolean;
	getData: () => SchoolConfig | undefined;
	updateData: (data: SchoolConfig) => void;
	hasChanges: boolean;
	azureGroups: AzureGroup[] | undefined;
	save: () => void;
	show: (data: SchoolData) => void;
	hide: () => void;
};

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

export const SchoolProvider = ({ children }: { children: React.ReactNode }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [data, setData] = useState<SchoolConfig | undefined>(undefined);
	const [updatedData, setUpdatedData] = useState<SchoolConfig | undefined>(undefined);

	const [azureGroups, setAzureGroups] = useState<AzureGroup[] | undefined>(undefined);

	const auth = useAuth();

	const getData = useCallback(() => (updatedData ? updatedData : data), [data, updatedData]);

	const onEscKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") hide();
	}, []);

	const show = useCallback(
		(data: SchoolData) => {
			setData({
				school_id: data.SchoolId,
				name: data.Name,
				local_api_url: data.LocalApiUrl,
				local_dashboard_url: data.LocalDashboardUrl,
				azure_admin_groups: data.TeacherGroups,
			});

			if (!azureGroups) {
				fetch(`${conf().VITE_API_URL}/azure/groups`, {
					headers: {
						Authorization: `Bearer ${auth.data?.access_token}`,
					},
				}).then(async (response) => {
					if (!response.ok) return;
					const data = await response.json();
					if (!Array.isArray(data) || !data.every((obj) => isAzureGroup(obj))) return;
					setAzureGroups(data);
				});
			}

			setIsVisible(true);
			document.body.style.overflow = "hidden";
			document.body.addEventListener("keydown", onEscKeyDown);
		},
		[azureGroups, auth.data?.access_token, onEscKeyDown],
	);

	const hide = useCallback(() => {
		setIsVisible(false);
		setData(undefined);
		setUpdatedData(undefined);
		document.body.style.overflow = "auto";
		document.body.removeEventListener("keydown", onEscKeyDown);
	}, [onEscKeyDown]);

	const updateData = useCallback((newData: SchoolConfig) => setUpdatedData(newData), []);

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

			fetch(`${conf().VITE_API_URL}/school`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${auth.data.access_token}`,
				},
				body: JSON.stringify(updatedData),
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
		<SchoolContext.Provider value={{ isVisible, getData, updateData, hasChanges, azureGroups, save, show, hide }}>
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
