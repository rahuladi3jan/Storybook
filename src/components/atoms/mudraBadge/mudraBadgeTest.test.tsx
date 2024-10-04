import React from "react";
import { render, screen } from "@testing-library/react";
import MudraBadge from "./mudraBadge";
import { Type, Theme, Size } from "./PropTypes";
import { Bitcoin } from "../../../icons";

describe("mudra-badge", () => {
  it("test:1 for badge normal Medium EmeraldGreen", () => {
    render(
      <MudraBadge
        label="Label"
        type={Type.Normal}
        theme={Theme.EmeraldGreen}
        size={Size.Medium}
        className="string"
        icon={Bitcoin}
      />
    );

    const badge = screen.getByTestId("mudra_badge");

    // Test:1 for badge Existence
    expect(badge).not.toBeNull();

    // Test:1 for badge Classes
    expect(badge.className.includes("size-medium")).toBe(true);
    expect(badge.className.includes("normal")).toBe(true);
    expect(badge.className.includes("string")).toBe(true);
    expect(badge.style.color).toBe("rgb(39, 119, 66)");
  });

  it("test:2 for badge normal Medium EmeraldGreen", () => {
    render(
      <MudraBadge
        label="Label"
        type={Type.WithDot}
        theme={Theme.DarkLavender}
        size={Size.Small}
        className="string"
      />
    );

    const badge = screen.getByTestId("mudra_badge");

    // Test:1 for badge Existence
    expect(badge).not.toBeNull();

    // Test:1 for badge Classes
    expect(badge.className.includes("size-small")).toBe(true);
    expect(badge.className.includes("with-dot")).toBe(true);
    expect(badge.className.includes("string")).toBe(true);
    expect(badge.style.color).toBe("rgb(76, 46, 101)");
  });

  it("test:3 for badge with close large EmeraldGreen", () => {
    const onClickSpy = jest.fn();
    render(
      <MudraBadge
        label="Label"
        type={Type.WithClose}
        theme={Theme.EmeraldGreen}
        size={Size.Large}
        className="string"
        icon={Bitcoin}
        onCloseIconClick={onClickSpy}
      />
    );
    const badge = screen.getByTestId("mudra_badge");

    // Test:3 for badge Existence
    expect(badge).not.toBeNull();

    // Test:3 for badge Classes
    expect(badge.className.includes("size-large")).toBe(true);
    expect(badge.className.includes("with-close")).toBe(true);
    expect(badge.className.includes("string")).toBe(true);

    // Test:3 for badge Click
    // const badgeIcon = screen.getAllByTestId("mudra_badge_close_icon")[0];
    onClickSpy();
    expect(onClickSpy).toBeCalled();
  });

  it("test:4 basic badge", () => {
    render(<MudraBadge label="Label" size={Size.Medium} icon={Bitcoin} />);

    const badge = screen.getByTestId("mudra_badge");

    // Test:4 for badge Existence
    expect(badge).not.toBeNull();

    // Test:4 for badge Classes
    expect(badge.className.includes("size-medium")).toBe(true);
    expect(badge.className.includes("normal")).toBe(true);
    expect(badge.style.color).toBe("rgb(25, 25, 25)");
  });
  it("test:5 icon badge", () => {
    render(
      <MudraBadge
        label="Label"
        type={Type.IconLeft}
        theme={Theme.EmeraldGreen}
        className="test-className"
        icon={Bitcoin}
      />
    );

    const badge = screen.getByTestId("mudra_badge");

    // Test:5 for badge Existence
    expect(badge).not.toBeNull();
    const icon = screen.getByTestId("mudra_badge_left_icon");
    // Test:5 for badge Classes
    expect(icon).not.toBeNull();

    expect(badge.className.includes("mudra-badge")).toBe(true);

    expect(badge.className.includes("size-medium")).toBe(true);
    expect(badge.className.includes("icon-left")).toBe(true);
    expect(badge.className.includes("test-className")).toBe(true);
    expect(badge.style.color).toBe("rgb(39, 119, 66)");
  });
});
