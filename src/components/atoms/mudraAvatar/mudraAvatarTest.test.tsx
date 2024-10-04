import React from "react";
import { render, screen } from "@testing-library/react";
import MudraAvatar from "./mudraAvatar";
import { Type, Size, Status } from "./propTypes";

describe("mudra-avatar", () => {
  it("test:1 for avatar Medium image available ", () => {
    render(
      <MudraAvatar
        type={Type.Image}
        size={Size.Medium}
        imageUrl="/assets/images/pngs/persona.png"
        status={Status.Available}
      />
    );

    const avatar = screen.getByTestId("mudra_avatar");

    // Test:1 for avatar Existence
    expect(avatar).not.toBeNull();

    // Test:1 for button Classes
    expect(avatar.className.includes("type-image")).toBe(true);
    expect(avatar.className.includes("size-medium")).toBe(true);
    expect(avatar.className.includes("status-available")).toBe(true);
  });

  it("test:2 for avatar xl image busy ", () => {
    render(
      <MudraAvatar
        type={Type.Image}
        size={Size.XL}
        imageUrl="/assets/images/pngs/persona.png"
        status={Status.Busy}
      />
    );

    const avatar = screen.getByTestId("mudra_avatar");

    // Test:2 for avatar Existence
    expect(avatar).not.toBeNull();

    // Test:2 for button Classes
    expect(avatar.className.includes("type-image")).toBe(true);
    expect(avatar.className.includes("size-xl")).toBe(true);
    expect(avatar.className.includes("status-busy")).toBe(true);
  });

  it("test:3 for avatar small placeholder away", () => {
    render(
      <MudraAvatar
        type={Type.Placeholder}
        size={Size.Small}
        imageUrl="/assets/images/pngs/persona.png"
        status={Status.Away}
      />
    );

    const avatar = screen.getByTestId("mudra_avatar");

    // Test:3 for avatar Existence
    expect(avatar).not.toBeNull();

    // Test:3 for button Classes
    expect(avatar.className.includes("type-placeholder")).toBe(true);
    expect(avatar.className.includes("size-small")).toBe(true);
    expect(avatar.className.includes("status-away")).toBe(true);

    // Test:3 for avatar placeholder svg
    // expect(avatar.textContent?.includes(".svg")).toBe(true);
  });

  it("test:4 for avatar Medium image available ", () => {
    render(
      <MudraAvatar
        type={Type.Text}
        size={Size.Large}
        status={Status.Available}
        name="Avatar"
      />
    );

    const avatar = screen.getByTestId("mudra_avatar");

    // Test:4 for avatar Existence
    expect(avatar).not.toBeNull();

    // Test:4 for button Classes
    expect(avatar.className.includes("type-text")).toBe(true);
    expect(avatar.className.includes("size-large")).toBe(true);
    expect(avatar.className.includes("status-available")).toBe(true);

    // Test:4 for avatar name first letter
    expect(avatar.textContent?.includes("A")).toBe(true);
  });

  it("test:5 basic avatar", () => {
    render(<MudraAvatar name="Avatar" className="test-class" />);

    const avatar = screen.getByTestId("mudra_avatar");
    // Test:5 for avatar Existence
    expect(avatar).not.toBeNull();

    // Test:5 for button Classes
    expect(avatar.className.includes("mudra-avatar")).toBe(true);
    expect(avatar.className.includes("type-text")).toBe(true);
    expect(avatar.className.includes("size-medium")).toBe(true);
    expect(avatar.className.includes("status-available")).not.toBe(true);
    expect(avatar.className.includes("test-class")).toBe(true);

    // Test:5 for avatar name first letter
    expect(avatar.textContent?.includes("A")).toBe(true);
  });
});
