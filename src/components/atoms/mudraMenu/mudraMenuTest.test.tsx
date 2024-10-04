import React from "react";
import { render, screen, within } from "@testing-library/react";
import MudraMenu from "./mudraMenu";
import { MudraMenuItem } from "../mudraMenuItem";

const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
describe("mudra-menu", () => {
  it("test:1 for menu basic", () => {
    render(<MudraMenu>{testText}</MudraMenu>);
    // test 1: check menu class
    const menu = screen.getByTestId("mudra_menu");
    expect(menu.className.includes("mudra-menu")).toBe(true);
    expect(menu.textContent?.includes(testText)).toBe(true);
  });

  it("test:2 for menu with menuItem", () => {
    render(
      <MudraMenu>
        <MudraMenuItem>Menu Item</MudraMenuItem>
      </MudraMenu>
    );
    // test 2: check menu class
    const menu = screen.getByTestId("mudra_menu");
    expect(menu.className.includes("mudra-menu")).toBe(true);
    expect(within(menu).getByTestId("mudra_menu_item")).not.toBeNull();
  });
  it("test:3 for menu with custom className", () => {
    render(
      <MudraMenu className="custom-class-name">
        <MudraMenuItem>Menu Item</MudraMenuItem>
      </MudraMenu>
    );
    // test 3: check custom-class-name class
    const menu = screen.getByTestId("mudra_menu");
    expect(menu.className.includes("mudra-menu")).toBe(true);
    expect(menu.className.includes("custom-class-name")).toBe(true);
    expect(within(menu).getByTestId("mudra_menu_item")).not.toBeNull();
  });
});
