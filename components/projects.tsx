import Image from 'next/image'

import IconHandPicked from "./icons/handpicked";
import Section from "./ui/section"
import SectionTitle from "./ui/section-title";

const Projects = () => {
    return (
        <Section id='projects'>
            <SectionTitle title="Handpicked Projects" icon={<IconHandPicked />} />
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 px-4 md:px-8 py-6">
                <div className="flex flex-col">
                    <Image
                        src="/img/project-1.png"
                        width={500}
                        height={500}
                        alt="project 1"
                    />
                    <h2 className="text-xl font-medium underline py-4">E-commerce Platform</h2>
                    <p>Fully responsive web application, showcasing features like a product catalog, shopping cart, and checkout flow. </p>
                </div>
                <div className="flex flex-col">
                    <Image
                        src="/img/project-1.png"
                        width={500}
                        height={500}
                        alt="project 1"
                    />
                    <h2 className="text-xl font-medium underline py-4">E-commerce Platform</h2>
                    <p>Fully responsive web application, showcasing features like a product catalog, shopping cart, and checkout flow. </p>
                </div>
                <div className="flex flex-col">
                    <Image
                        src="/img/project-1.png"
                        width={500}
                        height={500}
                        alt="project 1"
                    />
                    <h2 className="text-xl font-medium underline py-4">E-commerce Platform</h2>
                    <p>Fully responsive web application, showcasing features like a product catalog, shopping cart, and checkout flow. </p>
                </div>
            </div>
        </Section>
    );
}

export default Projects;