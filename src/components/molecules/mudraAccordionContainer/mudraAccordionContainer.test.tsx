import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MudraAccordionAccordion from "./mudraAccordionContainer";
import { Type } from "./propTypes";
import MudraAccordion from "../mudraAccordion/mudraAccordion";

it("test:1 for accordion container basic all close", () => {
  render(
    <MudraAccordionAccordion
      title="Application Details"
      type={Type.Basic}
      className="basic_accordion_con"
      accordions={[
        <MudraAccordion id="acc-one" key="acc-one" title="Accordion One">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
        <MudraAccordion id="acc-two" key="acc-two" title="Accordion two">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
        <MudraAccordion id="acc-three" key="acc-three" title="Accordion three">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
        <MudraAccordion id="acc-four" key="acc-four" title="Accordion four">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
      ]}
    />
  );

  const accordionContainer = screen.getByTestId("mudra_accordionContainer");

  // Test:1 for accordion Container Existence
  expect(accordionContainer).not.toBeNull();

  // Test:1 for Classes
  expect(
    accordionContainer.className.includes("mudra-accordionContainer")
  ).toBe(true);
  expect(accordionContainer.className.includes("type-basic")).toBe(true);
  expect(accordionContainer.className.includes("basic_accordion_con")).toBe(
    true
  );
});

it("test:2 for accordion container basic default open", () => {
  render(
    <MudraAccordionAccordion
      title="Application Details"
      type={Type.Basic}
      defaultExpanded={3}
      className="basic_accordion_con"
      accordions={[
        <MudraAccordion id="acc-one" key="acc-one" title="Accordion One">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
        <MudraAccordion id="acc-two" key="acc-two" title="Accordion two">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
        <MudraAccordion id="acc-three" key="acc-three" title="Accordion three">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
        <MudraAccordion id="acc-four" key="acc-four" title="Accordion four">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
      ]}
    />
  );

  const accordionContainer = screen.getByTestId("mudra_accordionContainer");

  // Test:1 for accordion Container Existence
  expect(accordionContainer).not.toBeNull();

  // Test:1 for Classes
  expect(
    accordionContainer.className.includes("mudra-accordionContainer")
  ).toBe(true);
  expect(accordionContainer.className.includes("type-basic")).toBe(true);
  expect(accordionContainer.className.includes("basic_accordion_con")).toBe(
    true
  );
  expect(accordionContainer.className.includes("defaultExpanded-true")).toBe(
    true
  );
});

it("test:3 for accordion container ExpandOnlyOne all close", () => {
  render(
    <MudraAccordionAccordion
      title="Application Details"
      type={Type.ExpandOneOnly}
      className="basic_accordion_con"
      accordions={[
        <MudraAccordion id="acc-one" key="acc-one" title="Accordion One">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
        <MudraAccordion id="acc-two" key="acc-two" title="Accordion two">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
        <MudraAccordion id="acc-three" key="acc-three" title="Accordion three">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
        <MudraAccordion id="acc-four" key="acc-four" title="Accordion four">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
      ]}
    />
  );

  const accordionContainer = screen.getByTestId("mudra_accordionContainer");

  // Test:1 for accordion Container Existence
  expect(accordionContainer).not.toBeNull();

  // Test:1 for Classes
  expect(
    accordionContainer.className.includes("mudra-accordionContainer")
  ).toBe(true);
  expect(accordionContainer.className.includes("type-expandoneonly")).toBe(
    true
  );
  expect(accordionContainer.className.includes("basic_accordion_con")).toBe(
    true
  );
});

it("test:4 for accordion container ExpandOnlyOne default expand ", () => {
  render(
    <MudraAccordionAccordion
      title="Application Details"
      type={Type.ExpandOneOnly}
      className="basic_accordion_con"
      defaultExpanded={2}
      accordions={[
        <MudraAccordion id="acc-one" key="acc-one" title="Accordion One">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
        <MudraAccordion id="acc-two" key="acc-two" title="Accordion two">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
        <MudraAccordion id="acc-three" key="acc-three" title="Accordion three">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
        <MudraAccordion id="acc-four" key="acc-four" title="Accordion four">
          <div>
            <h1>Accordion Content Title</h1>
            <p>Accordion Content</p>
          </div>
        </MudraAccordion>,
      ]}
    />
  );

  const accordionContainer = screen.getByTestId("mudra_accordionContainer");

  // Test:1 for accordion Container Existence
  expect(accordionContainer).not.toBeNull();

  // Test:1 for Classes
  expect(
    accordionContainer.className.includes("mudra-accordionContainer")
  ).toBe(true);
  expect(accordionContainer.className.includes("type-expandoneonly")).toBe(
    true
  );
  expect(accordionContainer.className.includes("basic_accordion_con")).toBe(
    true
  );
  expect(accordionContainer.className.includes("defaultExpanded-true")).toBe(
    true
  );
});

