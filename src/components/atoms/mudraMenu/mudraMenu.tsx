import React, { useMemo } from "react";
import { IMudraMenu } from "./types";
import "./styles.scss";
const MudraMenu: React.FunctionComponent<IMudraMenu> = ({
  children,
  className,
  parentRef,
  style,
}) => {
  const computedClassName: string = useMemo<string>(
    () => `mudra-menu ${className ? className : ""} `.trim(),
    [className]
  );
  const parentDom = useMemo(
    () => (parentRef?.current as HTMLElement)?.getBoundingClientRect(),
    [parentRef]
  );
  const computedStyle: React.CSSProperties =
    useMemo<React.CSSProperties>(() => {
      return Object.assign({ width: parentDom?.width }, style);
    }, [parentDom, style]);
  return (
    <div
      className={computedClassName}
      data-testid="mudra_menu"
      id="mudra-menu"
      style={computedStyle}
    >
      {children}
    </div>
  );
};
export default MudraMenu;
