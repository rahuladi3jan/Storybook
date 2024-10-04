import React, { useEffect, useRef } from "react";
import { daysName } from "./constants";
import {
  getCurrentDate,
  getExcludedDaysFromMonth,
  getDateClass,
  getObjectFromDate,
  appendZeroBeforeSingleDigit,
} from "./utils";
import "./styles.scss";
import { IMudraDatePickerDate, IMudraDatePickerMonthsData } from "./types";

interface Props {
  selectedStartDate: string;
  singleDateSelector?: boolean;
  prevValuesDisabled: boolean;
  nextValuesDisabled: boolean;
  closeOnSelect?: boolean;
  startDate: IMudraDatePickerDate | null;
  endDate: IMudraDatePickerDate | null;
  setStartDate: (startdate: IMudraDatePickerDate | null) => void;
  setEndDate: (enddate: IMudraDatePickerDate | null) => void;
  monthsData: IMudraDatePickerMonthsData[];
  handleSelectDateAndClose: (date: string) => void;
  scrollableAreaRef: any;
}

const MudraDatePicker = (props: Props) => {
  const {
    selectedStartDate,
    prevValuesDisabled = false,
    nextValuesDisabled = false,
    startDate,
    endDate,
    monthsData,
    handleSelectDateAndClose,
    setStartDate,
    setEndDate,
    singleDateSelector,
    scrollableAreaRef,
  } = props;
  const defaultDateref = useRef<any>(null);

  useEffect(() => {
    if (defaultDateref.current) {
      scrollableAreaRef.current.scrollTop =
        defaultDateref.current.offsetTop - 140;
    }
  }, [defaultDateref]);

  const getDateType = (
    testId,
    key,
    wrapperClass,
    classname,
    testIdWrapper = "",
    handleClick?
  ) => {
    return (
      <div
        key={key}
        className={wrapperClass}
        onClick={() => {
          if (handleClick) handleClick();
        }}
        data-testid={testIdWrapper}
      >
        <div data-testid={testId} className={classname}>
          {key}
        </div>
      </div>
    );
  };

  const getReferenceOfSelectedDate = (item: IMudraDatePickerMonthsData) => {
    return !selectedStartDate
      ? item.monthIndex === getCurrentDate({}).getMonth() &&
        item.year === getCurrentDate({}).getFullYear()
        ? defaultDateref
        : null
      : startDate &&
        startDate.month === item.monthIndex &&
        startDate.year === item.year
      ? defaultDateref
      : null;
  };

  const renderDaysName = () =>
    daysName.map((day: string) => (
      <div className="date" key={day}>
        {day.slice(0, 2)}
      </div>
    ));

  const renderMonthsName = (item: IMudraDatePickerMonthsData) =>
    getExcludedDaysFromMonth(item).map((item) => {
      return <div key={item.monthName} />;
    });

  const renderSingleMonthData = (item: IMudraDatePickerMonthsData) =>
    item?.date?.map((dateValue: number) => {
      if (
        startDate?.date === dateValue &&
        item?.year === startDate?.year &&
        startDate?.month === item.monthIndex
      )
        return getDateType(
          "start-date",
          dateValue,
          `${"selectedDateWrapper"} ${endDate && "startDateWrapper"} `,
          `${"startDate"}`
        );
      else if (
        endDate?.date === dateValue &&
        item?.year === endDate?.year &&
        endDate?.month === item.monthIndex
      )
        return getDateType(
          "end-date",
          dateValue,
          `${"selectedDateWrapper"} ${"endDateWrapper"}`,
          `${"startDate"} `
        );
      else if (
        item.monthIndex === getCurrentDate({}).getMonth() &&
        dateValue === getCurrentDate({}).getDate() &&
        getCurrentDate({}).getFullYear() === item.year
      )
        return getDateType(
          "currentDate",
          dateValue,
          `${"selectedDateWrapper"}`,
          `${"startDate"} ${"currentDate"} `,
          "",
          () => selectDate({ item, dateValue })
        );
      else
        return getDateType(
          "date",
          dateValue,
          getDateClass(
            item,
            dateValue,
            startDate,
            endDate,
            prevValuesDisabled,
            nextValuesDisabled
          ),
          "",
          "dateItem",
          () => handleDateClick(item, dateValue)
        );
    });

  const selectDate = (date: {
    item: IMudraDatePickerMonthsData;
    dateValue: number;
  }) => {
    if (singleDateSelector) {
      setStartDate(
        getObjectFromDate(
          `${date.item.monthIndex + 1}/${date.dateValue}/${date.item.year}`
        )
      );
      handleSelectDateAndClose(
        `${appendZeroBeforeSingleDigit(
          date.dateValue
        )}/${appendZeroBeforeSingleDigit(date.item.monthIndex + 1)}/${
          date.item.year
        }`
      );
    } else {
      if (startDate && endDate) {
        setStartDate(
          getObjectFromDate(
            `${date.item.monthIndex + 1}/${date.dateValue}/${date.item.year}`
          )
        );
        setEndDate(null);
      } else if (!startDate) {
        setStartDate(
          getObjectFromDate(
            `${date.item.monthIndex + 1}/${date.dateValue}/${date.item.year}`
          )
        );
      } else {
        if (
          startDate &&
          getCurrentDate({
            year: date.item.year,
            month: date.item.monthIndex + 1,
            date: date.dateValue,
          }) <
            getCurrentDate({
              year: startDate.year,
              month: startDate.month + 1,
              date: startDate.date,
            })
        ) {
          setStartDate(
            getObjectFromDate(
              `${date.item.monthIndex + 1}/${date.dateValue}/${date.item.year}`
            )
          );
          setEndDate(startDate);

          handleSelectDateAndClose(
            `${appendZeroBeforeSingleDigit(
              date.dateValue
            )}/${appendZeroBeforeSingleDigit(date.item.monthIndex + 1)}/${
              date.item.year
            }-${appendZeroBeforeSingleDigit(
              startDate.date
            )}/${appendZeroBeforeSingleDigit(startDate.month + 1)}/${
              startDate.year
            }`
          );
        } else {
          setEndDate(
            getObjectFromDate(
              `${date.item.monthIndex + 1}/${date.dateValue}/${date.item.year}`
            )
          );
          handleSelectDateAndClose(
            `${appendZeroBeforeSingleDigit(
              startDate.date
            )}/${appendZeroBeforeSingleDigit(startDate.month + 1)}/${
              startDate.year
            }-${appendZeroBeforeSingleDigit(
              date.dateValue
            )}/${appendZeroBeforeSingleDigit(date.item.monthIndex + 1)}/${
              date.item.year
            }`
          );
        }
      }
    }
  };

  const handleDateClick = (
    item: IMudraDatePickerMonthsData,
    dateValue: number
  ) => {
    if (
      !(
        (getCurrentDate({
          year: item.year,
          month: item.monthIndex,
          date: dateValue,
        }) < getCurrentDate({}) &&
          prevValuesDisabled) ||
        (getCurrentDate({
          year: item.year,
          month: item.monthIndex,
          date: dateValue,
        }) > getCurrentDate({}) &&
          nextValuesDisabled)
      )
    )
      selectDate({ item, dateValue });
  };

  const renderMonthsData = () => {
    return monthsData.map((item: IMudraDatePickerMonthsData) => {
      return (
        <div
          ref={getReferenceOfSelectedDate(item)}
          key={item.monthIndex + item.monthName + item.year}
          className={"datePickerItem"}
        >
          <div className={"month"}>
            {item.monthName} {item.year}
          </div>
          <div className={"daysWrapper"}>{renderDaysName()}</div>
          <div className={"dateMonth"}>
            {renderMonthsName(item)}
            {renderSingleMonthData(item)}
          </div>
        </div>
      );
    });
  };

  return <div>{renderMonthsData()}</div>;
};

export default MudraDatePicker;
