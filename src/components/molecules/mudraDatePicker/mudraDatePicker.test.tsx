import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MudraDatePicker from "./mudraDatePicker";
import { getCurrentDate } from "./utils";

const dummyFunction = jest.fn();
window.HTMLElement.prototype.scrollIntoView = dummyFunction;

const today: any = getCurrentDate({});
const days = 86400000; //number of milliseconds in a day
const tenDaysAgo = new Date(today - 10 * days);
const fiveDaysAgo = new Date(today - 5 * days);
const invalidMultidateRange = `${fiveDaysAgo.getDate()}/${
  fiveDaysAgo.getMonth() + 1
}/${fiveDaysAgo.getFullYear()}-${tenDaysAgo.getDate()}/${
  tenDaysAgo.getMonth() + 1
}/${tenDaysAgo.getFullYear()}`;
export const singleDate = `${tenDaysAgo.getDate()}/${
  tenDaysAgo.getMonth() + 1
}/${tenDaysAgo.getFullYear()}`;
export const multidateRange = `${tenDaysAgo.getDate()}/${
  tenDaysAgo.getMonth() + 1
}/${tenDaysAgo.getFullYear()}-${fiveDaysAgo.getDate()}/${
  fiveDaysAgo.getMonth() + 1
}/${fiveDaysAgo.getFullYear()}`;
const todaysDate = `${today.getDate()}/${
  today.getMonth() + 1
}/${today.getFullYear()}`;

describe("mudra-datepicker", () => {
  it("test:1 for deafult selected Date", () => {
    render(
      <MudraDatePicker
        selectedDate={multidateRange}
        onClose={dummyFunction}
        handleSelectDate={dummyFunction}
      />
    );

    const closeButton = screen.getAllByTestId("closeBtn")[0];
    fireEvent.click(closeButton);

    const startDate = screen.getAllByTestId("start-date")[0];
    expect(startDate).toBeTruthy();

    const endDate = screen.getAllByTestId("end-date")[0];
    expect(endDate).toBeTruthy();
  });

  it("test:2 for deafult selected Date where end date is before start date : no start date will be selected", () => {
    render(
      <MudraDatePicker
        selectedDate={invalidMultidateRange}
        handleSelectDate={dummyFunction}
      />
    );

    const closeButton = screen.getAllByTestId("closeBtn")[0];
    fireEvent.click(closeButton);

    const startDate = screen.queryByTestId("start-date");
    expect(startDate).toBeNull();
  });

  it("test:3 for multiple selected Date and only for single Selector", () => {
    render(
      <MudraDatePicker
        selectedDate={multidateRange}
        singleDateSelector
        onClose={dummyFunction}
        handleSelectDate={dummyFunction}
        nextValuesDisabled
      />
    );

    const startDate = screen.getAllByTestId("start-date")[0];
    expect(startDate).toBeTruthy();

    const endDate = screen.queryByTestId("end-date");
    expect(endDate).toBeNull();
  });

  it("test:4 for multiple selected Date and previous values disabled", () => {
    render(
      <MudraDatePicker
        noOfMonths={26}
        selectedDate={singleDate}
        onClose={dummyFunction}
        handleSelectDate={dummyFunction}
        prevValuesDisabled
      />
    );

    const startDate = screen.queryByTestId("start-date");
    expect(startDate).toBeNull();

    const endDate = screen.queryByTestId("end-date");
    expect(endDate).toBeNull();
  });

  it("test:5 for single selected Date and previous values disabled for single date selector", () => {
    render(
      <MudraDatePicker
        noOfMonths={24}
        selectedDate={todaysDate}
        onClose={dummyFunction}
        handleSelectDate={dummyFunction}
        singleDateSelector
        prevValuesDisabled
      />
    );

    //not in format so no values will be selected(YYYY / MM / DD)
    const startDate = screen.getAllByTestId("start-date")[0];
    expect(startDate).toBeTruthy();

    const endDate = screen.queryByTestId("end-date");
    expect(endDate).toBeNull();
  });

  it("test:6 for single selected Date and single date selector and date format is invalid", () => {
    render(
      <MudraDatePicker
        noOfMonths={6}
        selectedDate="xyz"
        onClose={dummyFunction}
        handleSelectDate={dummyFunction}
        singleDateSelector
      />
    );

    // not a valid date
    const startDate = screen.queryByTestId("start-date");
    expect(startDate).toBeNull();

    const endDate = screen.queryByTestId("end-date");
    expect(endDate).toBeNull();
  });

  it("test:7 for selected Date and previous values disabled for multi date selector and date format is invalid", () => {
    render(
      <MudraDatePicker
        noOfMonths={3}
        selectedDate="xyz-xyz"
        onClose={dummyFunction}
        handleSelectDate={dummyFunction}
      />
    );

    // not a valid date
    const startDate = screen.queryByTestId("start-date");
    expect(startDate).toBeNull();

    const endDate = screen.queryByTestId("end-date");
    expect(endDate).toBeNull();
  });

  it("test:8 for selected Date and for multi date selector and date format is invalid and noOfYears is in negative", () => {
    render(
      <MudraDatePicker
        noOfMonths={-1}
        selectedDate="xyz"
        onClose={dummyFunction}
        handleSelectDate={dummyFunction}
        closeOnSelect
      />
    );

    // not a valid date
    const startDateslected = screen.queryByTestId("start-date");
    expect(startDateslected).toBeNull();

    const endDateSelected = screen.queryByTestId("end-date");
    expect(endDateSelected).toBeNull();

    // choose start date
    const startDate = screen.getAllByTestId("dateItem")[0];
    expect(startDate).toBeTruthy();
    fireEvent.click(startDate);

    // choose end date
    const endDate = screen.getAllByTestId("dateItem")[10];
    expect(endDate).toBeTruthy();
    fireEvent.click(endDate);

    // again choose another start date reset end date
    const resetStartDate = screen.getAllByTestId("dateItem")[11];
    expect(resetStartDate).toBeTruthy();
    fireEvent.click(resetStartDate);

    // again choose another end date before start date it will become start date
    const endDateBeforeStartDate = screen.getAllByTestId("dateItem")[0];
    expect(endDateBeforeStartDate).toBeTruthy();
    fireEvent.click(endDateBeforeStartDate);

    // choose current date
    const currentDate = screen.getAllByTestId("currentDate")[0];
    expect(currentDate).toBeTruthy();
    fireEvent.click(currentDate);
  });

  it("test:9 for default selected Date (current) and for single date selector and next values are disabled", () => {
    render(
      <MudraDatePicker
        noOfMonths={1}
        singleDateSelector
        onClose={dummyFunction}
        handleSelectDate={dummyFunction}
        nextValuesDisabled
      />
    );

    // // choose start date
    const selectDate = screen.getAllByTestId("dateItem")[0];
    expect(selectDate).toBeTruthy();
    fireEvent.click(selectDate);

    // choose disabled date
    const header = screen.getAllByTestId("dateItem")[50];
    expect(header).toBeTruthy();
    fireEvent.click(header);
  });
});
