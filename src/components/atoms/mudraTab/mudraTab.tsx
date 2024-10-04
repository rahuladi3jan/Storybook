import React from "react";
import "./styles.scss";
import { Display } from "../../molecules/mudraTabs/propTypes";

export interface IMudraTabProps {
  id: string;
  children?: string | React.ReactElement;
  className?: string;
  display?: Display;
  parentId?: string;
}

const defaultProps = {
  display: Display.Horizontal,
};

function computeClassName(props: IMudraTabProps): string {
  const { className, display = defaultProps.display } = props;
  const classNames: string[] = ["mudra-tab"];
  if (className) classNames.push(className);
  classNames.push(`display-${display.toLowerCase()}`);
  return classNames.join(" ");
}

// eslint-disable-next-line react/display-name
const MudraTab: React.FunctionComponent<IMudraTabProps> = (props) => {
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
  return (
    <div
      className={computedClassName}
      id={`mudraTabId-${parentId}-${id}`}
      data-testid="mudra_tab"
    >
      <div
        id={`mudraHeaderTabContentId-${parentId}-${id}`}
        className="mudra-header-tab-content"
      >
        {children}
      </div>
    </div>
  );
};

export default MudraTab;
