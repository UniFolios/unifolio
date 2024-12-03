"use client";

import React from "react";
import Link from "next/link";

import { EmblaOptionsType } from "embla-carousel";
import { Fade } from "react-awesome-reveal";

import IconSmiley from "./icons/smiley";
import SectionTitle from "./ui/section-title";
import Section from "./ui/section";
import SkillCarousel from "./ui/skill-carousel";
import Image from "next/image";
import IconAmazon from "./icons/amazon";
import IconAzure from "./icons/azure";
import IconCss from "./icons/css";
import IconDjango from "./icons/django";
import IconDocker from "./icons/docker";
import IconGit from "./icons/git";
import IconGithub from "./icons/github";
import IconGoogleCloud from "./icons/google-cloud";
import IconHtml from "./icons/html";
import IconJava from "./icons/java";
import IconJs from "./icons/js";
import IconLinux from "./icons/linux";
import IconNodeJs from "./icons/nodeJs";
import IconPython from "./icons/python";
import IconReact from "./icons/react";
import IconTailwind from "./icons/tailwind";
import IconTs from "./icons/ts";

const About = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SKILLS = [
    <IconAmazon key="amazon" />,
    <IconAzure key="azure" />,
    <IconCss key="css" />,
    <IconDjango key="django" />,
    <IconDocker key="docker" />,
    <IconGit key="git" />,
    <IconGithub key="github" />,
    <IconGoogleCloud key="googlecloud" />,
    <IconHtml key="html" />,
    <IconJava key="java" />,
    <IconJs key="js" />,
    <IconLinux key="linux" />,
    <IconNodeJs key="nodejs" />,
    <IconPython key="python" />,
    <IconReact key="react" />,
    <IconTailwind key="tailwind" />,
    <IconTs key="ts" />,  
  ];

  return (
    <Section id="about-me">
      <div className="mt-[-144px]">
      <SectionTitle title="Meet With" icon={<IconSmiley />} />
      <div className="
      flex items-center
      xl:flex-row xl:gap-6 
      lg:flex-row lg:gap-6
      md:flex-col md:gap-8
      sm:flex-col sm:gap-8
      xsm:flex-col xsm:gap-8
      ">
        <Fade direction="up" duration={1200} triggerOnce>
          <div className="bg-slate-50 flex-column

          xl:w-[568px] xl:h-[550px] xl:p-16
          lg:w-[468px] lg:h-[600px] lg:p-16
          md:W-[600px] md:h-[600px] md:p-16
          sm:w-[600px] sm:h-[500px] sm:p-9
          xsm:w-[320px] xsm:h-[500px] xsm:p-9
          ">
            <h2 className="underline font-medium text-slate-900

            xl:text-xl xl:mb-8
            lg:text-lg lg:mb-6
            md:text-lg md:mb-6
            sm:text-lg sm:mb-6
            xsm:text-base xsm:mb-6
            ">Short of me</h2>
            <div className="flex flex-col text-justify">
              <p
              className="font-regular text-slate-900

              xl:text-base xl:mb-6
              lg:text-base lg:mb-6
              md:text-base md:mb-6
              sm:text-base sm:mb-6
              xsm:text-sm xsm:mb-6            
              ">
                I’m a 3rd-year IT student based in Finland, crafting efficient and
                simple-to-enhance web & mobile applications.
              </p>
              <p
              className="font-regular text-slate-900

              xl:text-base xl:mb-6
              lg:text-base lg:mb-6
              md:text-base md:mb-6
              sm:text-base sm:mb-6
              xsm:text-sm xsm:mb-6 
              ">
                With expertise across both front-end and back-end technologies, I
                write test-driven, clean, and maintainable code.
              </p>
              <p
              className="font-regular text-slate-900

              xl:text-base xl:mb-6
              lg:text-base lg:mb-6
              md:text-base md:mb-6
              sm:text-base sm:mb-6
              xsm:text-sm xsm:mb-6 
              ">
                Outside of coding, I enjoy hiking, discovering new coffee spots,
                and experimenting with DIY tech projects.
              </p>
            </div>
            <Link href="/about" className="inline-block absolute group
            
            xl:bottom-16
            lg:bottom-16 
            md:bottom-16 
            sm:bottom-16 sm:left-1/2 sm:transform sm:-translate-x-1/2
            xsm:bottom-8 xsm:left-1/2 xsm:transform xsm:-translate-x-1/2
            ">
              <div className="flex gap-x-2 items-center">
                <h3 className="text-base font-medium relative text-slate-900">
                  <span className="relative overflow-hidden">
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-slate-900 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    More of me here
                  </span>
                </h3>
                <div className="transition-transform duration-300 transform  group-hover:rotate-180">
                  <Image
                    src="/arrow.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </Link>
          </div>
        </Fade>
        <Fade direction="up" duration={2400} triggerOnce>
          <div className="bg-slate-50 flex-column
          xl:w-[568px] xl:h-[550px] xl:p-16
          lg:w-[468px] lg:h-[600px] lg:p-16
          md:W-[600px] md:h-[600px] md:p-16
          sm:w-[600px] sm:h-[500px] sm:p-9
          xsm:w-[320px] xsm:h-[500px] xsm:p-9
          ">
            <h2 className="underline font-medium text-slate-900
            xl:text-xl xl:mb-8
            lg:text-lg lg:mb-6
            md:text-lg md:mb-6
            sm:text-lg sm:mb-6
            xsm:text-base xsm:mb-6
            ">
              Noteworthy Achievements
            </h2>
            <div className="flex flex-col text-justify">
              <p
               className="font-regular text-slate-900

              xl:text-base xl:mb-6
              lg:text-base lg:mb-6
              md:text-base md:mb-6
              sm:text-base sm:mb-6
              xsm:text-sm xsm:mb-6 
               ">
                Developed a customer database system featuring advanced undo/redo
                functionality for enhanced user experience.
              </p>
              <p
               className="font-regular text-slate-900

              xl:text-base xl:mb-6
              lg:text-base lg:mb-6
              md:text-base md:mb-6
              sm:text-base sm:mb-6
              xsm:text-sm xsm:mb-6 
              ">
                Contributed to multiple full-stack projects, optimizing
                performance and scalability in production environments.
              </p>
              <p
               className="font-regular text-slate-900

              xl:text-base xl:mb-6
              lg:text-base lg:mb-6
              md:text-base md:mb-6
              sm:text-base sm:mb-6
              xsm:text-sm xsm:mb-6 
              ">
                Achieved significant improvements in CI/CD pipelines, reducing
                deployment times by 40%.
              </p>
            </div>
            <div className="flex flex-col items-center absolute
            xl:bottom-10
            lg:bottom-16 
            md:bottom-16 
            sm:bottom-16 sm:left-1/2 sm:transform sm:-translate-x-1/2
            xsm:bottom-6 xsm:left-1/2 xsm:transform xsm:-translate-x-1/2">
              <h3 className="text-base font-regular underline
              xl:mb-6
              lg:mb-6
              md:mb-6
              sm:mb-6
              xsm:mb-4

              ">Worked with</h3>
              <SkillCarousel slides={SKILLS} options={OPTIONS} />
            </div>
          </div>
        </Fade>
      </div>
      </div>
    </Section>
    
  );
};

export default About;
