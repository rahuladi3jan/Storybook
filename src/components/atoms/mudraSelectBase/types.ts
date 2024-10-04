export type selectValueType = { value: string | number; label: string };
export interface IMudraSelectBase {
  children: React.ReactNode;
  className?: string;
  placeHolder?: string;
  selectedValue?: selectValueType | Array<selectValueType>;
  isMulti?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}
