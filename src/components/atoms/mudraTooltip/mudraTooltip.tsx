import React from "react";
import {
  ToolTipAlignment,
  BeakSize,
  Direction,
  RenderCondition,
  Theme,
} from "./propTypes";
import { BeakDimension } from "./configuration";
import "./styles.scss";

export interface IMudraTooltipProps {
  parentRef: React.RefObject<HTMLElement | SVGSVGElement>;
  direction?: Direction;
  alignment?: ToolTipAlignment;
  beakSize?: BeakSize;
  gap?: number;
  renderCondition: RenderCondition;
  theme?: Theme;
  isBeakHidden?: boolean;
  startAlignment?: number;
  endAlignment?: number;
  children?: React.ReactNode;
}

const MudraTooltip: React.FunctionComponent<IMudraTooltipProps> = (props) => {
  const {
    parentRef,
    direction = defaultProps.direction,
    alignment = defaultProps.alignment,
    beakSize = defaultProps.beakSize,
    gap = defaultProps.gap,
    renderCondition,
    theme = defaultProps.theme,
    isBeakHidden = defaultProps.isBeakHidden,
    startAlignment = defaultProps.startAlignment,
    endAlignment = defaultProps.endAlignment,
  } = props;
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const [tooltipStyles, setTooltipStyles] = React.useState<React.CSSProperties>(
    {}
  );
  const [beakStyles, setBeakStyles] = React.useState<React.CSSProperties>({});
  const [isToolTipVisible, setTooltipVisibility] =
    React.useState<boolean>(false);

  const computeTooltipStyles = React.useCallback(() => {
    return getTooltipStyles({ ...props, tooltipRef });
  }, [
    direction,
    alignment,
    parentRef,
    gap,
    tooltipRef,
    beakSize,
    endAlignment,
    startAlignment,
  ]);

  const ComputeBeakStyles = React.useCallback(() => {
    return getBeakStyles({ ...props, tooltipRef });
  }, [
    direction,
    alignment,
    parentRef,
    gap,
    tooltipRef,
    beakSize,
    endAlignment,
    startAlignment,
  ]);

  const setStyles = React.useCallback(() => {
    if (isToolTipVisible) {
      setTooltipStyles(computeTooltipStyles());
      if (!isBeakHidden) setBeakStyles(ComputeBeakStyles());
    }
  }, [computeTooltipStyles, ComputeBeakStyles, isToolTipVisible, isBeakHidden]);

  const tooltipClassName = React.useMemo(() => {
    return getTooltipClassName("mudra-tooltip", theme);
  }, [theme]);

  const showTooltip: any = React.useCallback((): any => {
    setTooltipVisibility(true);
  }, []);

  // const hideTooltip: any = React.useCallback(
  //   (ele: HTMLElement, ev: MouseEvent): any => {
  //     setTooltipVisibility(false);
  //   },
  //   []
  // );

  const hideTooltip: any = React.useCallback((): any => {
    setTooltipVisibility(false);
  }, []);

  const handleClick: any = React.useCallback(
    (ev: MouseEvent): any => {
      setTooltipVisibility((isVisible) => {
        let visibility = isVisible;
        if (isVisible) {
          if (
            tooltipRef?.current &&
            !tooltipRef.current.contains(ev.target as Node)
          )
            visibility = false;
        } else if (
          parentRef?.current &&
          parentRef?.current.contains(ev.target as Node)
        )
          visibility = true;

        return visibility;
      });
    },
    [parentRef, tooltipRef]
  );

  const removeEventListeners = React.useCallback(() => {
    if (parentRef?.current) {
      parentRef.current.removeEventListener("mouseenter", showTooltip);
      parentRef.current.removeEventListener("mouseleave", hideTooltip);
      parentRef.current.removeEventListener("mousedown", showTooltip);
    }
  }, [parentRef, showTooltip, hideTooltip]);

  React.useEffect(() => removeEventListeners(), [parentRef, tooltipRef]);

  React.useEffect(() => {
    if (parentRef?.current) {
      if (renderCondition === RenderCondition.Hover) {
        parentRef.current.addEventListener("mouseenter", showTooltip);
        parentRef.current.addEventListener("mouseleave", hideTooltip);
      } else if (renderCondition == RenderCondition.Click) {
        window.addEventListener("mousedown", handleClick);
      }
    }
    return removeEventListeners;
  }, [renderCondition, parentRef, tooltipRef]);

  React.useEffect(() => {
    window.addEventListener("resize", setStyles);
    return () => {
      window.removeEventListener("resize", setStyles);
    };
  }, [setStyles]);

  React.useLayoutEffect(() => {
    setStyles();
  }, [
    direction,
    alignment,
    parentRef,
    gap,
    isToolTipVisible,
    isBeakHidden,
    startAlignment,
    endAlignment,
  ]);

  return isToolTipVisible ? (
    <>
      <div
        className={tooltipClassName}
        ref={tooltipRef}
        style={tooltipStyles}
        data-testid="mudra_tooltip"
      >
        {!isBeakHidden && (
          <div style={beakStyles} className="mudra-tooltip-beak" />
        )}
        {props.children}
      </div>
    </>
  ) : null;
};

