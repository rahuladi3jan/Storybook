import React, { useMemo } from "react";
import { IMudraInputHelperTextProps } from "./types";
import "./styles.scss";
const MudraInputHelperText: React.FunctionComponent<
  IMudraInputHelperTextProps
> = ({ children, className, error, disabled }) => {
  const computedClassName: string = useMemo<string>(
    () =>
      `mudra-input-helper-text ${className ? className : ""} ${
        error ? "error" : ""
      } ${disabled ? "disabled" : ""}`.trim(),
    [className, disabled, error]
  );
  return (
    <p className={computedClassName} data-testid="mudra_input_helper_text">
      {children}
    </p>
  );
};
export default MudraInputHelperText;
