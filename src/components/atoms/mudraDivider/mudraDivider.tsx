import React from "react";
import { IMudraDivider } from "./types";
import "./styles.scss";
const MudraDivider: React.FunctionComponent<IMudraDivider> = ({
  dashed,
  vertical,
  color,
}) => {
  return (
    <div
      data-testid="mudra_divider"
      style={{
        borderStyle: dashed ? "dashed" : "",
        borderColor: color ? color : "",
      }}
      className={`mudra-divider ${vertical ? "vertical" : ""}`}
    />
  );
};

export default MudraDivider;
