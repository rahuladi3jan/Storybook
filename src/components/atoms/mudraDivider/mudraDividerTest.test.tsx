import React from "react";
import { render, screen } from "@testing-library/react";
import MudraDivider from "./mudraDivider";

describe("mudra-divider", () => {
  it("test:1 for mudra divider", () => {
    render(<MudraDivider />);
    // test 1: check divider class
    const divider = screen.getByTestId("mudra_divider");
    expect(divider.className.includes("mudra-divider")).toBe(true);
  });
  it("test:2 for mudra divider types", () => {
    render(<MudraDivider vertical />);
    // test 2: check divider class
    const divider = screen.getByTestId("mudra_divider");
    expect(divider.className.includes("mudra-divider")).toBe(true);
    expect(divider.className.includes("vertical")).toBe(true);
  });
  it("test:3 for mudra divider style", () => {
    render(<MudraDivider dashed color="#fff" />);
    // test 3: check style class
    const divider = screen.getByTestId("mudra_divider");
    expect(divider.className.includes("mudra-divider")).toBe(true);
    expect(divider.style.borderStyle).toBe("dashed");
    expect(divider.style.borderColor).toBe("#fff");
  });
});
