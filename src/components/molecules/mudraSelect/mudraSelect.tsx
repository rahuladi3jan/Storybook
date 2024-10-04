import React, { useCallback, useMemo, useState } from "react";
import { MudraMenu, MudraMenuItem, MudraSelectBase } from "../../atoms";
import { IMudraSelect, MudraSelectOptionType } from "./types";
import "./styles.scss";

const MudraSelect: React.FunctionComponent<IMudraSelect> = ({
  className,
  value,
  isControlled,
  options = [],
  onSelect,
  placeHolder,
  disabled,
  readOnly,
}) => {
  const [selectedValue, setSelectedValue] = useState<
    MudraSelectOptionType | undefined
  >(value);

  const computedClassName: string = useMemo<string>(
    () => `mudra-select ${className ? className : ""} `.trim(),
    [className]
  );

  const handleOnSelect = (value: MudraSelectOptionType) => {
    if (!isControlled) setSelectedValue(value);
    onSelect && onSelect(value);
  };

  const canRenderMenu = () => {
    return !(disabled || readOnly);
  };

  const isSelected = useCallback(
    (option: MudraSelectOptionType) => {
      if (!selectedValue) {
        return false;
      }
      return selectedValue.value === option.value;
    },
    [selectedValue]
  );

  React.useEffect(() => {
    if (isControlled) setSelectedValue(value);
  }, [value?.value]);

  return (
    <div className={computedClassName} data-testid="mudra_select">
      <MudraSelectBase
        selectedValue={selectedValue}
        placeHolder={placeHolder}
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

MudraSelect.defaultProps = {
  disabled: false,
  readOnly: false,
  isControlled: false,
};

MudraSelect.displayName = "MudraSelect";

export default MudraSelect;
