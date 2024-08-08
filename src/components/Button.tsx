import { Link } from "react-router-dom";

type ButtonProps = {
	label: string;
	onPress: (() => void) | string;
	disabled?: boolean;
	arrowed?: boolean;
};

/**
 * Button component
 * @param {string} label - The label of the button
 * @param {function | string} onPress - The function to call when the button is clicked or the link as a string
 * @param {boolean} disabled - Whether the button is disabled
 * @param {boolean} arrowed - Whether the button has an arrow
 * @returns {JSX.Element} The button component
 */
const Button = ({
	label,
	onPress,
	disabled = false,
}: ButtonProps): JSX.Element => {
	const buttonStyle = `border-none bg-primary px-4 py-2 cursor-pointer rounded-lg text-background
    ${disabled ? "cursor-not-allowed opacity-30" : ""}`;

	if (typeof onPress === "string")
		return (
			<Link to={onPress} className={buttonStyle}>
				{label}
			</Link>
		);

	return (
		<button type="button" onClick={onPress} className={buttonStyle}>
			{label}
		</button>
	);
};

export default Button;
