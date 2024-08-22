import React, { useState, useEffect } from "react";
import { MdMenu, MdClose, MdWbSunny, MdNightsStay } from "react-icons/md";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Experience" },
    { id: 4, text: "Project" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-gray-900 dark:to-gray-700 shadow-md transition duration-300">
      <div className="container mx-auto px-6 md:px-8 h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/vansh-kushwaha-71640a25b/">
            <img
              src="/photo.avif"
              className="h-12 w-12 rounded-full border border-white dark:border-gray-600"
              alt="Profile"
            />
          </a>
          <div>
            <a href="https://www.linkedin.com/in/vansh-kushwaha-71640a25b/">
              <h1 className="text-white text-2xl font-bold">Vansh Kushwaha</h1>
              <p className="text-gray-200 text-sm">Web Developer</p>
            </a>
          </div>
        </div>
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-white">
            {navItems.map(({ id, text }) => (
              <li
                className="transition-transform duration-300 transform hover:scale-105 cursor-pointer hover:text-yellow-300"
                key={id}
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="text-yellow-300 font-bold"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Dark Mode Toggle and Mobile Menu Icon */}
        <div className="flex items-center space-x-4">
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="text-white cursor-pointer"
          >
            {darkMode ? <MdWbSunny size={24} /> : <MdNightsStay size={24} />}
          </div>
          <div
            onClick={() => setMenu(!menu)}
            className="md:hidden text-white cursor-pointer"
          >
            {menu ? <MdClose size={24} /> : <MdMenu size={24} />}
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      {menu && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 dark:bg-gray-800 transition duration-300">
          <ul className="flex flex-col items-center justify-center h-full space-y-6 text-white">
            {navItems.map(({ id, text }) => (
              <li
                className="text-xl font-semibold cursor-pointer hover:text-yellow-300 transition duration-300"
                key={id}
              >
                <Link
                  onClick={() => setMenu(false)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="text-yellow-300 font-bold"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
