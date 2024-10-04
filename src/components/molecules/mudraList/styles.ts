import styled, { css } from "styled-components";
import { IMudraListProps } from "./types";

export const UnorderedList = styled.ul<IMudraListProps>`
  ${({ listStyleType }) => css`
    list-style-type: ${listStyleType};
  `}
`;

export const OrderedList = styled.ol<IMudraListProps>`
  ${({ listStyleType }) => css`
    list-style-type: ${listStyleType};
  `}
`;
