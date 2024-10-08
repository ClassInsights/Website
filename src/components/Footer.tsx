import { Link } from "react-router-dom";

/** The main footer on the bottom of every page */
const Footer = () => {
	return (
		<footer className="absolute bottom-0 flex w-full select-none flex-col items-center justify-between bg-background pb-8 sm:flex-row">
			<p>&#169; {new Date().getFullYear()} ClassInsights</p>
			<div className="flex justify-between gap-10">
				<Link to="/impressum">
					<small>Impressum</small>
				</Link>
				<Link to="/datenschutz">
					<small>Datenschutz</small>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
