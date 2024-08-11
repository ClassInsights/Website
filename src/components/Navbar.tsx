import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowSVG from "../assets/svg/arrow.svg?react";
import LoginSVG from "../assets/svg/login.svg?react";
import MenuSVG from "../assets/svg/menu.svg?react";

/**
 * The main Navigation Bar component
 * @returns {JSX.Element} The navbar component
 */
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const authUrl = "https://auth.classinsights.at";

	const handleClick = () => {
		setIsOpen(false);
		document.removeEventListener("click", handleClick);
	};

	const handleMenu = () => {
		if (isOpen) return;
		setIsOpen(true);
		setTimeout(() => document.addEventListener("click", handleClick), 100);
	};

	const scrollToTop = () => window.scrollTo({ top: 0 });

	const mobileLinkStyle =
		"w-full py-2 pr-3 pl-14 text-right hover:bg-container-selected";

	return (
		<header className="fixed right-0 left-0 z-10 flex justify-between bg-background px-5 pt-6 pb-3 md:px-24 xl:px-60 2xl:px-96">
			<img
				src="/logo.svg"
				alt="ClassInsights Logo"
				width={40}
				onClick={scrollToTop}
				onKeyDown={scrollToTop}
				className="cursor-pointer select-none"
			/>
			<nav className="relative flex items-center gap-5">
				{/* Mobile Login Button */}
				<div className="md:hidden">
					<a href={authUrl} target="_blank" rel="noreferrer">
						<LoginSVG width={25} />
					</a>
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
					<a href="#features" className={mobileLinkStyle}>
						Lösungen
					</a>
					{[
						["/about", "Über uns"],
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
					<a href="#features">Lösungen</a>
					<Link to="/about">Über uns</Link>
					<Link to="/installation">Installation</Link>
					<a
						href={authUrl}
						target="_blank"
						rel="noreferrer"
						className="hidden items-center gap-1.5 text-primary md:flex"
					>
						<p>Anmelden</p>
						<ArrowSVG className="fill-primary" />
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
