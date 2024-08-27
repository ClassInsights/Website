import { Link } from "react-router-dom";
import ArrowSVG from "../assets/svg/arrow.svg?react";

const Login = () => {
	return (
		<div className="pt-32 pb-8">
			<Link to="/" className="flex w-max items-center gap-1.5 pb-2">
				<ArrowSVG className="rotate-180 fill-black" />
				<p>Zurück zur Startseite</p>
			</Link>
			<h1 className="text-5xl">Anmeldung</h1>
		</div>
	);
};

export default Login;
