import {
  storybookOrange,
  storybookBlue,
  storybookWhite,
  otherColors,
} from "./colors.ts";
import { primaryFontSm, typeScaleSm } from "./typography";

export const defaultTheme = {
  primaryColor: storybookOrange[60],
  primaryColorHover: storybookOrange[80],
  secondaryColor: storybookBlue[100],
  secondaryColorBg: storybookBlue[80],
  textColorOnPrimary: storybookWhite[100],
  storybookWhite130: storybookWhite[130],
  storybookWhite150: storybookWhite[150],
  storybookWhite160: storybookWhite[160],
  storybookWhite170: storybookWhite[170],
  storybookWhite190: storybookWhite[190],
  textColorOnSecondary: storybookWhite[200],
  textColor: storybookWhite[200],
  dottedLineColor: storybookWhite[120],
  backgroundColorWhite: storybookWhite[100],
  backgroundColor: storybookWhite["bg"],
  backgroundColor2: storybookWhite["bg2"],
  primaryFont: primaryFontSm,
  bluewood10: otherColors["bl10"],
  ...typeScaleSm,
};

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
};
