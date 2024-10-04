import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MudraMenuItem from "./mudraMenuItem";

const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
describe("mudra-menu-item", () => {
  it("test:1 for menu item basic", () => {
    render(<MudraMenuItem active>{testText}</MudraMenuItem>);
    // test 1: check menu item class
    const menuItem = screen.getByTestId("mudra_menu_item");
    expect(menuItem.className.includes("mudra-menu-item")).toBe(true);
    expect(menuItem.className.includes("active")).toBe(true);
    expect(menuItem.textContent?.includes(testText)).toBe(true);
  });
  it("test:1 for menu item selected", () => {
    render(<MudraMenuItem isSelected>{testText}</MudraMenuItem>);
    // test 2: check selected menu item class
    const menuItem = screen.getByTestId("mudra_menu_item");
    expect(menuItem.className.includes("mudra-menu-item")).toBe(true);
    expect(menuItem.className.includes("selected")).toBe(true);
    expect(menuItem.textContent?.includes(testText)).toBe(true);
  });
  it("test:3 for menu with custom className", () => {
    render(
      <MudraMenuItem isSelected className="custom-class-name">
        {testText}
      </MudraMenuItem>
    );
    // test 3: check custom-class-name class
    const menuItem = screen.getByTestId("mudra_menu_item");
    expect(menuItem.className.includes("mudra-menu-item")).toBe(true);
    expect(menuItem.className.includes("custom-class-name")).toBe(true);
    expect(menuItem.textContent?.includes(testText)).toBe(true);
  });
  it("test:3 for menu onClick select", () => {
    const clickSpy = jest.fn();
    render(
      <MudraMenuItem
        isSelected
        className="custom-class-name"
        onClick={clickSpy}
      >
        {testText}
      </MudraMenuItem>
    );
    // test 3: check custom-class-name class
    const menuItem = screen.getByTestId("mudra_menu_item");
    expect(menuItem.className.includes("mudra-menu-item")).toBe(true);
    expect(menuItem.className.includes("custom-class-name")).toBe(true);
    expect(menuItem.textContent?.includes(testText)).toBe(true);
    fireEvent.click(menuItem);
    expect(clickSpy).toBeCalled();
  });
});
