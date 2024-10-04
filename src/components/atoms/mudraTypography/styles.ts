import styled, { css } from "styled-components";
import { lightTheme } from "../../../styles/styledComponents/theme";
import { MudraTypographyProps } from "./types";

const { colors, lineHeight, sizes } = lightTheme;

const getColorValue = (textColor): string => {
  const [colorName, colorCode] = textColor
    .match(/([a-zA-Z]+)([0-9]+)/)!
    .slice(1);
  return colors[colorName][parseInt(colorCode)];
};

export const Typography = styled.span<MudraTypographyProps>`
  display: block;
  font-weight: 400;
  margin: 0;
  ${({
    textColor,
    size,
    weight,
    underline,
    capitalize,
    ellipsis,
    lineThrough,
  }) => css`
    color: ${getColorValue(textColor)};
    font-size: ${sizes[size]};
    line-height: ${lineHeight[size]};
    ${weight === "bold" &&
    css`
      font-weight: 700;
    `}
    ${weight === "extraBold" &&
    css`
      font-weight: 800;
    `}
    ${ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
    ${underline &&
    css`
      text-decoration: underline;
    `}
    ${capitalize &&
    css`
      text-transform: uppercase;
    `}
    ${lineThrough &&
    css`
      text-decoration: line-through;
    `}
  `}
`;
