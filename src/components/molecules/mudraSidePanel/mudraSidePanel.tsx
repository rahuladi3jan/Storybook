import React, { ReactElement, useEffect } from "react";
import "./styles.scss";
import { Close } from "../../../icons";
import { AnimationType } from "./propTypes";

export interface IMudraSidePanelProps {
  title?: string | ReactElement; // If useInternalHeader is true, then need to pass title.
  className?: string;
  onClick: (e: any) => void;
  children?: React.ReactNode;
  panelWidth?: string | number;
  open: boolean;
  animationType?: AnimationType;
  backgroundBlur?: boolean; // by default false
  useInternalHeader?: boolean; //by default false
  onOpen?: () => void; // Will be called just after opening of side panel.
}

function computeClassName(props: IMudraSidePanelProps): string {
  const { className, open, animationType, backgroundBlur } = props;
  const classNames: string[] = ["mudra-sidePanel-container"];
  if (className) classNames.push(className);
  open ? classNames.push("open-true") : classNames.push("open-false");
  animationType &&
    classNames.push(`animationFrom-${animationType.toLowerCase()}`);
  backgroundBlur && classNames.push("background-blur");
  return classNames.join(" ");
}

// eslint-disable-next-line react/display-name
const MudraSidePanel: React.FunctionComponent<IMudraSidePanelProps> = (
  props
) => {
  const {
    title,
    className,
    onClick,
    children,
    panelWidth,
    open,
    animationType,
    backgroundBlur,
    useInternalHeader = false,
    onOpen,
  } = props;

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClick(e);
      }
    };
    if (open) {
      onOpen && onOpen();
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.removeProperty("overflow");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const computedClassName: string = React.useMemo<string>(() => {
    return computeClassName(props);
  }, [title, className, panelWidth, open, animationType, backgroundBlur]);

  const handleClick = (e: any) => {
    onClick && onClick(e);
  };

  const getPanelWidth = (propWidth: string | number) => {
    let finalWidth = propWidth;
    if (typeof propWidth === "number") finalWidth = propWidth + "px";
    return finalWidth;
  };

  return (
    <div className={computedClassName} data-testid="mudra_sidePanel">
      <div
        className="mudra-sidePanel"
        style={{ width: `${panelWidth ? getPanelWidth(panelWidth) : "auto"}` }}
      >
        {useInternalHeader && (
          <div className="mudra-sidePanel-header">
            <div className="mudra-sidePanel-title">{title}</div>
            <div
              className="mudra-sidePanel-cross"
              onClick={handleClick}
              data-testid="mudra_sidePanel_close_icon"
            >
              <Close className="mudra-sidePanel-cross-icon" />
            </div>
          </div>
        )}
        <div className="mudra-sidePanel-body">{children}</div>
      </div>
    </div>
  );
};

export default MudraSidePanel;
