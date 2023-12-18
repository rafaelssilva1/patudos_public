import React, { useState } from "react";
import { PropTypes } from "./Carousel.types";
import {
  ContentWrapper,
  ImageWrapper,
  StyledHeading,
  StyledMessage,
  StyledNextButton,
  StyledPreviousButton,
  StyledSubtitle,
  Wrapper,
} from "./Carousel.styles";
import { Chevron } from "../icons";
import { ChevronPosition } from "../icons/Chevron";
import ResponsiveImage from "../image/Image";
import Heading from "../heading/Heading";
import BaseLink from "../link/Link";

const Carousel: React.FC<PropTypes> = ({
  data,
  alt,
  largestContentfulPaint,
}) => {
  const [slide, setSlide] = useState<number | undefined>(0);

  const handlePreviousClick = () => {
    const slideToRender = slide ?? 0;
    const length = data?.length ?? 0;
    if (slide === 0) {
      setSlide(length - 1);
    } else setSlide(slideToRender - 1);
  };

  const handleNextClick = () => {
    const slideToRender = slide ?? 0;
    if (slideToRender + 1 === data?.length) {
      setSlide(0);
    } else setSlide(slideToRender + 1);
  };

  if (!data) {
    return null;
  }
  return (
    <Wrapper>
      {data.map((el, index) => {
        return (
          slide === index && (
            <BaseLink href={el.url} key={`${alt}-${index}`}>
              <ImageWrapper>
                <ResponsiveImage
                  src={el.image}
                  alt={alt ? alt : el.title}
                  loading={
                    largestContentfulPaint === index + 1 ? "eager" : "lazy"
                  }
                  placeholder="blur"
                  priority={largestContentfulPaint === index + 1}
                />
                <ContentWrapper>
                  <StyledSubtitle>{el.subtitle}</StyledSubtitle>
                  <StyledHeading level="1">{el.title}</StyledHeading>
                  <StyledMessage>{el.message}</StyledMessage>
                </ContentWrapper>
              </ImageWrapper>
            </BaseLink>
          )
        );
      })}
      {data.length > 1 && (
        <>
          <StyledPreviousButton onClick={handlePreviousClick} aria-label="previous-button">
            <Chevron position={ChevronPosition.Left} />
          </StyledPreviousButton>
          <StyledNextButton onClick={handleNextClick} aria-label="next-button">
            <Chevron position={ChevronPosition.Right} />
          </StyledNextButton>
        </>
      )}
    </Wrapper>
  );
};

export default Carousel;