it("Test5: Mudra Accordion to handle structured array of object.", () => {
  const dynamicAccordionData = {
    style: {},
    components: [
      {
        heading: {
          style: {},
          title: "Frequently asked questions",
        },
      },
      {
        accordionList: {
          style: {},
          pageSize: 5,
          data: [
            {
              style: {},
              heading: "How can I get an estimate of the home loan amount?",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content:
                        "<p>The simplest way to calculate the home loan eligibility and the home loan EMI is to make use of the calculator available on our portal. It is a free online tool that allows you to plan a home loan efficiently is a free online tool that allows you to plan a home loan efficiently</p>",
                    },
                  },
                ],
              },
            },
            {
              style: {},
              heading: "Are there any tax benefits on the home loan?",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: {},
                      content:
                        "<p>Under Section 80C of the Income Tax Act, 1961, you can claim up to INR 1.5 lakhs on the principal amount, registration cost, and stamp duty charges of the housing loan.</p>",
                    },
                  },
                ],
              },
            },
            {
              style: {},
              heading: "Can I get a home loan for the entire amount?",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: {},
                      content:
                        "<p>No. Under the guidelines of the RBI, a lender cannot lend 100% of the home loan amount. Depending on the lender you have opted for, you may be able to take a home loan for about 80% to 90% of the purchase price of the property. You would need to make a down payment of the remaining amount on your own.</p>",
                    },
                  },
                ],
              },
            },
            {
              style: {},
              heading:
                "What are the maximum home loan tenure and loan amount offered by Storybook Finance?",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: {},
                      content:
                        "<p>Storybook Finance offers home loans that can go up to INR 75 lakhs for a tenure of 25 years.</p>",
                    },
                  },
                ],
              },
            },
            {
              style: { color: "#333333" },
              heading: "Heading5",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content: <p>description5</p>,
                    },
                  },
                ],
              },
            },
            {
              style: { color: "#333333" },
              heading: "Heading6",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content: <p>description6</p>,
                    },
                  },
                ],
              },
            },
            {
              style: { color: "#333333" },
              heading: "Heading7",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content: <p>description7</p>,
                    },
                  },
                ],
              },
            },
            {
              style: { color: "#333333" },
              heading: "Heading8",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content: <p>description8</p>,
                    },
                  },
                ],
              },
            },
            {
              style: { color: "#333333" },
              heading: "Heading9",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content: <p>description9</p>,
                    },
                  },
                ],
              },
            },
            {
              style: { color: "#333333" },
              heading: "Heading10",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content: <p>description10</p>,
                    },
                  },
                ],
              },
            },
            {
              style: { color: "#333333" },
              heading: "Heading11",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content: <p>description11</p>,
                    },
                  },
                ],
              },
            },
            {
              style: { color: "#333333" },
              heading: "Heading12",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content: <p>description12</p>,
                    },
                  },
                ],
              },
            },
            {
              style: { color: "#333333" },
              heading: "Heading13",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content: <p>description13</p>,
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        config: {
          initialCount: 12,
          stepValue: 5,
          threshold: 10,
          viewMoreLabel: "View More",
          viewLessLabel: "View Less",
        },
      },
    ],
  };
  const onClickSpy = jest.fn();
  render(
    <>
      <MudraAccordionAccordion
        dynamicAccordionData={{ ...dynamicAccordionData }}
      />
    </>
  );

  // Test:1 for container
  const AccordionContainer = screen.getAllByTestId(
    "mudra_accordion_dynamic_container"
  );
  expect(AccordionContainer).not.toBeNull();

  //Test:2 for container body accordion count
  const accordionBody = screen.getByTestId(
    "mudra_accordion_dynamic_container_body"
  );
  expect(accordionBody.children.length).toBe(14);

  const viewMoreButton = screen.getByTestId(
    "mudra_dynamic_accordion_button_view_more"
  );
  viewMoreButton.click = onClickSpy;
  fireEvent.click(viewMoreButton);

  const viewLessButton = screen.getByTestId(
    "mudra_dynamic_accordion_button_view_less"
  );
  viewLessButton.click = onClickSpy;
  fireEvent.click(viewLessButton);
});

it("Test6: Mudra Accordion to handle uncovered test branch.", () => {
  const dynamicAccordionData = {
    style: {},
    components: [
      {
        heading: {
          style: {},
          title: "Frequently asked questions",
        },
      },
      {
        accordionList: {
          style: {},
          pageSize: 5,
          data: [
            {
              style: {},
              heading: "How can I get an estimate of the home loan amount?",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content:
                        "<p>The simplest way to calculate the home loan eligibility and the home loan EMI is to make use of the calculator available on our portal. It is a free online tool that allows you to plan a home loan efficiently is a free online tool that allows you to plan a home loan efficiently</p>",
                    },
                  },
                ],
              },
            },
            {
              style: {},
              heading: "Are there any tax benefits on the home loan?",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: {},
                      content:
                        "<p>Under Section 80C of the Income Tax Act, 1961, you can claim up to INR 1.5 lakhs on the principal amount, registration cost, and stamp duty charges of the housing loan.</p>",
                    },
                  },
                ],
              },
            },
            {
              style: {},
              heading: "Can I get a home loan for the entire amount?",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: {},
                      content:
                        "<p>No. Under the guidelines of the RBI, a lender cannot lend 100% of the home loan amount. Depending on the lender you have opted for, you may be able to take a home loan for about 80% to 90% of the purchase price of the property. You would need to make a down payment of the remaining amount on your own.</p>",
                    },
                  },
                ],
              },
            },
            {
              style: {},
              heading:
                "What are the maximum home loan tenure and loan amount offered by Storybook Finance?",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: {},
                      content:
                        "<p>Storybook Finance offers home loans that can go up to INR 75 lakhs for a tenure of 25 years.</p>",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        config: {
          initialCount: 12,
          stepValue: 5,
          threshold: 10,
          viewMoreLabel: "",
          viewLessLabel: "",
        },
      },
    ],
  };
  render(
    <>
      <MudraAccordionAccordion
        dynamicAccordionData={{ ...dynamicAccordionData }}
      />
    </>
  );

  // Test:1 for container
  const AccordionContainer = screen.getAllByTestId(
    "mudra_accordion_dynamic_container"
  );
  expect(AccordionContainer).not.toBeNull();
});
