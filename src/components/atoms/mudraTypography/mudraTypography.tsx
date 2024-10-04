import React from "react";

import { Typography } from "./styles";
import { MudraTypographyProps } from "./types";

function MudraTypography(props: MudraTypographyProps) {
  const { children } = props;

  return <Typography {...props}>{children}</Typography>;
}

MudraTypography.defaultProps = {
  weight: "regular",
  size: 16,
  textColor: "neutral90",
  capitalize: false,
  underline: false,
  ellipsis: false,
  lineThrough: false,
};

export default MudraTypography;
