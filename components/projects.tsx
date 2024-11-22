import Image from "next/image";
import Link from "next/link";
import IconHandPicked from "./icons/handpicked";
import Section from "./ui/section";
import SectionTitle from "./ui/section-title";
import IconExternalLink from "./icons/external-link";

// Array to store project details
const projects = [
    {
        title: "E-commerce Platform",
        description:
            "Fully responsive web application, showcasing features like a product catalog, shopping cart, and checkout flow.",
        image: "/img/project-1.png",
        liveLink: "https://ecommerce-example.com",
        githubLink: "https://github.com/yourusername/ecommerce-platform",
    },
    {
        title: "Portfolio Website",
        description:
            "Modern portfolio website showcasing projects, skills, and contact information with animations and transitions.",
        image: "/img/project-1.png",
        liveLink: "https://portfolio-example.com",
        githubLink: "https://github.com/yourusername/portfolio",
    },
    {
        title: "Task Management App",
        description:
            "A productivity app with features like task creation, reminders, and analytics. Built with React and TailwindCSS.",
        image: "/img/project-1.png",
        liveLink: "https://taskmanager-example.com",
        githubLink: "https://github.com/yourusername/task-manager",
    },
];

const Projects = () => {
    return (
        <Section id="projects">
            <SectionTitle title="Handpicked Projects" icon={<IconHandPicked />} />
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 px-4 md:px-8 py-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col w-full sm:w-[85%] md:w-[48%] lg:w-[30%]"
                    >
                        <div className="flex flex-col">
                            <Image
                                src={project.image}
                                width={500}
                                height={500}
                                alt={project.title}
                                className="rounded-lg object-cover"
                            />
                            <h2 className="text-lg sm:text-xl font-medium underline py-4">
                                {project.title}
                            </h2>
                            <p className="text-sm sm:text-base">{project.description}</p>
                        </div>
                        <div className="flex justify-between gap-4">
                            <Link
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex gap-x-2 justify-center lg:justify-start items-center pt-8">
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
                                <div className="flex gap-x-2 justify-center lg:justify-start items-center pt-8">
                                    <h3 className="text-sm sm:text-base font-normal cursor-pointer">
                                        Github
                                    </h3>
                                    <IconExternalLink />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;