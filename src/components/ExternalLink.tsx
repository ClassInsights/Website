import ArrowSVG from "../assets/svg/arrow.svg?react";

type LinkProps = {
	href: string;
	label: string;
	arrowed?: boolean;
	newPage?: boolean;
};

const ExternalLink = ({ href, label, arrowed = true, newPage = false }: LinkProps) => {
	return (
		<a
			className="mt-3 flex cursor-pointer items-center gap-1.5 text-primary"
			href={href}
			target={newPage ? "_blank" : "_self"}
			rel="noreferrer"
		>
			<p>{label}</p>
			{arrowed && <ArrowSVG className="shrink-0 fill-primary" />}
		</a>
	);
};

export default ExternalLink;
