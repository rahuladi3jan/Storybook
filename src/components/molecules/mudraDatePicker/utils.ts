import { monthByIndex, dateRegExp } from "./constants";
import { IMudraDatePickerDate, IMudraDatePickerMonthsData } from "./types";

export const getDaysArr = (month: any, year: any) => {
  return [
    ...new Array(
      new Date(year.toString(), (month + 1).toString(), 0).getDate()
    ),
  ].map((...args) => args[1] + 1);
};

const getYearsArray = (
  year: number,
  prevValuesDisabled: boolean,
  nextValueDisbaled: boolean,
  noOFYears: number
) => {
  const yearsDataRequired: Array<number> = [year];

  for (let i = 1; i <= noOFYears; i++) {
    if (!prevValuesDisabled) {
      yearsDataRequired.unshift(year - i);
    }
    if (!nextValueDisbaled) {
      yearsDataRequired.push(year + i);
    }
  }
  return yearsDataRequired;
};

const getMonthsWithIndex = () => {
  return Object.entries(monthByIndex);
};

const getYearData = (
  yearsDataRequired: Array<number>,
  year: number,
  noOFYears: number,
  monthValue: number,
  prevValuesDisabled: boolean,
  nextValueDisbaled: boolean
) => {
  return yearsDataRequired.map((curryear: number) => {
    return getMonthsWithIndex().map((monthData: Array<any>) => {
      const monthIndex = Number(monthData[0]);
      const monthName = monthData[1];
      if (year - curryear === noOFYears && monthValue > monthIndex) return null;
      if (curryear - year === noOFYears && monthValue < monthIndex) return null;
      if (curryear === year && monthValue > monthIndex && prevValuesDisabled)
        return null;
      if (curryear === year && monthValue < monthIndex && nextValueDisbaled)
        return null;
      return {
        monthIndex: monthIndex,
        monthName: monthName,
        date: getDaysArr(monthIndex, curryear),
        year: curryear,
      };
    });
  });
};

const getRequiredResult = (
  result: any,
  numberYears,
  prevValuesDisabled,
  nextValueDisbaled
) => {
  const finalResult = [].concat(...result).filter((item) => item);
  if (numberYears % 12) {
    if (!prevValuesDisabled) finalResult.splice(0, 12 - (numberYears % 12));
    if (!nextValueDisbaled)
      finalResult.length = finalResult.length - (12 - (numberYears % 12));
  }
  return finalResult;
};

export const getMonthCalendarData = (
  year: number,
  monthValue: number,
  numberYears,
  prevValuesDisabled,
  nextValueDisbaled
) => {
  numberYears = Math.min(numberYears < 0 ? 6 : Math.floor(numberYears), 360);
  const noOFYears =
    numberYears >= 12
      ? Math.floor(numberYears / 12) + (numberYears % 12 ? 1 : 0)
      : 1;
  let result: any = [];
  const yearsDataRequired: any = getYearsArray(
    year,
    prevValuesDisabled,
    nextValueDisbaled,
    noOFYears
  );

  result = getYearData(
    yearsDataRequired,
    year,
    noOFYears,
    monthValue,
    prevValuesDisabled,
    nextValueDisbaled
  );

  return getRequiredResult(
    result,
    numberYears,
    prevValuesDisabled,
    nextValueDisbaled
  );
};

export const appendZeroBeforeSingleDigit = (value: any): string => {
  if (parseInt(value, 10) < 10) {
    return `0${value}`;
  }
  return `${value}`;
};

export const getCurrentDate = ({
  datestr,
  month,
  date,
  year,
}: {
  datestr?: string;
  month?: number;
  date?: number;
  year?: number;
}) => {
  if (year && month !== undefined && date) {
    return new Date(year, month, date);
  }
  if (datestr) {
    return new Date(datestr);
  }
  return new Date();
};

export const getExcludedDaysFromMonth = (item: IMudraDatePickerMonthsData) =>
  new Array(
    getCurrentDate({
      year: Number(item.year),
      month: Number(item.monthIndex),
      date: 1,
    }).getDay()
  ).fill(
    getCurrentDate({
      year: Number(item.year),
      month: Number(item.monthIndex),
      date: 1,
    }).getDay()
  );

export const getDateClass = (
  item: IMudraDatePickerMonthsData,
  dateValue: number,
  startDate: IMudraDatePickerDate | null,
  endDate: IMudraDatePickerDate | null,
  prevValuesDisabled: boolean,
  nextValuesDisabled: boolean
) => {
  const selectedStartDate = getCurrentDate({
    year: item.year,
    month: item.monthIndex,
    date: dateValue,
  });

  const currentStartDate = getCurrentDate({
    year: startDate?.year,
    month: startDate?.month,
    date: startDate?.date,
  });

  const currentEndDate = getCurrentDate({
    year: endDate?.year,
    month: endDate?.month,
    date: endDate?.date,
  });

  const newDate = getCurrentDate({});

  return `${"date"}
    ${
      startDate &&
      selectedStartDate > currentStartDate &&
      endDate &&
      selectedStartDate < currentEndDate &&
      "dateRange"
    } ${selectedStartDate < newDate && prevValuesDisabled && "disabledDate"}
    ${selectedStartDate > newDate && nextValuesDisabled && "disabledDate"}`;
};

export const getObjectFromDate = (incomingDate: string | null = null) => {
  let date = getCurrentDate({});
  if (incomingDate) {
    date = getCurrentDate({ datestr: incomingDate });
  }

  return {
    month: date.getMonth(),
    date: date.getDate(),
    year: date.getFullYear(),
  };
};

export const shortMonthName = (monthname: string) => {
  return monthname ? monthname.toUpperCase().slice(0, 3) : "";
};

export const isDateFormatValid = (date: string) => {
  return dateRegExp.test(date);
};

export const getDate = (date: string) => {
  const dateParts = date.split("/");
  return dateParts[1] + "/" + dateParts[0] + "/" + dateParts[2];
};

export const isValidDate = (date: string) => {
  return (
    getCurrentDate({ datestr: date }).getTime() ===
    getCurrentDate({ datestr: date }).getTime()
  );
};

export const isValidRangeOfDates = (startDate: string, endDate: string) => {
  return (
    getCurrentDate({ datestr: startDate }) <
    getCurrentDate({ datestr: endDate })
  );
};
