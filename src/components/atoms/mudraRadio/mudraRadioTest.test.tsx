import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MudraRadio from "./mudraRadio";
describe("mudra-radio", () => {
  it("test:1 for toggle radio", () => {
    render(<MudraRadio className="test-class" disabled />);
    // test 1: check radio class
    const radio = screen.getByTestId("mudra_radio");
    expect(radio.className.includes("mudra-radio")).toBe(true);
    expect(radio.className.includes("test-class")).toBe(true);
    expect(radio.className.includes("disabled")).toBe(true);
  });
  it("test:2 for radio click", () => {
    const clickSpy = jest.fn();
    render(<MudraRadio onChange={clickSpy} />);
    // test 2: check radio class
    const radio = screen.getByTestId("mudra_radio");
    expect(radio.className.includes("mudra-radio")).toBe(true);
    fireEvent.click(radio);
    expect(clickSpy).toBeCalled();
  });
});
