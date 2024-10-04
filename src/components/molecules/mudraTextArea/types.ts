import { IMudraTextAreaBaseProps } from "../../atoms";
export interface IMudraTextAreaProps extends IMudraTextAreaBaseProps {
  className?: string;
  autoFocus?: boolean;
  label: string;
  value?: string;
  hintText?: string;
  hint?: boolean;
  error?: boolean;
  readOnly?: boolean;
}
