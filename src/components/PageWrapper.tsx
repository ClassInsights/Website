import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import { ToastProvider } from "../contexts/ToastContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

/**
 * The wrapper for all pages (spaces the content from the edges)
 * @returns {JSX.Element} The page wrapper
 */
const PageWrapper = (): JSX.Element => {
	const { hash } = useLocation();

	useEffect(() => {
		if (!hash) {
			window.scrollTo(0, 0);
			return;
		}
		const element = document.getElementById(hash.slice(1));
		if (!element) return;
		element.scrollIntoView({ behavior: "smooth" });
	});

	return (
		<main className="page-spacing relative min-h-100dvh max-w-5xl">
			<ToastProvider>
				<AuthProvider>
					<Navbar />
					<Outlet />
					<Footer />
				</AuthProvider>
			</ToastProvider>
		</main>
	);
};

export default PageWrapper;
