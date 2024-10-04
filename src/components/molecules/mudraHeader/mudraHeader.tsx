import React from "react";
import { StorybookLogo, ChevronDown } from "../../../icons";
import "./styles.scss";
import MudraAvatar, {
  IMudraAvatarProps,
} from "../../atoms/mudraAvatar/mudraAvatar";
import { MudraTooltip } from "../../atoms";
import {
  Direction,
  RenderCondition,
  ToolTipAlignment,
} from "../../atoms/mudraTooltip/propTypes";
import { combineClassNames } from "../../../utils/utilityFunctions";

export interface IMudraHeaderProps {
  heading: string;
  centerElement?: React.ReactNode;
  userAvatarProps: IMudraAvatarProps;
  contextMenu?: React.ReactNode;
  className?: string;
  homePageUrl?: string;
  onLogoOrBrandNameClicked?: (
    ev?: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

// eslint-disable-next-line react/display-name
const MudraHeader = React.forwardRef<HTMLHeadingElement, IMudraHeaderProps>(
  (props, ref) => {
    const {
      heading,
      centerElement,
      className,
      userAvatarProps,
      contextMenu,
      homePageUrl,
      onLogoOrBrandNameClicked,
    } = props;
    const chevronRef = React.useRef<SVGSVGElement>(null);

    const computedClassName: string = React.useMemo(() => {
      return combineClassNames("mudra-header", className);
    }, [className]);

    const _onLogoOrBrandNameClicked = (ev) => {
      if (typeof onLogoOrBrandNameClicked === "function")
        onLogoOrBrandNameClicked(ev);
    };

    return (
      <header
        ref={ref}
        className={computedClassName}
        data-testid="mudra_header_root"
      >
        <a
          href={homePageUrl}
          onClick={_onLogoOrBrandNameClicked}
          data-testid="mudra_header_left_container"
          className="left-container"
        >
          <StorybookLogo className="storybook-logo" />
          <h1 className="title">{heading}</h1>
        </a>
        <div className="center-container">{centerElement}</div>
        <div className="right-container">
          <MudraAvatar {...userAvatarProps} className="avatar" />
          <label className="user-name">{userAvatarProps.name}</label>
          {contextMenu && <ChevronDown ref={chevronRef} className="chevron" />}
        </div>
        <MudraTooltip
          parentRef={chevronRef}
          renderCondition={RenderCondition.Click}
          direction={Direction.Bottom}
          alignment={ToolTipAlignment.End}
          isBeakHidden={true}
          gap={12}
          endAlignment={-12}
        >
          {contextMenu}
        </MudraTooltip>
      </header>
    );
  }
);

export default MudraHeader;
