import React from "react";
import ThemeSwitcher from "../Theme";

const Header = () => {
  return (
    <header className="p-6 bg-gray-800 fixed w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-teal-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-teal-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-400">
                Contact
              </a>
            </li>
          </ul>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
