import Image from 'next/image'

import IconHandPicked from "./icons/handpicked";
import Section from "./ui/section"
import SectionTitle from "./ui/section-title";
import Link from 'next/link';
import IconExternalLink from './icons/external-link';

const Projects = () => {
    return (
        <Section id='projects'>
            <SectionTitle title="Handpicked Projects" icon={<IconHandPicked />} />
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 px-4 md:px-8 py-6">
                <div className="flex flex-col w-full sm:w-[85%] md:w-[48%] lg:w-[30%]">
                    <div className="flex flex-col">
                        <Image
                            src="/img/project-1.png"
                            width={500}
                            height={500}
                            alt="project 1"
                            className="rounded-lg object-cover"
                        />
                        <h2 className="text-lg sm:text-xl font-medium underline py-4">E-commerce Platform</h2>
                        <p className="text-sm sm:text-base">Fully responsive web application, showcasing features like a product catalog, shopping cart, and checkout flow. </p>
                    </div>
                    <div className="flex justify-between gap-4">
                        <Link href="#">
                            <div className="flex gap-x-2 justify-center lg:justify-start items-center pt-8">
                                <h3 className="text-sm sm:text-base font-normal cursor-pointer">Live</h3>
                                <IconExternalLink />
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="flex gap-x-2 justify-center lg:justify-start items-center pt-8">
                                <h3 className="text-sm sm:text-base font-normal cursor-pointer">Github</h3>
                                <IconExternalLink />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col w-full sm:w-[85%] md:w-[48%] lg:w-[30%]">
                    <div className="flex flex-col">
                        <Image
                            src="/img/project-1.png"
                            width={500}
                            height={500}
                            alt="project 1"
                            className="rounded-lg object-cover"
                        />
                        <h2 className="text-lg sm:text-xl font-medium underline py-4">E-commerce Platform</h2>
                        <p className="text-sm sm:text-base">Fully responsive web application, showcasing features like a product catalog, shopping cart, and checkout flow. </p>
                    </div>
                    <div className="flex justify-between gap-4">
                        <Link href="#">
                            <div className="flex gap-x-2 justify-center lg:justify-start items-center pt-8">
                                <h3 className="text-sm sm:text-base font-normal cursor-pointer">Live</h3>
                                <IconExternalLink />
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="flex gap-x-2 justify-center lg:justify-start items-center pt-8">
                                <h3 className="text-sm sm:text-base font-normal cursor-pointer">Github</h3>
                                <IconExternalLink />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col w-full sm:w-[85%] md:w-[48%] lg:w-[30%]">
                    <div className="flex flex-col">
                        <Image
                            src="/img/project-1.png"
                            width={500}
                            height={500}
                            alt="project 1"
                            className="rounded-lg object-cover"
                        />
                        <h2 className="text-lg sm:text-xl font-medium underline py-4">E-commerce Platform</h2>
                        <p className="text-sm sm:text-base">Fully responsive web application, showcasing features like a product catalog, shopping cart, and checkout flow. </p>
                    </div>
                    <div className="flex justify-between gap-4">
                        <Link href="#">
                            <div className="flex gap-x-2 justify-center lg:justify-start items-center pt-8">
                                <h3 className="text-sm sm:text-base font-normal cursor-pointer">Live</h3>
                                <IconExternalLink />
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="flex gap-x-2 justify-center lg:justify-start items-center pt-8">
                                <h3 className="text-sm sm:text-base font-normal cursor-pointer">Github</h3>
                                <IconExternalLink />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Projects;