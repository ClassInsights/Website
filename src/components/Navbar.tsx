import { Link } from "react-router-dom";
import Arrow from "../assets/svg/arrow.svg";

/*
 * The main Navigation Bar component
 * @returns {JSX.Element} The navbar component
 */
const Navbar = () => {
	return (
		<header className="absolute flex w-full select-none justify-between pt-6">
			<Link to="/#top">
				<img
					src="/logo.svg"
					alt="ClassInsights Logo"
					draggable={false}
					width={40}
				/>
			</Link>
			<nav className="flex items-center gap-8">
				<Link to="#features">Lösungen</Link>
				<Link to="/about">Über uns</Link>
				<Link to="/installation">Installation</Link>
				<a
					href="https://auth.classinsights.at"
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-2 text-primary"
				>
					<p>Anmelden</p>
					<img
						src={Arrow}
						alt="Arrow indicating navigation"
						draggable={false}
						width={18}
					/>
				</a>
			</nav>
		</header>
	);
};

export default Navbar;
