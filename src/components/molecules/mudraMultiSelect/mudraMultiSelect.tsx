import React, { useCallback, useMemo, useState } from "react";
import { MudraMenu, MudraMenuItem, MudraSelectBase } from "../../atoms";
import { IMudraMultiSelect, MudraMultiSelectOptionType } from "./types";
import "./styles.scss";
const MudraMultiSelect: React.FunctionComponent<IMudraMultiSelect> = ({
  className,
  value = [],
  options = [],
  onSelect,
  placeHolder,
  isControlled,
  readOnly,
  disabled,
}) => {
  const [selectedValue, setSelectedValue] =
    useState<Array<MudraMultiSelectOptionType>>(value);

  const computedClassName: string = useMemo<string>(
    () => `mudra-select ${className ? className : ""} `.trim(),
    [className]
  );
  const removeOption = (option) => {
    return selectedValue.filter((o) => o.value !== option.value);
  };
  const handleOnSelect = (value: MudraMultiSelectOptionType) => {
    let newValue: Array<MudraMultiSelectOptionType>;
    if (selectedValue?.findIndex((o) => o.value === value.value) >= 0) {
      newValue = removeOption(value);
    } else {
      newValue = [...selectedValue, value];
    }
    if (!isControlled) setSelectedValue(newValue);
    onSelect && onSelect(value);
  };

  const isSelected = useCallback(
    (option: MudraMultiSelectOptionType) => {
      return selectedValue?.filter((o) => o.value === option.value).length > 0;
    },
    [selectedValue]
  );

  const canRenderMenu = () => {
    return !(disabled || readOnly);
  };

  React.useEffect(() => {
    if (isControlled) setSelectedValue(value);
  }, [value]);

  return (
    <div className={computedClassName} data-testid="mudra_select">
      <MudraSelectBase
        selectedValue={selectedValue}
        placeHolder={placeHolder}
        isMulti={true}
        disabled={disabled}
        readOnly={readOnly}
      >
        {canRenderMenu() ? (
          <MudraMenu>
            {options?.map((option) => {
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
        ) : (
          <></>
        )}
      </MudraSelectBase>
    </div>
  );
};

MudraMultiSelect.defaultProps = {
  readOnly: false,
  disabled: false,
  isControlled: false,
};

export default MudraMultiSelect;
