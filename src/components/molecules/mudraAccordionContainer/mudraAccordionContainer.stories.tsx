import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import MudraAccordionContainer from "./mudraAccordionContainer";
import MudraAccordion from "../mudraAccordion/mudraAccordion";
import { Type } from "./propTypes";

export default {
  title: "Molecules/Mudra Accordion Container",
  component: MudraAccordionContainer,
} as ComponentMeta<typeof MudraAccordionContainer>;

const Template: ComponentStory<typeof MudraAccordionContainer> = (args) => {
  return <MudraAccordionContainer {...args} />;
};

export const BasicAllClose = Template.bind({});

BasicAllClose.args = {
  title: "Application Details",
  type: Type.Basic,
  className: "basic",
  accordions: [
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
  ],
};

export const BasicDefaultOpen = Template.bind({});

BasicDefaultOpen.args = {
  title: "Application Details",
  type: Type.Basic,
  className: "basic",
  defaultExpanded: 3,
  accordions: [
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
  ],
};

export const ExpandOneOnlyAllClose = Template.bind({});

ExpandOneOnlyAllClose.args = {
  title: "Application Details",
  type: Type.ExpandOneOnly,
  className: "basic",
  accordions: [
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
  ],
};

export const ExpandOneOnlyDefaultOpen = Template.bind({});

ExpandOneOnlyDefaultOpen.args = {
  title: "Application Details",
  type: Type.ExpandOneOnly,
  className: "basic",
  defaultExpanded: 2,
  accordions: [
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
  ],
};

export const faqAccordion = Template.bind({});
faqAccordion.args = {
  dynamicAccordionData: {
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
              style: { color: "#333333" },
              heading: "How can I get an estimate of the home loan amount?",
              detailSection: {
                style: { color: "#666666" },
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content: (
                        <p>
                          The simplest way to calculate the home loan
                          eligibility and the home loan EMI is to make use of
                          the calculator available on our portal. It is a free
                          online tool that allows you to plan a home loan
                          efficiently is a free online tool that allows you to
                          plan a home loan efficiently
                        </p>
                      ),
                    },
                  },
                ],
              },
            },
            {
              style: { color: "#333333" },
              heading: "Are there any tax benefits on the home loan?",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content: (
                        <p>
                          Under Section 80C of the Income Tax Act, 1961, you can
                          claim up to INR 1.5 lakhs on the principal amount,
                          registration cost, and stamp duty charges of the
                          housing loan.
                        </p>
                      ),
                    },
                  },
                ],
              },
            },
            {
              style: { color: "#333333" },
              heading: "Can I get a home loan for the entire amount?",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content: (
                        <p>
                          No. Under the guidelines of the RBI, a lender cannot
                          lend 100% of the home loan amount. Depending on the
                          lender you have opted for, you may be able to take a
                          home loan for about 80% to 90% of the purchase price
                          of the property. You would need to make a down payment
                          of the remaining amount on your own.
                        </p>
                      ),
                    },
                  },
                ],
              },
            },
            {
              style: { color: "#333333" },
              heading:
                "What are the maximum home loan tenure and loan amount offered by Storybook Finance?",
              detailSection: {
                style: {},
                components: [
                  {
                    paragraph: {
                      style: { color: "#666666" },
                      content: (
                        <p>
                          Storybook Finance offers home loans that can go up to
                          INR 75 lakhs for a tenure of 25 years.
                        </p>
                      ),
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
  },
};
