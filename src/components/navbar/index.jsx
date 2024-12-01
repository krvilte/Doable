import { useState } from "react";
import Logo from "../../assets/icons/logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-50 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <Logo
            txtFill={"#F29F58"}
            iconFill={"#F29F58"}
            style={"size-9 w-full"}
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {["Features", "About", "FAQ"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="pb-1 text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex gap-x-4">
          <Link
            to="/login"
            className="text-gray-700 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition-all focus:ring-2 focus:ring-gray-400"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-md transition-all focus:ring-2 focus:ring-primary-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="block p-2 rounded-full md:hidden text-gray-600 hover:bg-gray-300 focus:outline-none"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 md:hidden ${
          isMobileMenuOpen
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-6 text-gray-700">
          {["Features", "About", "FAQ"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block py-2 hover:text-primary-600 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-md transition"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
