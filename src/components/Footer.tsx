import { Link } from "react-router";

/** The main footer on the bottom of every page */
const Footer = () => {
  return (
    <footer className="page-spacing absolute right-0 bottom-0 left-0 flex max-w-screen-xl flex-col items-center justify-between bg-background pb-8 select-none sm:flex-row">
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
