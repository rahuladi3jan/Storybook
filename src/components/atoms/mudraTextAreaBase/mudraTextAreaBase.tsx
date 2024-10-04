import React, { useMemo } from "react";
import { IMudraTextAreaBaseProps } from "./types";
import "./styles.scss";
const MudraTextAreaBase: React.FunctionComponent<IMudraTextAreaBaseProps> = ({
  onChange,
  disabled,
  value,
  defaultValue,
  placeholder,
  autoFocus,
  className,
  rows,
  maxLength,
  readOnly,
  onClick,
}) => {
  const computedClassName: string = useMemo<string>(
    () =>
      `mudra-textarea-base ${className ? className : ""} ${
        readOnly ? "read-only" : ""
      }`.trim(),
    [className, readOnly]
  );
  return (
    <textarea
      data-testid="mudra_textarea_base"
      onChange={onChange}
      disabled={disabled || readOnly}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      autoFocus={autoFocus}
      className={computedClassName}
      rows={rows}
      maxLength={maxLength}
      onClick={onClick}
    />
  );
};
export default MudraTextAreaBase;
