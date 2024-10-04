import React from "react";
import { Meta } from "@storybook/react";

import MudraTypography from "./mudraTypography";
import { Sizes } from "./types";

export default {
  component: MudraTypography,
  title: "Atoms/Mudra Typography",
  parameters: {
    componentSubtitle: "Storybook Mudra Typography",
    docs: {
      description: {
        component:
          "MudraTypography enables the incorporation of every conceivable text variant from your Figma design using props exclusively. Each prop is equipped with value suggestions, streamlining the customization process.",
      },
    },
  },
} as Meta;

export const ATextNunito = () => {
  const sizes: Sizes[] = [
    10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 88, 96,
  ];
  return (
    <div>
      <MudraTypography
        size={40}
        textColor="storybookOrange100"
        underline
        weight="extraBold"
      >
        Nunito Regular Typography
      </MudraTypography>
      {/* regular typography with all text size */}
      {sizes.map((size) => {
        return (
          <MudraTypography key={size} size={size}>
            Nunito - regular - {size}
          </MudraTypography>
        );
      })}

      <MudraTypography
        size={40}
        textColor="storybookOrange100"
        underline
        weight="extraBold"
      >
        Nunito Bold Typography
      </MudraTypography>
      {/* bold typography with all text size */}
      {sizes.map((size) => {
        return (
          <MudraTypography key={size} size={size} weight="bold">
            Nunito - bold - {size}
          </MudraTypography>
        );
      })}

      <MudraTypography
        size={40}
        textColor="storybookOrange100"
        underline
        weight="extraBold"
      >
        Nunito Extra Bold Typography
      </MudraTypography>
      {/* extraBold typography with all text size */}
      {sizes.map((size) => {
        return (
          <MudraTypography key={size} size={size} weight="extraBold">
            Nunito - extraBold - {size}
          </MudraTypography>
        );
      })}
    </div>
  );
};

export const BVariants = () => {
  return (
    <div>
      <MudraTypography size={20} textColor="storybookBlue120" weight="extraBold">
        Storybook blue 120 - text size 20 - extra bold
      </MudraTypography>
      <MudraTypography size={24} textColor="storybookOrange140" weight="bold">
        Storybook orange 140 - text size 24 - bold
      </MudraTypography>
      <MudraTypography size={28} textColor="royalBlue60">
        Royal blue 60 - text size 28 - regular
      </MudraTypography>
    </div>
  );
};

export const CCapitalize = () => (
  <MudraTypography capitalize>Capitalize</MudraTypography>
);

export const DUnderline = () => (
  <MudraTypography underline>Underline</MudraTypography>
);

export const EEllipsis = () => (
  <MudraTypography ellipsis>
    Ellipsis Text Ellipsis TextEllipsis Text Ellipsis Text Ellipsis Text
    Ellipsis Text Ellipsis Text Ellipsis Text Ellipsis Text Ellipsis Text
    Ellipsis Text Ellipsis Text Ellipsis Text
  </MudraTypography>
);

export const FLineThrough = () => (
  <MudraTypography lineThrough>Line Through</MudraTypography>
);

// Define the order of your stories
ATextNunito.storyName = "TextNunito";
BVariants.storyName = "Variants";
CCapitalize.storyName = "Capitalize";
DUnderline.storyName = "Underline";
EEllipsis.storyName = "Ellipsis";
FLineThrough.storyName = "LineThrough";
