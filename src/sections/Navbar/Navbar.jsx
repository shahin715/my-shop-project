import React, { useContext, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import {  FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useOrder } from "../Order/OrderContextStore";
import { AuthContext } from "../../sections/Navbar/AuthContext";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Men's Wear", link: "/menswear" },
  { id: 3, name: "Kids Wear", link: "/kids-wear" },
  { id: 4, name: "Women's Wear", link: "/womens-wear" },
  { id: 5, name: "Electronics", link: "/ElectronicsProductList" },
];

const DropDropdownlist = [
  { id: 1, name: "Trending Products", link: "*" },
  { id: 2, name: "Best Selling", link: "*" },
];

const Navbar = ({ handleOrderPopup }) => {
  const { user, logout } = useContext(AuthContext);
  const { orders } = useOrder();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle

  const handleOrderClick = () => {
    if (handleOrderPopup) {
      handleOrderPopup();
    }
    navigate("/orders");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-[#4263eb]/40 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/" className="font-bold text-xl flex items-center gap-1">
              <FiShoppingBag size="30" />
              ShopNow
            </Link>
          </div>

          {/* Search Bar + Order + Login/Logout */}
          <div className="flex items-center gap-4">

            {/* Search Input */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                aria-label="Search products"
                className="w-[150px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
                text-sm focus:outline-none focus:border-[#4263eb] dark:border-gray-500 dark:bg-slate-800 dark:text-white"
              />
              <IoMdSearch className="text-slate-800 dark:text-white group-hover:text-[#4263eb] absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderClick}
              className="bg-gradient-to-r from-[#4263eb] to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="relative">
                Order
                {orders.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {orders.length}
                  </span>
                )}
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Login / Logout */}
            {user ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-full transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-full transition-all duration-200"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className={`sm:flex hidden items-center gap-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}

          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-slate-700 p-2 text-black dark:text-white shadow-md">
              <ul>
                {DropDropdownlist.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
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

        {/* Mobile Navbar */}
        <div className="sm:hidden flex justify-between items-center w-full">
          {/* Burger Menu */}
          <button onClick={toggleMobileMenu} className="text-white">
            <FaCaretDown />
          </button>
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  handleOrderPopup: null,
};

export default Navbar;







