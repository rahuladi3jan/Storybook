import React, { useEffect } from "react";
import { Type } from "./propTypes";
import "./styles.scss";

export interface IMudraAccordionBoxProps {
  type?: Type; // default will be Basic
  className?: string;
  title?: string;
  defaultExpanded?: string;
  id: string;
  children: React.ReactElement | React.ReactElement[];
  intiallyAllAccordionExpanded?: boolean;
}

const defaultProps = {
  type: Type.Basic,
  intiallyAllAccordionExpanded: false,
};

function computeClassName(props: IMudraAccordionBoxProps): string {
  const { className, type = defaultProps.type } = props;
  const classNames: string[] = ["mudra-accordionBox"];
  classNames.push(`type-${type.toLowerCase()}`);
  if (className) classNames.push(className);
  return classNames.join(" ");
}

// eslint-disable-next-line react/display-name
const MudraAccordionBox: React.FunctionComponent<IMudraAccordionBoxProps> = (
  props
) => {
  const {
    id,
    className,
    title,
    defaultExpanded,
    children,
    type = defaultProps.type,
    intiallyAllAccordionExpanded = defaultProps.intiallyAllAccordionExpanded,
  } = props;

  useEffect(() => {
    if (defaultExpanded) {
      const accordion = document.getElementById(
        `mudraAccordionId-${id}-${defaultExpanded}`
      );
      accordion?.click();
    }
  }, [defaultExpanded]);

  const removeCurrentExpand = () => {
    const box = document.getElementById(id);
    const currentAccordion = box?.getElementsByClassName(
      "mudra-accordion expanded-true"
    )[0];
    const currentAccordionHeader = currentAccordion?.getElementsByClassName(
      "mudra_accordion_header"
    )[0];
    (currentAccordionHeader as HTMLElement)?.click();
  };

  const computedClassName: string = React.useMemo<string>(() => {
    return computeClassName(props);
  }, [className, type]);

  const renderChildren = () => {
    if (type === Type.Advance) {
      if (Array.isArray(children)) {
        return children.map((child, i) => {
          return defaultExpanded && child.props.id === defaultExpanded
            ? React.cloneElement(child, {
                parentId: id,
                key: "mudraAccordionKey-" + id + "-" + i,
                initiallyExpanded: true,
                onClick: (ex) => {
                  removeCurrentExpand();
                  if (typeof child.props.onClick === "function")
                    child.props.onClick(ex);
                },
              })
            : React.cloneElement(child, {
                parentId: id,
                key: "mudraAccordionKey-" + id + "-" + i,
                onClick: (ex) => {
                  removeCurrentExpand();
                  if (typeof child.props.onClick === "function")
                    child.props.onClick(ex);
                },
              });
        });
      } else {
        return React.cloneElement(children as React.ReactElement<any>, {
          parentId: id,
          key: "mudraAccordionKey-" + id + "-" + 0,
          onClick: (ex) => {
            removeCurrentExpand();
            if (typeof children.props.onClick === "function")
              children.props.onClick(ex);
          },
          initiallyExpanded: intiallyAllAccordionExpanded,
        });
      }
    } else {
      if (Array.isArray(children)) {
        return children.map((child, i) => {
          return defaultExpanded && child.props.id === defaultExpanded
            ? React.cloneElement(child, {
                parentId: id,
                key: "mudraAccordionKey-" + id + "-" + i,
                initiallyExpanded: true,
              })
            : React.cloneElement(child, {
                parentId: id,
                key: "mudraAccordionKey-" + id + "-" + i,
                initiallyExpanded: intiallyAllAccordionExpanded,
              });
        });
      } else {
        return React.cloneElement(children as React.ReactElement<any>, {
          parentId: id,
          key: "mudraAccordionKey-" + id + "-" + 0,
          initiallyExpanded: intiallyAllAccordionExpanded,
        });
      }
    }
  };

  return (
    <div className={computedClassName} data-testid="mudra_accordionBox" id={id}>
      {title && <div className="mudra-accordionBox-title">{title}</div>}
      <div className="mudra-accordionBox-accordions">{renderChildren()}</div>
    </div>
  );
};

export default MudraAccordionBox;
