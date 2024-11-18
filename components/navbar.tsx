import IconThemeLight from "./icons/theme-light";

const Navbar = () => {

    const navigation = [
        "Home",
        "About Me",
        "Projects",
        "Testimonials",
        "Contact",
    ];

    return (
        <nav className="flex justify-between items-center py-4">
            <ul className="flex">
                {navigation.map((nav, index) => (
                    <li key={index} className="ml-6">{nav}</li>
                ))}
            </ul>
            <div>
                <IconThemeLight />
            </div>
        </nav>
    );
}

export default Navbar;