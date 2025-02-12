import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PersonSVG from "../assets/svg/person.svg?react";
import Button from "../components/Button";
import EditSchool from "../components/EditSchool";
import School from "../components/School";
import { useAuth } from "../contexts/AuthContext";
import { SchoolProvider } from "../contexts/SchoolContext";
import { Role } from "../types/SchoolData";

/** The school selection page */
const Schools = () => {
	const auth = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth.isAuthenticated) navigate("/login");
	}, [auth.isAuthenticated, navigate]);

	const hasAccess = useMemo(
		() =>
			!auth.data?.user.schools.every(
				(school) => !school.Roles.includes(Role.ADMIN) && !school.Roles.includes(Role.TEACHER),
			),
		[auth.data],
	);

	const schools = useMemo(
		() => auth.data?.user.schools.sort((first) => (first.Roles.includes(Role.ADMIN) ? 1 : -1)) ?? [],
		[auth.data],
	);

	return (
		<SchoolProvider>
			<EditSchool />
			<div className="flex min-h-dvh flex-col items-center justify-center">
				{hasAccess ? (
					<div className="flex flex-col items-center justify-center pt-24 pb-32 md:pb-24">
						<h1 className="text-center text-6xl">Schulen</h1>
						<p className="mt-6 text-center text-lg md:w-3/4">
							Hier haben Sie die Möglichkeit, sich mit Ihrer Schule zu verbinden. Zudem können Sie wichtige
							Einstellungen wie die Lokale Dashboard URL verändern.
						</p>
						<div className="mt-2 flex items-center gap-2 pb-4">
							<PersonSVG className="shrink-0" />
							<p>
								{auth.data?.user.unique_name} (
								<button className="text-primary" onClick={auth.logout} onKeyDown={auth.logout} type="button">
									Abmelden
								</button>
								)
							</p>
						</div>
						<div
							id="schools"
							className={`mt-8 w-11/12 md:grid ${schools.length > 1 ? "grid-cols-2 md:w-4/5" : "md:w-1/2 lg:w-2/5"}`}
						>
							{schools.map((school) => (
								<School key={`${school.Name}-${school.SchoolId}`} school={school} multiple={schools.length > 1} />
							))}
						</div>
					</div>
				) : (
					<>
						<h1 className="text-center text-6xl">Kein Zugriff erlaubt</h1>
						<p className="mt-6 pb-8 text-center text-lg sm:w-3/5">
							Um auf die ClassInsights Dienste zugreifen zu können, müssen Sie sich mit einem Lehrer . oder
							Administrator Microsoft Konto anmelden.
						</p>
						<Button onPress={() => navigate("/")} label="Zur Startseite" arrowed />
					</>
				)}
			</div>
		</SchoolProvider>
	);
};

export default Schools;
