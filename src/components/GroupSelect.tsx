import { Plus, X } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import type { AzureGroup } from "../types/AzureGroup";
import { Button } from "./ui/button";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

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

  return (
    <div className="relative mt-6">
      <p className="absolute top-[-1.5rem] text-xs">{label}</p>
      <div className="flex min-h-[3.125rem] w-full flex-wrap gap-x-3 gap-y-2 rounded-md border bg-background px-4 py-2 transition-opacity outline-none">
        {selectedOptions.length === 0 ? (
          <p>{options.length === 0 ? "Es existieren keine Gruppen" : "Keine Auswahl getroffen"}</p>
        ) : (
          selectedOptions.map((option) => (
            <Button
              key={option.id}
              variant="outline"
              size="sm"
              onClick={() => deselectOption(option.id)}
            >
              {option.displayName}
              <X size={16} />
            </Button>
          ))
        )}
        {remainingOptions.length > 0 && (
          <Popover open={showOptions} onOpenChange={setShowOptions}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowOptions(true)}
                className="h-8 w-8 rounded-full px-0!"
              >
                <Plus />
              </Button>
            </PopoverTrigger>
            <PopoverContent side="top">
              <Command>
                <CommandInput placeholder="Gruppe suchen..." />
                <CommandList>
                  <CommandEmpty>Keine Gruppen gefunden.</CommandEmpty>
                  {remainingOptions.map((option) => (
                    <CommandItem key={option.id} onSelect={() => selectOption(option.id)}>
                      {option.displayName}
                    </CommandItem>
                  ))}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default GroupSelect;
