import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MudraAccordionDynamic from "./mudraAccordionDynamic";
import { IconAlignment } from "../mudraAccordion/propTypes";
import { Bitcoin } from "../../../icons";

describe("mudra-accordion-dynamic", () => {
  it("Test1: This molecule generates accordion as per the requirement of pchfweb faq which is initially expanded", () => {
    const data = {
      style: {},
      heading: "Header",
      detailSection: {
        style: {},
        components: [
          {
            paragraph: {
              style: { color: "#666666" },
              content: <p>Description</p>,
            },
          },
        ],
      },
    };
    const onClickSpy = jest.fn();
    render(
      <MudraAccordionDynamic
        id="acc_dyn_one"
        title={data.heading}
        {...data.detailSection}
        initiallyExpanded={true}
        className="p-2"
        onClick={onClickSpy}
      />
    );

    // Test:1 for accordion with initiallyExpanded as true.
    const accordionDynamic = screen.getAllByTestId("mudra_accordion_dynamic");
    expect(accordionDynamic).not.toBeNull();

    const icon = screen.getByTestId("mudra_accordion_icon");
    expect(icon.innerHTML.includes("expanded-true")).toBe(true);

    const accordionHeader = screen.getByTestId(
      "mudra_dynamic_accordion_header"
    );
    fireEvent.click(accordionHeader);
    expect(onClickSpy).toBeCalled();

    const accordionSummary = screen.getByTestId(
      "mudra_dynamic_accordion_summary"
    );
    expect(accordionSummary.style.minHeight).toBe("0");
  });

  it("Test2: This molecule generates accordion as per the requirement of pchfweb faq with onClick props", () => {
    const data = {
      style: {},
      heading: "Header",
      detailSection: {
        style: {},
        components: [
          {
            paragraph: {
              style: { color: "#666666" },
              content: <p>Description</p>,
            },
          },
        ],
      },
    };
    const onClickSpy = jest.fn();
    render(
      <MudraAccordionDynamic
        id="acc_dyn_one"
        title={data.heading}
        {...data.detailSection}
        onClick={onClickSpy}
        parentId="m_dyn_acc"
      />
    );

    // Test:1 for accordion with onClick function.
    const accordionDynamic = screen.getAllByTestId("mudra_accordion_dynamic");
    expect(accordionDynamic).not.toBeNull();

    const accordionHeader = screen.getByTestId(
      "mudra_dynamic_accordion_header"
    );
    fireEvent.click(accordionHeader);
    expect(onClickSpy).toBeCalled();
  });

  it("Test3: This molecule generates accordion as per the requirement of pchfweb faq with icons", () => {
    const data = {
      style: {},
      heading: "Header",
      detailSection: {
        style: {},
        components: [
          {
            paragraph: {
              style: { color: "#666666" },
              content: <p>Description</p>,
            },
          },
        ],
      },
    };
    const onClickSpy = jest.fn();
    render(
      <MudraAccordionDynamic
        id="acc_dyn_one"
        title={data.heading}
        {...data.detailSection}
        onChange={onClickSpy}
        icon={Bitcoin}
        iconAlignment={IconAlignment.LeftAligned}
      />
    );

    // Test:1 for accordion with onClick function.
    const accordionDynamic = screen.getAllByTestId("mudra_accordion_dynamic");
    expect(accordionDynamic).not.toBeNull();

    const accordionHeader = screen.getByTestId(
      "mudra_dynamic_accordion_header"
    );
    fireEvent.click(accordionHeader);

    const accordionSummary = screen.getByTestId(
      "mudra_dynamic_accordion_summary"
    );
    expect(accordionSummary.style.minHeight).toBe("0");

    fireEvent.click(accordionHeader);
  });
});
