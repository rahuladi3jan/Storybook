import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MudraHeader from "./mudraHeader";
import MudraButton from "../../atoms/mudraButton/mudraButton";
import {
  Variant,
  Size as ButtonSize,
  IconAlignment,
  Width,
  State,
} from "../../atoms/mudraButton/propTypes";
import { Logout } from "../../../icons";
import { MudraAvatarSize, MudraAvatarType } from "../../atoms/mudraAvatar";
describe("mudra-header", () => {
  it("test:1 for basic header", () => {
    const onClickSpy = jest.fn();
    render(
      <MudraHeader
        heading="Tele Sales"
        homePageUrl="https://www.storybookfinance.com/"
        userAvatarProps={{
          type: MudraAvatarType.Text,
          size: MudraAvatarSize.Small,
          name: "Avatar",
        }}
        contextMenu={
          <div
            style={{
              marginRight: "100px",
            }}
          >
            <MudraButton
              {...{
                variant: Variant.Ghost,
                size: ButtonSize.Medium,
                width: Width.Auto,
                iconAlignment: IconAlignment.RightAligned,
                state: State.Enabled,
                label: "Logout",
                icon: Logout,
              }}
            />
          </div>
        }
        centerElement={
          <div
            style={{
              color: "white",
              fontSize: "14px",
            }}
          >
            Mudra Elements
          </div>
        }
        onLogoOrBrandNameClicked={onClickSpy}
      />
    );
    const header = screen.getByTestId("mudra_header_root");
    expect(header).toBeTruthy();
    const headerLeftContainer = screen.getByTestId(
      "mudra_header_left_container"
    );
    expect(headerLeftContainer).toBeTruthy();
    fireEvent.click(headerLeftContainer);
    expect(onClickSpy).toBeCalled();
  });
  it("test:2 for basic header no click function", () => {
    render(
      <MudraHeader
        heading="Tele Sales"
        homePageUrl="https://www.storybookfinance.com/"
        userAvatarProps={{
          type: MudraAvatarType.Text,
          size: MudraAvatarSize.Small,
          name: "Avatar",
        }}
        contextMenu={
          <div
            style={{
              marginRight: "100px",
            }}
          >
            <MudraButton
              {...{
                variant: Variant.Ghost,
                size: ButtonSize.Medium,
                width: Width.Auto,
                iconAlignment: IconAlignment.RightAligned,
                state: State.Enabled,
                label: "Logout",
                icon: Logout,
              }}
            />
          </div>
        }
        centerElement={
          <div
            style={{
              color: "white",
              fontSize: "14px",
            }}
          >
            Mudra Elements
          </div>
        }
      />
    );
    const header = screen.getByTestId("mudra_header_root");
    expect(header).toBeTruthy();
    const headerLeftContainer = screen.getByTestId(
      "mudra_header_left_container"
    );
    expect(headerLeftContainer).toBeTruthy();
    fireEvent.click(headerLeftContainer);
  });
});
