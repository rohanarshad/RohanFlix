import { NavLink } from "react-router-dom";

export const Header = () => {
  const activeLink = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold"
      : "hover:text-gray-600 font-medium transition-colors";
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center ">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">RohanFlix</h1>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <NavLink to="/" className={activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={activeLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/movie" className={activeLink}>
              Movie
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={activeLink}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
