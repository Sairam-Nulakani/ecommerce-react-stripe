import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="w-80 flex flex-col gap-2 mt-20">
        <div className="w-full h-96 overflow-hidden relative rounded-lg">
          {item.isNew && (
            <span className="absolute bg-white text-teal-700 px-1 py-1 z-20 left-1 top-2 rounded-md text-sm font-medium">
              New Season
            </span>
          )}
          <img
            alt=""
            src={item.img}
            className="w-full h-full object-cover absolute z-10 hover:z-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000"
          />
          <img
            alt=""
            src={item.img2}
            className="w-full h-full object-cover absolute"
          />
        </div>
        <h2>{item.title}</h2>
        <div className="flex gap-3">
          <h3 className="text-gray-600 line-through ">₹{item.oldPrice}</h3>
          <h3 className="text-xl">₹{item.newPrice}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
