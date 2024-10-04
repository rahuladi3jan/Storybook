import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MudraMessage from "./mudraMessage";
import { Position, Theme, Variant } from "./propTypes";

it("test:1 for message basic ", () => {
  const onClickSpy = jest.fn();
  render(
    <MudraMessage
      position={Position.Bottom}
      variant={Variant.Generic}
      theme={Theme.Dark}
      show={true}
      onClose={onClickSpy}
    >
      This is simple message.
    </MudraMessage>
  );

  const message = screen.getByTestId("mudra_message");

  // Test:1 for accordion Existence
  expect(message).not.toBeNull();

  // Test:1 for button Classes
  expect(message.className.includes("mudra-message")).toBe(true);
  expect(message.className.includes("show-true")).toBe(true);
  expect(message.className.includes("position-bottom")).toBe(true);
  expect(message.className.includes("variant-generic")).toBe(true);
  expect(message.className.includes("theme-dark")).toBe(true);
  const icon = screen.getByTestId("mudra_message_icon") as HTMLElement;
  fireEvent.click(icon);
  expect(onClickSpy).toBeCalled();
});

it("test:2 for message default ", () => {
  render(
    <MudraMessage className="test-class">This is simple message.</MudraMessage>
  );

  const message = screen.getByTestId("mudra_message");

  // Test:1 for accordion Existence
  expect(message).not.toBeNull();

  // Test:1 for button Classes
  expect(message.className.includes("mudra-message")).toBe(true);
  expect(message.className.includes("show-true")).toBe(true);
  expect(message.className.includes("position-bottom")).toBe(true);
  expect(message.className.includes("variant-generic")).toBe(true);
  expect(message.className.includes("theme-dark")).toBe(true);
  expect(message.className.includes("test-class")).toBe(true);
});
