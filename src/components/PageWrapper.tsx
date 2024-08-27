import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

/**
 * The wrapper for all pages (spaces the content from the edges)
 * @returns {JSX.Element} The page wrapper
 */
const PageWrapper = (): JSX.Element => {
	const { hash } = useLocation();

	useEffect(() => {
		scroll({
			top: 0,
			behavior: "instant",
		});

		if (!hash) return;

		const element = document.getElementById(hash.slice(1));
		if (!element) return;
		element.scrollIntoView();
	});

	return (
		<main className="page-spacing relative min-h-dvh">
			<Navbar />
			<Outlet />
			<Footer />
		</main>
	);
};

export default PageWrapper;
