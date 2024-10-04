import React from "react";
import { Type, Size, Status } from "./propTypes";
import { Contact } from "../../../icons";
import "./styles.scss";

export interface IMudraAvatarProps {
  type?: Type;
  size?: Size;
  status?: Status;
  name?: string;
  imageUrl?: string;
  className?: string;
}

// eslint-disable-next-line react/display-name
const MudraAvatar = React.forwardRef<HTMLDivElement, IMudraAvatarProps>(
  (props, ref) => {
    const {
      className,
      type = defaultProps.type,
      size = defaultProps.size,
      status,
      name = "",
      imageUrl,
    } = props;
    const computedClassName: string = React.useMemo<string>(() => {
      return computeClassName(props);
    }, [className, type, size, status]);
    return (
      <div ref={ref} className={computedClassName} data-testid="mudra_avatar">
        <img src={imageUrl} className="photo" />
        <label className="name">{name.charAt(0)}</label>
        <Contact className="placeholder-icon" />
        <div className="status" />
      </div>
    );
  }
);

function computeClassName(props: IMudraAvatarProps): string {
  const {
    className,
    type = defaultProps.type,
    size = defaultProps.size,
    status,
  } = props;
  const classNames: string[] = ["mudra-avatar"];
  classNames.push(`type-${type.toLowerCase()}`);
  classNames.push(`size-${size.toLowerCase()}`);
  if (className) classNames.push(className);
  if (status) classNames.push(`status-${status.toLowerCase()}`);
  return classNames.join(" ");
}

const defaultProps = {
  type: Type.Text,
  size: Size.Medium,
};

export default MudraAvatar;
