export interface IMudraSearchBarProps {
  prefix?: string;
  placeholder?: string;
  className?: string;
  searchText?: string;
  defaultSearchText?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  onSearch: (text: string) => void;
  isLoading?: boolean;
  results?: React.ReactElement[];
}
