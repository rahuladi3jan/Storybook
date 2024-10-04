import React from "react";
import { Type, Theme, Size } from "./PropTypes";
import { sizeClassName, TypeClassName, ThemeConfig } from "./configuration";
import "./styles.scss";
import { Close, IconType } from "../../../icons";

export interface IMudraBadgeProps {
  label: string;
  type?: Type;
  icon?: IconType;
  theme?: Theme;
  size?: Size;
  className?: string;
  onCloseIconClick?: () => void;
}

// eslint-disable-next-line react/display-name
const MudraBadge = React.forwardRef<HTMLDivElement, IMudraBadgeProps>(
  (props, ref) => {
    const {
      icon: Icon = React.Fragment,
      label,
      type = defaultProps.type,
      theme,
      size,
      onCloseIconClick,
    } = props;
    const computedClassName: string = React.useMemo<string>(() => {
      return computeClassName(props);
    }, [type, size]);
    const computedStyle: React.CSSProperties =
      React.useMemo<React.CSSProperties>(() => {
        return computeStyles(theme);
      }, [theme]);
    return (
      <div
        ref={ref}
        className={computedClassName}
        style={computedStyle}
        data-testid="mudra_badge"
      >
        {isLeftAlignedIconVisible(type) && (
          <Icon
            fill={computedStyle.color}
            className="icon"
            data-testid="mudra_badge_left_icon"
          />
        )}
        <span
          className="dot"
          style={{
            backgroundColor: computedStyle.color,
          }}
        />
        {label}
        {isCloseIconVisible(type) && (
          <Close
            className="close-icon"
            fill={computedStyle.color}
            onClick={onCloseIconClick}
            data-testid="mudra_badge_close_icon"
          />
        )}
      </div>
    );
  }
);

function isCloseIconVisible(type: Type) {
  return type === Type.WithClose;
}

function isLeftAlignedIconVisible(type: Type) {
  return type === Type.IconLeft;
}

function computeClassName(props: IMudraBadgeProps): string {
  const {
    type = defaultProps.type,
    size = defaultProps.size,
    className,
  } = props;
  const classNames: string[] = ["mudra-badge"];
  if (className) classNames.push(className);
  classNames.push(`size-${sizeClassName[size]}`);
  classNames.push(TypeClassName[type]);
  return classNames.join(" ");
}

function computeStyles(theme: Theme = defaultProps.theme): React.CSSProperties {
  const themeConfig = ThemeConfig[theme];
  const style: React.CSSProperties = {
    backgroundColor: themeConfig.backgroundColor,
    color: themeConfig.textColor,
  };
  return style;
}

const defaultProps = {
  type: Type.Normal,
  theme: Theme.GrayNeutral,
  size: Size.Medium,
};

export default MudraBadge;
