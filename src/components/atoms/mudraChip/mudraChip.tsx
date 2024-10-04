import React, { useMemo } from "react";
import { IMudraChip, DropDownSize } from "./types";
import "./styles.scss";
const MudraChip: React.FunctionComponent<IMudraChip> = ({
  text,
  className,
  size,
  icon: Icon,
  inActive,
  onIconClick,
  onClick,
  id = "mudraChipId",
}) => {
  const computedClassName: string = useMemo<string>(
    () =>
      `mudra-chip ${className ? className : ""} ${
        size === DropDownSize.large ? DropDownSize.large : ""
      } ${inActive ? "inactive" : ""}`.trim(),
    [className, size, inActive]
  );
  return (
    <div
      id={id}
      onClick={onClick}
      className={computedClassName}
      data-testid="mudra_chip"
    >
      <p className="chip-text" data-testid="mudra_chip_text">
        {text}
      </p>
      {Icon && (
        <Icon
          className="chip-icon"
          onClick={onIconClick}
          data-testid="mudra_chip_icon"
        />
      )}
    </div>
  );
};
export default MudraChip;
