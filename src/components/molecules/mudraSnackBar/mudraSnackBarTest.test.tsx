import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MudraSnackBar from "./mudraSnackBar";
import { Type, Theme, Position } from "./propTypes";
import { Star } from "../../../icons";
import "@testing-library/jest-dom";

const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
describe("mudra-snackbar", () => {
  it("test:1 for basic snackbar", () => {
    const onCloseSpy = jest.fn();
    render(
      <MudraSnackBar
        message={testText}
        onClose={onCloseSpy}
        open={true}
        crossIcon
      />
    );
    const snackBar = screen.getByTestId("mudra_snackBar");
    expect(snackBar).toBeTruthy();
    const closeIcon = screen.getByTestId("mudra_snackBar_close_icon");
    expect(closeIcon).toBeTruthy();
    fireEvent.click(closeIcon);
  });
  it("test:2 for basic snackbar autoclose", async () => {
    const onCloseSpy = jest.fn();
    render(
      <MudraSnackBar
        message={testText}
        onClose={onCloseSpy}
        open={true}
        autoClose
        duration={1000}
        className="test-class"
      />
    );
    const snackBar = screen.getByTestId("mudra_snackBar");
    expect(snackBar).toBeTruthy();
    expect(snackBar.className.includes("test-class")).toBe(true);
    await new Promise((res) =>
      setTimeout(() => {
        expect(onCloseSpy).toBeCalled();
        res(true);
      }, 2000)
    );
  });
  test.each([
    [Type.Error, Theme.Dark, Position.LeftBottom],
    [Type.Generic, Theme.Dark, Position.LeftBottom],
    [Type.Success, Theme.Dark, Position.LeftBottom],
    [Type.Warning, Theme.Dark, Position.LeftBottom],
    [Type.Error, Theme.Light, Position.LeftBottom],
    [Type.Generic, Theme.Light, Position.LeftBottom],
    [Type.Success, Theme.Light, Position.LeftBottom],
    [Type.Warning, Theme.Light, Position.LeftBottom],
  ])(
    "test:3 basic tooltip type %type, theme %theme and position %position",
    (type, theme, position) => {
      const onCloseSpy = jest.fn();
      render(
        <MudraSnackBar
          message={testText}
          onClose={onCloseSpy}
          open={true}
          type={type}
          theme={theme}
          position={position}
          autoClose={false}
        />
      );
      const snackBar = screen.getByTestId("mudra_snackBar");
      expect(snackBar).toBeTruthy();
    }
  );
  it("test:4 for basic snackbar close", () => {
    const onCloseSpy = jest.fn();
    render(
      <MudraSnackBar message={testText} onClose={onCloseSpy} open={false} />
    );
  });
  it("test:5 Icon rendered ", () => {
    const onCloseSpy = jest.fn();
    render(
      <MudraSnackBar
        message={testText}
        onClose={onCloseSpy}
        open={false}
        icon={Star}
      />
    );
    const icon = screen.getByTestId("mudra_snackBar_icon");
    expect(icon).toBeInTheDocument();
  });
});
