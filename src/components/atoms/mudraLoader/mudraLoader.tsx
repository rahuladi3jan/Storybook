import React from "react";
import { StorybookLogo } from "../../../icons";
import { IMudraLoader } from "./types";
import "./styles.scss";
const MudraLoader: React.FunctionComponent<IMudraLoader> = ({ size }) => {
  return (
    <div
      data-testid="mudra_loader"
      className={`mudra-loader ${size ? size : ""}`}
    >
      <StorybookLogo className={`mudra-loader-icon ${size ? size : ""}`} />
      <div
        className={`spinner ${size ? size : ""}`}
        data-testid="mudra_loader_spinner"
      />
    </div>
  );
};

export default MudraLoader;
