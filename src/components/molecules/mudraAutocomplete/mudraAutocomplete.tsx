import React, { useCallback, useMemo, useState } from "react";
import { MudraAutocompleteBase, MudraMenu, MudraMenuItem } from "../../atoms";
import { IMudraAutocompleteProps, MudraAutocompleteOptionType } from "./types";
import "./styles.scss";
const MudraAutocomplete: React.FunctionComponent<IMudraAutocompleteProps> = ({
  className,
  value,
  options = [],
  onSelect,
  placeHolder,
}) => {
  const inputRef = React.useRef<HTMLDivElement>(null);
  const [suggestions, setSuggestions] = useState<
    Array<MudraAutocompleteOptionType>
  >(Array.from<MudraAutocompleteOptionType>(options));
  const [searchValue, setSearchValue] = useState<string | undefined>(
    value?.label
  );
  const [selectedValue, setSelectedValue] = useState<
    MudraAutocompleteOptionType | undefined
  >(value);

  const computedClassName: string = useMemo<string>(
    () => `mudra-autocomplete ${className ? className : ""} `.trim(),
    [className]
  );

  const handleOnSelect = (selectedOption: MudraAutocompleteOptionType) => {
    setSearchValue(selectedOption?.label);
    setSelectedValue(selectedOption);
    onSelect && onSelect(selectedOption);
  };

  const isSelected = useCallback(
    (option: MudraAutocompleteOptionType) => {
      if (!selectedValue) {
        return false;
      }
      return selectedValue?.value === option.value;
    },
    [selectedValue]
  );
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    const query = e.target.value.toLowerCase();
    if (query?.trim()?.length > 0) {
      const filterSuggestions = options.filter(
        (suggestion) =>
          suggestion?.value?.toString()?.toLowerCase().indexOf(query) > -1
      );
      setSuggestions(filterSuggestions);
    } else {
      setSuggestions(Array.from<MudraAutocompleteOptionType>(options));
    }
  };
  return (
    <div className={computedClassName} data-testid="mudra_autocomplete">
      <MudraAutocompleteBase
        onChange={handleChange}
        value={searchValue}
        placeHolder={placeHolder}
        componentRef={inputRef}
      >
        <MudraMenu parentRef={inputRef}>
          {suggestions?.map((option) => {
            return (
              <MudraMenuItem
                isSelected={isSelected(option)}
                value={option.value}
                key={option.value}
                onClick={() => handleOnSelect(option)}
              >
                {option.label}
              </MudraMenuItem>
            );
          })}
        </MudraMenu>
      </MudraAutocompleteBase>
    </div>
  );
};
export default MudraAutocomplete;
