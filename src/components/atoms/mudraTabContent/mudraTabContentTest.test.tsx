import React from "react";
import { render, screen } from "@testing-library/react";
import MudraTabContent from "./mudraTabContent";
const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

describe("mudra-tab-content", () => {
  it("test:1 for basic tab content", () => {
    render(<MudraTabContent id="test-tab-content">{testText}</MudraTabContent>);
    const tabContent = screen.getByTestId("mudra_tab_content");
    expect(tabContent).toBeTruthy();
    expect(tabContent.className.includes("mudra-tab-content")).toBeTruthy();
  });
  it("test:2 for basic tab content with custom class", () => {
    render(
      <MudraTabContent id="test-tab-content" className="test-className">
        {testText}
      </MudraTabContent>
    );
    const tabContent = screen.getByTestId("mudra_tab_content");
    expect(tabContent).toBeTruthy();
    expect(tabContent.className.includes("mudra-tab-content")).toBeTruthy();
    expect(tabContent.className.includes("test-className")).toBeTruthy();
  });
});
