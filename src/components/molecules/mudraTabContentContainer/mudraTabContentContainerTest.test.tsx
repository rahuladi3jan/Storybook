import React from "react";
import { render, screen } from "@testing-library/react";
import MudraTabContentContainer from "./mudraTabContentContainer";
import { Display, Type } from "../mudraTabs/propTypes";

const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
describe("mudra-tab-content-container", () => {
  it("test:1 for basic tab-content-container", () => {
    render(
      <MudraTabContentContainer id="test-container">
        <p>{testText}</p>
      </MudraTabContentContainer>
    );
    const tabContentContainer = screen.getByTestId(
      "mudra_tab_content_container"
    );
    expect(tabContentContainer).toBeTruthy();
    expect(
      tabContentContainer.className.includes("mudra-tab-content-container")
    ).toBe(true);
    expect(tabContentContainer.className.includes("display-horizontal")).toBe(
      true
    );
    expect(tabContentContainer.className.includes("type-basic")).toBe(true);
  });
  it("test:2 for array tab-content-container", () => {
    render(
      <MudraTabContentContainer id="test-container" type={Type.Scrollable}>
        {[<p key="1">{testText}</p>]}
      </MudraTabContentContainer>
    );
    const tabContentContainer = screen.getByTestId(
      "mudra_tab_content_container"
    );
    expect(tabContentContainer).toBeTruthy();
    expect(
      tabContentContainer.className.includes("mudra-tab-content-container")
    ).toBe(true);
    expect(tabContentContainer.className.includes("display-horizontal")).toBe(
      true
    );
    expect(tabContentContainer.className.includes("type-scrollable")).toBe(
      true
    );
  });
  it("test:3 for no children tab-content-container", () => {
    render(
      <MudraTabContentContainer
        display={Display.Vertical}
        id="test-container"
        className="test-class"
      ></MudraTabContentContainer>
    );
    const tabContentContainer = screen.getByTestId(
      "mudra_tab_content_container"
    );
    expect(tabContentContainer).toBeTruthy();
    expect(
      tabContentContainer.className.includes("mudra-tab-content-container")
    ).toBe(true);
    expect(tabContentContainer.className.includes("display-vertical")).toBe(
      true
    );
    expect(tabContentContainer.className.includes("type-basic")).toBe(true);
  });
});
