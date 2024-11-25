"use client";

import { useState } from "react";
import IconThemeLight from "./icons/theme-light";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: "Home", id: "home" },
        { name: "About Me", id: "about-me" },
        { name: "Projects", id: "projects" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false); // Close menu on navigation (for mobile)
        }
    };

    return (
        <nav className="fixed backdrop-blur-md  py-7 px-16 top-0 left-0 right-0 max-w-[1280px] mx-auto z-50 flex items-center justify-between">
            {/* Navigation Links */}
            <ul
                className={`lg:flex flex-col lg:flex-row lg:static absolute left-0 top-0 w-full lg:w-auto p-6 lg:p-0 gap-[64px] transition-all duration-300 ${
                    isMenuOpen
                        ? "translate-y-0 opacity-100 z-40"
                        : "-translate-y-full opacity-0 lg:opacity-100 lg:translate-y-0"
                }`}
            >
                {navigation.map((nav, index) => (
                    <li
                        key={index}
                        className="relative text-stone-600 text-sm cursor-pointer "
                        onClick={() => handleScroll(nav.id)}
                    >
                        <span
                            className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 after:bg-stone-600"
                        >
                            {nav.name}
                        </span>
                    </li>
                ))}
            </ul>

            {/* Burger / Close Icon for Mobile */}
            <button
                className="lg:hidden text-2xl focus:outline-none z-50"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? "×" : "☰"} {/* Cross (×) for close, Hamburger (☰) for open */}
            </button>

            {/* Theme Icon */}
            <div className="hidden lg:block text-2xl">
                <IconThemeLight />
            </div>
        </nav>
    );
};

export default Navbar;
