import React from "react";
import "./styles.scss";
import { Display } from "../mudraTabs/propTypes";

export interface IMudraTabHeaderProps {
  id: string;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  display?: Display;
  parentId?: string;
}

const defaultProps = {
  display: Display.Horizontal,
};

function computeClassName(props: IMudraTabHeaderProps): string {
  const { className, display = defaultProps.display } = props;
  const classNames: string[] = ["mudra-tab-header"];
  classNames.push(`display-${display.toLowerCase()}`);
  if (className) classNames.push(className);
  return classNames.join(" ");
}

// eslint-disable-next-line react/display-name
const MudraTabHeader: React.FunctionComponent<IMudraTabHeaderProps> = (
  props
) => {
  const {
    className,
    id,
    children,
    display = defaultProps.display,
    parentId,
  } = props;
  const computedClassName: string = React.useMemo<string>(() => {
    return computeClassName(props);
  }, [className, display]);
  const renderChildren = () => {
    if (children) {
      if (Array.isArray(children)) {
        return children.map((child) => {
          return React.cloneElement(child, {
            parentId: parentId,
            display: display,
          });
        });
      } else {
        return React.cloneElement(children as React.ReactElement<any>, {
          parentId: parentId,
          display: display,
        });
      }
    } else return null;
  };
  return (
    <div
      className={computedClassName}
      id={`mudraTabHeaderId-${parentId}-${id}`}
      data-testid="mudra_tab_header"
    >
      {renderChildren()}
    </div>
  );
};

export default MudraTabHeader;
