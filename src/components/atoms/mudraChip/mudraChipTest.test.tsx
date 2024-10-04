import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CloseSmall } from "../../../icons";

import MudraChip from "./mudraChip";
import { DropDownSize } from "./types";
const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
describe("mudra-chip", () => {
  it("test:1 for mudra chip", () => {
    render(
      <MudraChip
        text={testText}
        className="test-class"
        size={DropDownSize.large}
      />
    );
    // test 1: check chip class
    const inputLabel = screen.getByTestId("mudra_chip");
    expect(inputLabel.className.includes("mudra-chip")).toBe(true);
    expect(inputLabel.className.includes("large")).toBe(true);
    expect(inputLabel.className.includes("test-class")).toBe(true);
    expect(inputLabel.textContent?.includes(testText)).toBe(true);
  });
  it("test:2 for mudra chip inactive", () => {
    render(<MudraChip text={testText} inActive />);
    // test 2: check chip class
    const inputLabel = screen.getByTestId("mudra_chip");
    expect(inputLabel.className.includes("mudra-chip")).toBe(true);
    expect(inputLabel.textContent?.includes(testText)).toBe(true);
    expect(inputLabel.className.includes("inactive")).toBe(true);
  });
  it("test:3 for mudra chip icon click", () => {
    const onIconClick = jest.fn();
    render(
      <MudraChip
        text={testText}
        inActive
        onIconClick={onIconClick}
        icon={CloseSmall}
      />
    );
    // test 3: check chip class
    const inputLabel = screen.getByTestId("mudra_chip");
    expect(inputLabel.className.includes("mudra-chip")).toBe(true);
    expect(inputLabel.textContent?.includes(testText)).toBe(true);
    expect(inputLabel.className.includes("inactive")).toBe(true);
    const Icon = screen.getByTestId("mudra_chip_icon");
    fireEvent.click(Icon);
    expect(onIconClick).toBeCalled();
  });
  it("test:4 for mudra chip text click", () => {
    const onClick = jest.fn();
    render(<MudraChip text={testText} inActive onClick={onClick} />);
    // test 4: check chip class
    const inputLabel = screen.getByTestId("mudra_chip");
    expect(inputLabel.className.includes("mudra-chip")).toBe(true);
    expect(inputLabel.textContent?.includes(testText)).toBe(true);
    expect(inputLabel.className.includes("inactive")).toBe(true);
    const text = screen.getByTestId("mudra_chip_text");
    fireEvent.click(text);
    expect(onClick).toBeCalled();
  });
});
