import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MudraInput from "./mudraInput";
import { StarSmall } from "../../../icons";
describe("mudra-input-component", () => {
  it("test:1 for Text - Normal", () => {
    render(
      <MudraInput
        className="test-class"
        label="Text - Normal"
        state="disabled"
        defaultValue="Initial Value"
      />
    );
    // test 1: check container classes
    const inputContainer = screen.getByTestId("mudra_input-container");
    expect(inputContainer).toBeTruthy();
    expect(inputContainer.className.includes("mudra-input")).toBe(true);
    expect(inputContainer.className.includes("test-class")).toBe(true);
    expect(inputContainer.className.includes("disabled")).toBe(true);

    // test 1: check label
    const label = screen.getByTestId("mudra_input-label");
    expect(label).toBeTruthy();
    expect(label.className.includes("label")).toBe(true);
    expect(label.textContent?.includes("Text - Normal")).toBe(true);
    // test 1: check input
    const input = screen.getByTestId("mudra_input") as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.value).toBe("Initial Value");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
  });

  it("test:2 for Text - Left Icon", () => {
    render(
      <MudraInput
        label="Text - Left Icon"
        state="default"
        defaultValue="Initial Value"
        feature="left-icon"
        prefixIcon={StarSmall}
      />
    );
    // test 2: check container classes
    const inputContainer = screen.getByTestId("mudra_input-container");
    expect(inputContainer).toBeTruthy();
    expect(inputContainer.className.includes("mudra-input")).toBe(true);

    // test 2: check label
    const label = screen.getByTestId("mudra_input-label");
    expect(label).toBeTruthy();
    expect(label.className.includes("label")).toBe(true);
    expect(label.textContent?.includes("Text - Left Icon")).toBe(true);
    // test 2: check input
    const input = screen.getByTestId("mudra_input") as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.className.includes("input-field")).toBe(true);
    expect(input.className.includes("left-icon")).toBe(true);
    expect(input.value).toBe("Initial Value");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
    // test 2: check left icon
    const leftIcon = screen.getByTestId("mudra_input-left-icon");
    expect(leftIcon).toBeTruthy();
  });

  it("test:3 for Text - right Icon", () => {
    render(
      <MudraInput
        label="Text - Left Icon"
        state="default"
        defaultValue="Initial Value"
        feature="right-icon"
        suffixIcon={StarSmall}
      />
    );
    // test 3: check container classes
    const inputContainer = screen.getByTestId("mudra_input-container");
    expect(inputContainer).toBeTruthy();
    expect(inputContainer.className.includes("mudra-input")).toBe(true);

    // test 3: check label
    const label = screen.getByTestId("mudra_input-label");
    expect(label).toBeTruthy();
    expect(label.className.includes("label")).toBe(true);
    expect(label.textContent?.includes("Text - Left Icon")).toBe(true);
    // test 3: check input
    const input = screen.getByTestId("mudra_input") as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.className.includes("input-field")).toBe(true);
    expect(input.className.includes("right-icon")).toBe(true);
    expect(input.value).toBe("Initial Value");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
    // test 3: check right icon
    const rightIcon = screen.getByTestId("mudra_input-right-icon");
    expect(rightIcon).toBeTruthy();
  });

  it("test:4 for Text - left-right Icon", () => {
    render(
      <MudraInput
        label="Text - Left Icon"
        state="default"
        defaultValue="Initial Value"
        feature="left-right-icon"
        suffixIcon={StarSmall}
        prefixIcon={StarSmall}
      />
    );
    // test 4: check container classes
    const inputContainer = screen.getByTestId("mudra_input-container");
    expect(inputContainer).toBeTruthy();
    expect(inputContainer.className.includes("mudra-input")).toBe(true);

    // test 4: check label
    const label = screen.getByTestId("mudra_input-label");
    expect(label).toBeTruthy();
    expect(label.className.includes("label")).toBe(true);
    expect(label.textContent?.includes("Text - Left Icon")).toBe(true);
    // test 4: check input
    const input = screen.getByTestId("mudra_input") as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.className.includes("input-field")).toBe(true);
    expect(input.className.includes("left-right-icon")).toBe(true);
    expect(input.value).toBe("Initial Value");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
    // test 4: check right icon
    const rightIcon = screen.getByTestId("mudra_input-right-icon");
    expect(rightIcon).toBeTruthy();
    // test 4: check left icon
    const leftIcon = screen.getByTestId("mudra_input-left-icon");
    expect(leftIcon).toBeTruthy();
  });

  it("test:5 for Text - Indicative Text", () => {
    render(
      <MudraInput
        label="Text - Indicative Text"
        state="default"
        defaultValue="Initial Value"
        feature="indicative-text"
        suffixText="10/10"
      />
    );
    // test 5: check container classes
    const inputContainer = screen.getByTestId("mudra_input-container");
    expect(inputContainer).toBeTruthy();
    expect(inputContainer.className.includes("mudra-input")).toBe(true);

    // test 5: check label
    const label = screen.getByTestId("mudra_input-label");
    expect(label).toBeTruthy();
    expect(label.className.includes("label")).toBe(true);
    expect(label.textContent?.includes("Text - Indicative Text")).toBe(true);
    // test 5: check input
    const input = screen.getByTestId("mudra_input") as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.className.includes("input-field")).toBe(true);
    expect(input.className.includes("indicative-text")).toBe(true);
    expect(input.value).toBe("Initial Value");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
    // test 6: input-filled class to be added if value is filled.
    expect(inputContainer.className.includes("input-filled")).toBe(true);
    // test 7: check Indicative Text
    const suffixText = screen.getByTestId("mudra_input-suffix-text");
    expect(suffixText).toBeTruthy();
    expect(suffixText.className.includes("suffix-text")).toBe(true);
    expect(suffixText.textContent?.includes("10/10")).toBe(true);
  });

  it("test:6 for Text - Indicative Text Left Icon", () => {
    render(
      <MudraInput
        label="Text - Indicative Text Left Icon"
        state="default"
        defaultValue="Initial Value"
        feature="indicative-text-left-icon"
        suffixText="10/10"
        prefixIcon={StarSmall}
      />
    );
    // test 6: check container classes
    const inputContainer = screen.getByTestId("mudra_input-container");
    expect(inputContainer).toBeTruthy();
    expect(inputContainer.className.includes("mudra-input")).toBe(true);

    // test 6: check label
    const label = screen.getByTestId("mudra_input-label");
    expect(label).toBeTruthy();
    expect(label.className.includes("label")).toBe(true);
    expect(label.textContent?.includes("Text - Indicative Text")).toBe(true);
    // test 6: check input
    const input = screen.getByTestId("mudra_input") as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.className.includes("input-field")).toBe(true);
    expect(input.className.includes("indicative-text-left-icon")).toBe(true);
    expect(input.value).toBe("Initial Value");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
    // test 6: check Indicative Text
    const suffixText = screen.getByTestId("mudra_input-suffix-text");
    expect(suffixText).toBeTruthy();
    expect(suffixText.className.includes("suffix-text")).toBe(true);
    expect(suffixText.textContent?.includes("10/10")).toBe(true);
    // test 6: check left icon
    const leftIcon = screen.getByTestId("mudra_input-left-icon");
    expect(leftIcon).toBeTruthy();
  });

  it("test:7 for Text - Link", () => {
    render(
      <MudraInput
        label="Text - Indicative Text"
        state="default"
        defaultValue="Initial Value"
        feature="link"
        suffixText="Link"
        linkURL="https://www.w3schools.com"
      />
    );
    // test 7: check container classes
    const inputContainer = screen.getByTestId("mudra_input-container");
    expect(inputContainer).toBeTruthy();
    expect(inputContainer.className.includes("mudra-input")).toBe(true);

    // test 7: check label
    const label = screen.getByTestId("mudra_input-label");
    expect(label).toBeTruthy();
    expect(label.className.includes("label")).toBe(true);
    expect(label.textContent?.includes("Text - Indicative Text")).toBe(true);
    // test 7: check input
    const input = screen.getByTestId("mudra_input") as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.className.includes("input-field")).toBe(true);
    expect(input.className.includes("link")).toBe(true);
    expect(input.value).toBe("Initial Value");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
    // test 7: check Link Text
    const link = screen.getByTestId("mudra_input-suffix-link");
    expect(link).toBeTruthy();
    expect(link.className.includes("suffix-text-link")).toBe(true);
    expect(link.hasAttribute("href")).toBe(true);
    expect(link.getAttribute("href")).toBe("https://www.w3schools.com");
  });

  it("test:8 for Text - Link & Left Icon", () => {
    render(
      <MudraInput
        label="Text - Link & Left Icon"
        state="default"
        defaultValue="Initial Value"
        feature="link-left-icon"
        suffixText="Link"
        linkURL="https://www.w3schools.com"
        prefixIcon={StarSmall}
      />
    );
    // test 7: check container classes
    const inputContainer = screen.getByTestId("mudra_input-container");
    expect(inputContainer).toBeTruthy();
    expect(inputContainer.className.includes("mudra-input")).toBe(true);

    // test 7: check label
    const label = screen.getByTestId("mudra_input-label");
    expect(label).toBeTruthy();
    expect(label.className.includes("label")).toBe(true);
    expect(label.textContent?.includes("Text - Link & Left Icon")).toBe(true);
    // test 7: check input
    const input = screen.getByTestId("mudra_input") as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.className.includes("input-field")).toBe(true);
    expect(input.className.includes("link-left-icon")).toBe(true);

    expect(input.value).toBe("Initial Value");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
    // test 7: check Link Text
    const link = screen.getByTestId("mudra_input-suffix-link");
    expect(link).toBeTruthy();
    expect(link.className.includes("suffix-text-link")).toBe(true);
    expect(link.hasAttribute("href")).toBe(true);
    expect(link.getAttribute("href")).toBe("https://www.w3schools.com");
    // test 7: check left icon
    const leftIcon = screen.getByTestId("mudra_input-left-icon");
    expect(leftIcon).toBeTruthy();
  });

  it("test:9 for Text - Normal controlled", () => {
    const onChangeSpy = jest.fn();
    render(
      <MudraInput
        type="text"
        feature="normal"
        controlled
        className="test-class"
        label="Text - Normal"
        state="disabled"
        value="Initial Value"
        onChange={onChangeSpy}
        hint
        hintText="hint-text"
      />
    );
    // test 9: check container classes
    const inputContainer = screen.getByTestId("mudra_input-container");
    expect(inputContainer).toBeTruthy();
    expect(inputContainer.className.includes("mudra-input")).toBe(true);
    expect(inputContainer.className.includes("test-class")).toBe(true);
    expect(inputContainer.className.includes("disabled")).toBe(true);

    // test 9: check label
    const label = screen.getByTestId("mudra_input-label");
    expect(label).toBeTruthy();
    expect(label.className.includes("label")).toBe(true);
    expect(label.textContent?.includes("Text - Normal")).toBe(true);
    // test 9: check input
    const input = screen.getByTestId("mudra_input") as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.hasAttribute("type")).toBe(true);
    expect(input.value).toBe("Initial Value");
    fireEvent.change(input, { target: { value: "new value" } });
    input.value = "new value";
    expect(input.value).toBe("new value");
    expect(onChangeSpy).toBeCalled();
    const hint = screen.getByTestId("mudra_input_hint");
    expect(hint).toBeTruthy();
  });
});
