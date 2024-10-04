import React from "react";
import { render, screen } from "@testing-library/react";
import MudraCard from "./mudraCard";

it("test:1 for card", () => {
  const cardContent = "This is mudra card.";
  render(
    <MudraCard className="checkClass" style={{ color: "red" }}>
      {cardContent}
    </MudraCard>
  );

  const card = screen.getByTestId("mudra_card");

  //Test1: for card content
  expect(card.textContent).toBe(cardContent);

  //Test:1 for card classes
  expect(card.className.includes("checkClass")).toBe(true);
  expect(card.className.includes("mudra-card")).toBe(true);

  // Test:1 for card style
  expect(card.style.color).toBe("red");
});

it("test:2 for card", () => {
  const cardContent = "This is mudra card.";
  render(<MudraCard style={{ color: "red" }}>{cardContent}</MudraCard>);

  const card = screen.getByTestId("mudra_card");

  //Test1: for card content
  expect(card.textContent).toBe(cardContent);

  //Test:1 for card classes
  expect(card.className.includes("mudra-card")).toBe(true);

  // Test:1 for card style
  expect(card.style.color).toBe("red");
});
