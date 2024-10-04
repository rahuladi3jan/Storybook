export interface IMudraAutocompleteBaseProps {
  children: React.ReactNode;
  className?: string;
  componentRef?: React.LegacyRef<HTMLDivElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}
