import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MudraTable from "./mudraTable";
import { Type } from "./propTypes";
describe("mudra-table", () => {
  it("test:1 for table Tabular ", () => {
    render(
      <MudraTable
        type={Type.Tabular}
        headers={["id", "title", "content"]}
        tableRows={[
          ["1", "title one", "content one"],
          ["2", "title two", "content two"],
          ["3", "title three", "content three"],
        ]}
      />
    );

    const table = screen.getByTestId("mudra_table");

    // Test:1 for avatar Existence
    expect(table).not.toBeNull();

    // Test:1 for button Classes
    expect(table.className.includes("mudra-table")).toBe(true);
    expect(table.className.includes("type-tabular")).toBe(true);
    const tableBody = screen.getByTestId("mudra_table_body");
    expect(tableBody.children.length).toBe(3);
    fireEvent.click(tableBody.children[0]);
    fireEvent.click(tableBody.children[0]);
  });

  it("test:2 for table key valued ", () => {
    render(
      <MudraTable
        type={Type.KeyValue}
        tableRows={[
          ["1", "title one"],
          ["2", "title two"],
          ["3", "title three"],
        ]}
      />
    );

    const table = screen.getByTestId("mudra_table");

    // Test:1 for avatar Existence
    expect(table).not.toBeNull();

    // Test:1 for button Classes
    expect(table.className.includes("mudra-table")).toBe(true);
    expect(table.className.includes("type-keyvalue")).toBe(true);
    const tableBody = screen.getByTestId("mudra_table_body");
    expect(tableBody.children.length).toBe(3);
    fireEvent.click(tableBody.children[0]);
  });

  it("test:3 for table with no type", () => {
    render(
      <MudraTable
        tableWidth="100"
        className="test-class"
        headers={["id", "title", "content"]}
        tableRows={[
          ["1", "title one", "content one"],
          ["2", "title two", "content two"],
          ["3", "title three", "content three"],
        ]}
      />
    );

    const table = screen.getByTestId("mudra_table");

    // Test:1 for avatar Existence
    expect(table).not.toBeNull();
    expect(table.style.width).toBe("100px");

    // Test:1 for button Classes
    expect(table.className.includes("mudra-table")).toBe(true);
    expect(table.className.includes("type-tabular")).toBe(true);
    expect(table.className.includes("test-class")).toBe(true);
  });
});
