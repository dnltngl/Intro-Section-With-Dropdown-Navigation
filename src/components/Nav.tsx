import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-close-menu.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";

// Import your icons
import todoIcon from "../assets/images/icon-todo.svg";
import calendarIcon from "../assets/images/icon-calendar.svg";
import remindersIcon from "../assets/images/icon-reminders.svg";
import planningIcon from "../assets/images/icon-planning.svg";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleFeatures = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };

  const toggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen);
  };

  return (
    <nav className="mb-8 sm:flex mt-10 mx-10 relative ">
      <div className="flex gap-10 justify-between items-center">
        <img className="sm:ml-9" src={Logo} alt="logo" />

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-10 ml-10 font-Epilogue font-semibold text-neutral-MediumGray list-none">
          <div className="relative">
            <button
              onClick={toggleFeatures}
              className="flex items-center gap-2"
            >
              Features
              <img
                src={isFeaturesOpen ? arrowUp : arrowDown}
                alt="arrow"
                className="ml-1"
              />
            </button>
            {isFeaturesOpen && (
              <ul className="absolute top-8 right-0 bg-white  w-36 shadow-xl p-6 rounded-lg list-none">
                <li className="hover:text-black cursor-pointer mb-1 flex items-center gap-2">
                  <img
                    src={todoIcon}
                    alt="Todo List icon"
                    className="w-4 h-4"
                  />
                  Todo List
                </li>
                <li className="hover:text-black cursor-pointer mb-1 flex items-center gap-2">
                  <img
                    src={calendarIcon}
                    alt="Calendar icon"
                    className="w-4 h-4"
                  />
                  Calendar
                </li>
                <li className="hover:text-black cursor-pointer mb-1 flex items-center gap-2">
                  <img
                    src={remindersIcon}
                    alt="Reminders icon"
                    className="w-4 h-4"
                  />
                  Reminders
                </li>
                <li className="hover:text-black cursor-pointer flex items-center gap-2">
                  <img
                    src={planningIcon}
                    alt="Planning icon"
                    className="w-4 h-4"
                  />
                  Planning
                </li>
              </ul>
            )}
          </div>

          <div className="relative">
            <button onClick={toggleCompany} className="flex items-center gap-2">
              Company
              <img
                src={isCompanyOpen ? arrowUp : arrowDown}
                alt="arrow"
                className="ml-1"
              />
            </button>
            {isCompanyOpen && (
              <ul className="absolute top-8 left-0 bg-white shadow-xl p-6 w-36 rounded-lg list-none">
                <li className="hover:text-black cursor-pointer mb-1">
                  History
                </li>
                <li className="hover:text-black cursor-pointer mb-1">
                  Our Team
                </li>
                <li className="hover:text-black cursor-pointer mb-1">Blog</li>
              </ul>
            )}
          </div>

          <li className="hover:text-black cursor-pointer">Careers</li>
          <li className="hover:text-black cursor-pointer">About</li>
        </div>

        {/* Mobile Menu Icon */}
        <img
          className="sm:hidden cursor-pointer"
          src={isMenuOpen ? iconClose : iconMenu}
          alt="icon-menu"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Dropdown Menu with Slide-in Effect */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start px-5 py-8">
          {/* Close Icon */}
          <img
            className="self-end cursor-pointer"
            src={iconClose}
            alt="Close menu"
            onClick={toggleMenu}
          />

          <ul className="flex flex-col gap-4 font-Epilogue font-semibold text-neutral-MediumGray list-none w-full mt-4">
            <li>
              <button
                className="flex items-center gap-2 justify-between"
                onClick={toggleFeatures}
              >
                Features
                <img
                  src={isFeaturesOpen ? arrowUp : arrowDown}
                  alt="arrow"
                  className="ml-1"
                />
              </button>
              {isFeaturesOpen && (
                <ul className="flex flex-col gap-4 pl-6 list-none mt-5 mb-5">
                  <li className="hover:text-black cursor-pointer flex items-center gap-2">
                    <img
                      src={todoIcon}
                      alt="Todo List icon"
                      className="w-4 h-4"
                    />
                    Todo List
                  </li>
                  <li className="hover:text-black cursor-pointer flex items-center gap-2">
                    <img
                      src={calendarIcon}
                      alt="Calendar icon"
                      className="w-4 h-4"
                    />
                    Calendar
                  </li>
                  <li className="hover:text-black cursor-pointer flex items-center gap-2">
                    <img
                      src={remindersIcon}
                      alt="Reminders icon"
                      className="w-4 h-4"
                    />
                    Reminders
                  </li>
                  <li className="hover:text-black cursor-pointer flex items-center gap-2">
                    <img
                      src={planningIcon}
                      alt="Planning icon"
                      className="w-4 h-4"
                    />
                    Planning
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                className="flex items-center gap-2 justify-between"
                onClick={toggleCompany}
              >
                Company
                <img
                  src={isCompanyOpen ? arrowUp : arrowDown}
                  alt="arrow"
                  className="ml-1"
                />
              </button>
              {isCompanyOpen && (
                <ul className="flex flex-col gap-4 pl-6 list-none mt-5 mb-5">
                  <li className="hover:text-black cursor-pointer">History</li>
                  <li className="hover:text-black cursor-pointer">Our Team</li>
                  <li className="hover:text-black cursor-pointer">Blog</li>
                </ul>
              )}
            </li>
            <li className="hover:text-black cursor-pointer">Careers</li>
            <li className="hover:text-black cursor-pointer">About</li>
          </ul>

          {/* Login and Register Buttons (inside slider under About) */}
          <div className="flex flex-col items-center w-full mt-8">
            <button className="hover:text-black cursor-pointer mb-2">
              Login
            </button>
            <button className="hover:border border-black px-4 py-1 rounded">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Right side buttons (Desktop) */}
      <div className="sm:flex hidden gap-10 md:gap-5  ml-auto font-Epilogue-regular font-semibold text-neutral-MediumGray">
        <button className="hover:outline outline-black px-3 py-2 rounded-xl">
          Login
        </button>
        <button className="hover:outline outline-black px-3 py-2 rounded-xl">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Nav;
