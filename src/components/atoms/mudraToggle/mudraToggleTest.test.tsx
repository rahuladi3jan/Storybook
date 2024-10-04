import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MudraToggle from "./mudraToggle";
describe("mudra-toggle", () => {
  it("test:1 for toggle basic", () => {
    render(<MudraToggle className="test-class" disabled />);
    // test 1: check toggle class
    const toggle = screen.getByTestId("mudra_toggle_root");
    expect(toggle.className.includes("mudra-toggle-root")).toBe(true);
    expect(toggle.className.includes("test-class")).toBe(true);
    expect(toggle.className.includes("disabled")).toBe(true);
  });
  it("test:2 for toggle click", () => {
    const clickSpy = jest.fn();
    render(<MudraToggle onClick={clickSpy} />);
    // test 2: check toggle class
    const toggle = screen.getByTestId("mudra_toggle_root");
    expect(toggle.className.includes("mudra-toggle-root")).toBe(true);
    expect(toggle.className.includes("mudra-toggle-root")).toBe(true);
    const input = screen.getByTestId("mudra_toggle_input");
    fireEvent.click(input);
    expect(clickSpy).toBeCalled();
  });
});
