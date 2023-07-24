import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="w-80 flex flex-col gap-2 mt-20">
        <div className="w-full h-96 overflow-hidden relative rounded-lg">
          {item?.attributes.isNew && (
            <span className="absolute bg-white text-teal-700 px-1 py-1 z-20 left-1 top-2 rounded-md text-sm font-medium">
              New Season
            </span>
          )}
          <img
            alt=""
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            className="w-full h-full object-cover absolute z-10 hover:z-0 "
          />
          <img
            alt=""
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            className="w-full h-full object-cover absolute border-2"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="flex gap-3">
          <h3 className="text-gray-600 line-through ">
            ₹{item?.attributes.oldPrice || item?.attributes.price + 100}
          </h3>
          <h3 className="text-xl">₹{item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
