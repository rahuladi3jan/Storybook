import React, { useMemo } from "react";
import { IMudraInputLabelProps } from "./types";
import "./styles.scss";
const MudraInputLabel: React.FunctionComponent<IMudraInputLabelProps> = ({
  children,
  className,
  error,
  disabled,
  required,
}) => {
  const computedClassName: string = useMemo<string>(() => {
    const classNames: string[] = [];
    if (className) classNames.push(className);
    classNames.push("mudra-input-label");
    if (error) classNames.push("error");
    if (disabled) classNames.push("disabled");
    if (required) classNames.push("required");
    return classNames.join(" ");
  }, [className, disabled, error, required]);
  return (
    <label className={computedClassName} data-testid="mudra_input_label">
      {children}
    </label>
  );
};
export default MudraInputLabel;