function getTooltipClassName(defaultClassName, theme: Theme) {
  return `${defaultClassName} ${
    theme == Theme.Light ? "theme-light" : "theme-dark"
  }`;
}

function getTooltipStyles(
  props: IMudraTooltipProps & { tooltipRef: React.RefObject<HTMLDivElement> }
): React.CSSProperties {
  const {
    parentRef,
    direction = defaultProps.direction,
    alignment = defaultProps.alignment,
    beakSize = defaultProps.beakSize,
    gap = defaultProps.gap,
    isBeakHidden = defaultProps.isBeakHidden,
    startAlignment = defaultProps.startAlignment,
    endAlignment = defaultProps.endAlignment,
    tooltipRef,
  } = props;
  const styles: React.CSSProperties = {};
  if (tooltipRef.current && parentRef.current) {
    const beakDimension: number = isBeakHidden ? 0 : BeakDimension[beakSize];
    const viewportWidth = document.body.clientWidth;
    const viewportHeight = document.body.clientHeight;
    const parentDomRect = (
      parentRef.current?.childNodes[0] as HTMLElement
    ).getBoundingClientRect();
    const toolTipDomRect = tooltipRef.current.getBoundingClientRect();
    switch (direction) {
      case Direction.Bottom:
        styles["top"] =
          parentDomRect.bottom + beakDimension / Math.sqrt(2) + gap;
        switch (alignment) {
          case ToolTipAlignment.Start:
            styles["left"] = parentDomRect.left + startAlignment;
            break;
          case ToolTipAlignment.End:
            styles["right"] =
              viewportWidth + endAlignment - parentDomRect.right;
            break;
          case ToolTipAlignment.Center:
            styles["left"] =
              parentDomRect.left -
              (toolTipDomRect.width - parentDomRect.width) / 2;
            break;
        }
        break;
      case Direction.Top:
        styles["top"] =
          parentDomRect.top -
          toolTipDomRect.height -
          beakDimension / Math.sqrt(2) -
          gap;
        switch (alignment) {
          case ToolTipAlignment.Start:
            styles["left"] = parentDomRect.left + startAlignment;
            break;
          case ToolTipAlignment.End:
            styles["right"] =
              viewportWidth + endAlignment - parentDomRect.right;
            break;
          case ToolTipAlignment.Center:
            styles["left"] =
              parentDomRect.left -
              (toolTipDomRect.width - parentDomRect.width) / 2;
            break;
        }
        break;
      case Direction.Left:
        styles["left"] =
          parentDomRect.left -
          toolTipDomRect.width -
          beakDimension / Math.sqrt(2) -
          gap;
        switch (alignment) {
          case ToolTipAlignment.Start:
            styles["top"] = parentDomRect.top + startAlignment;
            break;
          case ToolTipAlignment.End:
            styles["bottom"] =
              viewportHeight + endAlignment - parentDomRect.bottom;
            break;
          case ToolTipAlignment.Center:
            styles["top"] =
              parentDomRect.top -
              (toolTipDomRect.height - parentDomRect.height) / 2;
            break;
        }
        break;
      case Direction.Right:
        styles["left"] =
          parentDomRect.right + beakDimension / Math.sqrt(2) + gap;
        switch (alignment) {
          case ToolTipAlignment.Start:
            styles["top"] = parentDomRect.top + startAlignment;
            break;
          case ToolTipAlignment.End:
            styles["bottom"] =
              viewportHeight + endAlignment - parentDomRect.bottom;
            break;
          case ToolTipAlignment.Center:
            styles["top"] =
              parentDomRect.top -
              (toolTipDomRect.height - parentDomRect.height) / 2;
            break;
        }
        break;
    }
  }
  return styles;
}

