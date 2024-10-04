import React, {
  useEffect,
  useMemo,
  useState,
  useRef,
  useCallback,
} from "react";
import { MudraMenu, MudraMenuItem, MudraButton } from "../../atoms";
import { IMudraDropDown, MudraDropDownOptionType } from "./types";
import "./styles.scss";
const MudraDropDown: React.FunctionComponent<IMudraDropDown> = ({
  className,
  value,
  options = [],
  onSelect,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [selectedValue, setSelectedValue] = useState<
    MudraDropDownOptionType | undefined
  >(value);
  const [showMenu, toggleMenu] = useState<boolean>(false);
  const computedClassName: string = useMemo<string>(
    () => `mudra-dropdown ${className ? className : ""} `.trim(),
    [className]
  );
  const handleOnClick = () => {
    toggleMenu((prev) => !prev);
  };
  useEffect(() => {
    const handler = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        toggleMenu(false);
      }
    };
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  const handleOnSelect = (option: MudraDropDownOptionType) => {
    setSelectedValue(option);
    onSelect && onSelect(option);
  };
  const isSelected = useCallback(
    (option: MudraDropDownOptionType) => {
      if (!selectedValue) {
        return false;
      }
      return selectedValue.value === option.value;
    },
    [selectedValue]
  );
  return (
    <div className={computedClassName} data-testid="mudra_dropdown">
      <div ref={buttonRef} style={{ width: "fit-content" }}>
        <MudraButton onClick={handleOnClick} label={selectedValue?.label} />
      </div>
      {showMenu && (
        <MudraMenu className="drop-down-menu">
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
      )}
    </div>
  );
};
export default MudraDropDown;
