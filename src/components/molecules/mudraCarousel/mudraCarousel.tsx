import React, { useState, useEffect, useRef } from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import {
  OutlinedLeftArrow,
  OutlinedRightArrow,
  ChevronRightTomato,
} from "../../../icons";

export interface IMudraCarouselProps {
  className?: string;
  style?: React.CSSProperties;
  showHeader?: boolean;
  header?: string;
  subHeader?: string;
  buttonText?: string;
  buttonURL?: string;
  showMobileControls?: boolean;
  showMobileIndicators?: boolean;
}

export interface ICarouselCardProps {
  className?: string;
  style?: React.CSSProperties;
  rounded?: string;
  height: string;
  width: string;
}

export const MudraCarousel: React.FunctionComponent<IMudraCarouselProps> = (
  props
) => {
  const computedClassName: string = React.useMemo<string>(
    () => `mudra-carousel ${props.className ? props.className : ""} `.trim(),
    [props.className]
  );

  const target = useRef<HTMLInputElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [center, setCenter] = useState(false);

  const prev = () => {
    const left = target.current?.scrollLeft as number,
      count = target.current?.childElementCount as number;
    let newX = 0;

    for (let i = 0; i < count; i++) {
      newX += target?.current?.children[i].clientWidth as number;
      if (left < newX) {
        target?.current?.scroll({
          left: newX,
          top: 0,
          behavior: "smooth",
        });
        return;
      }
    }
  };

  const next = () => {
    const left = target.current?.scrollLeft as number,
      count = target.current?.childElementCount as number;
    let newX = 0;

    for (let i = 0; i < count; i++) {
      const elementWidth = target.current?.children[i].clientWidth;
      newX += elementWidth as number;
      if (left <= newX) {
        target.current?.scroll({
          left: newX - (elementWidth as number),
          top: 0,
          behavior: "smooth",
        });
        return;
      }
    }
  };

  const scrollListener = () => {
    if (!target.current) return;

    const element = target.current;
    const windowScroll = element.scrollLeft;
    const totalWidth = element.scrollWidth - element.clientWidth;

    if (windowScroll === 0) return setScrollProgress(0);
    if (windowScroll > totalWidth) return setScrollProgress(100);

    setScrollProgress((windowScroll / totalWidth) * 100);
  };

  useEffect(() => {
    if (target.current!.scrollWidth <= target.current!.clientWidth) {
      setCenter(true);
    }
  }, [center]);

  const CarouselControls = ({
    scrollProgress,
    prev,
    next,
    showMobileControls,
  }) => {
    return (
      <div
        className={`${
          !showMobileControls && `hidden`
        } md:block flex  justify-center absolute md:top-3 top-1 right-0 md:right-6`}
        data-testid="mudra-carousel-controls"
      >
        <button
          disabled={!scrollProgress}
          onClick={next}
          className="disabled:opacity-50  p-1 rounded m-2"
          data-testid="btn-scroll-prev"
        >
          {!center && <OutlinedLeftArrow />}
        </button>
        <button
          disabled={Math.round(scrollProgress) === 100}
          onClick={prev}
          className="disabled:opacity-50  p-1 rounded m-2"
          data-testid="btn-scroll-next"
        >
          {!center && <OutlinedRightArrow />}
        </button>
      </div>
    );
  };

  const CarouselTopHeader = ({ header, subHeader }) => {
    return (
      <div className="relative mb-7 lg:mb-12">
        <div className="flex justify-center pt-2 md:pt-6 flex-col h-[60px]">
          <h2
            className={`${
              header ?? `hidden`
            } lg:block  font-extrabold text-xl md:text-[2rem] lg:leading-10 text-charcoal lg:mb-2`}
            data-testid="mudra-carousel-header"
          >
            {header}
          </h2>
          <h4
            className={`${
              subHeader ?? `hidden`
            } lg:block text-xl font-normal text-[#666666]`}
            data-testid="mudra-carousel-subheader"
          >
            {subHeader}
          </h4>
        </div>
      </div>
    );
  };

  const CarouselBottomHeader = ({ text, url }) => {
    return (
      <div
        className={`${text ?? `hidden`}`}
        data-testid="mudra-carousel-button"
      >
        <a href={url} target="_blank" rel="noreferrer">
          <div className="text-[#F26841] font-bold text-lg md:text-2xl flex items-center justify-center pt-6 md:pt-0">
            <span className="mr-1">{text}</span>
            <div
              className={`${
                text == null || text == undefined || text == ""
                  ? `hidden`
                  : `inline-block`
              } w-5 h-5 relative pt-1 pl-1`}
            >
              <ChevronRightTomato />
            </div>
          </div>
        </a>
      </div>
    );
  };

  const CarouselDots = ({ count, currentCardIndex }) => {
    const dots = [] as any;

    for (let i = 0; i < count; i++) {
      dots.push(
        <li key={i}>
          <span
            className={` h-1 bg-[#000000] inline-block rounded ${
              i == currentCardIndex ? "w-4" : "w-1 opacity-30"
            }`}
          ></span>
        </li>
      );
    }
    return (
      <ul
        className={`${
          props.showMobileIndicators ? `inline-block` : `hidden`
        }  md:hidden flex justify-center gap-2 `}
      >
        {dots}
      </ul>
    );
  };

  return (
    <div
      style={props.style}
      className={computedClassName}
      data-testid="mudra-carousel"
    >
      <div className="relative">
        <CarouselTopHeader header={props.header} subHeader={props.subHeader} />
        <CarouselControls
          prev={prev}
          next={next}
          scrollProgress={scrollProgress}
          showMobileControls={props.showMobileControls}
        />
        {/* {!center && <CarouselControls prev={prev} next={next} scrollProgress={scrollProgress} showMobileControls={props.showMobileControls} />} */}
        <div
          ref={target}
          onScroll={scrollListener}
          className={`carousel-wrapper ${
            center && `justify-center`
          } flex flex-row py-8 px-1 overflow-x-scroll items-center`}
          data-testid="carousel-card-wrapper"
        >
          {props.children}
        </div>
        <CarouselDots
          // count={props?.children?.length}
          count={React.Children.count(props.children)}
          currentCardIndex={
            target.current
              ? Math.round(
                  target.current.scrollLeft /
                    target.current.children[0].clientWidth
                )
              : 0
          }
        />
        <CarouselBottomHeader text={props.buttonText} url={props.buttonURL} />
      </div>
    </div>
  );
};

MudraCarousel.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  header: PropTypes.string,
  subHeader: PropTypes.string,
  buttonText: PropTypes.string,
  buttonURL: PropTypes.string,
};

export const CarouselCard: React.FunctionComponent<ICarouselCardProps> = (
  props
) => {
  return (
    <div className="pr-4">
      <div
        style={{
          minHeight: props.height,
          minWidth: props.width,
          borderRadius: props.rounded,
          ...props.style,
        }}
        className={`slide-item ` + props.className}
      >
        {props.children}
      </div>
    </div>
  );
};
