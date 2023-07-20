import React from "react";
import image from "../../img/download.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    //nav
    <div className="h-80px py-5">
      <div className="px-10 py-30 flex justify-between text-xl">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center">
            <img src={image} className="h-8 w-15" />
            <IoMdArrowDropdown className="text-3xl" />
          </div>
          <div className="flex items-center">
            <p>IND</p>
            <IoMdArrowDropdown className="text-3xl" />
          </div>
          <div>
            <Link to="/products/1">Men</Link>
          </div>
          <div>
            <Link to="/products/2">Women</Link>
          </div>
          <div>
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        <div>
          <Link to="/" className="text-4xl font-bold">
            ECommerce Website
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Link to="/">
              <h1>Homepage</h1>
            </Link>
          </div>
          <div>
            <Link to="/">About</Link>
          </div>
          <div>
            <Link to="/">Contact</Link>
          </div>
          <div>
            <Link to="/">Stores</Link>
          </div>
          <div className="flex justify-between items-center text-gray-500 text-2xl gap-4">
            <BsSearch className="cursor-pointer" />
            <BsFillPersonFill className="cursor-pointer" />
            <AiOutlineHeart className="cursor-pointer" />
            <div className="flex justify-between items-center relative">
              <AiOutlineShoppingCart className="cursor-pointer" />
              <span className="text-sm  w-4 h-4 rounded-full bg-blue-700 text-white absolute flex items-center justify-center -right-2 -top-2">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
