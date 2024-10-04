export interface IMudraDatePickerDate {
  month: number;
  date: number;
  year: number;
}

export interface IMudraDatePickerMonthsData {
  year: number;
  monthIndex: number;
  monthName: string;
  date: Array<number>;
}

export enum monthNames {
  JANUARY = "January",
  FEBRURARY = "February",
  MARCH = "March",
  APRIL = "April",
  MAY = "May",
  JUNE = "June",
  JULY = "July",
  AUGUST = "August",
  SEPTEMBER = "September",
  OCTOBER = "October",
  NOVEMBER = "November",
  DECEMBER = "December",
}

export enum daysNames {
  SUNDAY = "Sunday",
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
}
