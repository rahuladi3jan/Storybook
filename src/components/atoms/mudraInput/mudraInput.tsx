import React, { useState } from "react";
import "./styles.scss";
import { IMudraInputProps } from "./types";
type ComputedVariable = {
  isDisabled?: boolean;
  computedInputClass?: string;
  isDisplayLeftIcon?: boolean;
  isDisplayRightIcon?: boolean;
  isDisplayIndicativeText?: boolean;
  isDisplayLink?: boolean;
  isDisplayPrefixText?: boolean;
};
const MudraInput = React.forwardRef<HTMLInputElement, IMudraInputProps>(
  (props, ref) => {
    const {
      label,
      hintText,
      className,
      state,
      hint,
      width,
      controlled,
      value,
      onChange,
      defaultValue,
      id,
      name,
      errorMessage,
      required,
    } = props;
    const [inputValue, updateValue] = useState<string>(defaultValue || "");
    const computedClassName: string = React.useMemo<string>(() => {
      const classNames: string[] = [];
      if (className) classNames.push(className);
      if (state !== "default" && state) classNames.push(state);
      classNames.push("mudra-input");
      if (errorMessage) classNames.push("error");
      if (required) classNames.push("required");
      if (inputValue || value) classNames.push("input-filled");
      return classNames.join(" ");
    }, [className, state, errorMessage, required, value, inputValue]);
    const computedId: string | undefined = React.useMemo<
      string | undefined
    >(() => {
      const initialId = id ? `${id}` : undefined;
      return initialId;
    }, [id]);
    const computedName: string | undefined = React.useMemo<
      string | undefined
    >(() => {
      const initialName = name ? `${name}` : undefined;
      return initialName;
    }, [name]);
    const {
      computedInputClass,
      isDisplayLeftIcon,
      isDisplayRightIcon,
      isDisplayIndicativeText,
      isDisplayLink,
      isDisplayPrefixText,
    }: ComputedVariable = React.useMemo<ComputedVariable>(
      () => computeValues(props),
      [props]
    );
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      updateValue(event.target.value);
    };
    const renderInput = () => {
      const computedProps = {
        ...props,
        value: controlled ? value : inputValue,
        onChange: controlled ? onChange : onInputChange,
        disabled: state === "disabled",
        readOnly: state === "read-only",
        className: computedInputClass,
        ref: ref,
      };
      return (
        <input
          data-testid="mudra_input"
          {...computedProps}
          {...(id && { id: computedId })}
          {...(name && { name: computedName })}
        />
      );
    };
    const renderPrefixIcon = () => {
      const { prefixIcon: PrefixIcon } = props;
      return (
        <>
          {PrefixIcon && isDisplayLeftIcon && (
            <PrefixIcon
              className="icon-left"
              data-testid="mudra_input-left-icon"
            />
          )}
        </>
      );
    };
    const renderSuffixIcon = () => {
      const { suffixIcon: SuffixIcon } = props;
      return (
        <>
          {SuffixIcon && isDisplayRightIcon && (
            <SuffixIcon
              className="icon-right"
              data-testid="mudra_input-right-icon"
            />
          )}
        </>
      );
    };
    const renderIndicativeText = () => {
      const { suffixText } = props;
      return (
        <>
          {isDisplayIndicativeText && (
            <span className="suffix-text" data-testid="mudra_input-suffix-text">
              {suffixText}
            </span>
          )}
        </>
      );
    };
    const renderLink = () => {
      const { suffixText, linkURL } = props;
      return (
        <>
          {isDisplayLink && (
            <a
              className="suffix-text-link"
              href={linkURL}
              target="_blank"
              data-testid="mudra_input-suffix-link"
              rel="noreferrer"
            >
              {suffixText}
            </a>
          )}
        </>
      );
    };
    const renderPrefixText = () => {
      const { prefixText } = props;
      if (isDisplayPrefixText)
        return (
          <span
            className="prefix-text-content"
            data-testid="mudra_input-prefix-text"
          >
            {prefixText}
          </span>
        );
    };
    return (
      <div className={computedClassName} data-testid="mudra_input-container">
        <label className="label" data-testid="mudra_input-label">
          {label}
        </label>
        <div className="input-container" style={{ width }}>
          {renderInput()}
          {renderPrefixText()}
          {renderPrefixIcon()}
          {renderSuffixIcon()}
          {renderIndicativeText()}
          {renderLink()}
        </div>
        {hint && (
          <p className="hint-text" data-testid="mudra_input_hint">
            {hintText}
          </p>
        )}
        {errorMessage && (
          <div
            className="error-message"
            data-testid="mudra_input-error-message"
          >
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
);
function computeValues(props: IMudraInputProps) {
  const { state, disabled, feature, suffixText, prefixText } = props;
  return {
    isDisabled:
      state === "disabled" || disabled || state === "read-only" ? true : false,
    computedInputClass:
      feature !== "normal" ? `${feature} input-field` : "input-field",
    isDisplayLeftIcon:
      feature === "left-icon" ||
      feature === "left-right-icon" ||
      feature === "indicative-text-left-icon" ||
      feature === "link-left-icon"
        ? true
        : false,
    isDisplayRightIcon:
      feature !== "indicative-text" &&
      feature !== "indicative-text-left-icon" &&
      (feature === "right-icon" ||
        feature === "left-right-icon" ||
        feature === "prefix-text-right-icon")
        ? true
        : false,
    isDisplayIndicativeText:
      feature !== "link" &&
      suffixText &&
      (feature === "indicative-text" ||
        feature === "indicative-text-left-icon" ||
        feature === "prefix-text-indicative-text")
        ? true
        : false,
    isDisplayLink:
      feature === "link" || feature === "link-left-icon" ? true : false,
    isDisplayPrefixText:
      prefixText &&
      (feature === "prefix-text" ||
        feature === "prefix-text-indicative-text" ||
        feature === "prefix-text-right-icon")
        ? true
        : false,
  };
}
MudraInput.defaultProps = {
  state: "default",
  autoFocus: false,
  width: "fit-content",
  required: false,
};
MudraInput.displayName = "MudraInput";
export default MudraInput;
