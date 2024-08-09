/**
 * The wrapper for all pages (spaces the content from the edges)
 * @param {React.ReactNode} children The children to wrap
 * @returns {JSX.Element} The page wrapper
 */
const PageWrapper = ({
	children,
}: { children: React.ReactNode }): JSX.Element => {
	return <main className="page-spacing relative h-dvh">{children}</main>;
};

export default PageWrapper;
