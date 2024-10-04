import React from "react";
import "./styles.scss";
import { CrossedEye, Eye } from "../../../icons";

export interface IMudraPasswordFieldProps {
  className?: string;
  label: string;
  disabled?: boolean;
  readOnly?: boolean;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  errorMessage?: string;
  onChangeCallback?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// eslint-disable-next-line react/display-name
const MudraPasswordField = React.forwardRef<
  HTMLInputElement,
  IMudraPasswordFieldProps
>((props, ref) => {
  const {
    className,
    label,
    disabled,
    readOnly,
    value,
    placeholder,
    defaultValue,
    errorMessage,
    onChangeCallback,
  } = props;
  const [inputValue, setInputValue] = React.useState<string>(
    defaultValue || ""
  );
  const isControlled = React.useMemo<boolean>(
    () => typeof onChangeCallback === "function",
    []
  );
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );
  const [isPasswordVisible, setPasswordVisibility] =
    React.useState<boolean>(false);
  const computedClassName: string = React.useMemo(() => {
    return getClassName(props);
  }, [className, className, readOnly, disabled, errorMessage]);
  const inputType: React.HTMLInputTypeAttribute = React.useMemo(() => {
    return isPasswordVisible ? "text" : "password";
  }, [isPasswordVisible]);
  const isPasswordToggleButtonvisible = React.useMemo(() => {
    return !(disabled || readOnly);
  }, [disabled, readOnly]);
  const Icon = React.useMemo(() => {
    return isPasswordVisible ? CrossedEye : Eye;
  }, [isPasswordVisible]);
  return (
    <div className={computedClassName} data-testid="mudra_passwordField">
      <div className="password-field-label">{label}</div>
      <div className="field-wrapper">
        <input
          className="password-field"
          type={inputType}
          value={isControlled ? value : inputValue}
          onChange={isControlled ? onChangeCallback : onChange}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          ref={ref}
          data-testid="mudra_passwordField_input"
        />
        {isPasswordToggleButtonvisible && (
          <Icon
            className="password-icon"
            onClick={() => setPasswordVisibility(!isPasswordVisible)}
            data-testid="mudra_passwordField_icon"
          />
        )}
      </div>
      <div className="error-message" data-testid="mudra_passwordField_error">
        {errorMessage}
      </div>
    </div>
  );
});

function getClassName(props: IMudraPasswordFieldProps): string {
  const { className, disabled, readOnly, errorMessage } = props;
  const classNames: string[] = ["mudra-password-field"];
  if (className) classNames.push(className);
  if (disabled) classNames.push("disabled");
  if (readOnly) classNames.push("read-only");
  if (errorMessage) classNames.push("error");
  return classNames.join(" ");
}

const defaultProps: Partial<IMudraPasswordFieldProps> = {
  disabled: false,
  readOnly: false,
};

MudraPasswordField.defaultProps = defaultProps;

export default MudraPasswordField;
