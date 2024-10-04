import { MudraSelect } from "../mudraSelect";
import React from "react";
import { Meridiem } from "./types";

interface IMeridiemSelectorProps {
  value: Meridiem;
  onChange: (value: Meridiem) => void;
  disabled?: boolean;
  readOnly?: boolean;
}

const MeridiemSelector = React.forwardRef<
  HTMLDivElement,
  IMeridiemSelectorProps
>((props, ref) => {
  const { value, onChange, disabled, readOnly } = props;
  return (
    <div ref={ref}>
      <MudraSelect
        options={[
          { value: Meridiem.AM, label: Meridiem.AM },
          { value: Meridiem.PM, label: Meridiem.PM },
        ]}
        value={{ value: value, label: value }}
        onSelect={(option) => onChange(option.value as Meridiem)}
        disabled={disabled}
        readOnly={readOnly}
        isControlled={true}
      />
    </div>
  );
});

MeridiemSelector.displayName = "MeridiumSelector";

MeridiemSelector.defaultProps = {
  disabled: false,
  readOnly: false,
};

export default MeridiemSelector;
