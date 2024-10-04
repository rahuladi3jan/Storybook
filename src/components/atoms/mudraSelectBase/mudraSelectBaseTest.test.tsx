import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import MudraSelectBase from "./mudraSelectBase";

const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
describe("mudra-select-base", () => {
  it("test:1 for select base", () => {
    render(<MudraSelectBase>{testText}</MudraSelectBase>);
    // test 1: check select base
    const selectBase = screen.getByTestId("mudra_select_base");
    expect(selectBase.className.includes("select-base-container")).toBe(true);
    expect(selectBase.textContent?.includes(testText)).not.toBe(true);
  });
  it("test:2 for select base placeholder", () => {
    render(
      <MudraSelectBase placeHolder="Select Option">{testText}</MudraSelectBase>
    );
    // test 2: check select base input value
    const selectBaseInput = screen.getByTestId(
      "mudra_select_base_input"
    ) as HTMLDivElement;
    expect(selectBaseInput.className.includes("select-base-input")).toBe(true);
    expect(selectBaseInput.textContent).toBe("Select Option");
  });
  it("test:3 for select base input", () => {
    render(<MudraSelectBase>{testText}</MudraSelectBase>);
    // test 3: check select base
    const selectBase = screen.getByTestId("mudra_select_base");
    expect(selectBase.className.includes("select-base-container")).toBe(true);
    expect(selectBase.textContent?.includes(testText)).not.toBe(true);
    // test 3: check select base input
    const selectBaseInput = screen.getByTestId("mudra_select_base_input");
    expect(selectBaseInput.className.includes("select-base-input")).toBe(true);
    expect(selectBaseInput.textContent?.includes(testText)).not.toBe(true);
    // test 3: check select base input icon
    expect(
      within(selectBaseInput).getByTestId("mudra_select_base_chevron_down")
    ).not.toBeNull();
    fireEvent.click(selectBaseInput);
    expect(
      within(selectBaseInput).getByTestId("mudra_select_base_chevron_up")
    ).not.toBeNull();
    fireEvent.click(selectBaseInput);
    expect(
      within(selectBaseInput).getByTestId("mudra_select_base_chevron_down")
    ).not.toBeNull();
  });
  it("test:4 for select base", () => {
    render(
      <MudraSelectBase className="custom-class-name">
        {testText}
      </MudraSelectBase>
    );
    // test 4: check custom select class
    const selectBase = screen.getByTestId("mudra_select_base");
    expect(selectBase.className.includes("select-base-container")).toBe(true);
    expect(selectBase.className.includes("custom-class-name")).toBe(true);
    expect(selectBase.textContent?.includes(testText)).not.toBe(true);
  });
  it("test:5 for select base value", () => {
    render(
      <MudraSelectBase selectedValue={{ value: "test", label: "Test" }}>
        {testText}
      </MudraSelectBase>
    );
    // test 5: check select base input value
    const selectBaseInput = screen.getByTestId(
      "mudra_select_base_input"
    ) as HTMLDivElement;
    expect(selectBaseInput.className.includes("select-base-input")).toBe(true);
    const selectBaseInputValue = screen.getByTestId(
      "mudra_select_base_input-value"
    ) as HTMLDivElement;
    expect(selectBaseInputValue.textContent).toBe("Test");
  });

  it("test:6 for multi select base", () => {
    render(
      <MudraSelectBase isMulti selectedValue={[]}>
        {testText}
      </MudraSelectBase>
    );
    // test 6: check select base input value
    const selectBaseInput = screen.getByTestId(
      "mudra_select_base_input"
    ) as HTMLDivElement;
    // console.log(selectBaseInput);
    expect(selectBaseInput.className.includes("select-base-input")).toBe(true);
    expect(selectBaseInput.textContent).toBe("");
    fireEvent.click(selectBaseInput);
    fireEvent.click(document);
  });

  it("test:7 for multi select value", () => {
    render(<MudraSelectBase selectedValue={[]}>{testText}</MudraSelectBase>);
    // test 6: check select base input value
    const selectBaseInput = screen.getByTestId(
      "mudra_select_base_input"
    ) as HTMLDivElement;
    // console.log(selectBaseInput);
    expect(selectBaseInput.className.includes("select-base-input")).toBe(true);
    expect(selectBaseInput.textContent).toBe("");
  });
});
