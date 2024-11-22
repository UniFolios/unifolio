"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import IconLinkedIn from "../icons/linkedin";

type SlideType = {
  avatar: string; // URL for user avatar
  name: string; // Name of the person
  role: string; // Role or designation
  testimonial: string; // Testimonial text
  linkedinUrl?: string; // Optional LinkedIn URL
};

type PropType = {
  slides: SlideType[]; // Array of slide content
  options?: EmblaOptionsType;
};

const TestimonialCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 p-8 bg-gray-50 w-full mx-auto lg:mx-0">
                <Image
                  src={slide.avatar}
                  width={191}
                  height={250}
                  alt={`${slide.name}'s testimonial`}
                />
                <div>
                  <div className="flex gap-4">
                    <h2 className="text-2xl font-semibold pb-4 underline">
                      {slide.name}
                    </h2>
                    {slide.linkedinUrl && (
                      <a
                        href={slide.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconLinkedIn />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-normal pb-8">{slide.role}</h3>
                  <p>{slide.testimonial}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;