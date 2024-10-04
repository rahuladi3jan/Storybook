import React from "react";
import "./styles.scss";
import { storybookWhite } from "../../../configs/colors";

export interface IMudraContainerProps {
  backgroundColor?: string;
}

const MudraContainer = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<IMudraContainerProps>
>((props, ref) => {
  const { backgroundColor = storybookWhite[100] } = props;

  return (
    <div className="mudraContainer" ref={ref} style={{ backgroundColor }}>
      {props.children}
    </div>
  );
});

MudraContainer.displayName = "MudraContainer";
export default MudraContainer;
