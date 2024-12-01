import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <Logo
            txtFill={"#fff"}
            iconFill={"#fff"}
            style={"mb-4  h-[30px] max-h-[100px]"}
            className="mb-4 w-48"
          />
          <p className="text-gray-400 text-sm text-center md:text-left">
            Organize, prioritize, and get things done with Doable.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-primary-400">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-primary-400">
                Features
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        {/* <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="w-6 h-6 text-white hover:text-primary-400 transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-6 h-6 text-white hover:text-primary-400 transition" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="w-6 h-6 text-white hover:text-primary-400 transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 text-white hover:text-primary-400 transition" />
            </a>
          </div>
        </div> */}
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Doable. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
