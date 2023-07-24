import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { MdCompare } from "react-icons/md";

const Product = () => {
  const images = [
    "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/2127876/2017/11/23/11511431472633-Roadster-Men-Black-Regular-Fit-Solid-Casual-Shirt-8801511431472500-1.jpg",
    "https://images.meesho.com/images/products/166258417/vpeft_512.webp",
  ];
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="px-5 py-5 flex gap-3">
      <div className="w-fit flex gap-2">
        <div className="flex-1">
          <img
            src={images[0]}
            alt=""
            onClick={(e) => setSelected(0)}
            className="w-full h-36 object-cover cursor-pointer mb-2"
          />
          <img
            src={images[1]}
            alt=""
            onClick={(e) => setSelected(1)}
            className="w-full h-36 object-cover cursor-pointer"
          />
        </div>
        <div className="w-96">
          <img
            src={images[selected]}
            alt=""
            className="w-full h-full object-cover overflow-hidden ml-5"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-8 ml-12">
        <h2 className="text-3xl">Title</h2>
        <span className="text-3xl text-blue-500 font-bold text-justify">
          ₹199
        </span>
        <p className="font-semibold text-lg">
          Quis pariatur eiusmod labore non ut dolore consequat consequat dolor
          commodo minim proident. Quis irure est culpa minim. Minim qui sit
          consequat ipsum cillum eu. Velit labore aliquip qui eiusmod quis
          laborum ea duis eiusmod aute. Eiusmod occaecat amet do proident qui
          laborum id nostrud esse sint dolore labore exercitation non. Non
          aliquip aliquip esse ullamco sit.
        </p>
        <div className="flex items-center">
          <button
            onClick={(e) => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            className="h-12 w-12 flex items-center justify-center cursor-pointer bg-gray-300"
          >
            -
          </button>
          <span className="p-3"> {quantity}</span>

          <button
            onClick={(e) => setQuantity((prev) => prev + 1)}
            className="h-12 w-12 flex items-center justify-center cursor-pointer bg-gray-300"
          >
            +
          </button>
        </div>
        <button className="bg-blue-500 w-48 flex items-center px-2 py-4 justify-center gap-3 text-xl rounded-md text-white">
          <AiOutlineShoppingCart />
          Add to Cart
        </button>
        <div className="flex gap-4 text-blue-500 text-xl">
          <div className="flex items-center gap-1">
            <AiOutlineHeart /> ADD TO WISHLIST
          </div>
          <div className="flex items-center gap-1">
            <MdCompare /> ADD TO COMPARE
          </div>
        </div>
        <div className="flex flex-col gap-3 text-gray-600 text-md">
          <span>Vendor : SPL</span>
          <span>Product type : Shirt</span>
          <span>Tag : Shirt,Men</span>
        </div>
        <hr />
        <div className="flex flex-col gap-3 text-gray-600 text-md">
          <span>Description</span>
          <hr className="w-24 text-gray-600 border-1 border-black" />
          <span>Additional Information</span>
          <hr className="w-48 text-gray-600 border-1 border-black" />
          <span>FAQs</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
