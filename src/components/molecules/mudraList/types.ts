import { ColorVariant, Sizes, Weight } from "../../atoms/mudraTypography/types";

export enum LIST_TYPE {
  ORDERED = "ordered",
  UNORDERED = "unordered",
}
export type listType = "ordered" | "unordered";
export interface IMudraListProps {
  data: string[];
  listType?: listType;
  listStyleType?: string;
  textColor?: ColorVariant;
  size?: Sizes;
  weight?: Weight;
  listStyles?: React.CSSProperties;
}
