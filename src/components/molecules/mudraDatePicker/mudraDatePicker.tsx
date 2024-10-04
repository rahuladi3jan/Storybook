import React, { useCallback, useRef, useState } from "react";
import { invalidDate } from "./constants";
import {
  getMonthCalendarData,
  getObjectFromDate,
  isDateFormatValid,
  getDate,
  isValidDate,
  isValidRangeOfDates,
} from "./utils";
import "./styles.scss";
import MudraDatePickerMonths from "./mudraDatePickerMonths";
import MudraDatePickerHeader from "./mudraDatePickerHeader";

interface Props {
  onClose?: () => void;
  selectedDate?: string;
  singleDateSelector?: boolean;
  handleSelectDate?: (dateSelected: string) => void;
  prevValuesDisabled?: boolean;
  nextValuesDisabled?: boolean;
  noOfMonths?: number;
  closeOnSelect?: boolean;
}

const MudraDatePicker = (props: Props) => {
  const {
    onClose,
    selectedDate,
    singleDateSelector,
    noOfMonths = 6,
    handleSelectDate,
    prevValuesDisabled = false,
    nextValuesDisabled = false,
    closeOnSelect,
  } = props;

  const scrollableAreaRef = useRef<any>(null);
  const { selectedStartDate, selectedEndDate }: any = (() => {
    let startDate: string | null = null,
      endDate: string | null = null;
    if (selectedDate) {
      if (!singleDateSelector) {
        const date = selectedDate.split("-");
        if (
          date[1] &&
          isDateFormatValid(date[0]) &&
          isDateFormatValid(date[1])
        ) {
          startDate = getDate(date[0]);
          endDate = getDate(date[1]);
          if (
            !isValidDate(startDate) ||
            !isValidDate(endDate) ||
            !isValidRangeOfDates(startDate, endDate)
          )
            return invalidDate;
        }
      } else {
        const date = selectedDate.split("-");
        if (isDateFormatValid(date[0])) {
          startDate = getDate(date[0]);
        }
      }
    }
    return {
      selectedStartDate: startDate,
      selectedEndDate: endDate,
    };
  })();

  const currentDate = getObjectFromDate();
  const [startDate, setStartDate] = useState<any>(
    selectedStartDate ? getObjectFromDate(selectedStartDate) : null
  );
  const [endDate, setEndDate] = useState<any>(
    selectedEndDate ? getObjectFromDate(selectedEndDate) : null
  );

  const monthsData: any = useCallback(
    () =>
      getMonthCalendarData(
        currentDate?.year,
        currentDate?.month,
        noOfMonths,
        prevValuesDisabled,
        nextValuesDisabled
      ),
    []
  )();

  const handleSelectDateAndClose = (selectedDate: string) => {
    if (handleSelectDate) handleSelectDate(selectedDate);
    if (closeOnSelect && onClose) onClose();
  };

  return (
    <div className={"wrapper"}>
      <div className={"content"} ref={scrollableAreaRef}>
        <MudraDatePickerHeader
          onClose={onClose}
          startDate={startDate}
          endDate={endDate}
        />
        <MudraDatePickerMonths
          selectedStartDate={selectedStartDate}
          closeOnSelect={closeOnSelect}
          singleDateSelector={singleDateSelector}
          prevValuesDisabled={prevValuesDisabled}
          nextValuesDisabled={nextValuesDisabled}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          monthsData={monthsData}
          handleSelectDateAndClose={handleSelectDateAndClose}
          scrollableAreaRef={scrollableAreaRef}
        />
      </div>
    </div>
  );
};

export default MudraDatePicker;
