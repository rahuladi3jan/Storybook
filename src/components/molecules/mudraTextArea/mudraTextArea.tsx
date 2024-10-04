import React from "react";
import { IMudraTextAreaProps } from "./types";
import {
  MudraInputLabel,
  MudraTextAreaBase,
  MudraHelperText,
} from "../../atoms";
const MudraTextArea: React.FunctionComponent<IMudraTextAreaProps> = (props) => {
  const { error, disabled, label, hint, hintText, required } = props;
  return (
    <div data-testid="mudra_text_area">
      <MudraInputLabel error={error} disabled={disabled} required={required}>
        {label}
      </MudraInputLabel>
      <MudraTextAreaBase {...props} />
      {hint && (
        <MudraHelperText error={error} disabled={disabled}>
          {hintText}
        </MudraHelperText>
      )}
    </div>
  );
};
export default MudraTextArea;
