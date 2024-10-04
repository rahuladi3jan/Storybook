import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MudraTabs from "./mudraTabs";
import { Type, Display } from "./propTypes";
import MudraTabHeader from "../mudraTabHeader/mudraTabHeader";
import MudraTabContentContainer from "../mudraTabContentContainer/mudraTabContentContainer";
import MudraTab from "../../atoms/mudraTab/mudraTab";
import MudraTabContent from "../../atoms/mudraTabContent/mudraTabContent";
const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
describe("mudra-tabs", () => {
  it("test:1 for basic tab", () => {
    render(
      <MudraTabs
        id="tabs_1"
        type={Type.Basic}
        display={Display.Horizontal}
        className="test-class"
      >
        <MudraTabHeader id="tabs_1_header">
          <MudraTab id="tab_1">Tab1</MudraTab>
          <MudraTab id="tab_2">Tab2</MudraTab>
          <MudraTab id="tab_3">Tab3</MudraTab>
        </MudraTabHeader>
        <MudraTabContentContainer id="tabs_1_contents">
          <MudraTabContent id="tab_1">{testText}</MudraTabContent>
          <MudraTabContent id="tab_2">{testText}</MudraTabContent>
          <MudraTabContent id="tab_3">{testText}</MudraTabContent>
        </MudraTabContentContainer>
      </MudraTabs>
    );
    const tab = screen.getByTestId("mudra_tabs");
    expect(tab).toBeTruthy();
    expect(tab.className.includes("mudra-tabs")).toBe(true);
    expect(tab.className.includes("display-horizontal")).toBe(true);
    expect(tab.className.includes("type-basic")).toBe(true);
    expect(tab.className.includes("test-class")).toBe(true);
  });

  test.each([
    [Type.Basic, Display.Horizontal],
    [Type.Basic, Display.Vertical],
    [Type.Scrollable, Display.Horizontal],
    [Type.Scrollable, Display.Vertical],
  ])("test:2 type %s display %s", (type, display) => {
    render(
      <MudraTabs id="tabs_1" type={type} display={display} selectedTab="tab_1">
        <MudraTabHeader id="tabs_1_header">
          <MudraTab id="tab_1">Tab1</MudraTab>
          <MudraTab id="tab_2">Tab2</MudraTab>
          <MudraTab id="tab_3">Tab3</MudraTab>
        </MudraTabHeader>
        <MudraTabContentContainer id="tabs_1_contents">
          <MudraTabContent id="tab_1">{testText}</MudraTabContent>
          <MudraTabContent id="tab_2">{testText}</MudraTabContent>
          <MudraTabContent id="tab_3">{testText}</MudraTabContent>
        </MudraTabContentContainer>
      </MudraTabs>
    );
    const tab = screen.getByTestId("mudra_tabs");
    expect(tab).toBeTruthy();
    expect(tab.className.includes("mudra-tabs")).toBe(true);
    expect(
      tab.className.includes(`display-${display.toLocaleLowerCase()}`)
    ).toBe(true);
    expect(tab.className.includes(`type-${type.toLocaleLowerCase()}`)).toBe(
      true
    );
  });

  it("test:3 for basic tab with selection", () => {
    render(
      <MudraTabs id="tabs_1" type={Type.Basic} display={Display.Horizontal}>
        <MudraTabHeader id="tabs_1_header">
          <MudraTab id="tab_1">Tab1</MudraTab>
          <MudraTab id="tab_2">Tab2</MudraTab>
          <MudraTab id="tab_3">Tab3</MudraTab>
        </MudraTabHeader>
        <MudraTabContentContainer id="tabs_1_contents">
          <MudraTabContent id="tab_1">{testText}</MudraTabContent>
          <MudraTabContent id="tab_2">{testText}</MudraTabContent>
          <MudraTabContent id="tab_3">{testText}</MudraTabContent>
        </MudraTabContentContainer>
      </MudraTabs>
    );
    const tab = screen.getByTestId("mudra_tabs");
    expect(tab).toBeTruthy();
    expect(tab.className.includes("mudra-tabs")).toBe(true);
    expect(tab.className.includes("display-horizontal")).toBe(true);
    expect(tab.className.includes("type-basic")).toBe(true);
    const tabHeader = screen.getByTestId("mudra_tab_header");
    expect(tabHeader).toBeTruthy();
    fireEvent.click(tabHeader.children[0].children[0]);
  });

  it("test:4 for scrollable tab with selection", () => {
    window.HTMLElement.prototype.getBoundingClientRect = () =>
      ({
        bottom: 44,
        height: 24,
        left: 10,
        right: 35.67,
        top: 20,
        width: 25.67,
      } as DOMRect);

    render(
      <MudraTabs
        id="tabs_1"
        type={Type.Scrollable}
        display={Display.Horizontal}
      >
        <MudraTabHeader id="tabs_1_header">
          <MudraTab id="tab_1">Tab1</MudraTab>
          <MudraTab id="tab_2">Tab2</MudraTab>
          <MudraTab id="tab_3">Tab3</MudraTab>
        </MudraTabHeader>
        <MudraTabContentContainer id="tabs_1_contents">
          <MudraTabContent id="tab_1">{testText}</MudraTabContent>
          <MudraTabContent id="tab_2">{testText}</MudraTabContent>
          <MudraTabContent id="tab_3">{testText}</MudraTabContent>
        </MudraTabContentContainer>
      </MudraTabs>
    );
    const tab = screen.getByTestId("mudra_tabs");
    expect(tab).toBeTruthy();
    expect(tab.className.includes("mudra-tabs")).toBe(true);
    expect(tab.className.includes("display-horizontal")).toBe(true);
    expect(tab.className.includes("type-scrollable")).toBe(true);
    const tabContentContainer = screen.getByTestId(
      "mudra_tab_content_container"
    );
    expect(tabContentContainer).toBeTruthy();
    const tabHeader = screen.getByTestId("mudra_tab_header");
    const selectContent = document.getElementById(
      `mudraTabContentId-${"tabs_1"}-${"tab_1"}`
    );
    expect(tabHeader).toBeTruthy();
    if (selectContent) selectContent.scrollIntoView = jest.fn();
    const tabsMain = document.getElementById("tabs_1");
    if (tabsMain) tabsMain.scrollIntoView = jest.fn();
    fireEvent.click(tabHeader.children[0].children[0]);
    fireEvent.scroll(tabContentContainer, {
      target: { scrollY: 100 },
    });
  });

  it("test:5 for basic tab", () => {
    render(
      <MudraTabs id="tabs_1">
        <MudraTabHeader id="tabs_1_header">
          <p>Tab_1</p>
        </MudraTabHeader>
        <MudraTabContentContainer id="tabs_1_contents">
          <p>{testText}</p>
        </MudraTabContentContainer>
      </MudraTabs>
    );
    const tab = screen.getByTestId("mudra_tabs");
    expect(tab).toBeTruthy();
    expect(tab.className.includes("mudra-tabs")).toBe(true);
    expect(tab.className.includes("display-horizontal")).toBe(true);
    expect(tab.className.includes("type-basic")).toBe(true);
  });

  it("test:6 for basic tab scrollable", () => {
    render(
      <MudraTabs id="ttrt" type={Type.Scrollable}>
        <p>test</p>
        <p>test</p>
      </MudraTabs>
    );
    const tab = screen.getByTestId("mudra_tabs");
    expect(tab).toBeTruthy();
    expect(tab.className.includes("mudra-tabs")).toBe(true);
    expect(tab.className.includes("display-horizontal")).toBe(true);
    expect(tab.className.includes("type-scrollable")).toBe(true);
    fireEvent.scroll(window, {
      target: { scrollY: 100 },
    });
  });
});
