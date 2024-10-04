import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MudraCheckbox from "./mudraCheckbox";
import { CheckedType } from "./propTypes";
import userEvent from "@testing-library/user-event";

describe("mudra-checkbox", () => {
  it("test:1 for checkbox basic/complete", () => {
    render(
      <MudraCheckbox
        checkedType={CheckedType.CompleteChecked}
        defaultChecked={false}
        disabled={false}
      />
    );

    const checkbox = screen.getByTestId("mudra_checkbox");

    // Test:1 for checkbox Existence
    expect(checkbox).not.toBeNull();

    // Test:1 for checkbox Classes
    expect(checkbox.className.includes("mudra-checkbox-wrapper")).toBe(true);

    // Check for input clicked and all
    const input = screen.getByTestId(
      "mudra_checkbox_input"
    ) as HTMLInputElement;

    expect(input.className.includes("mudra-checkbox")).toBe(true);
    expect(input.className.includes("complete-checked")).toBe(true);
    expect(input.nodeName).toBe("INPUT");
    userEvent.click(input); // svg checkbox will be rendered
    const icon = screen.getByTestId("mudra_checkbox_checkedIcon");
    expect(icon).not.toBeNull();
    userEvent.click(input); // svg checkbox won't exist
    expect(checkbox.innerHTML.includes("svg")).toBe(false);
  });

  it("test:2 for checkbox indeterminate", () => {
    render(
      <MudraCheckbox
        checkedType={CheckedType.IndeterminateChecked}
        defaultChecked={false}
        disabled={false}
      />
    );

    const checkbox = screen.getByTestId("mudra_checkbox");

    // Test:1 for checkbox Existence
    expect(checkbox).not.toBeNull();

    // Test:1 for checkbox Classes
    expect(checkbox.className.includes("mudra-checkbox-wrapper")).toBe(true);

    // Check for input clicked and all
    const input = screen.getByTestId(
      "mudra_checkbox_input"
    ) as HTMLInputElement;

    expect(input.className.includes("mudra-checkbox")).toBe(true);
    expect(input.className.includes("partial-checked")).toBe(true);
    expect(input.nodeName).toBe("INPUT");
    userEvent.click(input); // svg checkbox will be rendered
    const icon = screen.getByTestId("mudra_checkbox_partialCheckedIcon");
    expect(icon).not.toBeNull();
    userEvent.click(input); // svg checkbox won't exist
    expect(checkbox.innerHTML.includes("svg")).toBe(false);
  });

  it("test:3 for checkbox basic/complete disable", () => {
    render(
      <MudraCheckbox
        checkedType={CheckedType.CompleteChecked}
        defaultChecked={false}
        disabled={true}
      />
    );

    const checkbox = screen.getByTestId("mudra_checkbox");

    // Test:1 for checkbox Existence
    expect(checkbox).not.toBeNull();

    // Test:1 for checkbox Classes
    expect(checkbox.className.includes("mudra-checkbox-wrapper")).toBe(true);

    // Check for input clicked and all
    const input = screen.getByTestId(
      "mudra_checkbox_input"
    ) as HTMLInputElement;

    expect(input.className.includes("mudra-checkbox")).toBe(true);
    expect(input.className.includes("complete-checked")).toBe(true);
    expect(input.nodeName).toBe("INPUT");
    userEvent.click(input); // svg checkbox clicked but since its disable can't be rendered
    expect(checkbox.innerHTML.includes("svg")).toBe(false);
  });

  it("test:4 for checkbox indeterminate default checked", () => {
    render(
      <MudraCheckbox
        checkedType={CheckedType.IndeterminateChecked}
        defaultChecked={true}
        disabled={false}
      />
    );

    const checkbox = screen.getByTestId("mudra_checkbox");

    // Test:1 for checkbox Existence
    expect(checkbox).not.toBeNull();

    // Test:1 for checkbox Classes
    expect(checkbox.className.includes("mudra-checkbox-wrapper")).toBe(true);

    // Check for input clicked and all
    const input = screen.getByTestId(
      "mudra_checkbox_input"
    ) as HTMLInputElement;

    expect(input.className.includes("mudra-checkbox")).toBe(true);
    expect(input.className.includes("partial-checked")).toBe(true);
    expect(input.nodeName).toBe("INPUT");
    // icon already rendered since its by default clicked
    const icon = screen.getByTestId("mudra_checkbox_partialCheckedIcon");
    expect(icon).not.toBeNull();
    userEvent.click(input); // svg checkbox won't exist
    expect(checkbox.innerHTML.includes("svg")).toBe(false);
  });

  it("test:5 for checkbox basic/complete default checked and disabled", () => {
    render(
      <MudraCheckbox
        checkedType={CheckedType.CompleteChecked}
        defaultChecked={true}
        disabled={true}
      />
    );

    const checkbox = screen.getByTestId("mudra_checkbox");

    // Test:1 for checkbox Existence
    expect(checkbox).not.toBeNull();

    // Test:1 for checkbox Classes
    expect(checkbox.className.includes("mudra-checkbox-wrapper")).toBe(true);

    // Check for input clicked and all
    const input = screen.getByTestId(
      "mudra_checkbox_input"
    ) as HTMLInputElement;

    expect(input.className.includes("mudra-checkbox")).toBe(true);
    expect(input.className.includes("complete-checked")).toBe(true);
    expect(input.nodeName).toBe("INPUT");
    // icon already rendered since its by default clicked
    const icon = screen.getByTestId("mudra_checkbox_checkedIcon");
    expect(icon).not.toBeNull();
    userEvent.click(input); // input won't be clicked since it's disable so, svg won't be removed it will exist
    expect(checkbox.innerHTML.includes("svg")).toBe(true);
  });

  it("test:5 for onchange callback", () => {
    const onChangeSpy = jest.fn();
    render(
      <MudraCheckbox
        className="test-class"
        checked={false}
        onChangeCallback={onChangeSpy}
      />
    );

    const checkbox = screen.getByTestId("mudra_checkbox");

    // Test:1 for checkbox Existence
    expect(checkbox).not.toBeNull();

    // Test:1 for checkbox Classes
    expect(checkbox.className.includes("mudra-checkbox-wrapper")).toBe(true);

    // Check for input clicked and all
    const input = screen.getByTestId(
      "mudra_checkbox_input"
    ) as HTMLInputElement;

    expect(input.className.includes("mudra-checkbox")).toBe(true);
    expect(input.className.includes("complete-checked")).toBe(true);
    expect(input.className.includes("test-class")).toBe(true);

    expect(input.nodeName).toBe("INPUT");
    fireEvent.click(input);
    expect(onChangeSpy).toBeCalled();
  });
});
