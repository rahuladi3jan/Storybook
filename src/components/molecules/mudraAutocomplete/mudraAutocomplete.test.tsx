import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import MudraAutocomplete from "./mudraAutocomplete";
const options = [
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "red", label: "Red" },
  { value: "yellow", label: "Yellow" },
  { value: "orange", label: "Orange" },
  { value: "pink", label: "Pink" },
  { value: "purple", label: "Purple" },
  { value: "grey", label: "Grey" },
];
describe("mudra-autocomplete-integration", () => {
  it("test:1 for basic autocomplete", () => {
    render(<MudraAutocomplete options={options} />);
    // test 1: check autocomplete
    const autocomplete = screen.getByTestId("mudra_autocomplete");
    expect(autocomplete.className.includes("mudra-autocomplete")).toBe(true);
    // test 1: check autocomplete base
    expect(
      within(autocomplete).getByTestId("mudra_autocomplete_root")
    ).not.toBeNull();
    // test 1: check menu
    expect(screen.queryByTestId("mudra_menu")).toBeNull();
    const autocompleteBaseInput = screen.getByTestId(
      "mudra_autocomplete_input"
    );
    // test 1: check onClick select base
    fireEvent.click(autocompleteBaseInput);
    expect(screen.queryByTestId("mudra_menu")).not.toBeNull();
  });
  it("test:2 for basic autocomplete functions", () => {
    const onSelectSpy = jest.fn();
    render(<MudraAutocomplete options={options} onSelect={onSelectSpy} />);
    // test 2: check autocomplete
    const autocomplete = screen.getByTestId("mudra_autocomplete");
    expect(autocomplete.className.includes("mudra-autocomplete")).toBe(true);
    // test 2: check autocomplete base
    expect(
      within(autocomplete).getByTestId("mudra_autocomplete_root")
    ).not.toBeNull();
    // test 2: check menu
    expect(screen.queryByTestId("mudra_menu")).toBeNull();
    const autocompleteBaseInput = screen.getByTestId(
      "mudra_autocomplete_input"
    );
    // test 2: check onClick autocomplete base
    fireEvent.click(autocompleteBaseInput);
    expect(screen.queryByTestId("mudra_menu")).not.toBeNull();
    // test 2: check options
    fireEvent.click(screen.getByTestId("mudra_menu")?.children[0]);
    // test 2: check onSelect to be called
    expect(onSelectSpy).toBeCalled();
  });
  it("test:3 for basic autocomplete controlled", () => {
    const onSelectSpy = jest.fn();
    render(
      <MudraAutocomplete
        options={options}
        onSelect={onSelectSpy}
        value={{ value: "", label: "" }}
      />
    );
    // test 3: check autocomplete
    const autocomplete = screen.getByTestId("mudra_autocomplete");
    expect(autocomplete.className.includes("mudra-autocomplete")).toBe(true);
    // test 3: check autocomplete base
    expect(
      within(autocomplete).getByTestId("mudra_autocomplete_root")
    ).not.toBeNull();
    // test 3: check menu
    expect(screen.queryByTestId("mudra_menu")).toBeNull();
    const autocompleteBaseInput = screen.getByTestId(
      "mudra_autocomplete_input"
    );
    // test 3: check onClick autocomplete base
    fireEvent.click(autocompleteBaseInput);
    expect(screen.queryByTestId("mudra_menu")).not.toBeNull();
    // test 3: check options
    fireEvent.click(screen.getByTestId("mudra_menu")?.children[0]);
    // test 3: check onSelect to be called
    expect(onSelectSpy).toBeCalled();
  });
  it("test:4 for basic autocomplete search", () => {
    const onSelectSpy = jest.fn();
    render(
      <MudraAutocomplete
        options={options}
        onSelect={onSelectSpy}
        className="test-class"
      />
    );
    // test 4: check autocomplete
    const autocomplete = screen.getByTestId("mudra_autocomplete");
    expect(autocomplete.className.includes("mudra-autocomplete")).toBe(true);
    expect(autocomplete.className.includes("test-class")).toBe(true);
    // test 4: check autocomplete base
    expect(
      within(autocomplete).getByTestId("mudra_autocomplete_root")
    ).not.toBeNull();
    // test 4: check menu
    expect(screen.queryByTestId("mudra_menu")).toBeNull();
    const autocompleteBaseInput = screen.getByTestId(
      "mudra_autocomplete_input"
    ) as HTMLInputElement;
    // test 4: check onClick autocomplete base
    fireEvent.click(autocompleteBaseInput);
    expect(screen.queryByTestId("mudra_menu")).not.toBeNull();
    // test 4: check options
    fireEvent.click(screen.getByTestId("mudra_menu")?.children[0]);
    // test 4: check onSelect to be called
    expect(onSelectSpy).toBeCalled();
    fireEvent.change(autocompleteBaseInput, { target: { value: "new value" } });
    expect(screen.getByTestId("mudra_menu")?.children.length).toBe(0);
    fireEvent.change(autocompleteBaseInput, { target: { value: " " } });
  });
  it("test:5 for basic autocomplete search with empty options", () => {
    const onSelectSpy = jest.fn();
    render(<MudraAutocomplete onSelect={onSelectSpy} className="test-class" />);
    // test 5: check autocomplete
    const autocomplete = screen.getByTestId("mudra_autocomplete");
    expect(autocomplete.className.includes("mudra-autocomplete")).toBe(true);
    expect(autocomplete.className.includes("test-class")).toBe(true);
    // test 5: check autocomplete base
    expect(
      within(autocomplete).getByTestId("mudra_autocomplete_root")
    ).not.toBeNull();
    // test 5: check menu
    expect(screen.queryByTestId("mudra_menu")).toBeNull();
    const autocompleteBaseInput = screen.getByTestId(
      "mudra_autocomplete_input"
    ) as HTMLInputElement;
    // test 5: check onClick autocomplete base
    fireEvent.click(autocompleteBaseInput);
  });
});
