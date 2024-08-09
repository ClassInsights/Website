type SpacingProps = {
	size?: "sm" | "md" | "lg";
};

/**
 * A component that renders a vertical spacing element.
 * @param size - The size of the spacing element.
 * @returns {JSX.Element} The spacing component
 */
const Spacing = ({ size = "lg" }: SpacingProps) => {
	return (
		<div
			className={`w-full ${size === "sm" ? "h-16" : size === "md" ? "h-24" : "h-32"}`}
		/>
	);
};

export default Spacing;
