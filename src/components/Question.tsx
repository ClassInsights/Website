import { useEffect, useState } from "react";
import ArrowSVG from "../assets/svg/arrow.svg?react";

type QuestionProps = {
	question: string;
	qId: number;
	currentQuestion: number;
	setQuestion: (index: number) => void;
	children: React.ReactNode;
};

/**
 * Component to showcase a question and the corresponding answer
 * @param {string} question - The question itself
 * @param {number} qId - The id of the question
 * @param {number} currentQuestion - The id of the current focued question
 * @param {function} setQuestion - handle function for expanding a question
 * @param {React.ReactNode} children - the answer block to the question
 * @returns {JSX.Element} The question component
 */
const Question = ({
	question,
	qId,
	currentQuestion,
	setQuestion,
	children,
}: QuestionProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setQuestion(isOpen ? -1 : qId);

	useEffect(() => setIsOpen(qId === currentQuestion), [qId, currentQuestion]);

	return (
		<div
			className={`relative bg-container ${isOpen ? "z-10 rounded-t-lg shadow-md" : "rounded-lg"}`}
		>
			{/* Question block */}
			<div
				className="flex cursor-pointer items-center justify-between px-5 py-3"
				onClick={toggleOpen}
				onKeyUp={toggleOpen}
			>
				<b className="select-none">{question}</b>
				<ArrowSVG
					width={18}
					className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
				/>
			</div>
			{/* Answer block */}
			{isOpen && (
				<div className="absolute w-full rounded-b-lg bg-container px-5 pb-3 shadow-md">
					{children}
				</div>
			)}
		</div>
	);
};

export default Question;
