import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MudraAutocompleteBase from "./mudraAutocompleteBase";
const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
describe("mudra-autocomplete-base", () => {
  it("test:1 for autocomplete base", () => {
    render(<MudraAutocompleteBase>{testText}</MudraAutocompleteBase>);
    // test 1: check select base
    const autocompleteBase = screen.getByTestId("mudra_autocomplete_root");
    expect(autocompleteBase.className.includes("mudra-autocomplete-root")).toBe(
      true
    );
    expect(autocompleteBase.textContent?.includes(testText)).not.toBe(true);
  });
  it("test:2 for autocomplete base placeholder", () => {
    render(
      <MudraAutocompleteBase placeHolder="Search Option">
        {testText}
      </MudraAutocompleteBase>
    );
    // test 2: check select base input value
    const autocompleteBaseInput = screen.getByTestId(
      "mudra_autocomplete_input"
    ) as HTMLInputElement;
    expect(
      autocompleteBaseInput.className.includes("autocomplete-base-input")
    ).toBe(true);
    expect(autocompleteBaseInput.placeholder).toBe("Search Option");
  });
  it("test:3 for autocomplete base input", () => {
    render(<MudraAutocompleteBase>{testText}</MudraAutocompleteBase>);
    // test 3: check autocomplete base
    const autocompleteBase = screen.getByTestId("mudra_autocomplete_root");
    expect(autocompleteBase.className.includes("mudra-autocomplete-root")).toBe(
      true
    );
    expect(autocompleteBase.textContent?.includes(testText)).not.toBe(true);
    // test 3: check autocomplete base input
    const autocompleteBaseInput = screen.getByTestId(
      "mudra_autocomplete_input"
    ) as HTMLInputElement;
    const autocompleteBaseContainer = screen.getByTestId(
      "mudra_autocomplete_container"
    );
    expect(
      autocompleteBaseInput.className.includes("autocomplete-base-input")
    ).toBe(true);
    // test 3: check autocomplete base focus
    expect(autocompleteBaseContainer.className.includes("focused")).not.toBe(
      true
    );
    fireEvent.click(autocompleteBaseInput);
    expect(autocompleteBaseContainer.className.includes("focused")).toBe(true);

    fireEvent.click(autocompleteBaseInput);
    expect(autocompleteBaseContainer.className.includes("focused")).not.toBe(
      true
    );
  });
  it("test:4 for autocomplete base", () => {
    render(
      <MudraAutocompleteBase className="custom-class-name">
        {testText}
      </MudraAutocompleteBase>
    );
    // test 4: check custom autocomplete class
    const autocompleteBase = screen.getByTestId("mudra_autocomplete_root");
    expect(autocompleteBase.className.includes("mudra-autocomplete-root")).toBe(
      true
    );
    expect(autocompleteBase.className.includes("custom-class-name")).toBe(true);
    expect(autocompleteBase.textContent?.includes(testText)).not.toBe(true);
  });
  it("test:5 for autocomplete base outside click", () => {
    const clickSpy = jest.fn();
    render(
      <div data-testid="mudra_autocomplete_test">
        <MudraAutocompleteBase onClick={clickSpy}>
          {testText}
        </MudraAutocompleteBase>
      </div>
    );
    // test 6: check autocomplete base input value
    const autocompleteBaseInput = screen.getByTestId(
      "mudra_autocomplete_input"
    ) as HTMLInputElement;
    const autocompleteBaseContainer = screen.getByTestId(
      "mudra_autocomplete_container"
    );
    expect(
      autocompleteBaseInput.className.includes("autocomplete-base-input")
    ).toBe(true);
    // test 6: check autocomplete base focus
    expect(autocompleteBaseContainer.className.includes("focused")).not.toBe(
      true
    );
    fireEvent.click(autocompleteBaseInput);
    expect(autocompleteBaseContainer.className.includes("focused")).toBe(true);
    const divElement = screen.getByTestId(
      "mudra_autocomplete_test"
    ) as HTMLDivElement;

    fireEvent.click(divElement);
    expect(autocompleteBaseContainer.className.includes("focused")).not.toBe(
      true
    );
    expect(clickSpy).toBeCalled();
  });
});
