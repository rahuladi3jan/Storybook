import React from "react";
import { MudraTypography } from "../../atoms/mudraTypography";
import { UnorderedList, OrderedList } from "./styles";
import { IMudraListProps, LIST_TYPE } from "./types";

function MudraList(props: IMudraListProps) {
  const { data, listType, listStyleType, textColor, size, weight, listStyles } =
    props;
  return (
    <div>
      {listType === LIST_TYPE.ORDERED ? (
        <>
          <OrderedList listStyleType={listStyleType}>
            {data?.map((dataItem, index) => {
              return (
                <li key={"mudra-ordered-list-" + index} style={listStyles}>
                  <MudraTypography
                    textColor={textColor}
                    size={size}
                    weight={weight}
                  >
                    {dataItem}
                  </MudraTypography>
                </li>
              );
            })}
          </OrderedList>
        </>
      ) : (
        <>
          <UnorderedList listStyleType={listStyleType}>
            {data?.map((dataItem, index) => {
              return (
                <li key={"mudra-unordered-list-" + index} style={listStyles}>
                  <MudraTypography
                    textColor={textColor}
                    size={size}
                    weight={weight}
                  >
                    {dataItem}
                  </MudraTypography>
                </li>
              );
            })}
          </UnorderedList>
        </>
      )}
    </div>
  );
}

MudraList.defaultProps = {
  listType: "unordered",
  listStyleType: "disc",
  textColor: "neutral100",
  size: 16,
  weight: "regular",
};

export default MudraList;
