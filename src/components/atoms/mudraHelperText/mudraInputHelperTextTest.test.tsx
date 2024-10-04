import React from "react";
import { render, screen } from "@testing-library/react";
import MudraInputHelperText from "./mudraInputHelperText";
const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
describe("mudra-input-helper-text", () => {
  it("test:1 for input helper text", () => {
    render(
      <MudraInputHelperText className="test-class">
        {testText}
      </MudraInputHelperText>
    );
    // test 1: check helper class
    const inputLabel = screen.getByTestId("mudra_input_helper_text");
    expect(inputLabel.className.includes("test-class")).toBe(true);
    expect(inputLabel.className.includes("mudra-input-helper-text")).toBe(true);
    expect(inputLabel.textContent?.includes(testText)).toBe(true);
  });
  it("test:2 for input helper text error", () => {
    render(
      <MudraInputHelperText error={true}>{testText}</MudraInputHelperText>
    );
    // test 2: check helper class
    const inputLabel = screen.getByTestId("mudra_input_helper_text");
    expect(inputLabel.className.includes("mudra-input-helper-text")).toBe(true);
    expect(inputLabel.className.includes("error")).toBe(true);

    expect(inputLabel.textContent?.includes(testText)).toBe(true);
  });
  it("test:3 for input helper text disabled", () => {
    render(
      <MudraInputHelperText disabled={true}>{testText}</MudraInputHelperText>
    );
    // test 2: check helper class
    const inputLabel = screen.getByTestId("mudra_input_helper_text");
    expect(inputLabel.className.includes("mudra-input-helper-text")).toBe(true);
    expect(inputLabel.className.includes("disabled")).toBe(true);

    expect(inputLabel.textContent?.includes(testText)).toBe(true);
  });
});
