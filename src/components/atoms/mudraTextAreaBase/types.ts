import React from "react";
export interface IMudraTextAreaBaseProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  autoFocus?: boolean;
  readOnly?: boolean;
}
