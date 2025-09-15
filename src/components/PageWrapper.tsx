import { useEffect, type JSX } from "react";
import { Outlet, useLocation } from "react-router";
import { AuthProvider } from "../contexts/AuthContext";
import { ToastProvider } from "../contexts/ToastContext";
import CookieConsent from "./CookieConsent";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ToastMessage from "./ToastMessage";

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
    <main className="page-spacing min-h-100dvh relative max-w-screen-xl">
      <CookieConsent />
      <ToastProvider>
        <ToastMessage />
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
