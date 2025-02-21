import { useState } from "react";

type TextInputProps = {
	id: string;
	label: string;
	initialValue: string;
	onChange: (value: string) => void;
};

const TextInput = ({ id, label, initialValue, onChange }: TextInputProps) => {
	const [value, setValue] = useState(initialValue);
	return (
		<div className="relative mt-6">
			<label htmlFor={id} className="absolute top-[-1.1rem] text-xs">
				{label}
			</label>
			<input
				id={id}
				type="text"
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
				className="w-full rounded-md border-[1px] border-black bg-background px-4 py-2 opacity-70 outline-none transition-shadow hover:opacity-100 hover:shadow-md focus:opacity-100 focus:shadow-md"
				autoComplete="off"
			/>
		</div>
	);
};

export default TextInput;
