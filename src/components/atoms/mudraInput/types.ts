import React from "react";
import { IconType } from "../../../icons";

export type InputType = "text" | "drop-down" | "textarea";
export type Feature =
  | "normal"
  | "left-icon"
  | "right-icon"
  | "left-right-icon"
  | "indicative-text"
  | "indicative-text-left-icon"
  | "prefix-text"
  | "prefix-text-right-icon"
  | "prefix-text-indicative-text"
  | "link"
  | "link-left-icon";
export type State =
  | "default"
  | "focused"
  | "filled"
  | "disabled"
  | "error"
  | "read-only";
export type Hint = true | false;

export interface IMudraInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  autoFocus?: boolean;
  label: string;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  prefixIcon?: IconType;
  suffixIcon?: IconType;
  hintText?: string;
  state?: State;
  disabled?: boolean;
  hint?: Hint;
  feature?: Feature;
  suffixText?: string;
  required?: boolean;
  prefixText?: string;
  linkURL?: string;
  width?: number | string;
  controlled?: boolean;
  id?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
  errorMessage?: string;
}
