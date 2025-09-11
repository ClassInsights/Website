import { ChevronRight } from "lucide-react";
import type { JSX } from "react";
import { Link } from "react-router";

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
  const buttonStyle = `shrink-0 transition-opacity border-none bg-primary px-4 py-2 rounded-lg text-background flex gap-4 items-center ${disabled ? "cursor-not-allowed opacity-30" : "cursor-pointer"}`;

  if (typeof onPress === "string") {
    if (onPress.startsWith("/"))
      return (
        <Link to={disabled ? "" : onPress} className={buttonStyle}>
          {label}
          {arrowed && <ChevronRight className="shrink-0 fill-background" width={16} />}
        </Link>
      );
    return (
      <a href={disabled ? undefined : onPress} aria-label={label} className={buttonStyle}>
        {label}
        {arrowed && <ChevronRight className="shrink-0 fill-background" width={16} />}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => (disabled ? undefined : onPress())}
      className={buttonStyle}
    >
      {label}
      {arrowed && <ChevronRight className="shrink-0 fill-background" width={16} />}
    </button>
  );
};

export default Button;
