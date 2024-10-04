import "@testing-library/jest-dom";
import {
  fireEvent,
  getByLabelText,
  getByPlaceholderText,
  getByTestId,
  getByText,
  queryAllByRole,
  queryByTestId,
  render,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Meridiem, MudraTimeField, TimeFormat } from "./";
import {
  getDate,
  getHoursFromDate,
  getMeridiemFromDate,
  getMinutesFromDate,
} from "./mudraTimeField";

const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const MINUS = "-";

describe("test1: Render contents", () => {
  it("test:1 Label rendered", () => {
    const label = "Custom label";
    const { container } = render(<MudraTimeField label={label} />);
    const labelContainer = getByLabelText(container, label);
    expect(labelContainer).toBeInTheDocument();
  });
  it("test:2 input rendered with default content for controlled", () => {
    const label = "Custom label";
    const value = new Date();
    const { container } = render(
      <MudraTimeField label={label} value={value} />
    );
    const [hoursControl, minutesControl] = queryAllByRole(
      container,
      "spinbutton"
    ) as HTMLInputElement[];
    expect(hoursControl).toBeInTheDocument();
    expect(hoursControl.value).toBe(
      value.getHours().toString().padStart(2, "0")
    );
    expect(minutesControl.value).toBe(
      value.getMinutes().toString().padStart(2, "0")
    );
  });
  it("test:3 input rendered with default content for uncontrolled", () => {
    const label = "Custom label";
    const value = new Date();
    const { container } = render(
      <MudraTimeField label={label} defaultValue={value} />
    );
    const [hoursControl, minutesControl] = queryAllByRole(
      container,
      "spinbutton"
    ) as HTMLInputElement[];
    expect(hoursControl).toBeInTheDocument();
    expect(minutesControl).toBeInTheDocument();
    expect(hoursControl.value).toBe(
      value.getHours().toString().padStart(2, "0")
    );
    expect(minutesControl.value).toBe(
      value.getMinutes().toString().padStart(2, "0")
    );
  });
  it("test:4 Placeholder text rendered", () => {
    const label = "Custom label";
    const value = new Date();
    const { container } = render(
      <MudraTimeField label={label} defaultValue={value} />
    );
    const hoursControl = getByPlaceholderText(
      container,
      "hh"
    ) as HTMLInputElement;
    const minutesControl = getByPlaceholderText(
      container,
      "mm"
    ) as HTMLInputElement;
    expect(hoursControl).toBeInTheDocument();
    expect(minutesControl).toBeInTheDocument();
  });
  it("test:5 Meridiem selector rendered for 12 hours format", () => {
    const label = "Custom label";
    const { container } = render(
      <MudraTimeField label={label} timeFormat={TimeFormat.HOURS_12} />
    );
    expect(getByTestId(container, "mudra_select")).toBeInTheDocument();
  });
  it("test:6 Meridiem selector not rendered for 24 hours format", () => {
    const label = "Custom label";
    const { container } = render(
      <MudraTimeField label={label} timeFormat={TimeFormat.HOURS_24} />
    );
    expect(queryByTestId(container, "mudra_select")).not.toBeInTheDocument();
  });
  it("test:7 Error message rendered ", () => {
    const label = "Custom label";
    const errorMessage = "custom error message";
    const { container } = render(
      <MudraTimeField
        label={label}
        timeFormat={TimeFormat.HOURS_24}
        errorMessage={errorMessage}
      />
    );
    expect(getByText(container, errorMessage)).toBeInTheDocument();
  });
});

it("test:8 Callback triggered on changing the time", () => {
  const label = "Custom label";
  const callBackMock = jest.fn();
  const { container } = render(
    <MudraTimeField
      label={label}
      timeFormat={TimeFormat.HOURS_24}
      onChange={callBackMock}
    />
  );
  const [hoursControl, minutesControl] = queryAllByRole(
    container,
    "spinbutton"
  ) as HTMLInputElement[];
  fireEvent.change(hoursControl, { target: { value: "10" } });
  fireEvent.change(minutesControl, { target: { value: "20" } });
  expect(callBackMock).toBeCalledTimes(2);
  const date = callBackMock.mock.lastCall[0];
  expect(date.getHours().toString()).toBe("10");
  expect(date.getMinutes().toString()).toBe("20");
});

it("test:8 Hours value changes to last digit on entering max value for 24 hour format", () => {
  const label = "Custom label";
  const callBackMock = jest.fn();
  const { container } = render(
    <MudraTimeField
      label={label}
      timeFormat={TimeFormat.HOURS_24}
      onChange={callBackMock}
    />
  );
  const [hoursControl] = queryAllByRole(
    container,
    "spinbutton"
  ) as HTMLInputElement[];
  fireEvent.change(hoursControl, { target: { value: "25" } });
  const date = callBackMock.mock.lastCall[0];
  expect(date.getHours().toString().padStart(2, "0")).toBe("05");
});

