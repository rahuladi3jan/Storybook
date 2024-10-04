import { Type, Theme, Size } from "./PropTypes";
import * as Colors from "../../../configs/colors";

export const TypeClassName: Record<Type, string> = {
  Normal: "normal",
  WithDot: "with-dot",
  WithClose: "with-close",
  IconLeft: "icon-left",
};

interface IColorConfig {
  textColor: string;
  backgroundColor: string;
}

export const sizeClassName: Record<Size, string> = {
  Small: "small",
  Medium: "medium",
  Large: "large",
};

export const ThemeConfig: Record<Theme, IColorConfig> = {
  GrayNeutral: {
    textColor: Colors.neutral[90],
    backgroundColor: Colors.neutral[10],
  },
  ValantineRed: {
    textColor: Colors.valentineRed[140],
    backgroundColor: Colors.valentineRed[10],
  },
  TexasYellow: {
    textColor: Colors.texasYellow[140],
    backgroundColor: Colors.texasYellow[10],
  },
  EmeraldGreen: {
    textColor: Colors.emeraldGreen[140],
    backgroundColor: Colors.emeraldGreen[10],
  },
  RoyalBlue: {
    textColor: Colors.royalBlue[140],
    backgroundColor: Colors.royalBlue[10],
  },
  DarkLavender: {
    textColor: Colors.darkLavender[140],
    backgroundColor: Colors.darkLavender[10],
  },
  StorybookOrange: {
    textColor: Colors.storybookOrange[140],
    backgroundColor: Colors.storybookOrange[10],
  },
  StorybookBlue: {
    textColor: Colors.storybookBlue[120],
    backgroundColor: Colors.storybookBlue[10],
  },
};
