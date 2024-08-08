/**
 * The wrapper for all pages (spaces the content from the edges)
 * @param {React.ReactNode} children The children to wrap
 * @returns {JSX.Element} The page wrapper
 */
const PageWrapper = ({
	children,
}: { children: React.ReactNode }): JSX.Element => {
	return (
		<main className="relative mx-5 h-dvh sm:mx-20 md:mx-32 xl:mx-60">
			{children}
		</main>
	);
};

export default PageWrapper;
