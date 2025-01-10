import { useEffect, useState } from "react";
import { PublicRoutes } from "@/utils";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location =  useLocation()

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-white shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link
          to={PublicRoutes.home}
          className="flex items-center text-primary"
        >
          <span className="text-xl lg:text-3xl font-bold bg-primary text-white rounded-full h-8 w-8 lg:h-12 lg:w-12 flex items-center justify-center">AS</span>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-primary focus:outline-none transition-colors duration-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <Link
                to={location.pathname === "/login" ? PublicRoutes.register :PublicRoutes.login}
                className="bg-primary text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                {location.pathname === "/login" ? "Register" : "Login"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-secondary border-t z-50 border-gray-200 transition-height duration-300 ease-in-out absolute w-full top-[64px] ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="px-4 py-2">
          <li>
            <a href="#" className="block py-2 hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-primary">
              About
            </a>
          </li>
          <li>
            <a href="#"
              className="block py-2 text-left w-full hover:text-primary"
            >
              Services
            </a>            
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-primary">
              Contact
            </a>
          </li>
          <li>
            <Link
               to={location.pathname === "/login" ? PublicRoutes.register :PublicRoutes.login}
              className="block py-2 bg-primary text-white rounded-md text-center transition-colors duration-300"
            >
              {location.pathname === "/login" ? "Register" : "Login"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
