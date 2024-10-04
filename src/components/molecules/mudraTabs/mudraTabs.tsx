import React, { ReactElement, useEffect } from "react";
import { Display, Type } from "./propTypes";
import "./styles.scss";

export interface IMudraTabsProps {
  children: ReactElement[];
  className?: string;
  display?: Display; // by default Horizontal
  type?: Type; // by default Basic
  id: string;
  selectedTab?: string;
}

const defaultProps = {
  display: Display.Horizontal,
  type: Type.Basic,
};

function computeClassName(props: IMudraTabsProps): string {
  const {
    className,
    display = defaultProps.display,
    type = defaultProps.type,
  } = props;
  const classNames: string[] = ["mudra-tabs"];
  classNames.push(`display-${display.toLowerCase()}`);
  classNames.push(`type-${type.toLowerCase()}`);
  if (className) classNames.push(className);
  return classNames.join(" ");
}

// eslint-disable-next-line react/display-name
const MudraTabs: React.FunctionComponent<IMudraTabsProps> = (props) => {
  const {
    children,
    className,
    display = defaultProps.display,
    type = defaultProps.type,
    id,
    selectedTab,
  } = props;

  useEffect(() => {
    const tabsMain = document.getElementById(id);
    const tabs =
      tabsMain?.getElementsByClassName("mudra-header-tab-content") &&
      tabsMain.getElementsByClassName("mudra-header-tab-content");
    if (tabs) {
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", handleTabChange);
      }
    }
    if (type === Type.Scrollable) {
      const tabContentContainer = tabsMain?.getElementsByClassName(
        "mudra-tab-content-container"
      )[0];
      tabContentContainer &&
        tabContentContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (tabs) {
        for (let i = 0; i < tabs.length; i++) {
          tabs[i].removeEventListener("click", handleTabChange);
        }
      }
    };
  }, []);

  useEffect(() => {
    if (selectedTab) {
      const selected = document.getElementById(
        `mudraTabId-${id}-${selectedTab}`
      );
      selected?.classList.add("selected");
      const contentSelected = document.getElementById(
        `mudraTabContentId-${id}-${selectedTab}`
      );
      contentSelected?.classList.add("selected");
    } else {
      const tabsMain = document.getElementById(id);
      const firstTab =
        tabsMain?.getElementsByClassName("mudra-tab") &&
        tabsMain.getElementsByClassName("mudra-tab")[0];
      const selected = firstTab?.id;
      if (selected) {
        firstTab?.classList.add("selected");
      }
      const firstTabContent =
        tabsMain?.getElementsByClassName("mudra-tab-content") &&
        tabsMain?.getElementsByClassName("mudra-tab-content")[0];
      firstTabContent?.classList.add("selected");
    }
  }, [selectedTab]);

  const computedClassName: string = React.useMemo<string>(() => {
    return computeClassName(props);
  }, [className, display, type]);

  const handleTabChange = (e) => {
    const tabsMain = document.getElementById(id);
    const prevSelected =
      tabsMain?.getElementsByClassName("mudra-tab selected")[0];
    prevSelected?.classList.remove("selected");

    const tabId = e.currentTarget.id.split("-")[2];
    const completeTabId = "mudraTabId-" + id + "-" + tabId;
    const newSelected = document.getElementById(completeTabId);
    newSelected?.classList.add("selected");
    const selectContent = document.getElementById(
      `mudraTabContentId-${id}-${tabId}`
    );

    if (type === Type.Scrollable) {
      selectContent?.scrollIntoView(true);
      tabsMain?.scrollIntoView(true);
    } else {
      const prevSelectedContent = tabsMain?.getElementsByClassName(
        "mudra-tab-content selected"
      )[0];
      prevSelectedContent?.classList.remove("selected");
      selectContent?.classList.add("selected");
    }
  };

  const handleScroll = () => {
    // debugger
    const tabs = document.getElementById(id);
    const tabContentContainer = tabs?.getElementsByClassName(
      "mudra-tab-content-container"
    );
    const topHeight =
      tabContentContainer && tabContentContainer[0].getBoundingClientRect().top;
    const tabContentArray = tabs?.getElementsByClassName("mudra-tab-content");
    const heights: number[] = [];
    const tabContentIds: string[] = [];
    if (tabContentArray)
      for (let i = 0; i < tabContentArray.length; i++) {
        const height = tabContentArray[i].getBoundingClientRect().top;
        tabContentIds.push(tabContentArray[i].id);
        heights.push(height);
      }
    for (let j = 0; j < heights.length; j++) {
      if (topHeight && topHeight >= heights[j]) {
        const prevSelected =
          tabs?.getElementsByClassName("mudra-tab selected")[0];
        prevSelected?.classList.remove("selected");
        const tabId = tabContentIds[j].split("-")[2];
        const completeTabId = "mudraTabId-" + id + "-" + tabId;
        const newSelected = document.getElementById(completeTabId);
        newSelected?.classList.add("selected");
      }
    }
  };

  return (
    <div className={computedClassName} id={id} data-testid="mudra_tabs">
      {React.cloneElement(children && children[0], {
        parentId: id,
        display: display,
      })}
      {React.cloneElement(children && children[1], {
        parentId: id,
        display: display,
        type: type,
      })}
    </div>
  );
};

export default MudraTabs;
