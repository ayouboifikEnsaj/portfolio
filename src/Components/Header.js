import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className="container mx-auto md:flex justify-between py-2 max-width">
        {/* Logo and Mobile Hamburger */}
        <div className="flex justify-between items-center py-2 md:py-10">
          <div onClick={toggleClass} className="cursor-pointer md:hidden">
            <svg
                className={`stroke-dark-heading dark:stroke-white transition-all duration-300 ${isOpen ? "rotate-90" : ""}`}
                width="25"
                height="20"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className={`md:flex justify-between ${!isOpen ? "hidden" : "block"} transition-all duration-300 ease-in-out`}>
          <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
            <li className="pb-1 md:pb-0">
              <NavLink to="/" onClick={toggleClass} className="hover:text-blue-500 transition-all duration-300">
                Accueil
              </NavLink>
            </li>
            <li className="pb-1 md:pb-0">
              <NavLink to="/about" onClick={toggleClass} className="hover:text-blue-500 transition-all duration-300">
                À propos
              </NavLink>
            </li>
            <li className="pb-1 md:pb-0">
              <NavLink to="/technologies" onClick={toggleClass} className="hover:text-blue-500 transition-all duration-300">
                Technologies
              </NavLink>
            </li>
            <li className="pb-1 md:pb-0">
              <NavLink to="/projects" onClick={toggleClass} className="hover:text-blue-500 transition-all duration-300">
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleClass} className="hover:text-blue-500 transition-all duration-300">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Social Media Links */}
          <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
            <li>
              <a href={twitter} target="_blank" rel="noreferrer noopener" className="hover:scale-110 transition-all duration-300">
                <svg
                    className="dark:fill-light-heading fill-dark-heading"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M32 7.075a13.06 13.06 0 0 1-3.77 1.033A6.548 6.548 0 0 0 31.14 5.37a13.213 13.213 0 0 1-4.208 1.604A6.52 6.52 0 0 0 22.302 3c-3.58 0-6.493 2.878-6.493 6.446 0 .51.057 1.007.169 1.482A18.442 18.442 0 0 1 1.7 3.146a6.494 6.494 0 0 0 2.008 8.632c-1.074-.033-2.085-.328-2.97-.818v.082a6.463 6.463 0 0 0 5.194 6.345c-1.1.315-2.257.382-3.435.142a6.493 6.493 0 0 0 6.055 4.484A13.022 13.022 0 0 1 0 26.104a18.43 18.43 0 0 0 10.073 3.003c12.077 0 18.678-10.031 18.678-18.798 0-.28-.008-.56-.02-.838A13.123 13.123 0 0 0 32 7.075z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href={linkdein} target="_blank" rel="noreferrer noopener" className="hover:scale-110 transition-all duration-300">
                <svg
                    className="dark:fill-light-heading fill-dark-heading"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M27.4 0H2.6C1.17 0 0 1.17 0 2.6v24.8c0 1.43 1.17 2.6 2.6 2.6h24.8c1.43 0 2.6-1.17 2.6-2.6V2.6c0-1.43-1.17-2.6-2.6-2.6zM9.4 22.4H5.8v-10h3.6v10zm-1.8-11.6c-1.14 0-1.8-.92-1.8-2s.66-2 1.8-2 1.8.92 1.8 2-.66 2-1.8 2zm16.8 11.6h-3.6v-5.4c0-2.4-2.2-2.2-2.2-2.2s-2.2-.2-2.2 2.2v5.4h-3.6v-10h3.6v1.4c1.4-1.6 4.2-1 4.2 2.4v6.2z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href={github} target="_blank" rel="noreferrer noopener" className="hover:scale-110 transition-all duration-300">
                <svg
                    className="dark:fill-light-heading fill-dark-heading"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M15 0c-8.28 0-15 6.72-15 15 0 6.65 4.3 12.3 10.28 14.28.75.14 1.02-.33 1.02-.73v-2.87c-4.26.93-5.15-1.98-5.15-1.98-.7-1.8-1.7-2.28-1.7-2.28-1.4-.96.1-.94.1-.94 1.56.11 2.38 1.6 2.38 1.6 1.38 2.38 3.77 1.7 4.7 1.3 0 .7.5 1.29 1.01 1.29 1.68 0 3.3-.64 3.3-3 0-2.16-1.18-4.02-2.68-5.68 1.38-.98 2.68-2.22 2.68-4.01 0-3.16-2.5-4.7-4.92-4.7-1.8 0-3.4.68-4.4 1.76-.9-.25-1.85-.38-2.8-.38-1.43 0-2.83.24-4.18.64C5.79 2.65 7.88 1 10.2 1c2.75 0 5 2.24 5 5.03v2.15c3.5-.02 6.88-2.67 6.88-6.23 0-2.89-2.39-5.26-5.26-5.26z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;

