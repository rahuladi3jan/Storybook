import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MudraAccordionBox from "./mudraAccordionBox";
import MudraAccordion from "../mudraAccordion/mudraAccordion";
import { Type } from "./propTypes";

const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
describe("mudra-accordion-box", () => {
  it("test:1 for basic accordion", () => {
    render(
      <MudraAccordionBox
        id="test-accordion"
        defaultExpanded="true"
        className="test-classname"
      >
        <p>{testText}</p>
      </MudraAccordionBox>
    );
    const accordionBox = screen.getByTestId("mudra_accordionBox");
    expect(accordionBox).toBeTruthy();
    expect(accordionBox.className.includes("expanded-true"));
    expect(accordionBox.className.includes("test-classname"));
  });

  it("test:2 for basic accordion", () => {
    render(
      <MudraAccordionBox id="test-accordion" type={Type.Advance}>
        <MudraAccordion id="acc_one" title="Accordion One">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>
      </MudraAccordionBox>
    );
    const accordionBox = screen.getByTestId("mudra_accordionBox");
    expect(accordionBox).toBeTruthy();
    expect(accordionBox.className.includes("expanded-false"));
    expect(accordionBox.className.includes("test-classname"));
    const accordion = screen.getByTestId("mudra_accordion");
    expect(accordion).not.toBeNull();
    expect(accordion.className.includes("mudra-accordion")).toBe(true);
    const icon = screen.getByTestId("mudra_accordion_icon");
    expect(icon.innerHTML.includes("expanded-false")).toBe(true); // initially false
    fireEvent.click(icon); // click to make it expanded true
    expect(accordion.className.includes("expanded-true")).toBe(true);
    fireEvent.click(icon);
    fireEvent.click(icon);
  });

  it("test:3 for basic accordion array children type advanced", () => {
    render(
      <MudraAccordionBox
        id="test-accordion"
        type={Type.Advance}
        defaultExpanded="acc_one"
      >
        {[
          <MudraAccordion id="acc_one" title="Accordion One" key="1">
            <div>
              <h1>Accordion Content Title</h1>
              <p>Accordion Content</p>
            </div>
          </MudraAccordion>,
        ]}
      </MudraAccordionBox>
    );
    const accordionBox = screen.getByTestId("mudra_accordionBox");
    expect(accordionBox).toBeTruthy();
    expect(accordionBox.className.includes("expanded-false"));
    expect(accordionBox.className.includes("test-classname"));
    fireEvent.click(accordionBox);
    const accordion = screen.getByTestId("mudra_accordion");
    expect(accordion).not.toBeNull();
    expect(accordion.className.includes("mudra-accordion")).toBe(true);
    const icon = screen.getByTestId("mudra_accordion_icon");
    expect(icon.innerHTML.includes("expanded-true")).toBe(true); // initially false
    fireEvent.click(icon); // click to make it expanded true
    expect(accordion.className.includes("expanded-false")).toBe(true);
    fireEvent.click(icon);
    fireEvent.click(icon);
  });

  it("test:4 for basic accordion array children type basic", () => {
    render(
      <MudraAccordionBox id="test-accordion" defaultExpanded="acc_one">
        {[
          <MudraAccordion id="acc_one" title="Accordion One" key="1">
            <div>
              <h1>Accordion Content Title</h1>
              <p>Accordion Content</p>
            </div>
          </MudraAccordion>,
        ]}
      </MudraAccordionBox>
    );
    const accordionBox = screen.getByTestId("mudra_accordionBox");
    expect(accordionBox).toBeTruthy();
    expect(accordionBox.className.includes("expanded-false"));
    expect(accordionBox.className.includes("test-classname"));
    fireEvent.click(accordionBox);
    const accordion = screen.getByTestId("mudra_accordion");
    expect(accordion).not.toBeNull();
    expect(accordion.className.includes("mudra-accordion")).toBe(true);
    const icon = screen.getByTestId("mudra_accordion_icon");
    expect(icon.innerHTML.includes("expanded-true")).toBe(true); // initially false
    fireEvent.click(icon); // click to make it expanded true
    expect(accordion.className.includes("expanded-false")).toBe(true);
    fireEvent.click(icon);
    fireEvent.click(icon);
  });

  it("test:5 for basic accordion array children type advanced no default", () => {
    render(
      <MudraAccordionBox id="test5-accordion" type={Type.Advance}>
        {[
          <MudraAccordion id="acc_one" title="Accordion One" key="1">
            <div>
              <h1>Accordion Content Title</h1>
              <p>Accordion Content</p>
            </div>
          </MudraAccordion>,
        ]}
      </MudraAccordionBox>
    );
    const accordionBox = screen.getByTestId("mudra_accordionBox");
    expect(accordionBox).toBeTruthy();
    expect(accordionBox.className.includes("expanded-false"));
    expect(accordionBox.className.includes("test-classname"));
    fireEvent.click(accordionBox);
    const accordion = screen.getByTestId("mudra_accordion");
    expect(accordion).not.toBeNull();
    expect(accordion.className.includes("mudra-accordion")).toBe(true);
    const icon = screen.getByTestId("mudra_accordion_icon");
    expect(icon.innerHTML.includes("expanded-false")).toBe(true); // initially false
    fireEvent.click(icon); // click to make it expanded true
    expect(accordion.className.includes("expanded-true")).toBe(true);
    fireEvent.click(icon);
    fireEvent.click(icon);
  });

  it("test:6 for basic accordion array children type basic no default", () => {
    render(
      <MudraAccordionBox id="test-accordion">
        {[
          <MudraAccordion id="acc_one" title="Accordion One" key="1">
            <div>
              <h1>Accordion Content Title</h1>
              <p>Accordion Content</p>
            </div>
          </MudraAccordion>,
        ]}
      </MudraAccordionBox>
    );
    const accordionBox = screen.getByTestId("mudra_accordionBox");
    expect(accordionBox).toBeTruthy();
    expect(accordionBox.className.includes("expanded-false"));
    expect(accordionBox.className.includes("test-classname"));
    fireEvent.click(accordionBox);
    const accordion = screen.getByTestId("mudra_accordion");
    expect(accordion).not.toBeNull();
    expect(accordion.className.includes("mudra-accordion")).toBe(true);
    const icon = screen.getByTestId("mudra_accordion_icon");
    expect(icon.innerHTML.includes("expanded-false")).toBe(true); // initially false
    fireEvent.click(icon); // click to make it expanded true
    expect(accordion.className.includes("expanded-true")).toBe(true);
    fireEvent.click(icon);
    fireEvent.click(icon);
  });

  it("test:7 for basic accordion with title", () => {
    render(
      <MudraAccordionBox
        title="test-accordion"
        id="test-accordion"
        defaultExpanded="true"
        className="test-classname"
      >
        <p>{testText}</p>
      </MudraAccordionBox>
    );
    const accordionBox = screen.getByTestId("mudra_accordionBox");
    expect(accordionBox).toBeTruthy();
    expect(accordionBox.className.includes("expanded-true"));
    expect(accordionBox.className.includes("test-classname"));
  });
});
