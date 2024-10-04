export interface IMudraMultiSelect {
  className?: string;
  options?: Array<MudraMultiSelectOptionType>;
  value?: Array<MudraMultiSelectOptionType>;
  onSelect?: (option: MudraMultiSelectOptionType) => void;
  placeHolder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  isControlled?: boolean;
}
export type MudraMultiSelectOptionType = {
  value: string | number;
  label: string;
};
