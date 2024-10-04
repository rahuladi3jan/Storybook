import { IMudraTimeFieldProps, Meridiem, TimeFormat } from "./types";
import "./styles.scss";
import React from "react";
import MeridiemSelector from "./meridiemSelector";
import moment from "moment";

const HOURS_24_MAX = 23;
const HOURS_24_MIN = 0;
const HOURS_12_MAX = 12;
const HOURS_12_MIN = 1;
const MINUTES_MAX = 59;
const MINUTES_MIN = 0;
const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const MINUS = "-";

const MudraTimeField: React.FunctionComponent<IMudraTimeFieldProps> = (
  props
) => {
  const {
    label,
    timeFormat,
    defaultValue,
    onChange,
    value,
    className,
    disabled,
    readOnly,
    errorMessage,
    required,
  } = props;
  const [hours, setHours] = React.useState<string>("00");
  const [minutes, setMinutes] = React.useState<string>("00");
  const [meridiem, setMeridiem] = React.useState<Meridiem>(Meridiem.AM);
  const [isControlled, setControllability] = React.useState<boolean>(false);
  const hoursRef = React.useRef<HTMLInputElement>(null);
  const minutesRef = React.useRef<HTMLInputElement>(null);
  const meridiemSelectorRef = React.useRef<HTMLDivElement>(null);

  const hoursControlId = React.useMemo(() => {
    return `mudraHours-${Math.floor(Math.random() * 10 ** 6)}`;
  }, []);

  const computedClassName = React.useMemo(() => {
    const classNamesList: string[] = [];
    if (className) classNamesList.push(className);
    classNamesList.push("mudraTimeFieldWrapper");
    if (disabled) classNamesList.push("disabled");
    if (readOnly) classNamesList.push("readOnly");
    if (errorMessage) classNamesList.push("error");
    if (required) classNamesList.push("required");
    if (!(hours || minutes)) classNamesList.push("empty");
    return classNamesList.join(" ");
  }, [className, disabled, readOnly, required, errorMessage, hours, minutes]);

  const onHoursChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(ev.target.value);
    if (
      timeFormat == TimeFormat.HOURS_12 &&
      !(value >= HOURS_12_MIN && value <= HOURS_12_MAX)
    )
      value = getLastDigit(value);
    else if (
      timeFormat == TimeFormat.HOURS_24 &&
      !(value >= HOURS_24_MIN && value <= HOURS_24_MAX)
    )
      value = getLastDigit(value);
    const date = getDate(value, Number(minutes), meridiem, timeFormat);
    setDate(date);
  };

  const onKeyDownForHoursField = (
    ev: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (ev.key == ARROW_UP || ev.key == ARROW_DOWN || ev.key == MINUS) {
      let value = Number((ev as any).target.value);
      if (ev.key == ARROW_UP) value += 1;
      else if (ev.key == ARROW_DOWN) value -= 1;
      if (timeFormat == TimeFormat.HOURS_12) {
        if (value > HOURS_12_MAX) value = HOURS_12_MIN;
        else if (value < HOURS_12_MIN) value = HOURS_12_MAX;
      } else if (timeFormat == TimeFormat.HOURS_24) {
        if (value > HOURS_24_MAX) value = HOURS_24_MIN;
        else if (value < HOURS_12_MIN) value = HOURS_24_MAX;
      }
      const date = getDate(value, Number(minutes), meridiem, timeFormat);
      setDate(date);
      ev.preventDefault();
    }
  };

  const onMinutesChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(ev.target.value);
    if (!(value >= MINUTES_MIN && value <= MINUTES_MAX))
      value = getLastDigit(value);
    const date = getDate(Number(hours), value, meridiem, timeFormat);
    setDate(date);
  };

  const onKeyDownForMinutesField = (
    ev: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (ev.key == ARROW_UP || ev.key == ARROW_DOWN || ev.key == MINUS) {
      let value = Number((ev as any).target.value);
      if (ev.key == ARROW_UP) value += 1;
      else if (ev.key == ARROW_DOWN) value -= 1;
      if (value > MINUTES_MAX) value = MINUTES_MIN;
      else if (value < MINUTES_MIN) value = MINUTES_MAX;
      const date = getDate(Number(hours), value, meridiem, timeFormat);
      setDate(date);
      ev.preventDefault();
    }
  };

  const setDate = (date: Date) => {
    if (!isControlled) {
      setHours(getHoursFromDate(date, timeFormat));
      setMinutes(getMinutesFromDate(date));
      setMeridiem(getMeridiemFromDate(date));
    }
    if (typeof onChange === "function") onChange(date);
  };

  const onMeridiemChange = (value: Meridiem) => {
    const date = getDate(Number(hours), Number(minutes), value, timeFormat);
    setDate(date);
  };

  const onWrapperClicked = (ev: React.MouseEvent) => {
    const isMinutesControlClicked =
      minutesRef.current?.contains(ev.target as any) ?? false;
    const isMeridiemControlClicked =
      meridiemSelectorRef.current?.contains(ev.target as any) ?? false;
    if (!(isMinutesControlClicked || isMeridiemControlClicked))
      hoursRef.current?.focus();
  };

  React.useEffect(() => {
    let isControllable: boolean;
    let defaultValueForField: Date | undefined;
    if (value !== undefined && value !== null) {
      isControllable = true;
      defaultValueForField = value;
    } else {
      isControllable = false;
      defaultValueForField = defaultValue;
    }
    setControllability(isControllable);
    setHours(getHoursFromDate(defaultValueForField, timeFormat));
    setMinutes(getMinutesFromDate(defaultValueForField));
    setMeridiem(getMeridiemFromDate(defaultValueForField));
  }, []);

  React.useEffect(() => {
    if (isControlled) {
      setHours(getHoursFromDate(value, timeFormat));
      setMinutes(getMinutesFromDate(value));
      setMeridiem(getMeridiemFromDate(value));
    }
  }, [value?.getTime(), timeFormat]);

  return (
    <div className={computedClassName} data-testid="mudra-time-field">
      <label className="mudraTimeFieldLabel" htmlFor={hoursControlId}>
        {label}
      </label>
      <div className="controlsWrapper" onClick={onWrapperClicked}>
        <div className="timeWrapper">
          <input
            type="number"
            onChange={onHoursChange}
            onKeyDown={onKeyDownForHoursField}
            value={hours}
            inputMode="numeric"
            className="hoursInput"
            placeholder="hh"
            id={hoursControlId}
            ref={hoursRef}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            autoFocus
            name="hours"
          />
          <span className="separator">{":"}</span>
          <input
            type="number"
            onChange={onMinutesChange}
            onKeyDown={onKeyDownForMinutesField}
            value={minutes}
            inputMode="numeric"
            className="minutesInput"
            placeholder="mm"
            ref={minutesRef}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            name="minutes"
          />
        </div>
        {timeFormat === TimeFormat.HOURS_12 ? (
          <MeridiemSelector
            value={meridiem}
            ref={meridiemSelectorRef}
            onChange={onMeridiemChange}
            disabled={disabled}
            readOnly={readOnly}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="errorMessage">{errorMessage}</div>
    </div>
  );
};

export function getHoursFromDate(
  date?: Date,
  timeFormat: TimeFormat = TimeFormat.HOURS_24
): string {
  if (date) {
    if (timeFormat === TimeFormat.HOURS_12) return moment(date).format("hh");
    else return moment(date).format("HH");
  }
  return "";
}

export function getMinutesFromDate(date?: Date): string {
  if (date) return moment(date).format("mm");
  return "";
}

export function getMeridiemFromDate(date?: Date): Meridiem {
  if (date) {
    return moment(date).format("a") as Meridiem;
  }
  return Meridiem.AM;
}

export function getDate(
  hours: number,
  minutes: number,
  meridiem?: Meridiem,
  timeFormat: TimeFormat = TimeFormat.HOURS_24
): Date {
  if (timeFormat === TimeFormat.HOURS_12)
    return moment(`${hours}:${minutes} ${meridiem}`, "h:m a").toDate();
  else return moment(`${hours}:${minutes}`, "H:m").toDate();
}

export function getLastDigit(value: number) {
  return value % 10;
}

MudraTimeField.defaultProps = {
  disabled: false,
  readOnly: false,
  required: false,
  timeFormat: TimeFormat.HOURS_24,
};

export default MudraTimeField;
