import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { theamDataContext } from "../Context/TheamContext";

const Nav = () => {
  const [theam, setTheam] = useContext(theamDataContext);

  const changeTheam = () => {
    setTheam((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`${theam} fixed top-0 left-0 w-full bg-white/80 dark:bg-neutral-900/70 backdrop-blur-md shadow-sm z-50 flex justify-between items-center px-12 py-4 border-b border-gray-700 dark:border-neutral-800`}
    >
      <h1 className="text-xl sm:text-2xl font-bold text-gray-700 bg-clip-text">Vivek___Jagtap</h1>
      <div className="flex gap-6 sm:gap-8">
        <NavLink
          className={({ isActive }) =>
            `text-base sm:text-lg font-medium transition-colors duration-200 ${isActive ? "text-blue-600" : "text-gray-700 dark:text-gray-700 hover:text-blue-500"}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-base sm:text-lg font-medium transition-colors duration-200 ${isActive ? "text-blue-600" : "text-gray-700 dark:text-gray-700 hover:text-blue-500"}`
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-base sm:text-lg font-medium transition-colors duration-200 ${isActive ? "text-blue-600" : "text-gray-700 dark:text-gray-700 hover:text-blue-500"}`
          }
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-base sm:text-lg font-medium transition-colors duration-200 ${isActive ? "text-blue-600" : "text-gray-700 dark:text-gray-700 hover:text-blue-500"}`
          }
          to="/product"
        >
          Product
        </NavLink>

        <h4
          onClick={changeTheam}
          className="text-base sm:text-lg font-medium transition-colors duration-200 text-gray-700 dark:text-gray-700 cursor-pointer hover:text-blue-500"
        >
          {theam}
        </h4>
      </div>
    </div>
  );
};

export default Nav;
