import React, { useMemo } from "react";
import { IMudraToggle } from "./types";
import "./styles.scss";
const MudraRadio = React.forwardRef<HTMLInputElement, IMudraToggle>(
  ({ className, disabled, value, name, checked, onChange }, ref) => {
    const computedClassName: string = useMemo<string>(
      () =>
        `mudra-radio ${className ? className : ""} ${
          disabled ? "disabled" : ""
        }`.trim(),
      [className, disabled]
    );
    return (
      <input
        data-testid="mudra_radio"
        onChange={onChange}
        checked={checked}
        name={name}
        type="radio"
        value={value}
        disabled={disabled}
        className={computedClassName}
        ref={ref}
      />
    );
  }
);
MudraRadio.displayName = "MudraRadio";
export default MudraRadio;
