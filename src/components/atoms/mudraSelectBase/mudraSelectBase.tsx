import React, { useEffect, useRef, useState } from "react";
import { IMudraSelectBase } from "./types";
import { OutlinedChevronDown, OutlinedChevronUp } from "../../../icons";
import "./styles.scss";
const MudraSelectBase: React.FunctionComponent<IMudraSelectBase> = ({
  placeHolder,
  className,
  selectedValue,
  children,
  isMulti,
  disabled,
  readOnly,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const inputRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e) => {
      if (
        inputRef?.current &&
        !inputRef?.current?.contains(e.target) &&
        e.target.id !== "mudra-menu-item" &&
        e.target.id !== "chevron-down" &&
        e.target.id !== "chevron-up"
      ) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  const getDisplay = () => {
    if (canDisplayPlaceholder()) {
      return placeHolder;
    }
    if (isMulti && Array.isArray(selectedValue)) {
      return selectedValue.map((option) => option.label).join(", ");
    }

    return !Array.isArray(selectedValue) ? selectedValue?.label : "";
  };

  const canDisplayPlaceholder = () => {
    let isPlaceholderVisible = false;
    if (!selectedValue) isPlaceholderVisible = true;
    else if (
      isMulti &&
      Array.isArray(selectedValue) &&
      selectedValue.length === 0
    )
      isPlaceholderVisible = true;
    return isPlaceholderVisible;
  };

  const handleInputClick = () => {
    if (!(disabled || readOnly)) setShowMenu(!showMenu);
  };

  const computedClassName = React.useMemo(() => {
    const classNamesList: string[] = [];
    if (className) classNamesList.push(className);
    classNamesList.push("select-base-container");
    if (disabled) classNamesList.push("disabled");
    if (readOnly) classNamesList.push("readOnly");
    if (showMenu) classNamesList.push("active");
    return classNamesList.join(" ");
  }, [disabled, readOnly]);

  return (
    <div
      className={computedClassName}
      data-testid="mudra_select_base"
      id="mudra-select-base"
    >
      <div
        ref={inputRef}
        onClick={handleInputClick}
        className="select-base-input"
        data-testid="mudra_select_base_input"
      >
        <div
          className="select-base-selected-value"
          data-testid="mudra_select_base_input-value"
        >
          {getDisplay()}
        </div>
        <div className="select-base-tools">
          <div className="select-base-tool">
            {!showMenu && (
              <OutlinedChevronDown
                data-testid="mudra_select_base_chevron_down"
                id="chevron-down"
              />
            )}
            {showMenu && (
              <OutlinedChevronUp
                data-testid="mudra_select_base_chevron_up"
                id="chevron-up"
              />
            )}
          </div>
        </div>
      </div>
      {showMenu && children}
    </div>
  );
};
export default MudraSelectBase;
