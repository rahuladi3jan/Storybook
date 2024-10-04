import React from "react";
import { Meta } from "@storybook/react";

import MudraList from "./mudraList";

export default {
  component: MudraList,
  title: "Molecules/Mudra List",
  parameters: {
    componentSubtitle: "Storybook Mudra List",
    docs: {
      description: {
        component:
          "MudraList enables the incorporation of every conceivable list variant from your Figma design using props exclusively. Each prop is equipped with value suggestions, streamlining the customization process.",
      },
    },
  },
} as Meta;

export const AOrderedList = () => {
  const data = [
    "Ordered List Item 1",
    "Ordered List Item 2",
    "Ordered List Item 3",
  ];

  return <MudraList data={data} />;
};

export const BBasicOrderedList = () => {
  return (
    <MudraList
      listType="ordered"
      data={[
        "Ordered List Item 1",
        "Ordered List Item 2",
        "Ordered List Item 3",
      ]}
      listStyleType="lower-alpha"
      textColor="neutral100"
      size={16}
      weight="regular"
    />
  );
};

export const CBasicUnorderedList = () => {
  const data = [
    "Unordered List Item 1",
    "Unordered List Item 2",
    "Unordered List Item 3",
  ];

  return (
    <MudraList
      listType="unordered"
      data={data}
      listStyleType="circle"
      textColor="neutral100"
      size={16}
      weight="regular"
    />
  );
};

export const DStyledUnorderedList = () => {
  const data = [
    "Styled Unordered List Item 1",
    "Styled Unordered List Item 2",
    "Styled Unordered List Item 3",
  ];

  return (
    <MudraList
      listType="unordered"
      data={data}
      listStyleType="square"
      textColor="storybookOrange100"
      size={18}
      weight="extraBold"
      listStyles={{ color: "blue", margin: 10 }}
    />
  );
};

//defining order of stories based on alphabetical order
AOrderedList.storyName = "Mudra List";
BBasicOrderedList.storyName = "Basic Ordered List";
CBasicUnorderedList.storyName = "Basic Unordered List";
DStyledUnorderedList.storyName = "Styled Unordered List";
