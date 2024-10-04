import { daysNames, monthNames } from "./types";

export const daysName = [
  daysNames.SUNDAY,
  daysNames.MONDAY,
  daysNames.TUESDAY,
  daysNames.WEDNESDAY,
  daysNames.THURSDAY,
  daysNames.FRIDAY,
  daysNames.SATURDAY,
];

export const monthByIndex: any = {
  0: monthNames.JANUARY,
  1: monthNames.FEBRURARY,
  2: monthNames.MARCH,
  3: monthNames.APRIL,
  4: monthNames.MAY,
  5: monthNames.JUNE,
  6: monthNames.JULY,
  7: monthNames.AUGUST,
  8: monthNames.SEPTEMBER,
  9: monthNames.OCTOBER,
  10: monthNames.NOVEMBER,
  11: monthNames.DECEMBER,
};

export const invalidDate = {
  selectedStartDate: null,
  selectedEndDate: null,
};

export const dateRegExp =
  /^(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/\d{4}$/;
