import React, { useEffect, useState } from "react";
import { Type } from "./propTypes";
import "./styles.scss";
import { MudraAccordionBox } from "../mudraAccordionBox";
import MudraAccordionDynamic from "../mudraAccordionDynamic/mudraAccordionDynamic";
import { Type as boxType } from "../mudraAccordionBox/propTypes";

export interface IMudraAccordionContainerProps {
  type?: Type; //Basic will be by Default
  className?: string;
  title?: string;
  defaultExpanded?: number; // no by default and it will take strings as 1,2 accordion number start from top and start from 1
  accordions?: Array<React.ReactNode>;
  dynamicAccordionData?: any;
}

const defaultProps = {
  type: Type.Basic,
};

function computeClassName(props: IMudraAccordionContainerProps): string {
  const { className, type, defaultExpanded } = props;
  const classNames: string[] = ["mudra-accordionContainer"];
  classNames.push(
    `type-${type ? type.toLowerCase() : defaultProps.type.toLowerCase()}`
  );
  if (defaultExpanded) classNames.push("defaultExpanded-true");
  if (className) classNames.push(className);
  return classNames.join(" ");
}

// eslint-disable-next-line react/display-name
const MudraAccordionContainer: React.FunctionComponent<
  IMudraAccordionContainerProps
> = (props) => {
  const {
    type,
    className,
    accordions,
    title,
    defaultExpanded,
    dynamicAccordionData,
  } = props;

  let initialCount = 12,
    stepValue = 5,
    threshold = 10,
    viewMoreLabel = "View more",
    viewLessLabel = "View less";

  if (dynamicAccordionData) {
    initialCount = dynamicAccordionData.components[2].config.initialCount;
    stepValue = dynamicAccordionData.components[2].config.stepValue;
    threshold = dynamicAccordionData.components[2].config.threshold;
    viewMoreLabel =
      dynamicAccordionData.components[2].config.viewMoreLabel || "";
    viewLessLabel =
      dynamicAccordionData.components[2].config.viewLessLabel || "";
  }

  useEffect(() => {
    if (type === Type.ExpandOneOnly && accordions) {
      const elements = document.getElementsByClassName(
        "mudra-accordionContainer-accordion"
      );
      for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", handleClick);
      }

      if (defaultExpanded) {
        const element = document.getElementById(
          `m-aC-a:${defaultExpanded.toString()}`
        );
        const currentAccordion =
          element?.getElementsByClassName("mudra-accordion")[0];
        currentAccordion?.classList.remove("expanded-false");
        currentAccordion?.classList.add("expanded-true");
      }
    } else {
      if (defaultExpanded) {
        const element = document.getElementById(
          `m-aC-a:${defaultExpanded.toString()}`
        );
        const header = element?.getElementsByClassName(
          "mudra_accordion_header"
        )[0] as HTMLElement;
        header?.click();
      }
    }
  }, []);

  const computedClassName: string = React.useMemo<string>(() => {
    return computeClassName(props);
  }, [type, className, defaultExpanded]);

  const removeCurrentExpand = () => {
    const currentAccordion = document.getElementsByClassName(
      "mudra-accordion expanded-true"
    )[0];
    currentAccordion?.classList.remove("expanded-true");
    currentAccordion?.classList.add("expanded-false");
  };

  const handleClick = (e) => {
    const clickedId = e.currentTarget.id;
    const currentElement = document.getElementById(clickedId);
    const currentAccordion =
      currentElement?.getElementsByClassName("mudra-accordion")[0];
    if (currentAccordion?.classList.contains("expanded-true")) {
      currentAccordion?.classList.remove("expanded-true");
      currentAccordion?.classList.add("expanded-false");
    } else {
      removeCurrentExpand();
      currentAccordion?.classList.remove("expanded-false");
      currentAccordion?.classList.add("expanded-true");
    }
  };

  const renderAccordions = () => {
    return (
      accordions &&
      accordions.map((accordion, i) => {
        return (
          <div
            className="mudra-accordionContainer-accordion"
            id={`m-aC-a:${i + 1}`}
            key={`m-aC-a:${i + 1}`}
            data-testid={`m-aC-a:${i + 1}`}
          >
            {accordion}
          </div>
        );
      })
    );
  };

  const [count, setCount] = useState(initialCount);
  const accordionLength =
    dynamicAccordionData?.components[1].accordionList.data.length;

  return (
    <div>
      {dynamicAccordionData ? (
        <div
          data-testid="mudra_accordion_dynamic_container"
          style={{ ...dynamicAccordionData.style }}
        >
          <MudraAccordionBox id="dynBoxid" type={boxType.Advance}>
            <div
              className="md:mb-10 md:text-3xl font-extrabold"
              style={{ ...dynamicAccordionData.components[0].heading.style }}
            >
              {dynamicAccordionData.components[0].heading.title}
            </div>

            <div data-testid="mudra_accordion_dynamic_container_body">
              {dynamicAccordionData.components[1].accordionList.data.map(
                (data, index) => {
                  return (
                    <>
                      {count >= index ? (
                        <MudraAccordionDynamic
                          id={"dybAcc*" + index}
                          title={data.heading}
                          detailSection={data.detailSection}
                          className={`${count == index ? `opacity-30` : ``}`}
                          headerStyle={data.style}
                        ></MudraAccordionDynamic>
                      ) : (
                        ""
                      )}
                    </>
                  );
                }
              )}
              {accordionLength > threshold ? (
                accordionLength > count ? (
                  <div className="justify-center flex pt-6 md:pb-0 pb-4">
                    <button
                      data-testid="mudra_dynamic_accordion_button_view_more"
                      className="w-full md:w-auto py-4 px-6"
                      style={{
                        border: "1px solid #365069",
                        color: "#365069",
                        borderRadius: "8px",
                      }}
                      onClick={() => {
                        setCount(count + stepValue);
                      }}
                    >
                      <div className="md:text-lg text-base cursor-pointer font-bold">
                        {viewMoreLabel}
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="justify-center flex pt-6 md:pb-0 pb-4">
                    <button
                      data-testid="mudra_dynamic_accordion_button_view_less"
                      className="w-full md:w-auto py-4 px-6"
                      style={{
                        border: "1px solid #365069",
                        color: "#365069",
                        borderRadius: "8px",
                      }}
                      onClick={() => {
                        setCount(stepValue);
                      }}
                    >
                      <div className="md:text-lg text-base cursor-pointer font-bold">
                        {viewLessLabel}
                      </div>
                    </button>
                  </div>
                )
              ) : (
                ""
              )}
            </div>
          </MudraAccordionBox>
        </div>
      ) : (
        <div
          className={computedClassName}
          data-testid="mudra_accordionContainer"
        >
          {title && (
            <div className="mudra-accordionContainer-title">{title}</div>
          )}
          <div className="mudra-accordionContainer-accordions">
            {renderAccordions()}
          </div>
        </div>
      )}
    </div>
  );
};

MudraAccordionContainer.defaultProps = defaultProps;

export default MudraAccordionContainer;
