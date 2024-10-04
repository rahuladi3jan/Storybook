import React from "react";
import "./styles.scss";
import { Variant, Position, Theme } from "./propTypes";
import { Close20 } from "../../../icons";

export interface IMudraMessageProps {
  show?: boolean; // default true
  position?: Position; //By default bottom
  className?: string;
  variant?: Variant; //By Default Generic
  onClose?: () => void; // if passed then only cross icon will be there
  children?: React.ReactNode;
  theme?: Theme; //By default Dark
}

const defaultProps = {
  position: Position.Bottom,
  variant: Variant.Generic,
  theme: Theme.Dark,
  show: true,
};

function computeClassName(props: IMudraMessageProps): string {
  const {
    className,
    position = defaultProps.position,
    variant = defaultProps.variant,
    theme = defaultProps.theme,
    show = defaultProps.show,
  } = props;
  const classNames: string[] = ["mudra-message"];
  classNames.push(`position-${position.toLowerCase()}`);
  classNames.push(`variant-${variant.toLowerCase()}`);
  classNames.push(`theme-${theme.toLowerCase()}`);
  classNames.push(`show-${show}`);
  className && classNames.push(className);
  return classNames.join(" ");
}

// eslint-disable-next-line react/display-name
const MudraMessage: React.FunctionComponent<IMudraMessageProps> = (props) => {
  const {
    className,
    children,
    onClose,
    show = defaultProps.show,
    position = defaultProps.position,
    variant = defaultProps.variant,
    theme = defaultProps.theme,
  } = props;

  const computedClassName: string = React.useMemo<string>(() => {
    return computeClassName(props);
  }, [className, position, variant, show, theme]);

  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <div className={computedClassName} data-testid="mudra_message">
      <div className="mudra-message-child">{children && children}</div>
      {onClose && (
        <div className="mudra-message-cross">
          <Close20
            data-testid="mudra_message_icon"
            onClick={handleClose}
            className="mudra-message-cross-icon"
          />
        </div>
      )}
    </div>
  );
};

export default MudraMessage;
