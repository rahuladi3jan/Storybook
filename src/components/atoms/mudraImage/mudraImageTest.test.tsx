import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MudraImage from "./mudraImage";
const imageLogo =
  "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?cs=srgb&dl=pexels-maxime-francis-2246476.jpg&fm=jpg";
describe("mudra-image", () => {
  it("test:1 for Image No loading", () => {
    render(
      <MudraImage src={imageLogo} alt="testImage" isEnableLoading={false} />
    );
    // test 1: check root classes
    const imageRoot = screen.getByTestId("mudra_image-root");
    expect(imageRoot).toBeTruthy();
    expect(imageRoot.className.includes("mudra-image")).toBe(true);
    // test 1: check container class
    const imageContainer = screen.getByTestId("mudra_image-container");
    expect(imageContainer).toBeTruthy();
    expect(imageContainer.className.includes("image-container")).toBe(true);
    // test 1: check image component
    const image = screen.getByTestId("mudra_image") as HTMLImageElement;
    expect(image.hasAttribute("src")).toBe(true);
    expect(image.hasAttribute("alt")).toBe(true);
    expect(image.getAttribute("src")).toBe(imageLogo);
    expect(image.getAttribute("alt")).toBe("testImage");
    expect(image.getAttribute("loading")).toBeNull();
  });

  it("test:2 for Image with loading", () => {
    const onLoadSpy = jest.fn();
    render(
      <MudraImage
        src={imageLogo}
        alt="testImage"
        isEnableLoading={true}
        onLoad={onLoadSpy}
      />
    );
    // test 2: check container classes
    const imageRoot = screen.getByTestId("mudra_image-root");
    expect(imageRoot).toBeTruthy();
    expect(imageRoot.className.includes("mudra-image")).toBe(true);
    // test 2: check loader
    const loader = screen.getByTestId("mudra_image-loader");
    expect(loader).toBeTruthy();
    expect(loader.style.display.includes("block")).toBe(true);
    // test 2: check container class
    const imageContainer = screen.getByTestId("mudra_image-container");
    expect(imageContainer).toBeTruthy();
    expect(imageContainer.className.includes("image-container")).toBe(true);
    // test 2: check image component
    const image = screen.getByTestId("mudra_image") as HTMLImageElement;
    expect(image.hasAttribute("src")).toBe(true);
    expect(image.hasAttribute("alt")).toBe(true);
    expect(image.getAttribute("src")).toBe(imageLogo);
    expect(image.getAttribute("alt")).toBe("testImage");
    expect(image.getAttribute("loading")).toBe("lazy");
    fireEvent.load(image);
    expect(onLoadSpy).toBeCalled();
  });
});
