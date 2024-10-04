import { getByText, render } from "@testing-library/react";
import MudraContainer from "./mudraContainer";
import "@testing-library/jest-dom";
import React from "react";

test("Mudra Container loads the child components", () => {
  const { container } = render(
    <MudraContainer>
      <div>Component Children</div>
    </MudraContainer>
  );
  const child = getByText(container, "Component Children");
  expect(child).toBeInTheDocument();
});

test("Mudra Container has the background color passed through prop", () => {
  const { container } = render(
    <MudraContainer backgroundColor="#E3F6E9">
      <div>Component Children</div>
    </MudraContainer>
  );
  expect(container.firstChild).toHaveStyle({ "background-color": "#E3F6E9" });
});

test("Mudra Container has the white as default background color", () => {
  const { container } = render(
    <MudraContainer>
      <div>Component Children</div>
    </MudraContainer>
  );
  expect(container.firstChild).toHaveStyle({ "background-color": "#fff" });
});
