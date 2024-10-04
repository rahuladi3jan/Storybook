import React from "react";
import { monthByIndex } from "./constants";
import { IMudraDatePickerDate } from "./types";
import { shortMonthName } from "./utils";

interface Props {
  onClose?: () => void;
  startDate: IMudraDatePickerDate | null;
  endDate: IMudraDatePickerDate | null;
}

const MudraDatePicker = (props: Props) => {
  const { onClose, startDate, endDate } = props;

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <div className={"DatePickerHeader"}>
      <div className={"close"}>
        <div data-testid="closeBtn" onClick={handleClose}>
          X
        </div>
      </div>
      <div className={"displayDateWrapper"}>
        <div>Start Date</div>
        <div className={"end"}>End Date</div>
        <div>
          {!startDate && "From"}
          {startDate && shortMonthName(monthByIndex[startDate?.month])}{" "}
          {startDate?.date} {startDate?.year}
        </div>
        <div className={"end"}>
          {!endDate && "To"}{" "}
          {endDate && shortMonthName(monthByIndex[endDate?.month])}{" "}
          {endDate?.date} {endDate?.year}
        </div>
      </div>
    </div>
  );
};

export default MudraDatePicker;