it("test:9 Minutes value changes to min entering more than max ", () => {
  const label = "Custom label";
  const callBackMock = jest.fn();
  const { container } = render(
    <MudraTimeField
      label={label}
      timeFormat={TimeFormat.HOURS_24}
      onChange={callBackMock}
    />
  );
  const [, minutesControl] = queryAllByRole(
    container,
    "spinbutton"
  ) as HTMLInputElement[];
  fireEvent.change(minutesControl, { target: { value: "60" } });
  const date = callBackMock.mock.lastCall[0];
  expect(date.getMinutes().toString().padStart(2, "0")).toBe("00");
});

describe("Classname changed based on props", () => {
  it("test:9 Custom class name added to class list", () => {
    const label = "Custom label";
    const className = "CustomClass";
    const { container } = render(
      <MudraTimeField label={label} className={className} />
    );
    expect((container as any).firstChild?.classList).toContain(className);
  });
  it("test:10 disable name added to class list for disabled fields", () => {
    const label = "Custom label";
    const { container } = render(<MudraTimeField label={label} disabled />);
    expect((container as any).firstChild?.classList).toContain("disabled");
  });
  it("test:11 required name added to class list for disabled fields", () => {
    const label = "Custom label";
    const { container } = render(<MudraTimeField label={label} required />);
    expect((container as any).firstChild?.classList).toContain("required");
  });
  it("test:12 Read Only name added to class list for disabled fields", () => {
    const label = "Custom label";
    const { container } = render(<MudraTimeField label={label} readOnly />);
    expect((container as any).firstChild?.classList).toContain("readOnly");
  });
  it("test:13 error name added to class list when the control has error message", () => {
    const label = "Custom label";
    const { container } = render(
      <MudraTimeField label={label} errorMessage="custom message" />
    );
    expect((container as any).firstChild?.classList).toContain("error");
  });
});

it("test:13 Input change not allowed for disabled or readonly fields", () => {
  const label = "Custom label";
  const { container } = render(<MudraTimeField label={label} disabled />);
  const [hoursControl] = queryAllByRole(
    container,
    "spinbutton"
  ) as HTMLInputElement[];
  userEvent.click(hoursControl);
  userEvent.keyboard("09");
  expect(hoursControl.value).toBe("");
});

it("test:14 Input change not allowed for disabled or readonly fields", () => {
  const label = "Custom label";
  const { container } = render(<MudraTimeField label={label} disabled />);
  const [hoursControl] = queryAllByRole(
    container,
    "spinbutton"
  ) as HTMLInputElement[];
  userEvent.click(hoursControl);
  userEvent.keyboard("09");
  expect(hoursControl.value).toBe("");
});

describe("test hoursFromDate function", () => {
  it("test:15 Returns empty string if date is undefined", () => {
    const hours = getHoursFromDate();
    expect(hours).toBe("");
  });
  it("test:16 Validate the output with sample date", () => {
    let hours = getHoursFromDate(new Date("2023-04-27T18:42:05.252Z"));
    expect(hours).toBe("00");
    hours = getHoursFromDate(
      new Date("2023-04-27T18:42:05.252Z"),
      TimeFormat.HOURS_12
    );
    expect(hours).toBe("12");
  });
});

describe("test minutesFromDate function", () => {
  it("test:17 Returns empty string if date is undefined", () => {
    const hours = getMinutesFromDate();
    expect(hours).toBe("");
  });
  it("test:18 Validate the output with sample date", () => {
    const minutes = getMinutesFromDate(new Date("2023-04-27T18:42:05.252Z"));
    expect(minutes).toBe("12");
  });
});

describe("test getMeridiemFromDate function", () => {
  it("test:19 Returns am if date is undefined", () => {
    const meridiem = getMeridiemFromDate();
    expect(meridiem).toBe("am");
  });
  it("test:20 Validate the output with sample date", () => {
    let meridiem = getMeridiemFromDate(new Date("2023-04-27T18:42:05.252Z"));
    expect(meridiem).toBe("am");
    meridiem = getMeridiemFromDate(new Date("2023-04-27T17:42:05.252Z"));
    expect(meridiem).toBe("pm");
  });
});

describe("test getDate function", () => {
  it("test:21 test in 24 hours format", () => {
    const date = getDate(22, 50);
    expect(date.getHours()).toBe(22);
    expect(date.getMinutes()).toBe(50);
  });
  it("test:22 test in 12 hours format", () => {
    const date = getDate(9, 56, Meridiem.PM, TimeFormat.HOURS_12);
    expect(date.getHours()).toBe(21);
    expect(date.getMinutes()).toBe(56);
  });
});

