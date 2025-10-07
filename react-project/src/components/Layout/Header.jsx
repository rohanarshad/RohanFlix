import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLink = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold"
      : "hover:text-gray-600 font-medium transition-colors";

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">RohanFlix</h1>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">&times;</span> // Close icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger icon
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={activeLink}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={activeLink}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movie"
              className={activeLink}
              onClick={() => setIsOpen(false)}
            >
              Movie
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={activeLink}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
