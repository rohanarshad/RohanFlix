import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-2 py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo / Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">RohanFlix</h2>
          <p className="mt-3 text-gray-400">
            Building modern web solutions with React & Tailwind CSS.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-indigo-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-indigo-400">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-indigo-400">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="hover:text-indigo-400">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Column 3: Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-500">
              Facebook
            </a>
            <a href="#" className="hover:text-pink-500">
              Twitter
            </a>
            <a href="#" className="hover:text-pink-500">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