describe("test hour value on arrow up clicked", () => {
  it("test:23 on Arrow up clicked the value increases by one if the value is between max and min", () => {
    const label = "Custom label";
    const callBackMock = jest.fn();
    const value = new Date("2023-05-15T11:24:38.987Z");
    const hours = value.getHours();
    const { container } = render(
      <MudraTimeField
        label={label}
        timeFormat={TimeFormat.HOURS_24}
        onChange={callBackMock}
        value={value}
      />
    );
    const [hoursControl] = queryAllByRole(
      container,
      "spinbutton"
    ) as HTMLInputElement[];
    fireEvent.focus(hoursControl);
    fireEvent.keyDown(hoursControl, { key: ARROW_UP });
    const date = callBackMock.mock.lastCall[0];
    expect(date.getHours()).toBe(hours + 1);
  });

  it("test:24 on Arrow up clicked the new value will be min if the existing value is max for 24 hours format", () => {
    const label = "Custom label";
    const callBackMock = jest.fn();
    const value = new Date("2023-05-15T11:24:38.987Z");
    value.setHours(23);
    const { container } = render(
      <MudraTimeField
        label={label}
        timeFormat={TimeFormat.HOURS_24}
        onChange={callBackMock}
        value={value}
      />
    );
    const [hoursControl] = queryAllByRole(
      container,
      "spinbutton"
    ) as HTMLInputElement[];
    fireEvent.focus(hoursControl);
    fireEvent.keyDown(hoursControl, { key: ARROW_UP });
    const date = callBackMock.mock.lastCall[0];
    expect(date.getHours()).toBe(0);
  });
});

describe("test hour value on arrow down clicked", () => {
  it("test:25 on Arrow down clicked the value decreases by one if the value is between max and min", () => {
    const label = "Custom label";
    const callBackMock = jest.fn();
    const value = new Date("2023-05-15T11:24:38.987Z");
    const hours = value.getHours();
    const { container } = render(
      <MudraTimeField
        label={label}
        timeFormat={TimeFormat.HOURS_24}
        onChange={callBackMock}
        value={value}
      />
    );
    const [hoursControl] = queryAllByRole(
      container,
      "spinbutton"
    ) as HTMLInputElement[];
    fireEvent.focus(hoursControl);
    fireEvent.keyDown(hoursControl, { key: ARROW_DOWN });
    const date = callBackMock.mock.lastCall[0];
    expect(date.getHours()).toBe(hours - 1);
  });

  it("test:26 on Arrow up clicked the new value will be max if the existing value is min for 24 hours format", () => {
    const label = "Custom label";
    const callBackMock = jest.fn();
    const value = new Date("2023-05-15T11:24:38.987Z");
    value.setHours(0);
    const { container } = render(
      <MudraTimeField
        label={label}
        timeFormat={TimeFormat.HOURS_24}
        onChange={callBackMock}
        value={value}
      />
    );
    const [hoursControl] = queryAllByRole(
      container,
      "spinbutton"
    ) as HTMLInputElement[];
    fireEvent.focus(hoursControl);
    fireEvent.keyDown(hoursControl, { key: ARROW_DOWN });
    const date = callBackMock.mock.lastCall[0];
    expect(date.getHours()).toBe(23);
  });
});

it("test:27 Hours value changes to last digit on entering max value for 12 hour format", () => {
  const label = "Custom label";
  const callBackMock = jest.fn();
  const { container } = render(
    <MudraTimeField
      label={label}
      timeFormat={TimeFormat.HOURS_12}
      onChange={callBackMock}
    />
  );
  const [hoursControl] = queryAllByRole(
    container,
    "spinbutton"
  ) as HTMLInputElement[];
  fireEvent.change(hoursControl, { target: { value: "13" } });
  const date = callBackMock.mock.lastCall[0];
  expect(date.getHours().toString().padStart(2, "0")).toBe("03");
});

it("test:28 Clicking on minus the value of the hours field doesn't change", () => {
  const label = "Custom label";
  const callBackMock = jest.fn();
  const value = new Date("2023-05-15T11:24:38.987Z");
  const { container } = render(
    <MudraTimeField
      label={label}
      timeFormat={TimeFormat.HOURS_12}
      onChange={callBackMock}
      defaultValue={value}
    />
  );
  const [hoursControl] = queryAllByRole(
    container,
    "spinbutton"
  ) as HTMLInputElement[];
  fireEvent.focus(hoursControl);
  fireEvent.keyDown(hoursControl, { key: MINUS });
  const date = callBackMock.mock.lastCall[0];
  expect(date.getHours()).toBe(value.getHours());
});

