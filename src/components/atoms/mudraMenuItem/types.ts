export interface IMudraMenuItem {
  children: React.ReactNode;
  className?: string;
  value?: string | object | number;
  onClick?: () => void;
  isSelected?: boolean;
  active?: boolean;
}
