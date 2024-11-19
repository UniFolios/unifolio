"use client";

import { useState } from "react";
import IconThemeLight from "./icons/theme-light";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        "Home",
        "About Me",
        "Projects",
        "Testimonials",
        "Contact",
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center py-4 px-6 relative z-50 ">
            {/* Burger / Close Icon for Mobile */}
            <button
                className="lg:hidden text-2xl focus:outline-none z-50"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? "×" : "☰"} {/* Cross (×) for close, Hamburger (☰) for open */}
            </button>

            {/* Navigation Links */}
            <ul
                className={`lg:flex flex-col lg:flex-row lg:static absolute left-0 top-0 w-full lg:w-auto bg-gray-50 lg:bg-transparent p-6 lg:p-0 lg:space-x-8 gap-6 lg:gap-0 transition-all duration-300 ${
                    isMenuOpen
                        ? "translate-y-0 opacity-100 z-40"
                        : "-translate-y-full opacity-0 lg:opacity-100 lg:translate-y-0"
                }`}
            >
                {navigation.map((nav, index) => (
                    <li
                        key={index}
                        className="text-lg text-center lg:text-left hover:text-blue-600"
                    >
                        {nav}
                    </li>
                ))}
            </ul>

            {/* Theme Icon */}
            <div className="text-2xl z-50">
                <IconThemeLight />
            </div>
        </nav>
    );
};

export default Navbar;