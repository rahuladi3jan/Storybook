import React from "react";
import { render, screen } from "@testing-library/react";
import MudraTab from "./mudraTab";
const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
describe("mudra-tab", () => {
  it("test:1 for basic tab", () => {
    render(<MudraTab id="test-tab">{testText}</MudraTab>);
    // test:1 check tab class
    const mudraTab = screen.getByTestId("mudra_tab");
    expect(mudraTab).toBeTruthy();
    expect(mudraTab.className.includes("mudra-tab")).toBeTruthy();
  });
  it("test:2 for basic tab with custom class", () => {
    render(
      <MudraTab id="test-tab" className="test-class">
        {testText}
      </MudraTab>
    );
    // test:2 check tab class
    const mudraTab = screen.getByTestId("mudra_tab");
    expect(mudraTab).toBeTruthy();
    expect(mudraTab.className.includes("mudra-tab")).toBeTruthy();
    expect(mudraTab.className.includes("test-class")).toBeTruthy();
  });
});
