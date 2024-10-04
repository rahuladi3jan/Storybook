import React from "react";
import { render, screen } from "@testing-library/react";
import MudraTabHeader from "./mudraTabHeader";
import { Display } from "../mudraTabs/propTypes";

const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
describe("mudra-tab-header", () => {
  it("test:1 for basic tab header", () => {
    render(
      <MudraTabHeader id="test-header">
        <p>{testText}</p>
      </MudraTabHeader>
    );
    const header = screen.getByTestId("mudra_tab_header");
    expect(header).toBeTruthy();
    expect(header.className.includes("mudra-tab-header")).toBe(true);
    expect(header.className.includes("display-horizontal")).toBe(true);
  });
  it("test:2 for array tab header", () => {
    render(
      <MudraTabHeader
        id="test-header"
        className="test-class"
        display={Display.Vertical}
      >
        {[<p key="1">{testText}</p>]}
      </MudraTabHeader>
    );
    const header = screen.getByTestId("mudra_tab_header");
    expect(header).toBeTruthy();
    expect(header.className.includes("mudra-tab-header")).toBe(true);
    expect(header.className.includes("display-vertical")).toBe(true);
    expect(header.className.includes("test-class")).toBe(true);
  });
  it("test:3 for no children tab header", () => {
    render(<MudraTabHeader id="test-header"></MudraTabHeader>);
    const header = screen.getByTestId("mudra_tab_header");
    expect(header).toBeTruthy();
    expect(header.className.includes("mudra-tab-header")).toBe(true);
    expect(header.className.includes("display-horizontal")).toBe(true);
  });
});
