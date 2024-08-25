import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

/**
 * The wrapper for all pages (spaces the content from the edges)
 * @param {React.ReactNode} children The children to wrap
 * @returns {JSX.Element} The page wrapper
 */
const PageWrapper = ({
	children,
}: { children: React.ReactNode }): JSX.Element => {
	const { hash } = useLocation();

	useEffect(() => {
		if (!hash) {
			scroll({
				top: 0,
				behavior: "instant",
			});
			return;
		}
		const element = document.getElementById(hash.slice(1));
		if (!element) return;
		element.scrollIntoView();
	});

	return (
		<main className="page-spacing relative min-h-dvh">
			<Navbar />
			{children}
			<Footer />
		</main>
	);
};

export default PageWrapper;
