import React from "react";
import { render, screen } from "@testing-library/react";
import MudraInputLabel from "./mudraInputLabel";
const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
describe("mudra-input-label", () => {
  it("test:1 for input label", () => {
    render(
      <MudraInputLabel className="test-class">{testText}</MudraInputLabel>
    );
    // test 1: check label class
    const inputLabel = screen.getByTestId("mudra_input_label");
    expect(inputLabel.className.includes("mudra-input-label")).toBe(true);
    expect(inputLabel.className.includes("test-class")).toBe(true);
    expect(inputLabel.textContent?.includes(testText)).toBe(true);
  });
  it("test:2 for input label error", () => {
    render(<MudraInputLabel error={true}>{testText}</MudraInputLabel>);
    // test 2: check label class
    const inputLabel = screen.getByTestId("mudra_input_label");
    expect(inputLabel.className.includes("mudra-input-label")).toBe(true);
    expect(inputLabel.className.includes("error")).toBe(true);
    expect(inputLabel.textContent?.includes(testText)).toBe(true);
  });
  it("test:3 for input label disabled", () => {
    render(<MudraInputLabel disabled={true}>{testText}</MudraInputLabel>);
    // test 3: check label class
    const inputLabel = screen.getByTestId("mudra_input_label");
    expect(inputLabel.className.includes("mudra-input-label")).toBe(true);
    expect(inputLabel.className.includes("disabled")).toBe(true);
    expect(inputLabel.textContent?.includes(testText)).toBe(true);
  });
});