function getBeakStyles(
  props: IMudraTooltipProps & { tooltipRef: React.RefObject<HTMLDivElement> }
): React.CSSProperties {
  const {
    parentRef,
    direction = defaultProps.direction,
    alignment = defaultProps.alignment,
    beakSize = defaultProps.beakSize,
    startAlignment = defaultProps.startAlignment,
    endAlignment = defaultProps.endAlignment,
    tooltipRef,
  } = props;
  const beakDimension: number = BeakDimension[beakSize];
  const beakLength = Math.floor(beakDimension / 2);
  const sqrtBeakLength = beakDimension / Math.sqrt(2);
  const styles: React.CSSProperties = {
    width: beakDimension,
    height: beakDimension,
    position: "absolute",
  };
  if (tooltipRef.current && parentRef.current) {
    const toolTipDomRect = tooltipRef.current.getBoundingClientRect();
    const parentDomRect = (
      parentRef.current?.childNodes[0] as HTMLElement
    ).getBoundingClientRect();
    switch (direction) {
      case Direction.Bottom:
        styles["top"] = -beakLength;
        switch (alignment) {
          case ToolTipAlignment.Start:
            if (toolTipDomRect.width > parentDomRect.width / 2)
              styles["left"] =
                parentDomRect.width / 2 - startAlignment - sqrtBeakLength;
            else styles["right"] = sqrtBeakLength - startAlignment;
            break;
          case ToolTipAlignment.End:
            if (toolTipDomRect.width > parentDomRect.width / 2 + sqrtBeakLength)
              styles["right"] =
                parentDomRect.width / 2 - endAlignment - sqrtBeakLength;
            else styles["left"] = sqrtBeakLength - endAlignment;
            break;
          case ToolTipAlignment.Center:
            styles["left"] = (toolTipDomRect.width - beakDimension) / 2;
        }
        break;
      case Direction.Top:
        styles["bottom"] = -beakLength;
        switch (alignment) {
          case ToolTipAlignment.Start:
            if (toolTipDomRect.width > parentDomRect.width / 2)
              styles["left"] =
                parentDomRect.width / 2 - startAlignment - sqrtBeakLength;
            else styles["right"] = sqrtBeakLength - startAlignment;
            break;
          case ToolTipAlignment.End:
            if (toolTipDomRect.width > parentDomRect.width / 2 + sqrtBeakLength)
              styles["right"] =
                parentDomRect.width / 2 - endAlignment - sqrtBeakLength;
            else styles["left"] = sqrtBeakLength - endAlignment;
            break;
          case ToolTipAlignment.Center:
            styles["left"] = (toolTipDomRect.width - beakDimension) / 2;
        }
        break;
      case Direction.Left:
        styles["right"] = -beakLength;
        switch (alignment) {
          case ToolTipAlignment.Start:
            styles["top"] =
              (parentDomRect.height - beakDimension) / 2 - startAlignment;
            break;
          case ToolTipAlignment.End:
            styles["bottom"] =
              (parentDomRect.height - beakDimension) / 2 - endAlignment;
            break;
          case ToolTipAlignment.Center:
            styles["top"] = (toolTipDomRect.height - beakDimension) / 2;
        }
        break;
      case Direction.Right:
        styles["left"] = -beakLength;
        switch (alignment) {
          case ToolTipAlignment.Start:
            styles["top"] =
              (parentDomRect.height - beakDimension) / 2 - startAlignment;
            break;
          case ToolTipAlignment.End:
            styles["bottom"] =
              (parentDomRect.height - beakDimension) / 2 - endAlignment;
            break;
          case ToolTipAlignment.Center:
            styles["top"] = (toolTipDomRect.height - beakDimension) / 2;
        }
    }
  }
  return styles;
}

const defaultProps = {
  direction: Direction.Bottom,
  alignment: ToolTipAlignment.Center,
  beakSize: BeakSize.Medium,
  gap: 2,
  theme: Theme.Light,
  isBeakHidden: false,
  startAlignment: 0,
  endAlignment: 0,
};

export default MudraTooltip;
