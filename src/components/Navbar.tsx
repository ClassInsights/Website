import { useCallback, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ArrowSVG from "../assets/svg/arrow.svg?react";
import DashboardSVG from "../assets/svg/dashboard.svg?react";
import LoginSVG from "../assets/svg/login.svg?react";
import MenuSVG from "../assets/svg/menu.svg?react";

/** The main Navigation Bar component */
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();

	const auth = {
		isAuthenticated: false,
		handleLogin: () => alert("Authentifizierung ist noch in Arbeit"),
	};

	/** Handler for clicking inside the viewport */
	const onDocumentClick = () => {
		setIsOpen(false);
		document.removeEventListener("click", onDocumentClick);
	};

	/** Extract the mobile menu */
	const handleMenu = () => {
		if (isOpen) return;
		setIsOpen(true);
		setTimeout(() => document.addEventListener("click", onDocumentClick), 100);
	};

	const scrollToTop = useCallback(() => {
		if (location.pathname !== "/") navigate("/");
		else {
			window.scrollTo({ top: 0 });
			history.pushState(
				"",
				document.title,
				location.pathname + location.search,
			);
		}
	}, [location, navigate]);

	const mobileLinkStyle =
		"w-full py-2 pr-3 pl-14 text-right hover:bg-container-selected";

	return (
		<header
			key=""
			className="fixed right-0 left-0 z-10 flex justify-between bg-background px-5 pt-6 pb-3 md:px-24 xl:px-60 2xl:px-96"
		>
			<img
				src="/logo.svg"
				alt="ClassInsights Logo"
				width={40}
				onClick={scrollToTop}
				onKeyDown={scrollToTop}
				className="cursor-pointer"
			/>
			<nav className="relative flex items-center gap-5">
				{/* Mobile Login Button */}
				<div
					className="cursor-pointer md:hidden"
					aria-label={auth.isAuthenticated ? "Anmelden" : "Zum Dashboard"}
					onClick={auth.handleLogin}
					onKeyDown={auth.handleLogin}
				>
					{auth.isAuthenticated ? (
						<DashboardSVG width={25} className="fill-primary" />
					) : (
						<LoginSVG width={25} className="fill-primary" />
					)}
				</div>
				{/* Mobile Menu Icon */}
				<MenuSVG
					width={25}
					onClick={handleMenu}
					onKeyDown={handleMenu}
					className="cursor-pointer md:hidden"
				/>
				{/* Mobile Menu */}
				<div
					className={`absolute top-10 right-0 flex flex-col overflow-hidden rounded-lg bg-container shadow-md transition-opacity duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
				>
					<Link
						to="/#features"
						aria-label="Lösungen"
						className={mobileLinkStyle}
					>
						Lösungen
					</Link>
					{[
						["/unternehmen", "Über uns"],
						["/installation", "Installation"],
					].map(([link, label]) => (
						<Link
							key={link}
							to={link}
							className={`${mobileLinkStyle} border-black border-t border-opacity-10`}
						>
							{label}
						</Link>
					))}
				</div>
				{/* Desktop Menu */}
				<div className="hidden items-center gap-8 md:flex">
					<Link to="/#features" aria-label="Lösungen">
						Lösungen
					</Link>
					<Link to="/unternehmen">Über uns</Link>
					<Link to="/installation">Installation</Link>
					<div
						className="hidden cursor-pointer items-center gap-1.5 text-primary md:flex"
						onClick={auth.handleLogin}
						onKeyDown={auth.handleLogin}
					>
						<p>{auth.isAuthenticated ? "Zum Dashboard" : "Anmelden"}</p>
						<ArrowSVG className="fill-primary" />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
