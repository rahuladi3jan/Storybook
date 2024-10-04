import React from "react";
import {
  render,
  screen,
  fireEvent,
  within,
  getByTestId,
  queryByTestId,
} from "@testing-library/react";
import MudraSelect from "./mudraSelect";
import "@testing-library/jest-dom";

const options = [
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "red", label: "Red" },
  { value: "yellow", label: "Yellow" },
  { value: "orange", label: "Orange" },
  { value: "pink", label: "Pink" },
  { value: "purple", label: "Purple" },
  { value: "grey", label: "Grey" },
];
describe("mudra-select-integration", () => {
  it("test:1 for basic select", () => {
    render(<MudraSelect options={options} />);
    // test 1: check select
    const select = screen.getByTestId("mudra_select");
    expect(select.className.includes("mudra-select")).toBe(true);
    // test 1: check select base
    expect(within(select).getByTestId("mudra_select_base")).not.toBeNull();
    // test 1: check menu
    expect(screen.queryByTestId("mudra_menu")).toBeNull();
    const selectBaseInput = screen.getByTestId("mudra_select_base_input");
    // test 1: check onClick select base
    fireEvent.click(selectBaseInput);
    expect(screen.queryByTestId("mudra_menu")).not.toBeNull();
    // test 1: check options
    expect(screen.getByTestId("mudra_menu")?.children?.length).toBe(
      options.length
    );
  });
  it("test:2 for basic select functions", () => {
    const onSelectSpy = jest.fn();
    render(<MudraSelect options={options} onSelect={onSelectSpy} />);
    // test 2: check select
    const select = screen.getByTestId("mudra_select");
    expect(select.className.includes("mudra-select")).toBe(true);
    // test 2: check select base
    expect(within(select).getByTestId("mudra_select_base")).not.toBeNull();
    // test 2: check menu
    expect(screen.queryByTestId("mudra_menu")).toBeNull();
    const selectBaseInput = screen.getByTestId("mudra_select_base_input");
    // test 2: check onClick select base
    fireEvent.click(selectBaseInput);
    expect(screen.queryByTestId("mudra_menu")).not.toBeNull();
    // test 2: check options
    expect(screen.getByTestId("mudra_menu")?.children?.length).toBe(
      options.length
    );
    fireEvent.click(screen.getByTestId("mudra_menu")?.children[0]);
    // test 1: check onSelect to be called
    expect(onSelectSpy).toBeCalled();
  });

  it("test:3 for basic select select and deselect", () => {
    const onSelectSpy = jest.fn();
    render(
      <MudraSelect
        options={options}
        onSelect={onSelectSpy}
        className="test-class"
      />
    );
    // test 3: check select
    const select = screen.getByTestId("mudra_select");
    expect(select.className.includes("mudra-select")).toBe(true);
    expect(select.className.includes("test-class")).toBe(true);

    // test 3: check select base
    expect(within(select).getByTestId("mudra_select_base")).not.toBeNull();
    // test 3: check menu
    expect(screen.queryByTestId("mudra_menu")).toBeNull();
    const selectBaseInput = screen.getByTestId("mudra_select_base_input");
    // test 3: check onClick select base
    fireEvent.click(selectBaseInput);
    expect(screen.queryByTestId("mudra_menu")).not.toBeNull();
    // test 3: check options
    expect(screen.getByTestId("mudra_menu")?.children?.length).toBe(
      options.length
    );
    fireEvent.click(screen.getByTestId("mudra_menu")?.children[0]);
    // test 3: check onSelect to be called
    expect(onSelectSpy).toBeCalled();
    fireEvent.click(screen.getByTestId("mudra_menu")?.children[0]);
  });

  it("test:4 for select with no option", () => {
    render(<MudraSelect />);
    // test 3: check select
    const select = screen.getByTestId("mudra_select");
    expect(select.className.includes("mudra-select")).toBe(true);
    // test 3: check select base
    expect(within(select).getByTestId("mudra_select_base")).not.toBeNull();
  });

  it("test:5 Options not rendered for disabled field", () => {
    render(<MudraSelect disabled />);
    const select = screen.getByTestId("mudra_select");
    const selectBaseInput = getByTestId(select, "mudra_select_base_input");
    fireEvent.click(selectBaseInput);
    expect(queryByTestId(select, "mudra_menu")).not.toBeInTheDocument();
  });

  it("test:6 Options not rendered for read-only field", () => {
    render(<MudraSelect readOnly />);
    const select = screen.getByTestId("mudra_select");
    const selectBaseInput = getByTestId(select, "mudra_select_base_input");
    fireEvent.click(selectBaseInput);
    expect(queryByTestId(select, "mudra_menu")).not.toBeInTheDocument();
  });
});
