import React, { useEffect } from "react";
import "./styles.scss";
import { Close } from "../../../icons";

export interface IMudraModalProps {
  title?: string | React.ReactElement;
  open: boolean;
  className?: string;
  onClose: () => void;
  children?: React.ReactNode;
  animation?: boolean;
  width?: number;
  backgroundBlur?: boolean;
}

function computeClassName(props: IMudraModalProps): string {
  const { className, animation, backgroundBlur, open } = props;
  const classNames: string[] = ["mudra-modal"];
  open ? classNames.push("open-true") : classNames.push("open-false");
  if (animation) classNames.push(`animation-true`);
  if (backgroundBlur) classNames.push("background-blur");
  if (className) classNames.push(className);
  return classNames.join(" ");
}

// eslint-disable-next-line react/display-name
const MudraModal = React.forwardRef<HTMLDivElement, IMudraModalProps>(
  (props, ref) => {
    const {
      title,
      className,
      onClose,
      children,
      animation,
      width,
      backgroundBlur,
      open,
    } = props;

    useEffect(() => {
      const handleEscape = (e) => {
        if (e.key === "Escape") {
          handleClick();
        }
      };
      if (open) {
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
    }, [title, className, animation, open, width, backgroundBlur]);

    const handleClick = () => {
      onClose && onClose();
    };

    return (
      <div ref={ref} className={computedClassName} data-testid="mudra_modal">
        <div
          className="mudra-modal-main"
          style={{ width: `${width ? width : 424}px` }}
        >
          <div className="mudra-modal-header">
            <div className="mudra-modal-title">{title}</div>
            <div
              className="mudra-modal-cross"
              onClick={handleClick}
              data-testid="mudra_modal_close_icon"
            >
              <Close className="mudra-modal-cross-icon" />
            </div>
          </div>
          <div className="mudra-modal-body">{children}</div>
        </div>
      </div>
    );
  }
);

export default MudraModal;
