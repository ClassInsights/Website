import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ToastProvider } from "../contexts/ToastContext";

/**
 * The wrapper for all pages (spaces the content from the edges)
 * @returns {JSX.Element} The page wrapper
 */
const PageWrapper = (): JSX.Element => {
	const { hash } = useLocation();

	useEffect(() => {
		if (!hash) return;
		const element = document.getElementById(hash.slice(1));
		if (!element) return;
		element.scrollIntoView();
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
