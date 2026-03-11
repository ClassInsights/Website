import { ChevronRight, LogIn, Menu, School } from "lucide-react";
import { useCallback, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

/** The main Navigation Bar component */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

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
      history.pushState("", document.title, location.pathname + location.search);
    }
  }, [location, navigate]);

  const mobileLinkStyle = "w-full py-2 pr-3 pl-14 text-right hover:bg-card/50";

  return (
    <header
      key=""
      className="page-spacing fixed right-0 left-0 z-10 flex max-w-screen-xl justify-between bg-background pt-6 pb-3 print:hidden"
    >
      <img
        src="/logo.svg"
        alt="ClassInsights Logo"
        width={40}
        onClick={scrollToTop}
        onKeyDown={scrollToTop}
        className="pointer-events-auto cursor-pointer"
      />
      <nav className="relative flex items-center gap-5">
        {location.pathname === "/schulen" || location.pathname === "/login" ? (
          <div
            className="flex cursor-pointer items-center gap-1.5 text-primary"
            onClick={() => navigate("/")}
            onKeyDown={() => navigate("/")}
          >
            <p className="hidden sm:block">Zurück zur Startseite</p>
            <p className="sm:hidden">Startseite</p>
            <ChevronRight className="shrink-0" />
          </div>
        ) : (
          <>
            {/* Mobile Login Button */}
            <div
              className="cursor-pointer md:hidden"
              aria-label={auth.isAuthenticated ? "Anmelden" : "Zur Schulauswahl"}
              onClick={auth.handleLogin}
              onKeyDown={auth.handleLogin}
            >
              {auth.isAuthenticated ? (
                <School width={25} className="shrink-0" />
              ) : (
                <LogIn width={25} className="shrink-0" />
              )}
            </div>
            {/* Mobile Menu Icon */}
            <Menu
              width={25}
              onClick={handleMenu}
              onKeyDown={handleMenu}
              className="shrink-0 cursor-pointer md:hidden"
            />
            {/* Mobile Menu */}
            <div
              className={`absolute top-10 right-0 flex flex-col overflow-hidden rounded-lg bg-card shadow-md transition-opacity duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
            >
              <Link to="/#features" aria-label="Lösungen" className={mobileLinkStyle}>
                Lösungen
              </Link>
              <Link
                to="/unternehmen"
                className={`${mobileLinkStyle} border-opacity-10 border-t border-black`}
              >
                Über uns
              </Link>
              <Link
                to="/preise"
                className={`${mobileLinkStyle} border-opacity-10 border-t border-black`}
              >
                Preise
              </Link>
              <a
                href="https://docs.classinsights.at"
                target="_blank"
                rel="noreferrer"
                className={`${mobileLinkStyle} border-opacity-10 border-t border-black`}
              >
                Dokumentation
              </a>
            </div>
            {/* Desktop Menu */}
            <div className="hidden items-center gap-8 md:flex">
              <Link to="/#features" aria-label="Lösungen">
                Lösungen
              </Link>
              <Link to="/unternehmen">Über uns</Link>
              <Link to="/preise">Preise</Link>
              <a href="https://docs.classinsights.at" target="_blank" rel="noreferrer">
                Dokumentation
              </a>
              <div
                className="hidden cursor-pointer items-center gap-1.5 text-primary md:flex"
                onClick={auth.handleLogin}
                onKeyDown={auth.handleLogin}
              >
                <p>{auth.isAuthenticated ? "Zur Schulauswahl" : "Anmelden"}</p>
                <ChevronRight className="shrink-0" />
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
