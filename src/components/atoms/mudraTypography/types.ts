import React from "react";
import colors from "../../../styles/styledComponents/colors";

export type Sizes =
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80
  | 88
  | 96;

export type Weight = "regular" | "bold" | "extraBold";

type ColorKeys<T> = keyof T;
type ColorShades = {
  [K in ColorKeys<typeof colors>]: keyof typeof colors[K];
};
type GenerateColorVariants<T extends Record<string, number>> = {
  [K in keyof T & string as `${string & K}${T[K]}`]: `${string & K}${T[K]}`;
};
type ColorVariants = GenerateColorVariants<ColorShades>;
export type ColorVariant = ColorVariants[keyof ColorVariants];

export interface MudraTypographyProps
  extends React.HTMLAttributes<HTMLDivElement> {
  weight?: Weight;
  size?: Sizes;
  textColor?: ColorVariant;
  underline?: boolean;
  capitalize?: boolean;
  ellipsis?: boolean;
  lineThrough?: boolean;
}
