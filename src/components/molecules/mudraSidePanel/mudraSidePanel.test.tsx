import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MudraSidePanel from "./mudraSidePanel";
import { AnimationType } from "./propTypes";

it("test:1 for side panel basic ", () => {
  render(
    <MudraSidePanel
      onClick={() => console.info("clicked")}
      open={true}
      title="Refer Case"
      className="basic_panel"
    />
  );

  const sidePanel = screen.getByTestId("mudra_sidePanel");
  // Test:1 for accordion Existence
  expect(sidePanel).not.toBeNull();
  // Test:1 for button Classes
  expect(sidePanel.className.includes("mudra-sidePanel")).toBe(true);
  expect(sidePanel.className.includes("basic_panel")).toBe(true);
});

it("test:2 for side panel with escape ", () => {
  render(
    <MudraSidePanel
      onClick={() => console.info("clicked")}
      open={true}
      title="Refer Case"
      className="basic_panel"
    />
  );

  const sidePanel = screen.getByTestId("mudra_sidePanel");
  // Test:1 for accordion Existence
  expect(sidePanel).not.toBeNull();
  // Test:1 for button Classes
  expect(sidePanel.className.includes("mudra-sidePanel")).toBe(true);
  expect(sidePanel.className.includes("basic_panel")).toBe(true);
  fireEvent.keyDown(sidePanel, {
    key: "Escape",
    code: "Escape",
    keyCode: 27,
    charCode: 27,
  });
  fireEvent.keyDown(sidePanel);
});

it("test:3 for side panel basic escape key", () => {
  const onClickSpy = jest.fn();
  render(
    <MudraSidePanel
      panelWidth="200"
      onClick={onClickSpy}
      open={false}
      title="Refer Case"
      useInternalHeader={true}
    />
  );

  const sidePanel = screen.getByTestId("mudra_sidePanel");
  // Test:1 for accordion Existence
  expect(sidePanel).not.toBeNull();
  // Test:1 for button Classes
  expect(sidePanel.className.includes("mudra-sidePanel")).toBe(true);

  const closeIcon = screen.getByTestId("mudra_sidePanel_close_icon");
  expect(closeIcon).toBeTruthy();
  fireEvent.click(closeIcon);
  expect(onClickSpy).toBeCalled();
});

it("test:4 for side panel with animation", () => {
  const onClickSpy = jest.fn();
  render(
    <MudraSidePanel
      panelWidth="200"
      onClick={onClickSpy}
      open={false}
      animationType={AnimationType.Left}
    />
  );

  const sidePanel = screen.getByTestId("mudra_sidePanel");
  // Test:1 for accordion Existence
  expect(sidePanel).not.toBeNull();
  // Test:1 for button Classes
  expect(sidePanel.className.includes("mudra-sidePanel")).toBe(true);
  expect(sidePanel.className.includes("animationFrom-left")).toBe(true);
  expect(sidePanel.className.includes("background-blur")).toBe(false);
});

it("test:5 for side panel onOpen", () => {
  const onClickSpy = jest.fn();
  const onOpen = jest.fn();
  render(
    <MudraSidePanel
      panelWidth="200"
      onClick={onClickSpy}
      onOpen={onOpen}
      open={true}
    />
  );

  const sidePanel = screen.getByTestId("mudra_sidePanel");
  // Test:1 for accordion Existence
  expect(sidePanel).not.toBeNull();
  // Test:1 for button Classes
  expect(sidePanel.className.includes("mudra-sidePanel")).toBe(true);
  expect(sidePanel.className.includes("background-blur")).toBe(false);

  expect(onOpen).toBeCalled();
});

it("test:6 for side panel with background blur", () => {
  const onClickSpy = jest.fn();
  render(
    <MudraSidePanel
      panelWidth="200"
      onClick={onClickSpy}
      open={false}
      backgroundBlur
    />
  );

  const sidePanel = screen.getByTestId("mudra_sidePanel");
  // Test:1 for accordion Existence
  expect(sidePanel).not.toBeNull();
  // Test:1 for button Classes
  expect(sidePanel.className.includes("mudra-sidePanel")).toBe(true);
  expect(sidePanel.className.includes("background-blur")).toBe(true);
});
