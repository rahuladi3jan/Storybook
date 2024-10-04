import React from "react";
import { render, screen } from "@testing-library/react";
import MudraTabContainer from "./mudraTabContainer";
import { Type, Display } from "./propTypes";

it("test:1 for TabContainer Basic Horizontal", () => {
  render(
    <MudraTabContainer
      id="m_tab_1"
      type={Type.Basic}
      display={Display.Horizontal}
      tabs={["Tab1", "Tab2", "Tab3"]}
      tabContents={["tab1 content", "tab2 content", "tab3 content"]}
      className="customclass"
    />
  );

  const tabs = screen.getByTestId("mudra_tabContainer");

  // Test:1 for TabContainer Existence
  expect(tabs).not.toBeNull();

  // Test:1 for TabContainer Classes
  expect(tabs.className.includes("mudra-tabContainer")).toBe(true);
  expect(tabs.className.includes("type-basic")).toBe(true);
  expect(tabs.className.includes("display-horizontal")).toBe(true);
  expect(tabs.className.includes("customclass")).toBe(true);
});

it("test:2 for TabContainer Basic Vertical", () => {
  render(
    <MudraTabContainer
      id="m_tab_1"
      type={Type.Basic}
      display={Display.Vertical}
      tabs={["Tab1", "Tab2", "Tab3"]}
      tabContents={["tab1 content", "tab2 content", "tab3 content"]}
      className="customclass"
    />
  );

  const tabs = screen.getByTestId("mudra_tabContainer");

  // Test:2 for TabContainer Existence
  expect(tabs).not.toBeNull();

  // Test:2 for TabContainer Classes
  expect(tabs.className.includes("mudra-tabContainer")).toBe(true);
  expect(tabs.className.includes("type-basic")).toBe(true);
  expect(tabs.className.includes("display-vertical")).toBe(true);
  expect(tabs.className.includes("customclass")).toBe(true);
});

it("test:3 for TabContainer Scrollable Horizontal", () => {
  render(
    <MudraTabContainer
      id="m_tab_1"
      type={Type.Scrollable}
      display={Display.Horizontal}
      tabs={["Tab1", "Tab2", "Tab3"]}
      tabContents={["tab1 content", "tab2 content", "tab3 content"]}
      className="customclass"
    />
  );

  const tabs = screen.getByTestId("mudra_tabContainer");

  // Test:3 for TabContainer Existence
  expect(tabs).not.toBeNull();

  // Test:3 for TabContainer Classes
  expect(tabs.className.includes("mudra-tabContainer")).toBe(true);
  expect(tabs.className.includes("type-scrollable")).toBe(true);
  expect(tabs.className.includes("display-horizontal")).toBe(true);
  expect(tabs.className.includes("customclass")).toBe(true);
});

it("test:4 for TabContainer Basic Horizontal", () => {
  render(
    <MudraTabContainer
      id="m_tab_1"
      type={Type.Scrollable}
      display={Display.Vertical}
      tabs={["Tab1", "Tab2", "Tab3"]}
      tabContents={["tab1 content", "tab2 content", "tab3 content"]}
      className="customclass"
    />
  );

  const tabs = screen.getByTestId("mudra_tabContainer");

  // Test:4 for TabContainer Existence
  expect(tabs).not.toBeNull();

  // Test:4 for TabContainer Classes
  expect(tabs.className.includes("mudra-tabContainer")).toBe(true);
  expect(tabs.className.includes("type-scrollable")).toBe(true);
  expect(tabs.className.includes("display-vertical")).toBe(true);
  expect(tabs.className.includes("customclass")).toBe(true);
});
