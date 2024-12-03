"use client";

import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

import IconHandPicked from "./icons/handpicked";
import Section from "./ui/section";
import SectionTitle from "./ui/section-title";
import IconExternalLink from "./icons/external-link";


const projects = [
    {
        title: "E-commerce Platform",
        description:
            "Fully responsive web application, showcasing features like a product catalog, shopping cart, and checkout flow.",
        image: "/responsive-screens.svg",
        liveLink: "https://ecommerce-example.com",
        githubLink: "https://github.com/yourusername/ecommerce-platform",
    },
    {
        title: "Portfolio Website",
        description:
            "Modern portfolio website showcasing projects, skills, and contact information with animations and transitions.",
        image: "/desktop-mobile.svg",
        liveLink: "https://portfolio-example.com",
        githubLink: "https://github.com/yourusername/portfolio",
    },
    {
        title: "Task Management App",
        description:
            "A productivity app with features like task creation, reminders, and analytics. Built with React and TailwindCSS.",
        image: "/mobile-screens.svg",
        liveLink: "https://taskmanager-example.com",
        githubLink: "https://github.com/yourusername/task-manager",
    },
];

const Projects = () => {
    return (
        <Section id="projects">
            <SectionTitle title="Handpicked Projects" icon={<IconHandPicked />} />
            <Fade direction="up" duration={1200} triggerOnce>
                <div className="flex items-center justify-center gap-4 w-full
                xl:flex-row 
                lg:flex-row 
                md:flex-col
                sm:flex-col
                xs:flex-col
                xsm:flex-col
                ">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-slate-50 hover:border-slate-900 border border-transparent relative overflow-hidden    
                            xl:w-[376px]
                            lg:w-[309px]
                            md:w-[500px]
                            sm:w-[500px]
                            xsm:w-[320px] "
                        >
                            <div className="flex flex-col relative
                            xl:w-[376px] xl:h-[312px]
                            lg:w-[309px] lg:h-[312px]
                            md:w-[500px] md:h-[366px]
                            sm:w-[500px] sm:h-[366px]
                            xsm:w-[320px] xsm:h-[312px]
                            
                            
                            ">
                                <Image
                                    src={project.image}
                                    layout="fill" // Makes the image fill the height and width of its container
                                    objectFit="cover" // Cover the area without distorting the aspect ratio
                                    alt={project.title}
                                    className="object-cover"
                                />                   
                            </div>
                            <div className="flex flex-col relative 
                            xl:h-[288px] xl:px-8 xl:py-6
                            lg:h-[288px] lg:px-6 lg:pt-8
                            md:h-[366px] md:p-11
                            sm:h-[312px] sm:p-11
                            xsm:h-[190px] xsm:px-4 xsm:py-4
                            ">
                                <h2 className="text-lg sm:text-xl font-medium underline pb-4">
                                    {project.title}
                                </h2>
                                <p className="
                                xl:text-base
                                lg:text-sm
                                md:text-base
                                sm:text-base
                                xsm:text-xs ">{project.description}</p>


                            <div className="flex justify-between absolute bottom-6 w-full
                            xl:pr-16
                            lg:pr-12
                            md:pr-[88px]
                            sm:pr-[88px]
                            xsm:pr-8
                            " >
                                <Link
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="flex gap-x-2 justify-center lg:justify-start items-center">
                                        <h3 className="text-sm sm:text-base font-normal cursor-pointer">
                                            Live
                                        </h3>
                                        <IconExternalLink />
                                    </div>
                                </Link>
                                <Link
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="flex gap-x-2 justify-center lg:justify-start items-center ">
                                        <h3 className="text-sm sm:text-base font-normal cursor-pointer">
                                            Github
                                        </h3>
                                        <IconExternalLink />
                                    </div>
                                </Link>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Fade>
        </Section>
    );
};

export default Projects;