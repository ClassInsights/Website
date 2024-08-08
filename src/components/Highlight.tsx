type HighlightProps = {
	title: string;
	description: string;
};

/**
 * Highlight component for Hero section
 * @param {string} title - The title of the highlight
 * @param {string} description - The description of the highlight
 * @returns {JSX.Element} The highlight component
 */
const Highlight = ({ title, description }: HighlightProps): JSX.Element => {
	return (
		<article>
			<h3>{title}</h3>
			<p>{description}</p>
		</article>
	);
};

export default Highlight;
