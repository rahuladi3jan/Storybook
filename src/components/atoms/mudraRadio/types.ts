export interface IMudraToggle {
  className?: string;
  disabled?: boolean;
  value?: string;
  name?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
