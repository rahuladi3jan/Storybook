import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "../../../icons";
import "./styles.scss";
import { IconType } from "../../../icons";
import { AccordionState, IconAlignment } from "./propTypes";
import * as ClassNameConfig from "./classNameConfig";

export interface IMudraAccordionProps {
  key?: string; // will be passed internally by Accordion Box when mudraAccordion is being used in mudraAccordionBox.
  title: string;
  className?: string;
  initiallyExpanded?: boolean; // default false
  onClick?: (event: any) => void; //needed if it is controlled
  children?: React.ReactNode;
  id: string;
  parentId?: string; // will be passed internally by Accordion Box when mudraAccordion is being used in mudraAccordionBox.
  icon?: IconType;
  iconAlignment?: IconAlignment;
  onChange?: (state: AccordionState) => void;
}

const defaultProps = {
  initiallyExpanded: false,
};

function computeClassName(
  props: IMudraAccordionProps,
  expand: boolean
): string {
  const { className } = props;
  const classNames: string[] = ["mudra-accordion"];
  classNames.push(`expanded-${expand}`);
  if (className) classNames.push(className);
  return classNames.join(" ");
}

// eslint-disable-next-line react/display-name
const MudraAccordion: React.FunctionComponent<IMudraAccordionProps> = (
  props
) => {
  const {
    title,
    className,
    initiallyExpanded = defaultProps.initiallyExpanded,
    onClick,
    id,
    parentId,
    icon: Icon,
    iconAlignment,
    onChange,
  } = props;

  const [expand, setExpand] = useState(initiallyExpanded);
  const initialStyle = initiallyExpanded
    ? { minHeight: "0", height: "auto", transitionDuration: "222ms" }
    : { minHeight: "0", height: "0", transitionDuration: "222ms" };
  const [customStyle, setCustomStyle] = useState(initialStyle);
  const isMounted = React.useRef(false);

  const computedClassName: string = React.useMemo<string>(() => {
    return computeClassName(props, expand);
  }, [title, className, expand]);

  const titleContainerComputedClassName: string = React.useMemo<string>(() => {
    const classes: string[] = ["mudra_accordion_title_container"];
    classes.push(
      ClassNameConfig.IconAlignmentConfig[
        iconAlignment ?? IconAlignment.LeftAligned
      ]
    );
    return classes.join(" ");
  }, [iconAlignment]);

  const isIconVisible: boolean = React.useMemo(() => {
    return iconAlignment !== IconAlignment.None;
  }, [iconAlignment]);

  const handleClick = (e) => {
    const acc = document.getElementById(
      `mudraAccordionId-${parentId ? parentId : "parentId"}-${id}`
    );
    const summ = acc?.getElementsByClassName("mudra_accordion_summary");
    const height =
      summ &&
      summ[0]
        ?.getElementsByClassName("mudra_accordion_content")[0]
        ?.getBoundingClientRect()?.height;
    if (onClick) {
      onClick(e);
      expand
        ? setCustomStyle({
            minHeight: "0",
            height: "0",
            transitionDuration: "222ms",
          })
        : setCustomStyle({
            minHeight: "0",
            height: height ? JSON.stringify(height) + "px" : "auto",
            transitionDuration: "222ms",
          });
      setExpand(!expand);
    } else {
      expand
        ? setCustomStyle({
            minHeight: "0",
            height: "0",
            transitionDuration: "222ms",
          })
        : setCustomStyle({
            minHeight: "0",
            height: height ? JSON.stringify(height) + "px" : "auto",
            transitionDuration: "222ms",
          });
      setExpand(!expand);
    }
  };

  React.useEffect(() => {
    if (!isMounted.current) isMounted.current = true;
    else if (typeof onChange === "function")
      onChange(expand ? AccordionState.Expanded : AccordionState.Collapsed);
  }, [expand]);

  return (
    <div
      className={computedClassName}
      id={`mudraAccordionId-${parentId ? parentId : "parentId"}-${id}`}
      data-testid="mudra_accordion"
    >
      <div
        className="mudra_accordion_header"
        data-name={`mudraAccordionId-${parentId ? parentId : "parentId"}-${id}`}
        onClick={handleClick}
        data-testid="mudra_accordion_header"
      >
        <div
          className={titleContainerComputedClassName}
          data-testid="mudra_accordion_title"
        >
          <p className="mudra_accordion_title">{title} </p>
          {isIconVisible && Icon && <Icon className="icon" />}
        </div>
        <div
          data-testid="mudra_accordion_icon"
          className="mudra_accordion_icon"
        >
          {expand ? (
            <ChevronUp className="mudra_accordion_svg expanded-true" />
          ) : (
            <ChevronDown className="mudra_accordion_svg expanded-false" />
          )}
        </div>
      </div>
      <div className="mudra_accordion_summary" style={customStyle}>
        <div className="mudra_accordion_content">{props?.children}</div>
      </div>
    </div>
  );
};

export default MudraAccordion;
