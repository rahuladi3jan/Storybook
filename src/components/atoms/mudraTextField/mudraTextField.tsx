import React from "react";
import "./styles.scss";

export interface IMudraTextFieldProps {
  className?: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  errorMessage?: string;
  onChangeCallback?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// eslint-disable-next-line react/display-name
const MudraTextField = React.forwardRef<HTMLInputElement, IMudraTextFieldProps>(
  (props, ref) => {
    const {
      className,
      label,
      required,
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
    const computedClassName: string = React.useMemo(() => {
      return getClassName(props);
    }, [className, required, className, readOnly, disabled, errorMessage]);
    return (
      <div className={computedClassName} data-testid="mudra_textField">
        <div className="text-field-label">{label}</div>
        <div className="field-wrapper">
          <input
            data-testid="mudra_textField_input"
            className="text-field"
            type="text"
            value={isControlled ? value : inputValue}
            onChange={isControlled ? onChangeCallback : onChange}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            ref={ref}
          />
        </div>
        <div className="error-message" data-testid="mudra_textField_error">
          {errorMessage}
        </div>
      </div>
    );
  }
);

function getClassName(props: IMudraTextFieldProps): string {
  const { className, required, disabled, readOnly, errorMessage } = props;
  const classNames: string[] = ["mudra-text-field"];
  if (className) classNames.push(className);
  if (required) classNames.push("required");
  if (disabled) classNames.push("disabled");
  if (readOnly) classNames.push("read-only");
  if (errorMessage) classNames.push("error");
  return classNames.join(" ");
}

const defaultProps = {
  required: false,
  disabled: false,
  readOnly: false,
};

MudraTextField.defaultProps = defaultProps;

export default MudraTextField;
