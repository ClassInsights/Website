import { Link } from "react-router-dom";
import ArrowSVG from "../assets/svg/arrow.svg?react";

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
	arrowed = false,
}: ButtonProps): JSX.Element => {
	const buttonStyle = `border-none bg-primary px-4 py-2 cursor-pointer rounded-lg text-background flex gap-4 items-center
    ${disabled ? "cursor-not-allowed opacity-30" : ""}`;

	if (typeof onPress === "string") {
		if (onPress.startsWith("/"))
			return (
				<Link to={onPress} className={buttonStyle}>
					{label}
					{arrowed && <ArrowSVG className="fill-background" width={16} />}
				</Link>
			);
		return (
			<a href={onPress} aria-label={label} className={buttonStyle}>
				{label}
				{arrowed && <ArrowSVG className="fill-background" width={16} />}
			</a>
		);
	}

	return (
		<button
			type="button"
			aria-label={label}
			onClick={onPress}
			className={buttonStyle}
		>
			{label}
			{arrowed && <ArrowSVG className="fill-background" width={16} />}
		</button>
	);
};

export default Button;
