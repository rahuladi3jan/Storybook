/* eslint-disable prettier/prettier */
import React from "react";
import MudraSearchBar from "./mudraSearchBar";
import {
  getByText,
  render,
  fireEvent,
  queryByText,
  getByRole,
  getByTestId,
  queryByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const onSearchMock = jest.fn();
describe("Validate contents of searchbar", () => {
  test("test1: Prefix of searchbar on focus", () => {
    const searchBar = render(
      <MudraSearchBar onSearch={onSearchMock} prefix="Mr/Mrs" />
    ).baseElement;
    const searchInputField = getByRole(searchBar, "textbox");
    fireEvent.focusIn(searchInputField);
    const prefix = getByText(searchBar, "Mr/Mrs");
    expect(prefix).toBeInTheDocument();
  });
  test("test2: prefix of searchbar hidden on focusout", () => {
    const searchBar = render(
      <MudraSearchBar onSearch={onSearchMock} prefix="Mr/Mrs" />
    ).baseElement;
    const searchInputField = getByRole(searchBar, "textbox");
    fireEvent.focusIn(searchInputField);
    fireEvent.blur(searchInputField);
    const prefix = queryByText(searchBar, "Mr/Mrs");
    expect(prefix).not.toBeInTheDocument();
  });
  test("test3: Placeholder text rendered ", () => {
    const searchBar = render(
      <MudraSearchBar
        onSearch={onSearchMock}
        prefix="Mr/Mrs"
        placeholder="Enter name"
      />
    ).baseElement;
    const searchInputField = getByRole(searchBar, "textbox");
    expect(searchInputField).toHaveAttribute("placeholder", "Enter name");
  });
  test("test4: Search icon rendered ", () => {
    const searchBar = render(
      <MudraSearchBar
        onSearch={onSearchMock}
        prefix="Mr/Mrs"
        placeholder="Enter name"
      />
    ).baseElement;
    const searchIcon = getByTestId(searchBar, "mudra_searchbar_searchIcon");
    expect(searchIcon).toBeInTheDocument();
  });
  test("test4: Loader rendered when isLoading is true", () => {
    const searchBar = render(
      <MudraSearchBar
        onSearch={onSearchMock}
        prefix="Mr/Mrs"
        placeholder="Enter name"
        isLoading={true}
      />
    ).baseElement;
    const loader = getByTestId(searchBar, "mudra_searchbar_searchLoader");
    const searchIcon = queryByTestId(searchBar, "mudra_searchbar_searchIcon");
    expect(loader).toBeInTheDocument();
    expect(searchIcon).not.toBeInTheDocument();
  });
});

test("test5: Callback function called on change in search text", () => {
  const onChangeMockFn = jest.fn();
  const searchBar = render(
    <MudraSearchBar
      onSearch={onSearchMock}
      prefix="Mr/Mrs"
      placeholder="Enter name"
      onChange={onChangeMockFn}
    />
  ).baseElement;
  const searchInputField = getByRole(searchBar, "textbox");
  fireEvent.change(searchInputField, { target: { value: "Storybook" } });
  expect(onChangeMockFn).toBeCalledTimes(1);
  expect(onChangeMockFn.mock.lastCall[1]).toBe("Storybook");
});

test("test6: Callback function called on search icon clicked", () => {
  onSearchMock.mockClear();
  const searchBar = render(
    <MudraSearchBar
      onSearch={onSearchMock}
      prefix="Mr/Mrs"
      placeholder="Enter name"
    />
  ).baseElement;
  const searchInputField = getByRole(searchBar, "textbox");
  fireEvent.change(searchInputField, { target: { value: "Storybook" } });
  const searchIcon = getByTestId(searchBar, "mudra_searchbar_searchIcon");
  fireEvent.click(searchIcon);
  expect(onSearchMock).toBeCalledTimes(1);
  expect(onSearchMock.mock.lastCall[0]).toBe("Storybook");
});

test("test7: custom class name added to the class list of searchbar", () => {
  const searchBar = render(
    <MudraSearchBar
      onSearch={onSearchMock}
      prefix="Mr/Mrs"
      placeholder="Enter name"
      className="custom-class"
    />
  ).container;
  expect(searchBar.firstChild).toHaveClass("custom-class");
});

describe("Search Results", () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = render(
      <MudraSearchBar
        onSearch={onSearchMock}
        prefix="Mr/Mrs"
        placeholder="Enter name"
        results={Array.from({ length: 13 }).map((_, index) => (
          <div key={Math.random()} style={{ paddingLeft: "8px" }}>
            {index + " Search Result"}
          </div>
        ))}
      />
    ).container;
  });
  test("test8: Search Results visible", () => {
    const searchResultsWrapper = getByTestId(
      container,
      "mudra_searchbar_results"
    );
    expect(searchResultsWrapper).toHaveStyle("visibility:visible");
  });
  test("test9: 5 Search results visible by default", () => {
    const searchResultsWrapper = getByTestId(
      container,
      "mudra_searchbar_results"
    );
    expect(searchResultsWrapper.firstChild?.childNodes.length).toBe(5);
  });
  test("test10: More button rendered when results are more than 5", () => {
    const searchResultsWrapper = getByTestId(
      container,
      "mudra_searchbar_results"
    );
    const moreBtn = getByRole(searchResultsWrapper, "button", { name: /More/ });
    expect(moreBtn).toBeInTheDocument();
  });
  test("test12: More button hidden on rendering all search results", () => {
    const searchResultsWrapper = getByTestId(
      container,
      "mudra_searchbar_results"
    );
    const moreBtn = getByRole(searchResultsWrapper, "button", { name: /More/ });
    fireEvent.click(moreBtn);
    fireEvent.click(moreBtn);
    expect(searchResultsWrapper.firstChild?.childNodes.length).toBe(13);
    expect(moreBtn).not.toBeInTheDocument();
  });
  test("test13: Search callback called on clicking enter", () => {
    onSearchMock.mockClear();
    const searchInputField = getByRole(container, "textbox");
    userEvent.click(searchInputField);
    userEvent.keyboard("Storybook");
    userEvent.keyboard("{enter}");
    expect(onSearchMock).toBeCalled();
    expect(onSearchMock.mock.lastCall[0]).toBe("Storybook");
  });
});
test("test13: Search text prop will render search text in search bar", () => {
  const container = render(
    <MudraSearchBar
      onSearch={onSearchMock}
      prefix="Mr/Mrs"
      searchText="Vaani"
      placeholder="Enter name"
      results={Array.from({ length: 13 }).map((_, index) => (
        <div key={Math.random()} style={{ paddingLeft: "8px" }}>
          {index + " Search Result"}
        </div>
      ))}
    />
  ).container;
  const searchInputField = getByRole(container, "textbox") as HTMLInputElement;
  expect(searchInputField.value).toBe("Vaani");
});
test("test14: All test results are rendered if test results less than 5", () => {
  const container = render(
    <MudraSearchBar
      onSearch={onSearchMock}
      prefix="Mr/Mrs"
      placeholder="Enter name"
      results={Array.from({ length: 4 }).map((_, index) => (
        <div key={Math.random()} style={{ paddingLeft: "8px" }}>
          {index + " Search Result"}
        </div>
      ))}
    />
  ).container;
  const searchResultsWrapper = getByTestId(
    container,
    "mudra_searchbar_results"
  );
  expect(searchResultsWrapper.firstChild?.childNodes.length).toBe(4);
});
