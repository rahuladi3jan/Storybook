import React from "react";
import { CheckedType } from "./propTypes";
import "./styles.scss";
import { Checked, PartialChecked } from "../../../icons";

export interface IMudraCheckboxProps {
  checked?: boolean;
  checkedType?: CheckedType;
  onChangeCallback?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}
// eslint-disable-next-line react/display-name
const MudraCheckbox = React.forwardRef<HTMLInputElement, IMudraCheckboxProps>(
  (props, ref) => {
    const {
      checked,
      checkedType = defaultProps.checkedType,
      onChangeCallback,
      className,
      defaultChecked = defaultProps.defaultChecked,
      disabled = defaultProps.disabled,
    } = props;
    const isControlled = React.useMemo(() => {
      return typeof checked === "boolean";
    }, []);
    const [checkboxValue, setCheckboxValue] = React.useState(defaultChecked);

    const computedClassName: string = React.useMemo(() => {
      const classNames = ["mudra-checkbox"];
      if (className) classNames.push(className);
      const checkedTypeClassName = `${
        checkedType === CheckedType.CompleteChecked ? "complete" : "partial"
      }-checked`;
      classNames.push(checkedTypeClassName);
      return classNames.join(" ");
    }, []);

    const onChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) setCheckboxValue(event.target.checked);
        onChangeCallback && onChangeCallback(event);
      },
      [onChangeCallback, isControlled]
    );

    const isCheckmarkVisible = React.useCallback(
      (type: CheckedType) => {
        if (checkedType == type) return isControlled ? checked : checkboxValue;
        else return false;
      },
      [isControlled, checked, checkboxValue, checkedType]
    );
    return (
      <label className="mudra-checkbox-wrapper" data-testid="mudra_checkbox">
        <input
          ref={ref}
          type="checkbox"
          checked={isControlled ? checked : checkboxValue}
          className={computedClassName}
          onChange={onChange}
          disabled={disabled}
          data-testid="mudra_checkbox_input"
        />
        {isCheckmarkVisible(CheckedType.CompleteChecked) && (
          <Checked
            className="checkmark"
            data-testid="mudra_checkbox_checkedIcon"
          />
        )}
        {isCheckmarkVisible(CheckedType.IndeterminateChecked) && (
          <PartialChecked
            className="partial-checkmark"
            data-testid="mudra_checkbox_partialCheckedIcon"
          />
        )}
      </label>
    );
  }
);

const defaultProps = {
  checkedType: CheckedType.CompleteChecked,
  disabled: false,
  defaultChecked: false,
};

export default MudraCheckbox;
