"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Section from "./ui/section";

const Banner = () => {
    return (
        <Section id="home">
            <div className=" flex flex-row relative h-screen justify-end 
           
            xl:w-[1280px] xl:px-[60px] xl:items-center 
            lg:w-[1024px] lg:px-[32px] lg:items-center 
            md:w-[768px] md:px-[24px] md:items-center md:pb-0
            sm:w-[600px] sm:px-[24px] sm:items-end sm:pb-4
            xsm:w-[320px] xsm:items-end  xsm:pb-4
            ">
                
                <div className="z-10 absolute 
                flex flex-col 
                xl:top-1/3 xl:left-[60px] xl:gap-10
                lg:top-1/3 lg:left-[32px] lg:gap-8
                md:top-1/3 md:left-[24px] md:gap-6                
                sm:top-24 sm:left-[24px] sm:gap-2
                xsm:top-32 xsm:left-0 xsm:gap-2
                "> 
                    <Fade direction="up" duration={1200} triggerOnce>
                        <h1 className="font-italiana text-slate-900
                        xl:text-8xl
                        lg:text-7xl
                        md:text-6xl 
                        sm:text-5xl 
                        xsm:text-5xl                      
                        ">Hugo Stiglitz</h1>
                    </Fade>

                    <Fade direction="up" delay={300} duration={1200} triggerOnce>
                        <p className=" font-light text-slate-700
                        xl:text-2xl
                        lg:text-xl
                        md:text-lg
                        sm:text-base
                        xsm:text-sm
                        ">Full Stack Developer</p>
                    </Fade>                   
                </div>

                <div className="relative bg-gray-200 
                xl:w-[773px] xl:h-[700px]
                sm:w-[640px] sm:h-[600px] 
                xsm:w-[320px] xsm:h-2/3
                ">
                    <div className="overflow-hidden absolute bottom-0 right-10
                    xl:w-[300px] xl:h-[450px]
                    lg:w-[250px] lg:h-[400px]
                    md:w-[250px] md:h-[350px]
                    sm:w-[250px] sm:h-[350px] sm:right-10
                    xsm:w-[320px] xsm:h-[450px] xsm:right-0
                    ">
                    <Image
                        src="/profile-pic.png"
                        alt="banner"
                        width={350}
                        height={450}
                        className="object-fit absolute bottom-0 right-0"
                    /> 
                    </div>
                    

                    <div className="bg-white absolute bottom-0 left-0
                    xl:w-[110px] xl:h-[120px]
                    lg:w-[100px] lg:h-[110px] 
                    md:w-[90px] md:h-[100px]
                    sm:w-[80px] sm:h-[90px] 
                    xsm:w-[70px] xsm:h-[80px] 
                    ">                    
                    <a 

                    href="/resume.pdf"
                    download="Hugo_Stiglitz_CV"
                    className="absolute bottom-0 left-0 bg-gray-700 hover:bg-gray-600 flex items-center justify-center
                    xl:w-[95px] xl:h-[105px]
                    lg:w-[85px] lg:h-[95px]
                    md:w-[80px] md:h-[90px]  
                    sm:w-[70px] sm:h-[80px]
                    xsm:w-[60px] xsm:h-[70px]            
                    ">
                            <Image
                                src="/cv.svg"
                                alt="Download Resume"
                                width={30}
                                height={32}
                                className="object-contain"
                            />
                    </a>
                           
                    </div>
                           
                    
                   
                    {/* <AttentionSeeker effect="flash" delay={1000}>
                        <a
                            href="/resume.pdf"
                            download="Hugo_Stiglitz_CV"
                            className="absolute bottom-0 left-0 pt-4 pr-4 ps-0 pb-0 bg-black transition-all duration-300 hover:pt-5 hover:pr-5"
                        >
                            <Image
                                src="/cv.svg"
                                alt="Download Resume"
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </a>
                    </AttentionSeeker> */}
                </div>
                
            </div>
        </Section>
    );
};

export default Banner;