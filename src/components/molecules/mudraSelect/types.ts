export interface IMudraSelect {
  className?: string;
  options?: Array<MudraSelectOptionType>;
  value?: MudraSelectOptionType;
  isControlled?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onSelect?: (option: MudraSelectOptionType) => void;
  placeHolder?: string;
}
export type MudraSelectOptionType = {
  value: string | number;
  label: string;
};
