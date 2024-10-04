import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MudraTextAreaBase from "./mudraTextAreaBase";

describe("mudra-textarea-base", () => {
  it("test:1 for textarea base", () => {
    render(
      <MudraTextAreaBase defaultValue="Initial Value" className="test-class" />
    );
    // test 1: check textarea class
    const textAreaBase = screen.getByTestId("mudra_textarea_base");
    expect(textAreaBase.className.includes("mudra-textarea-base")).toBe(true);
    expect(textAreaBase.className.includes("test-class")).toBe(true);
    const textArea = screen.getByTestId(
      "mudra_textarea_base"
    ) as HTMLTextAreaElement;
    expect(textArea).toBeTruthy();
    expect(textArea.value).toBe("Initial Value");
    fireEvent.change(textArea, { target: { value: "new value" } });
    expect(textArea.value).toBe("new value");
  });
  it("test:2 for textarea with specific row", () => {
    render(<MudraTextAreaBase defaultValue="Initial Value" rows={3} />);
    // test 2: check textarea class
    const textAreaBase = screen.getByTestId("mudra_textarea_base");
    expect(textAreaBase.className.includes("mudra-textarea-base")).toBe(true);
    const textArea = screen.getByTestId(
      "mudra_textarea_base"
    ) as HTMLTextAreaElement;
    expect(textArea).toBeTruthy();
    expect(textArea.hasAttribute("rows")).toBe(true);
    expect(textArea.value).toBe("Initial Value");
    fireEvent.change(textArea, { target: { value: "new value" } });
    expect(textArea.value).toBe("new value");
  });
  it("test:3 for textarea disabled", () => {
    const onClickSpy = jest.fn();
    render(
      <MudraTextAreaBase
        defaultValue="Initial Value"
        rows={3}
        disabled={true}
        onClick={onClickSpy}
      />
    );
    // test 3: check textarea class
    const textAreaBase = screen.getByTestId("mudra_textarea_base");
    expect(textAreaBase.className.includes("mudra-textarea-base")).toBe(true);
    const textArea = screen.getByTestId(
      "mudra_textarea_base"
    ) as HTMLTextAreaElement;
    expect(textArea).toBeTruthy();
    fireEvent.click(textAreaBase);
    expect(onClickSpy).not.toHaveBeenCalled();
  });
  it("test:4 for textarea readOnly", () => {
    const onClickSpy = jest.fn();
    render(
      <MudraTextAreaBase
        defaultValue="Initial Value"
        rows={3}
        readOnly={true}
        onClick={onClickSpy}
      />
    );
    // test 4: check textarea class
    const textAreaBase = screen.getByTestId("mudra_textarea_base");
    expect(textAreaBase.className.includes("mudra-textarea-base")).toBe(true);
    const textArea = screen.getByTestId(
      "mudra_textarea_base"
    ) as HTMLTextAreaElement;
    expect(textArea).toBeTruthy();
    fireEvent.click(textAreaBase);
    expect(onClickSpy).not.toHaveBeenCalled();
  });
});
