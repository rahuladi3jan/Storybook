import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MudraDropDown from "./mudraDropDown";
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
describe("mudra-dropdown-integration", () => {
  it("test:1 for basic dropdown", () => {
    render(<MudraDropDown options={options} />);
    // test 1: check dropdown
    const dropDown = screen.getByTestId("mudra_dropdown");
    expect(dropDown.className.includes("mudra-dropdown")).toBe(true);
    // test 1: check menu
    expect(screen.queryByTestId("mudra_menu")).toBeNull();
    const button = screen.getByRole("button");
    // test 1: check onClick dropdown base
    button.click();
    expect(screen.queryByTestId("mudra_menu")).not.toBeNull();
    // test 1: check options
    expect(screen.getByTestId("mudra_menu")?.children?.length).toBe(
      options.length
    );
  });
  it("test:2 for basic select functions", () => {
    const onSelectSpy = jest.fn();
    render(
      <MudraDropDown
        options={options}
        onSelect={onSelectSpy}
        value={{ value: "green", label: "Green" }}
      />
    );
    // test 2: check dropdown
    const dropDown = screen.getByTestId("mudra_dropdown");
    expect(dropDown.className.includes("mudra-dropdown")).toBe(true);
    // test 2: check menu
    expect(screen.queryByTestId("mudra_menu")).toBeNull();
    const button = screen.getByRole("button");

    // test 2: check onClick select base
    button.click();
    expect(screen.queryByTestId("mudra_menu")).not.toBeNull();
    // test 2: check options
    expect(screen.getByTestId("mudra_menu")?.children?.length).toBe(
      options.length
    );
    fireEvent.click(screen.getByTestId("mudra_menu")?.children[0]);
    // test 2: check onSelect to be called
    expect(onSelectSpy).toBeCalled();
  });
  it("test:3 for basic select with no option", () => {
    render(<MudraDropDown className="test-class" />);
    // test 3: check dropdown
    const dropDown = screen.getByTestId("mudra_dropdown");
    expect(dropDown.className.includes("mudra-dropdown")).toBe(true);
    expect(dropDown.className.includes("test-class")).toBe(true);
  });
});
