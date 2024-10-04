import React, { ReactElement, useEffect } from "react";
import "./styles.scss";
import { Type, Position, Theme } from "./propTypes";
import { Close20, IconType } from "../../../icons";

export interface IMudraSnackBarProps {
  open: boolean;
  position?: Position; //By default RightTop
  className?: string;
  autoClose?: boolean; // By default true
  duration?: number; //By default 3000 (its in ms)
  type?: Type; //By Default Generic
  onClose: () => void;
  message: string | ReactElement;
  multiple?: boolean; //By Default false
  crossIcon?: boolean; //By default false
  action?: ReactElement; // By default false
  theme?: Theme; //By default Dark
  icon?: IconType;
}

const defaultProps = {
  position: Position.RightTop,
  autoClose: true,
  duration: 3000,
  type: Type.Generic,
  multiple: false,
  crossIcon: false,
  theme: Theme.Dark,
};

function computeClassName(props: IMudraSnackBarProps): string {
  const {
    className,
    position = defaultProps.position,
    type = defaultProps.type,
    theme = defaultProps.theme,
  } = props;
  const classNames: string[] = ["mudra-snackBar"];
  classNames.push(`position-${position.toLowerCase()}`);
  classNames.push(`type-${type.toLowerCase()}`);
  classNames.push(`theme-${theme.toLowerCase()}`);
  if (!props.open) classNames.push("snackbar-hidden");
  if (className) classNames.push(className);
  return classNames.join(" ");
}

// eslint-disable-next-line react/display-name
const MudraSnackBar: React.FunctionComponent<IMudraSnackBarProps> = (props) => {
  const {
    open,
    position = defaultProps.position,
    className,
    autoClose = defaultProps.autoClose,
    duration = defaultProps.duration,
    type = defaultProps.type,
    onClose,
    message,
    multiple = defaultProps.multiple,
    crossIcon = defaultProps.crossIcon,
    action,
    icon: Icon,
    theme = defaultProps.theme,
  } = props;

  useEffect(() => {
    if (!autoClose) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const computedClassName: string = React.useMemo<string>(() => {
    return computeClassName(props);
  }, [className, position, type, multiple, crossIcon, theme, open]);

  const handleClose = () => {
    onClose();
  };

  const getIconColor = () => {
    switch (type) {
      case Type.Generic:
        return theme === Theme.Dark ? "white" : "#2C4584";
      case Type.Error:
        return theme === Theme.Dark ? "white" : "#8D3431";
      case Type.Warning:
        return theme === Theme.Dark ? "#664925" : "#996E37";
      case Type.Success:
        return theme === Theme.Dark ? "white" : "#277742";
    }
  };

  return (
    <div className={computedClassName} data-testid="mudra_snackBar">
      {Icon && (
        <div className="mudra-snackBar-icon">
          <Icon data-testid="mudra_snackBar_icon" />
        </div>
      )}
      <div className="mudra-snackBar-message">{message}</div>
      {crossIcon && (
        <div
          className="mudra-snackBar-cross"
          onClick={handleClose}
          data-testid="mudra_snackBar_close_icon"
        >
          <Close20
            color={getIconColor()}
            className="mudra-snackBar-crossIcon"
          />
        </div>
      )}
      {action && action}
    </div>
  );
};

export default MudraSnackBar;