it("test:29 Clicking on minus the value of the minutes field doesn't change", () => {
  const label = "Custom label";
  const callBackMock = jest.fn();
  const value = new Date("2023-05-15T11:24:38.987Z");
  const { container } = render(
    <MudraTimeField
      label={label}
      timeFormat={TimeFormat.HOURS_12}
      onChange={callBackMock}
      defaultValue={value}
    />
  );
  const [, minutesControl] = queryAllByRole(
    container,
    "spinbutton"
  ) as HTMLInputElement[];
  fireEvent.focus(minutesControl);
  fireEvent.keyDown(minutesControl, { key: MINUS });
  const date = callBackMock.mock.lastCall[0];
  expect(date.getMinutes()).toBe(value.getMinutes());
});

it("test:30 On user type numeric value will update the hours field", () => {
  const label = "Custom label";
  const callBackMock = jest.fn();
  const { container } = render(
    <MudraTimeField
      label={label}
      timeFormat={TimeFormat.HOURS_12}
      onChange={callBackMock}
    />
  );
  const [hoursField] = queryAllByRole(
    container,
    "spinbutton"
  ) as HTMLInputElement[];
  userEvent.type(hoursField, "7");
  const date = callBackMock.mock.lastCall[0];
  expect(date.getHours()).toBe(7);
});

it("test:31 On user type numeric value will update the hours field", () => {
  const label = "Custom label";
  const callBackMock = jest.fn();
  const { container } = render(
    <MudraTimeField
      label={label}
      timeFormat={TimeFormat.HOURS_12}
      onChange={callBackMock}
    />
  );
  const [, minutesField] = queryAllByRole(
    container,
    "spinbutton"
  ) as HTMLInputElement[];
  userEvent.type(minutesField, "23");
  const date = callBackMock.mock.lastCall[0];
  expect(date.getMinutes()).toBe(23);
});

describe("test minutes value on arrow up clicked", () => {
  it("test:32 on Arrow up clicked the value increases by one if the value is between max and min", () => {
    const label = "Custom label";
    const callBackMock = jest.fn();
    const value = new Date("2023-05-15T11:24:38.987Z");
    const minutes = value.getMinutes();
    const { container } = render(
      <MudraTimeField
        label={label}
        timeFormat={TimeFormat.HOURS_24}
        onChange={callBackMock}
        value={value}
      />
    );
    const [, minutesControl] = queryAllByRole(
      container,
      "spinbutton"
    ) as HTMLInputElement[];
    fireEvent.focus(minutesControl);
    fireEvent.keyDown(minutesControl, { key: ARROW_UP });
    const date = callBackMock.mock.lastCall[0];
    expect(date.getMinutes()).toBe(minutes + 1);
  });

  it("test:33 on Arrow up clicked the new value will be min if the existing value is max", () => {
    const label = "Custom label";
    const callBackMock = jest.fn();
    const value = new Date("2023-05-15T11:24:38.987Z");
    value.setMinutes(59);
    const { container } = render(
      <MudraTimeField
        label={label}
        timeFormat={TimeFormat.HOURS_24}
        onChange={callBackMock}
        value={value}
      />
    );
    const [, minutesControl] = queryAllByRole(
      container,
      "spinbutton"
    ) as HTMLInputElement[];
    fireEvent.focus(minutesControl);
    fireEvent.keyDown(minutesControl, { key: ARROW_UP });
    const date = callBackMock.mock.lastCall[0];
    expect(date.getMinutes()).toBe(0);
  });
});

describe("test minutes value on arrow down clicked", () => {
  it("test:25 on Arrow down clicked the value decreases by one if the value is between max and min", () => {
    const label = "Custom label";
    const callBackMock = jest.fn();
    const value = new Date("2023-05-15T11:24:38.987Z");
    const minutes = value.getMinutes();
    const { container } = render(
      <MudraTimeField
        label={label}
        timeFormat={TimeFormat.HOURS_24}
        onChange={callBackMock}
        value={value}
      />
    );
    const [, minutesControl] = queryAllByRole(
      container,
      "spinbutton"
    ) as HTMLInputElement[];
    fireEvent.focus(minutesControl);
    fireEvent.keyDown(minutesControl, { key: ARROW_DOWN });
    const date = callBackMock.mock.lastCall[0];
    expect(date.getMinutes()).toBe(minutes - 1);
  });

  it("test:26 on Arrow up clicked the new value will be max if the existing value is min", () => {
    const label = "Custom label";
    const callBackMock = jest.fn();
    const value = new Date("2023-05-15T11:24:38.987Z");
    value.setMinutes(0);
    const { container } = render(
      <MudraTimeField
        label={label}
        timeFormat={TimeFormat.HOURS_24}
        onChange={callBackMock}
        value={value}
      />
    );
    const [, minutesControl] = queryAllByRole(
      container,
      "spinbutton"
    ) as HTMLInputElement[];
    fireEvent.focus(minutesControl);
    fireEvent.keyDown(minutesControl, { key: ARROW_DOWN });
    const date = callBackMock.mock.lastCall[0];
    expect(date.getMinutes()).toBe(59);
  });
});
