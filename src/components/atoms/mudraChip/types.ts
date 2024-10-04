import { IconType } from "../../../icons";

export interface IMudraChip {
  text: string;
  className?: string;
  size?: DropDownSize;
  icon?: IconType;
  inActive?: boolean;
  onIconClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLParagraphElement>) => void;
  id?: string;
}
export enum DropDownSize {
  small = "small",
  large = "large",
}
