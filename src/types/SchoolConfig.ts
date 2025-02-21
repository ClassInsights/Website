/** The type of the school configuration object */
export type SchoolConfig = {
	school_id: number;
	name: string;
	local_api_url: string;
	local_dashboard_url: string;
	azure_teacher_groups: string[];
};
