"use client";

import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type PropType = {
  slides: React.ReactNode[]; // To support icons or any JSX
  options?: EmblaOptionsType;
};

const SkillCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
      speed: 0.5,
      
    }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = emblaApi.plugins().autoScroll;

    const handleUserInteraction = () => {
      autoScroll?.play(); // Restart autoplay after any interaction
    };

    emblaApi.on("pointerUp", handleUserInteraction); // Resumes autoplay after dragging
    emblaApi.on("pointerDown", handleUserInteraction); // Handles click interactions

    return () => {
      emblaApi.off("pointerUp", handleUserInteraction);
      emblaApi.off("pointerDown", handleUserInteraction);
    };
  }, [emblaApi]);

  return (
    <div className="embla_skill_slider 
    xl:w-[450px] 
    lg:w-[300px]
    md:w-[500px] 
    sm:w-[300px]
    xsm:w-[270px]

    ">
      <div className="embla_skill_slider__viewport" ref={emblaRef}>
        <div className="embla_skill_slider__container ">
          {slides.map((slide, index) => (
            <div className="embla_skill_slider__slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCarousel;
