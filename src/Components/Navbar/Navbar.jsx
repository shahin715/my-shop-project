import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
// import DarkMode from "./DarkMode";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const Menu = [
  { id: 1, name: "Home", link: "/" }, // Fixed link
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Kids Wear", link: "/kids-wear" }, // Fixed link to match routing
  { id: 4, name: "Women's wear", link: "/womens-wear" },
  { id: 5, name: "Electronics", link: "/#" },
];

const DropDropdownlist = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-[#4263eb]/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-xl flex items-center gap-1">
              <FiShoppingBag size="30" />
              ShopNow
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
                text-sm focus:outline-none focus:border-[#4263eb] dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch className="text-slate-800 dark:text-white group-hover:text-[#4263eb] absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-[#4263eb] to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark Mode Switch */}
            {/* <DarkMode /> */}
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link} // Changed href to to
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* Dropdown Menu */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropDropdownlist.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link} // Dropdown items still use href for external links
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Set a default function to avoid errors if `handleOrderPopup` is not provided
Navbar.defaultProps = {
  handleOrderPopup: () => console.log("Order button clicked"),
};

export default Navbar;


