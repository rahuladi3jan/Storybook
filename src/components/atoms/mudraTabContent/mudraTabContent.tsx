import React from "react";
import "./styles.scss";
import { Type } from "../../molecules/mudraTabs/propTypes";

export interface IMudraTabContentProps {
  id: string;
  children?: string | React.ReactNode;
  className?: string;
  type?: Type;
  parentId?: string;
}

const defaultProps = {
  type: Type.Basic,
};

function computeClassName(props: IMudraTabContentProps): string {
  const { className, type = defaultProps.type } = props;
  const classNames: string[] = ["mudra-tab-content"];
  classNames.push(`type-${type.toLowerCase()}`);
  if (className) classNames.push(className);
  return classNames.join(" ");
}

// eslint-disable-next-line react/display-name
const MudraTabContent: React.FunctionComponent<IMudraTabContentProps> = (
  props
) => {
  const { className, id, children, type = defaultProps.type, parentId } = props;
  const computedClassName: string = React.useMemo<string>(() => {
    return computeClassName(props);
  }, [className, type]);
  return (
    <div
      className={computedClassName}
      id={`mudraTabContentId-${parentId}-${id}`}
      data-testid="mudra_tab_content"
    >
      <div className="mudra-tab-content-value">{children}</div>
    </div>
  );
};

export default MudraTabContent;
