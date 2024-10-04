import React, { ReactElement } from "react";
import { Display, Type } from "./propTypes";
import "./styles.scss";

export interface IMudraTabContainerProps {
  tabs: (string | ReactElement)[];
  tabContents: Array<string | ReactElement>;
  className?: string;
  display?: Display; // by default Horizontal
  type?: Type; // by default Basic
  maxContentHeight?: string;
  id: string;
}

function computeClassName(props: IMudraTabContainerProps): string {
  const { className, display, type } = props;
  const classNames: string[] = ["mudra-tabContainer"];
  display
    ? classNames.push(`display-${display.toLowerCase()}`)
    : classNames.push("display-horizontal");
  type
    ? classNames.push(`type-${type.toLowerCase()}`)
    : classNames.push("type-basic");
  if (className) classNames.push(className);
  return classNames.join(" ");
}

// eslint-disable-next-line react/display-name
const MudraTabContainer: React.FunctionComponent<IMudraTabContainerProps> = (
  props
) => {
  const { tabs, tabContents, className, display, type, maxContentHeight, id } =
    props;

  const [activeTab, setActiveTab] = React.useState("1");

  const computedClassName: string = React.useMemo<string>(() => {
    return computeClassName(props);
  }, [className, tabs, tabContents, display, type, maxContentHeight]);

  const handleTabChange = (e) => {
    if (type === Type.Scrollable) {
      const tabContainer = document.getElementById(id);
      const element = document.getElementById(
        `mdc_${id}_${e.currentTarget.id}`
      );
      if (element) {
        element.scrollIntoView(true);
        tabContainer?.scrollIntoView(true);
      }
    } else {
      setActiveTab(e.currentTarget.id);
    }
  };

  const handleScroll = () => {
    const tabContainer = document.getElementById(id);
    const element = tabContainer?.getElementsByClassName("mudra-tabs-contents");
    const topHeight = element && element[0].getBoundingClientRect().top;
    const elements = tabContainer?.getElementsByClassName("mudra-tab-content");
    const heights: number[] = [];
    if (elements)
      for (let i = 0; i < elements.length; i++) {
        const height = elements[i].getBoundingClientRect().top;
        heights.push(height);
      }

    for (let j = 0; j < heights.length; j++) {
      if (topHeight && topHeight >= heights[j]) {
        setActiveTab((j + 1).toString());
      }
    }
  };

  const renderTabsHeader = () => {
    return tabs.map((e, i) => {
      return (
        <div
          key={`tab_${id}_${i}`}
          className={
            "mudra-tab" + (activeTab === (i + 1).toString() ? " selected" : "")
          }
        >
          <div
            id={(i + 1).toString()}
            onClick={handleTabChange}
            className="mudra-tab-header-content"
          >
            {e}
          </div>
        </div>
      );
    });
  };

  const renderTabsContent = () => {
    return tabContents.map((e, i) => {
      return (
        <div
          key={`tc_${id}_${i}`}
          className={
            "mudra-tab-content" +
            (activeTab === (i + 1).toString() ? " selected" : "")
          }
          id={`mdc_${id}_${(i + 1).toString()}`}
        >
          {e}
        </div>
      );
    });
  };

  return (
    <div className={computedClassName} id={id} data-testid="mudra_tabContainer">
      <div className="mudra-tabs">{renderTabsHeader()}</div>
      <div
        className="mudra-tabs-contents"
        style={{ maxHeight: `${maxContentHeight ? maxContentHeight : 600}px` }}
        onScroll={handleScroll}
      >
        {renderTabsContent()}
        {type === Type.Scrollable && (
          <div className="mudra-tab-content-last"></div>
        )}
      </div>
    </div>
  );
};

export default MudraTabContainer;
