"use client";

import { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import IconArrow from "./icons/arrow";
import IconContact from "./icons/contact";
import IconCopy from "./icons/copy";
import IconLinkedIn from "./icons/linkedin";
import Section from "./ui/section";
import SectionTitle from "./ui/section-title";

const Contact = () => {
    const [tooltip, setTooltip] = useState(1000); // Track the active tooltip

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setTooltip(index);
        setTimeout(() => setTooltip(1000), 2000); // Reset tooltip after 2 seconds
    };

    const links = [
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/your-profile/",
        },
        {
            title: "GitHub",
            url: "https://github.com/your-profile",
        },
        {
            title: "Portfolio",
            url: "https://yourportfolio.com",
        },
    ];

    return (
        <Section id="contact">
            <SectionTitle title="Let&apos;s Collaborate" icon={<IconContact />} />
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 px-4 md:px-8 py-6">
                {links.map((link, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center w-full items-center px-8 py-16 bg-gray-50 gap-8 relative"
                    >
                        <div className="p-4 border border-gray-500 rounded-md">
                            <Link href={link.url} target="_blank" rel="noopener noreferrer">
                                <span className="text-gray-700 hover:text-blue-600">
                                    <IconLinkedIn />
                                </span>
                            </Link>
                        </div>
                        <div className="flex justify-between gap-8 w-full">
                            <Link href={link.url} target="_blank" rel="noopener noreferrer">
                                <span className="flex items-center gap-2 text-blue-600 hover:underline">
                                    <IconArrow />
                                </span>
                            </Link>
                            <button
                                className="flex items-center gap-2 text-blue-600 hover:underline"
                                onClick={() => handleCopy(link.url, index)}
                            >
                                <IconCopy />
                            </button>
                        </div>
                        {tooltip === index && (
                            <span className="absolute bottom-4 text-sm bg-black text-white px-2 py-1 rounded">
                                Copied!
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Contact;