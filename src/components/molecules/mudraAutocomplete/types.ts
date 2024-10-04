export interface IMudraAutocompleteProps {
  className?: string;
  options?: Array<MudraAutocompleteOptionType>;
  value?: MudraAutocompleteOptionType;
  onSelect?: (option: MudraAutocompleteOptionType) => void;
  placeHolder?: string;
}
export type MudraAutocompleteOptionType = {
  value: string | number;
  label: string;
};
