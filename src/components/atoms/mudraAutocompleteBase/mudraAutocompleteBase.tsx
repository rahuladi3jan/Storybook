import React, { useState, useEffect, useRef, useMemo } from "react";
import { IMudraAutocompleteBaseProps } from "./types";
import "./styles.scss";
const MudraAutocompleteBase: React.FunctionComponent<
  IMudraAutocompleteBaseProps
> = ({
  children,
  className,
  onChange,
  componentRef,
  value,
  onClick,
  placeHolder,
}) => {
  const searchRef = useRef<HTMLDivElement>(null);
  const [isDisplay, toggleDisplay] = useState(false);
  const handleOnclick = (e: React.MouseEvent<HTMLInputElement>) => {
    toggleDisplay((prev) => !prev);
    onClick && onClick(e);
  };
  const computedClassName: string = useMemo<string>(
    () =>
      `mudra-autocomplete-root ${className ? className : ""}
      }`.trim(),
    [className]
  );
  useEffect(() => {
    const handler = (e) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target) &&
        e.target.id !== "mudra-menu-item"
      ) {
        toggleDisplay(false);
      }
    };
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  return (
    <div
      className={computedClassName}
      ref={searchRef}
      data-testid="mudra_autocomplete_root"
    >
      <div
        data-testid="mudra_autocomplete_container"
        ref={componentRef}
        className={`input-container ${isDisplay ? "focused" : ""}`}
      >
        <input
          data-testid="mudra_autocomplete_input"
          placeholder={placeHolder}
          className="autocomplete-base-input"
          type="text"
          value={value}
          onChange={onChange}
          style={{ width: "100%" }}
          onClick={handleOnclick}
        />
      </div>
      {isDisplay && children}
    </div>
  );
};
export default MudraAutocompleteBase;
