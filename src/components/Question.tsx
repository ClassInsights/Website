import { useEffect, useState } from "react";
import ArrowSVG from "../assets/svg/arrow.svg?react";

type QuestionProps = {
	question: string;
	qId: number;
	currentQuestion: number;
	setQuestion: (index: number) => void;
	children: React.ReactNode;
};

const Question = ({
	question,
	qId,
	currentQuestion,
	setQuestion,
	children,
}: QuestionProps) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => setIsOpen(qId === currentQuestion), [qId, currentQuestion]);

	const toggleOpen = () => setQuestion(isOpen ? -1 : qId);

	return (
		<div
			className={`relative bg-container ${isOpen ? "z-10 rounded-t-lg shadow-md" : "rounded-lg"}`}
		>
			<div
				className="flex cursor-pointer items-center justify-between px-5 py-3"
				onClick={toggleOpen}
				onKeyUp={toggleOpen}
			>
				<b>{question}</b>
				<ArrowSVG
					width={18}
					className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
				/>
			</div>
			{isOpen && (
				<div className="absolute w-full rounded-b-lg bg-container px-5 pb-3 shadow-md">
					{children}
				</div>
			)}
		</div>
	);
};

export default Question;
