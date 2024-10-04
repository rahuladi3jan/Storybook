import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MudraModal from "./mudraModal";

const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
describe("mudra-modal", () => {
  it("test:1 for basic modal", () => {
    const onCloseSpy = jest.fn();
    render(
      <MudraModal title="Refer Case" onClose={onCloseSpy} open={true}>
        {testText}
      </MudraModal>
    );
    const modal = screen.getByTestId("mudra_modal");
    expect(modal).toBeTruthy();
    fireEvent.keyDown(modal, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });
    fireEvent.keyDown(modal);
  });

  it("test:1 for basic modal with different parameters", () => {
    const onCloseSpy = jest.fn();
    render(
      <MudraModal
        title="Refer Case"
        onClose={onCloseSpy}
        open={false}
        animation
        backgroundBlur
        className="test-className"
        width={20}
      >
        {testText}
      </MudraModal>
    );
    const modal = screen.getByTestId("mudra_modal");
    expect(modal).toBeTruthy();
    const closeIcon = screen.getByTestId("mudra_modal_close_icon");
    expect(closeIcon).toBeTruthy();
    fireEvent.click(closeIcon);
    expect(onCloseSpy).toBeCalled();
  });
});
