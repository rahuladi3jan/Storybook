export interface IMudraDropDown {
  className?: string;
  options?: Array<MudraDropDownOptionType>;
  value?: MudraDropDownOptionType;
  onSelect?: (option: MudraDropDownOptionType) => void;
  placeHolder?: string;
}
export type MudraDropDownOptionType = {
  value: string | number;
  label: string;
};
