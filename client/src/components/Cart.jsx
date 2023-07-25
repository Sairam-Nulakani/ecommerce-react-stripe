import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetProduct } from "../store/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };
  return (
    <div className="absolute z-10 top-20 right-2 bg-white shadow-lg p-9 rounded-md">
      <h1 className="text-gray-500 text-3xl mb-3 ">Products in your cart</h1>
      {products?.map((item) => (
        <div key={item.id} className="flex items-center gap-1 mb-9">
          <img
            src={process.env.REACT_APP_UPLOAD_URL + item.img}
            alt=""
            className="w-20 h-30 object-cover"
          />
          <div className="ml-3">
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p className="text-gray-500 mt-4 mb-2">
              {item.desc.substring(0, 40)}
            </p>
            <div className="text-blue-400">
              {item.quantity} x {item.price}
            </div>
          </div>
          <AiFillDelete
            className="text-red-700 cursor-pointer ml-5 text-2xl"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="flex justify-between font-bold mb-6">
        <span className="text-xl">SUB TOTAL</span>
        <span>{totalPrice()}</span>
      </div>
      <button className="bg-blue-500 w-60 flex items-center px-1 py-2 justify-center text-xl rounded-md text-white mb-5">
        Proceed to CheckOut
      </button>
      <span
        className="text-red-500 cursor-pointer"
        onClick={() => dispatch(resetProduct())}
      >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
