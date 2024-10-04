import React, { useRef } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MudraTooltip from "./mudraTooltip";

import {
  ToolTipAlignment,
  BeakSize,
  Direction,
  RenderCondition,
  Theme,
} from "./propTypes";
import MudraButton from "../mudraButton/mudraButton";
export const CommonComponent: React.FunctionComponent<any> = ({
  label,
  direction = undefined,
  beakSize = undefined,
  alignment = undefined,
  gap = undefined,
  renderCondition,
  theme = undefined,
  children = undefined,
  largeParent = false,
}) => {
  const parentRef = useRef(null);

  return (
    <div
      ref={parentRef}
      data-testid="tooltip_test_container"
      style={{ width: largeParent ? "10px" : "auto" }}
    >
      <MudraButton label={label} />
      <MudraTooltip
        direction={direction}
        beakSize={beakSize}
        alignment={alignment}
        gap={gap}
        renderCondition={renderCondition}
        theme={theme}
        parentRef={parentRef}
      >
        {children}
      </MudraTooltip>
    </div>
  );
};
const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

describe("mudra-tooltip", () => {
  it("test:1 basic tooltip hover", async () => {
    render(
      <CommonComponent
        label={`Tooltip Themes`}
        direction={Direction.Bottom}
        beakSize={BeakSize.Medium}
        alignment={ToolTipAlignment.Start}
        gap={5}
        renderCondition={RenderCondition.Hover}
        theme={Theme.Light}
      >
        {testText}
      </CommonComponent>
    );
    const tooltipContainer = screen.getByTestId("tooltip_test_container");
    expect(tooltipContainer).toBeTruthy();
    fireEvent.mouseEnter(tooltipContainer);
    const tooltip = screen.getByTestId("mudra_tooltip");
    expect(tooltip).toBeTruthy();
    fireEvent.mouseLeave(tooltipContainer);
  });
  it("test:2 basic tooltip click", async () => {
    render(
      <CommonComponent
        label={`Tooltip Themes`}
        direction={Direction.Bottom}
        beakSize={BeakSize.Medium}
        alignment={ToolTipAlignment.End}
        gap={5}
        renderCondition={RenderCondition.Click}
        theme={Theme.Light}
      >
        {testText}
      </CommonComponent>
    );
    const tooltipContainer = screen.getByTestId("tooltip_test_container");
    expect(tooltipContainer).toBeTruthy();
    fireEvent.mouseDown(tooltipContainer);
    const tooltip = screen.getByTestId("mudra_tooltip");
    expect(tooltip).toBeTruthy();
    fireEvent.mouseDown(tooltipContainer);
  });
  it("test:3 basic tooltip alignment center", async () => {
    render(
      <CommonComponent
        label={`Tooltip Themes`}
        direction={Direction.Bottom}
        beakSize={BeakSize.Medium}
        alignment={ToolTipAlignment.Center}
        gap={5}
        renderCondition={RenderCondition.Click}
        theme={Theme.Light}
      >
        {testText}
      </CommonComponent>
    );
  });
  test.each([
    [Direction.Bottom, ToolTipAlignment.Center],
    [Direction.Bottom, ToolTipAlignment.End],
    [Direction.Bottom, ToolTipAlignment.Start],
    [Direction.Top, ToolTipAlignment.Center],
    [Direction.Top, ToolTipAlignment.End],
    [Direction.Top, ToolTipAlignment.Start],
    [Direction.Left, ToolTipAlignment.Center],
    [Direction.Left, ToolTipAlignment.End],
    [Direction.Left, ToolTipAlignment.Start],
    [Direction.Right, ToolTipAlignment.Center],
    [Direction.Right, ToolTipAlignment.End],
    [Direction.Right, ToolTipAlignment.Start],
  ])(
    "test:4 basic tooltip direction %direction and alignment %alignment",
    (direction, alignment) => {
      render(
        <CommonComponent
          label={`Tooltip Themes`}
          direction={direction}
          beakSize={BeakSize.Medium}
          alignment={alignment}
          gap={5}
          renderCondition={RenderCondition.Hover}
          theme={Theme.Light}
        >
          {testText}
        </CommonComponent>
      );
      const tooltipContainer = screen.getByTestId("tooltip_test_container");
      expect(tooltipContainer).toBeTruthy();
      fireEvent.mouseEnter(tooltipContainer);
      const tooltip = screen.getByTestId("mudra_tooltip");
      expect(tooltip).toBeTruthy();
      fireEvent.mouseLeave(tooltipContainer);
    }
  );
  test.each([
    [Direction.Bottom, ToolTipAlignment.Center],
    [Direction.Bottom, ToolTipAlignment.End],
    [Direction.Bottom, ToolTipAlignment.Start],
    [Direction.Top, ToolTipAlignment.Center],
    [Direction.Top, ToolTipAlignment.End],
    [Direction.Top, ToolTipAlignment.Start],
    [Direction.Left, ToolTipAlignment.Center],
    [Direction.Left, ToolTipAlignment.End],
    [Direction.Left, ToolTipAlignment.Start],
    [Direction.Right, ToolTipAlignment.Center],
    [Direction.Right, ToolTipAlignment.End],
    [Direction.Right, ToolTipAlignment.Start],
  ])(
    "test:5 basic tooltip direction %direction and alignment %alignment and width greater than parent DOM",
    (direction, alignment) => {
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
        <CommonComponent
          largeParent
          label={`Tooltip Themes`}
          direction={direction}
          beakSize={BeakSize.Medium}
          alignment={alignment}
          gap={5}
          renderCondition={RenderCondition.Hover}
          theme={Theme.Light}
        >
          {testText}
        </CommonComponent>
      );
      const tooltipContainer = screen.getByTestId("tooltip_test_container");
      expect(tooltipContainer).toBeTruthy();
      fireEvent.mouseEnter(tooltipContainer);
      const tooltip = screen.getByTestId("mudra_tooltip");
      expect(tooltip).toBeTruthy();
      fireEvent.mouseLeave(tooltipContainer);
    }
  );
  it("test:6 basic tooltip default", async () => {
    render(
      <CommonComponent
        label={`Tooltip Themes`}
        renderCondition={RenderCondition.Hover}
      >
        {testText}
      </CommonComponent>
    );
    const tooltipContainer = screen.getByTestId("tooltip_test_container");
    expect(tooltipContainer).toBeTruthy();
    fireEvent.mouseEnter(tooltipContainer);
    const tooltip = screen.getByTestId("mudra_tooltip");
    expect(tooltip).toBeTruthy();
    fireEvent.mouseLeave(tooltipContainer);
  });
});
