import React, { useMemo } from "react";
import { IMudraToggleProps } from "./types";
import "./styles.scss";
const MudraToggle: React.FunctionComponent<IMudraToggleProps> = ({
  className,
  disabled,
  checked,
  onClick,
}) => {
  const computedClassName: string = useMemo<string>(
    () =>
      `mudra-toggle-root ${className ? className : ""} ${
        disabled ? "disabled" : ""
      }`.trim(),
    [className]
  );
  return (
    <label className={computedClassName} data-testid="mudra_toggle_root">
      <input
        data-testid="mudra_toggle_input"
        onClick={onClick}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className="mudra-toggle-input"
      />
      <span className="mudra-toggle-slider"></span>
    </label>
  );
};
export default MudraToggle;
