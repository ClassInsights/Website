import { X } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import type { AzureGroup } from "../types/AzureGroup";

type GroupSelectProps = {
  label: string;
  options: AzureGroup[];
  initialSelection: string[];
  onChange: (selectedOptions: string[]) => void;
};

/** GroupSelect component
 * @param {string} label - Label for the input element
 * @param {AzureGroup[]} options - List of azure groups to select from
 * @param {string[]} initialSelection - List of azure group id's to be selected initially
 * @param {function} onChange - Function to call when the selected options change
 * @returns {JSX.Element} - GroupSelect component
 */
const GroupSelect = ({ label, options, initialSelection, onChange }: GroupSelectProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    options.filter((option) => initialSelection.includes(option.id)),
  );

  const remainingOptions = useMemo(
    () => options.filter((option) => !selectedOptions.includes(option)),
    [options, selectedOptions],
  );

  const updateSelection = useCallback(
    (options: AzureGroup[]) => setTimeout(() => onChange(options.map((option) => option.id)), 0),
    [onChange],
  );

  const selectOption = useCallback(
    (id: string) => {
      setShowOptions(false);
      setSelectedOptions((prev) => {
        const option = options.find((option) => option.id === id);
        if (!option) return prev;
        const newSelection = [...prev, option];
        updateSelection(newSelection);
        return newSelection;
      });
    },
    [options, updateSelection],
  );

  const deselectOption = useCallback(
    (id: string) =>
      setSelectedOptions((prev) => {
        const newSelection = prev.filter((option) => option.id !== id);
        updateSelection(newSelection);
        return newSelection;
      }),
    [updateSelection],
  );

  const hideOptions = useCallback(() => {
    document.body.removeEventListener("click", hideOptions);
    setShowOptions(false);
  }, []);

  return (
    <div className="relative mt-6">
      <p className="absolute top-[-1.1rem] text-xs">{label}</p>
      <div className="flex w-full flex-wrap items-center gap-2 rounded-md border-[1px] border-black bg-background px-4 py-2 opacity-70 transition-shadow hover:opacity-100 hover:shadow-md">
        {selectedOptions.length === 0 ? (
          <p className="border-[1px] border-transparent">
            {options.length === 0 ? "Es existieren keine Gruppen" : "Keine Auswahl getroffen"}
          </p>
        ) : (
          selectedOptions.map((option) => (
            <div
              key={option.id}
              className="flex items-center gap-1 rounded-md border-[1px] border-black px-2"
            >
              <p>{option.displayName}</p>
              <X
                className="shrink-0 cursor-pointer"
                width={18}
                onClick={() => deselectOption(option.id)}
              />
            </div>
          ))
        )}
        {options.length > selectedOptions.length && (
          <div className="relative">
            <div
              className="mr-40 cursor-pointer rounded-full border-[1px] border-black bg-card p-1"
              onClick={() => {
                setShowOptions(true);
                setTimeout(() => document.body.addEventListener("click", hideOptions), 0);
              }}
              onKeyDown={() => {
                setShowOptions(true);
                setTimeout(() => document.body.addEventListener("click", hideOptions), 0);
              }}
            >
              <X className="shrink-0 rotate-45" width={18} height={18} />
            </div>
            {showOptions && (
              <div
                className={`absolute top-[-0.25rem] z-10 max-w-52 overflow-x-scroll rounded-md border-[1px] border-black bg-card shadow-md ${
                  remainingOptions.length >= 4
                    ? "h-[8.25rem]"
                    : remainingOptions.length === 3
                      ? "h-[6.25rem]"
                      : remainingOptions.length === 2
                        ? "h-[4.25rem]"
                        : "h-[2.25rem]"
                }`}
                onMouseLeave={hideOptions}
              >
                <div className="w-max">
                  {remainingOptions.map((option, index) => (
                    <div
                      key={option.id}
                      className={`flex h-8 min-w-full cursor-pointer items-center bg-card hover:bg-card/50 ${
                        index === remainingOptions.length - 1 ? "" : "border-b-[1px] border-black"
                      }`}
                      onClick={() => selectOption(option.id)}
                      onKeyDown={() => selectOption(option.id)}
                    >
                      <p className="px-4 whitespace-nowrap">{option.displayName}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupSelect;
