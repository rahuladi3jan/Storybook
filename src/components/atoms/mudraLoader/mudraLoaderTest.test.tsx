import React from "react";
import { render, screen } from "@testing-library/react";
import MudraLoader from "./mudraLoader";
import { MudraLoaderSize } from "./types";

describe("mudra-loader", () => {
  it("test:1 for mudra loader", () => {
    render(<MudraLoader />);
    // test 1: check loader class
    const loader = screen.getByTestId("mudra_loader");
    expect(loader.className.includes("mudra-loader")).toBe(true);
  });
  it("test:2 for mudra loader sizes", () => {
    render(<MudraLoader size={MudraLoaderSize.large} />);
    // test 2: check loader class
    const loader = screen.getByTestId("mudra_loader");
    expect(loader.className.includes("mudra-loader")).toBe(true);
    const spinner = screen.getByTestId("mudra_loader_spinner");
    expect(spinner.className.includes("large")).toBe(true);
  });
});
