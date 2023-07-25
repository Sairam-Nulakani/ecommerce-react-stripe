import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { MdCompare } from "react-icons/md";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartReducer";

const Product = () => {
  const id = useParams().id;
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="px-5 py-5 flex gap-3">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="w-fit flex gap-2">
            <div className="flex-1/2">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
                className="w-full h-36 object-cover cursor-pointer mb-2"
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
                className="w-full h-36 object-cover cursor-pointer"
              />
            </div>
            <div className="flex-2 w-96 h-full">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.[selectedImg]?.data?.attributes?.url
                }
                alt=""
                className="w-full h-full object-cover overflow-hidden ml-5"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8 ml-12">
            <h2 className="text-3xl">{data?.attributes?.title}</h2>
            <span className="text-3xl text-blue-500 font-bold text-justify">
              ₹{data?.attributes?.price}
            </span>
            <p className="font-semibold text-lg">{data?.attributes?.desc}</p>
            <div className="flex items-center">
              <button
                onClick={(e) =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
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
            <button
              className="bg-blue-500 w-48 flex items-center px-2 py-4 justify-center gap-3 text-xl rounded-md text-white"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
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
        </>
      )}
    </div>
  );
};

export default Product;
