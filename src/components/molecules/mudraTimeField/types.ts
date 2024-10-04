export interface IMudraTimeFieldProps {
  value?: Date;
  onChange?: (value: Date) => void;
  defaultValue?: Date;
  timeFormat?: TimeFormat;
  label: string;
  readOnly?: boolean;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: string;
  className?: string;
}

export enum TimeFormat {
  HOURS_12 = "12HOURS",
  HOURS_24 = "24HOURS",
}

export enum Meridiem {
  AM = "am",
  PM = "pm",
}
