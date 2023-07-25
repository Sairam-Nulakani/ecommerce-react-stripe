import React, { useState } from "react";
import image from "../../img/download.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    //nav
    <div className="h-80px py-5 bg-neutral-900 ">
      <div className="px-10 py-30 flex justify-between font-medium text-white">
        <div className="flex justify-between items-center gap-1">
          <div className="flex items-center hover:border-2 px-3 py-2">
            <img src={image} />
            <IoMdArrowDropdown className="text-3xl" />
          </div>
          <div className="flex items-center hover:py-2 px-3 hover:border-2">
            <p>IND</p>
            <IoMdArrowDropdown className="text-3xl" />
          </div>
          <div className="hover:border-2 hover:py-2 px-3">
            <Link to="/products/1">Men</Link>
          </div>
          <div className="hover:border-2 hover:py-2 px-3">
            <Link to="/products/2">Women</Link>
          </div>
          <div className="hover:border-2 hover:py-2 px-3">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        <div className="items-center text-center relative w-full ml-3 mr-3 grid place-items-center h-15 bg-gray-200 rounded-md">
          <div className="flex bg-gray-300 border-none items-center rounded-l-lg absolute left-0 py-1">
            <button className="text-sm py-2 px-3 text-black">All</button>
            <IoMdArrowDropdown className="text-md text-gray-800 cursor-pointer" />
          </div>
          <input
            type="text"
            className="border-2 h-full rounded-md py-3 mr-2 ml-2 w-full pl-16"
            placeholder="Search..."
          />
          <div className="absolute right-0 h-11 w-9 rounded-r-lg bg-lime-400 items-center justify-center flex">
            <BsSearch className="text-black cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="hover:border-2 hover:py-2 px-3">
            <Link to="/">
              <h1>Homepage</h1>
            </Link>
          </div>
          <div className="hover:border-2 hover:py-2 px-3">
            <Link to="/">About</Link>
          </div>
          <div className="hover:border-2 hover:py-2 px-3">
            <Link to="/">Contact</Link>
          </div>
          <div className="hover:border-2 hover:py-2 px-3">
            <Link to="/">Stores</Link>
          </div>
          <div className="flex justify-between items-center text-gray-500 text-3xl gap-2">
            <BsFillPersonFill className="cursor-pointer" />
            <AiOutlineHeart className="cursor-pointer" />
            <div
              className="flex justify-between items-center relative"
              onClick={() => setOpen(!open)}
            >
              <AiOutlineShoppingCart className="cursor-pointer" />
              <span className="text-sm  w-5 h-5 rounded-full bg-blue-700 text-white absolute flex items-center justify-center -right-2 -top-2">
                {products.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
