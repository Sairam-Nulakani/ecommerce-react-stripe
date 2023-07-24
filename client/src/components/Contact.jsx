import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-center">
      <div className="flex items-center justify-between w-1/2">
        <span className="font-bold">BE IN TOUCH WITH US : </span>
        <div>
          <input
            type="text"
            placeholder="Enter your email..."
            className="p-3 border-none rounded-l-lg w-80"
          />
          <button className="border-none p-3 bg-gray-800 rounded-r-lg">
            JOIN US
          </button>
        </div>
        <div className="text-xl flex gap-4">
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillGoogleCircle />
          <AiFillTwitterCircle />
          <BsPinterest />
        </div>
      </div>
    </div>
  );
};

export default Contact;
