import React, { useMemo } from "react";
import { IMudraMenuItem } from "./types";
import "./styles.scss";
const MudraMenuItem: React.FunctionComponent<IMudraMenuItem> = ({
  children,
  className,
  onClick,
  isSelected,
  active,
}) => {
  const computedClassName: string = useMemo<string>(
    () =>
      `mudra-menu-item ${isSelected ? "selected" : ""} ${
        className ? className : ""
      }  ${active ? "active" : ""}
      } `.trim(),
    [className, isSelected, active]
  );
  return (
    <div
      id="mudra-menu-item"
      className={computedClassName}
      onClick={onClick}
      data-testid="mudra_menu_item"
    >
      {children}
    </div>
  );
};
export default MudraMenuItem;
