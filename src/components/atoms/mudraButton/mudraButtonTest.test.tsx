import React from "react";
import { render, screen } from "@testing-library/react";
import MudraButton from "./mudraButton";
import { Variant, Size, Width, IconAlignment, State } from "./propTypes";
import { Bitcoin } from "../../../icons";
describe("mudra-button", () => {
  it("test:1 for button Primary Medium auto left aligned, enabled", () => {
    const onClickSpy = jest.fn();
    render(
      <MudraButton
        className="test-class"
        variant={Variant.Primary}
        size={Size.Medium}
        width={Width.Auto}
        iconAlignment={IconAlignment.LeftAligned}
        state={State.Enabled}
        label="Primary Button"
        icon={Bitcoin}
        onClick={onClickSpy}
      />
    );

    const primaryButton = screen.getByRole("button", {
      name: /Primary Button/i,
    });

    // Test:1 for Button Existence
    expect(primaryButton).not.toBeNull();

    // Test:1 for button Classes
    expect(primaryButton.className.includes("test-class")).toBe(true);
    expect(primaryButton.className.includes("primary")).toBe(true);
    expect(primaryButton.className.includes("left-aligned")).toBe(true);
    expect(primaryButton.className.includes("mudra-button")).toBe(true);
    expect(primaryButton.className.includes("medium")).toBe(true);
    expect(primaryButton.className.includes("auto")).toBe(true);
    expect(primaryButton.className.includes("enabled")).toBe(true);

    // Test:1 for button Click
    primaryButton.click();
    expect(onClickSpy).toBeCalled();

    // Test:1 for button label
    expect(primaryButton.textContent?.includes("Primary Button")).toBe(true);
  });

  it("test:2 for button Large circle left aligned, disabled", () => {
    const onClickSpy = jest.fn();
    render(
      <MudraButton
        variant={Variant.Primary}
        size={Size.Large}
        width={Width.Circle}
        iconAlignment={IconAlignment.LeftAligned}
        state={State.Disabled}
        label="Primary Button"
        icon={Bitcoin}
        onClick={onClickSpy}
      />
    );

    const primaryButton = screen.getByRole("button");

    // Test:2 for Button Existence
    expect(primaryButton).not.toBeNull();

    // Test:2 for button Classes
    expect(primaryButton.className.includes("primary")).toBe(true);
    expect(primaryButton.className.includes("left-aligned")).toBe(true);
    expect(primaryButton.className.includes("mudra-button")).toBe(true);
    expect(primaryButton.className.includes("large")).toBe(true);
    expect(primaryButton.className.includes("circle")).toBe(true);
    expect(primaryButton.className.includes("disabled")).toBe(true);

    // Test:2 for button Click
    primaryButton.click();
    expect(onClickSpy).not.toBeCalled();
  });

  it("test:3 for button Secondary Medium auto icon:none, enabled", () => {
    const onClickSpy = jest.fn();
    render(
      <MudraButton
        variant={Variant.Secondary}
        size={Size.Medium}
        width={Width.Auto}
        iconAlignment={IconAlignment.None}
        state={State.Enabled}
        label="Secondary Button"
        icon={Bitcoin}
        onClick={onClickSpy}
      />
    );

    const primaryButton = screen.getByRole("button", {
      name: /Secondary Button/i,
    });

    // Test:3 for Button Existence
    expect(primaryButton).not.toBeNull();

    // Test:3 for button Classes
    expect(primaryButton.className.includes("secondary")).toBe(true);
    // expect(primaryButton.className.includes("right-aligned")).toBe(true)
    expect(primaryButton.className.includes("mudra-button")).toBe(true);
    expect(primaryButton.className.includes("medium")).toBe(true);
    expect(primaryButton.className.includes("auto")).toBe(true);
    expect(primaryButton.className.includes("enabled")).toBe(true);

    // Test:3 for button Click
    primaryButton.click();
    expect(onClickSpy).toBeCalled();

    // Test:3 for button label
    expect(primaryButton.textContent?.includes("Secondary Button")).toBe(true);

    // Test:4 for button icon
    expect(primaryButton.textContent?.includes(".svg")).toBe(false);
  });

  it("test:4 for button ghost XL square right aligned, enable", () => {
    const onClickSpy = jest.fn();
    render(
      <MudraButton
        variant={Variant.Primary}
        size={Size.XL}
        width={Width.Square}
        iconAlignment={IconAlignment.RightAligned}
        state={State.Enabled}
        label="Primary Button"
        icon={Bitcoin}
        onClick={onClickSpy}
      />
    );

    const primaryButton = screen.getByRole("button");

    // Test:4 for Button Existence
    expect(primaryButton).not.toBeNull();

    // Test:4 for button Classes
    expect(primaryButton.className.includes("primary")).toBe(true);
    expect(primaryButton.className.includes("right-aligned")).toBe(true);
    expect(primaryButton.className.includes("mudra-button")).toBe(true);
    expect(primaryButton.className.includes("xl")).toBe(true);
    expect(primaryButton.className.includes("square")).toBe(true);
    expect(primaryButton.className.includes("enable")).toBe(true);

    // Test:4 for button Click
    primaryButton.click();
    expect(onClickSpy).toBeCalled();
  });

  it("test:5 for basic button", () => {
    const onClickSpy = jest.fn();
    render(<MudraButton label="Primary Button" onClick={onClickSpy} />);

    const primaryButton = screen.getByRole("button");

    // Test:5 for Button Existence
    expect(primaryButton).not.toBeNull();

    // Test:5 for button Classes
    expect(primaryButton.className.includes("primary")).toBe(true);
    expect(primaryButton.className.includes("mudra-button")).toBe(true);
    expect(primaryButton.className.includes("square")).not.toBe(true);
    expect(primaryButton.className.includes("enable")).toBe(true);
    expect(primaryButton.className.includes("none")).toBe(true);

    // Test:5 for button Click
    primaryButton.click();
    expect(onClickSpy).toBeCalled();
  });
});
