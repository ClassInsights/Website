import MailSVG from "../assets/svg/mail.svg?react";

type MemberProps = {
	imgPath: string;
	name: string;
	position: string;
	tasks: string;
	mail: string;
};

/** ClassInsights Staff member */
const Member = ({ imgPath, name, position, tasks, mail }: MemberProps) => (
	<div className="flex w-full flex-col items-center gap-5 md:flex-row md:gap-10">
		<img src={imgPath} alt={`${name} - ${position}`} className="w-52" />
		<div>
			<p className="text-center text-xl md:text-start">{name}</p>
			<p className="text-center md:text-start">{position}</p>
			<p className="mx-auto mt-2 w-3/4 pb-5 text-center md:w-full md:text-start">{tasks}</p>
			<div className="flex items-center justify-center gap-2 md:justify-start">
				<MailSVG className="shrink-0 fill-primary" />
				<a href={`mailto:${mail}`}>{mail}</a>
			</div>
		</div>
	</div>
);

export default Member;
