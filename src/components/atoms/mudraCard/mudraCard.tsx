import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export interface IMudraCardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const MudraCard: React.FunctionComponent<IMudraCardProps> = (props) => {
  const computedClassName: string = React.useMemo<string>(
    () => (props.className ? `${props.className} mudra-card` : "mudra-card"),
    [props.className]
  );
  return (
    <div
      style={props.style}
      className={computedClassName}
      data-testid="mudra_card"
    >
      {props.children}
    </div>
  );
};

MudraCard.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

export default MudraCard;
