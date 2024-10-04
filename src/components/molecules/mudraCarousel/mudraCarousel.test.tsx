import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MudraCarousel, CarouselCard } from "./mudraCarousel";

describe("mudra-carousel", () => {
  it("Test1: Mudra Carousel loads the header", () => {
    render(
      <MudraCarousel header="Test Header">
        <CarouselCard height="100px" width="100px">
          Card 1
        </CarouselCard>
      </MudraCarousel>
    );

    const header = screen.getByTestId("mudra-carousel-header");

    const text = header.textContent;
    expect(text === "Test Header").toBe(true);
  });

  it("Test2: Mudra Carousel loads the sub header", () => {
    render(
      <MudraCarousel header="Test Header" subHeader="This is sub header">
        <CarouselCard height="100px" width="100px">
          Card 1
        </CarouselCard>
      </MudraCarousel>
    );

    const subHeader = screen.getByTestId("mudra-carousel-subheader");

    const text = subHeader.textContent;
    expect(text === "This is sub header").toBe(true);
  });

  it("Test3: Mudra Carousel counts the correct no. of cards", () => {
    render(
      <MudraCarousel header="Test Header">
        <CarouselCard height="100px" width="100px">
          Card 1
        </CarouselCard>
        <CarouselCard height="100px" width="100px">
          Card 2
        </CarouselCard>
        <CarouselCard height="100px" width="100px">
          Card 3
        </CarouselCard>
      </MudraCarousel>
    );

    const wrapper = screen.getByTestId("carousel-card-wrapper");
    const count = wrapper.childNodes.length;
    expect(count == 3).toBe(true);
  });

  it("Test4: Mudra Carousel card wrapper is scrolling", () => {
    const data = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"];
    const header = "Header";
    const subHeader = "This is sub header";
    const buttonText = "Know More";
    const buttonURL = "https://insights.storybookfinance.com";

    render(
      <MudraCarousel
        header={header}
        subHeader={subHeader}
        buttonText={buttonText}
        buttonURL={buttonURL}
        showMobileControls={true}
        showMobileIndicators={true}
      >
        {data.map((item, index) => {
          return (
            <CarouselCard
              height="200px"
              width="300px"
              rounded="16px"
              className="flex items-center justify-center"
              key={index}
            >
              {item}
            </CarouselCard>
          );
        })}
      </MudraCarousel>
    );

    const buttonNext = screen.getByTestId("btn-scroll-next");
    fireEvent.click(buttonNext);

    const buttonPrev = screen.getByTestId("btn-scroll-prev");
    fireEvent.click(buttonPrev);

    const scrollContainer = screen.getByTestId("carousel-card-wrapper");
    fireEvent.scroll(scrollContainer, { target: { scrollX: 1000 } });
  });
});
