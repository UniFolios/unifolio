"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
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

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  
  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect(); // Initialize the state

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="flex justify-center bg-gray-50 mx-auto 
              xl:flex-row xl:p-14 xl:gap-8 
              lg:flex-row lg:px-12 lg:py-10 lg:gap-6 lg:items-start
              md:flex-col md:px-14 md:py-10 md:gap-5 md:items-center
              sm:flex-col sm:px-8 sm:py-10 sm:gap-4 sm:items-center 
              xsm:flex-col xsm:px-2 xsm:py-4 xsm:gap-6 xsm:items-center 
              ">
                {/* Image Wrapper */}
                <div className="
                xl:w-[500px] xl:h-[250px]
                lg:w-[450px] lg:h-[250px]
                md:w-[400px] md:h-[350px] 
                sm:w-[350px] sm:h-[300px] 
                xsm:w-[200px] xsm:h-[200px] 

                ">
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.avatar}
                      alt={`${slide.name}'s testimonial`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full">
                  <div className="flex items-top gap-3">
                    <h2 className="underline text-gray-950 font-medium
                    xl:text-2xl xl:mb-2 
                    lg:text-xl lg:mb-2
                    md:text-lg md:mb-1 md:pl-0
                    sm:text-base sm:mb-1 sm:pl-10
                    xsm:text-base xsm:mb-2 xsm:pl-4 
                    ">
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
                  <h3 className=" text-gray-600 font-medium
                  xl:text-base xl:mb-6
                  lg:text-base lg:mb-6
                  md:text-sm md:mb-4 md:px-0
                  sm:text-xs sm:mb-3 sm:pl-10
                  xsm:text-xs xsm:mb-1 xsm:px-4  

                  ">{slide.role}</h3>
                  <p className="text-gray-500
                  xl:text-base
                  lg:text-sm
                  md:text-sm md:pl-0
                  sm:text-xs sm:pl-10
                  xsm:text-xs xsm:p-4  

                  ">{slide.testimonial}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots for Navigation */}
      <div className="flex justify-center items-center space-x-4
      xl:mt-24
      lg:mt-24
      md:mt-8
      sm:mt-8
      xsm:mt-8
      ">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-10 h-1 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-black scale-150"
                : "bg-gray-300 scale-100"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;