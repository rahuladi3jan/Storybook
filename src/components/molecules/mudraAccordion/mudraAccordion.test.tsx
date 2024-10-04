import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MudraAccordion from "./mudraAccordion";
import userEvent from "@testing-library/user-event";
import { Bitcoin } from "../../../icons";
import { IconAlignment } from "./propTypes";

it("test:1 for accordion basic ", () => {
  render(
    <MudraAccordion
      id="acc_two"
      title="Accordion"
      className="basic_accordion"
    />
  );

  const accordion = screen.getByTestId("mudra_accordion");

  // Test:1 for accordion Existence
  expect(accordion).not.toBeNull();

  // Test:1 for button Classes
  expect(accordion.className.includes("mudra-accordion")).toBe(true);
  expect(accordion.className.includes("expanded-false")).toBe(true);
  expect(accordion.className.includes("basic_accordion")).toBe(true);

  const icon = screen.getByTestId("mudra_accordion_icon");

  expect(icon.innerHTML.includes("expanded-false")).toBe(true); // initially false
  userEvent.click(icon); // click to make it expanded true
  expect(icon.innerHTML.includes("expanded-true")).toBe(true); // after click true
});

it("test:2 for accordion controlled ", () => {
  const onClickSpy = jest.fn();
  render(
    <MudraAccordion
      onClick={onClickSpy}
      id="acc_two"
      title="Accordion"
      className="basic_accordion"
      initiallyExpanded={true}
    />
  );

  const accordion = screen.getByTestId("mudra_accordion");

  // Test:1 for accordion Existence
  expect(accordion).not.toBeNull();

  // Test:1 for button Classes
  expect(accordion.className.includes("mudra-accordion")).toBe(true);
  expect(accordion.className.includes("expanded-true")).toBe(true);
  expect(accordion.className.includes("basic_accordion")).toBe(true);

  const icon = screen.getByTestId("mudra_accordion_icon");
  const accordionHeader = screen.getByTestId("mudra_accordion_header");
  expect(icon.innerHTML.includes("expanded-true")).toBe(true); // initially false
  fireEvent.click(accordionHeader);
  expect(onClickSpy).toBeCalled();
  // expect(icon.innerHTML.includes("expanded-false")).toBe(true); // after click true
});

it("test:3 for accordion with icon ", () => {
  render(
    <MudraAccordion
      id="acc_three"
      title="Accordion"
      className="basic_accordion"
      icon={Bitcoin}
      iconAlignment={IconAlignment.LeftAligned}
    />
  );

  const accordion = screen.getByTestId("mudra_accordion");

  // Test:1 for accordion Existence
  expect(accordion).not.toBeNull();

  // Test:2 for icon Existence
  const accordion_title = screen.getByTestId("mudra_accordion_title");
  expect(accordion_title.className.includes("left-aligned")).toBe(true);
});
