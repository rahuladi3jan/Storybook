import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MudraTextArea from "./mudraTextArea";
describe("mudra-text-area", () => {
  it("test:1 for text-area integration", () => {
    render(
      <MudraTextArea
        label="test"
        defaultValue="Initial Value"
        hint={true}
        hintText="Hint text"
      />
    );
    // test 1: check text area class
    const textAreaContainer = screen.getByTestId("mudra_text_area");
    expect(textAreaContainer).toBeTruthy();
    // test 1: check label
    const inputLabel = screen.getByTestId("mudra_input_label");
    expect(inputLabel.className.includes("mudra-input-label")).toBe(true);
    expect(inputLabel.textContent?.includes("test")).toBe(true);
    // test 1: check textarea
    const textAreaBase = screen.getByTestId("mudra_textarea_base");
    expect(textAreaBase.className.includes("mudra-textarea-base")).toBe(true);
    const textArea = screen.getByTestId(
      "mudra_textarea_base"
    ) as HTMLTextAreaElement;
    expect(textArea).toBeTruthy();
    expect(textArea.value).toBe("Initial Value");
    fireEvent.change(textArea, { target: { value: "new value" } });
    expect(textArea.value).toBe("new value");
    // test 1: check helper class
    const inputHelperText = screen.getByTestId("mudra_input_helper_text");
    expect(inputHelperText.className.includes("mudra-input-helper-text")).toBe(
      true
    );
    expect(inputHelperText.textContent?.includes("Hint text")).toBe(true);
  });
});
