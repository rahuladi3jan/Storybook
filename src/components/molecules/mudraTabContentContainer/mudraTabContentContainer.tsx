import React from "react";
import "./styles.scss";
import { Display, Type } from "../mudraTabs/propTypes";

export interface IMudraTabContentContainerProps {
  id: string;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  maxContentHeight?: number;
  display?: Display;
  parentId?: string;
  type?: Type;
}

const defaultProps = {
  maxContentHeight: 400,
  display: Display.Horizontal,
  type: Type.Basic,
};

function computeClassName(props: IMudraTabContentContainerProps): string {
  const {
    className,
    display = defaultProps.display,
    type = defaultProps.type,
  } = props;
  const classNames: string[] = ["mudra-tab-content-container"];
  classNames.push(`display-${display.toLowerCase()}`);
  classNames.push(`type-${type.toLowerCase()}`);
  if (className) classNames.push(className);
  return classNames.join(" ");
}

// eslint-disable-next-line react/display-name
const MudraTabContentContainer: React.FunctionComponent<
  IMudraTabContentContainerProps
> = (props) => {
  const {
    className,
    id,
    children,
    maxContentHeight = defaultProps.maxContentHeight,
    display = defaultProps.display,
    parentId,
    type = defaultProps.type,
  } = props;
  const computedClassName: string = React.useMemo<string>(() => {
    return computeClassName(props);
  }, [className, display]);
  const renderChildren = () => {
    if (children) {
      if (Array.isArray(children)) {
        return children.map((child) => {
          return React.cloneElement(child, { parentId: parentId, type: type });
        });
      } else {
        return React.cloneElement(children as React.ReactElement<any>, {
          parentId: parentId,
          type: type,
        });
      }
    } else return null;
  };
  return (
    <div
      className={computedClassName}
      style={{ maxHeight: maxContentHeight }}
      id={`mudraTabContentContainerId-${parentId}-${id}`}
      data-testid="mudra_tab_content_container"
    >
      {renderChildren()}
    </div>
  );
};

export default MudraTabContentContainer;
