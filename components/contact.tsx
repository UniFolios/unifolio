"use client";

import { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import IconArrow from "./icons/arrow";
import IconContact from "./icons/contact";
import IconCopy from "./icons/copy";
import IconMail from "./icons/mail"; // Import mail icon component
import IconGitHub from "./icons/github"; // Import GitHub icon component
import Section from "./ui/section";
import SectionTitle from "./ui/section-title";
import IconLinkedIn2 from "./icons/linkedin2";

const Contact = () => {
    const [tooltip, setTooltip] = useState(1000); // Track the active tooltip

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setTooltip(index);
        setTimeout(() => setTooltip(1000), 2000); // Reset tooltip after 2 seconds
    };

    const links = [
        {
            title: "Email",
            url: "mailto:your-email@example.com", // Replace with your email
            icon: <IconMail />, // Mail icon
        },
        {
            title: "GitHub",
            url: "https://github.com/your-profile", // Replace with your GitHub profile URL
            icon: <IconGitHub />, // GitHub icon
        },
        {
            title: "Portfolio",
            url: "https://yourportfolio.com", // Replace with your portfolio URL
            icon: <IconLinkedIn2 />, // LinkedIn icon
        },
    ];

    return (
        <Section id="contact">
            <SectionTitle title="Let&apos;s Collaborate" icon={<IconContact />} />
            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 px-4 md:px-8 py-6">
                {links.map((link, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center w-full items-center py-16 bg-gray-50 gap-20 relative transition-transform duration-300 ease-in-out hover:border-slate-900 border border-transparent 
                        xl:px-16
                        lg:px-12
                        md:px-16 
                        sm:px-12
                        xsm:px-12
                        "
                    >
                        <div className="w-[90px] h-[80px] flex items-center justify-center border border-gray-500">
                            <Link href={link.url} target="_blank" rel="noopener noreferrer">
                                <span className="text-gray-700">
                                    {link.icon}
                                </span>
                            </Link>
                        </div>
                        <div className="flex justify-between w-full items-center">
                            <Link href={link.url} target="_blank" rel="noopener noreferrer">
                                <span className="flex items-center gap-2 ">
                                    <IconArrow />
                                </span>
                            </Link>
                            <button
                                className="flex items-center gap-2 "
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