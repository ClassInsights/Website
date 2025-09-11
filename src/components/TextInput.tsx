import { useState } from "react";

type TextInputProps = {
  id: string;
  label: string;
  initialValue?: string;
  onChange: (value: string) => void;
  error?: boolean;
  maxLength?: number;
  disabled?: boolean;
};

const TextInput = ({
  id,
  label,
  initialValue,
  onChange,
  error = false,
  maxLength,
  disabled = false,
}: TextInputProps) => {
  const [value, setValue] = useState(initialValue ?? "");
  return (
    <div className="relative mt-6 w-full">
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
        className={`w-full rounded-md border-[1px] bg-background px-4 py-2 transition-opacity transition-shadow outline-none ${error ? "border-error" : "border-black"}${disabled ? "cursor-not-allowed opacity-30" : "opacity-70 hover:opacity-100 hover:shadow-md focus:opacity-100 focus:shadow-md"}`}
        autoComplete="off"
        maxLength={maxLength}
        disabled={disabled}
      />
    </div>
  );
};

export default TextInput;
