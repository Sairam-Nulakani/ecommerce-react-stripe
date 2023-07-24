import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://n8london.co.uk/wp-content/uploads/2019/11/HARLEYKINGSXLONG.jpg",
      img: "https://assets.ajio.com/medias/sys_master/root/20230629/Hfug/649cb3cca9b42d15c917653b/-1117Wx1400H-465969963-black-MODEL.jpg",
      title: "Shirt",
      oldPrice: 1999,
      newPrice: 599,
      isNew: true,
      desc: "dsfhiuehfiusdhiufhdufhuishdfuhsudfhusdhfusydhfusdhfshfuyshdufhusydfuyg",
    },
    {
      id: 2,
      img: "https://www.wildsouthclothing.co.nz/cdn/shop/products/MJ167Black1.jpg?v=1636597959",
      title: "Coat",
      isNew: true,
      oldPrice: 599,
      newPrice: 299,
      desc: "jfjshfjnkweuriwuheiuwjenskdfbcuybhjsndvujhgbdsjfhbsdujh",
    },
  ];
  return (
    <div className="absolute z-10 top-20 right-2 bg-white shadow-lg p-9 rounded-md">
      <h1 className="text-gray-500 text-3xl mb-3 ">Products in your cart</h1>
      {data.map((item) => (
        <div key={item.id} className="flex items-center gap-1 mb-9">
          <img src={item.img} alt="" className="w-20 h-30 object-cover" />
          <div className="ml-3">
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p className="text-gray-500 mt-4 mb-2">
              {item.desc.substring(0, 40)}
            </p>
            <div className="text-blue-400">1 X {item.newPrice}</div>
          </div>
          <AiFillDelete className="text-red-700 cursor-pointer ml-5 text-2xl" />
        </div>
      ))}
      <div className="flex justify-between font-bold mb-6">
        <span className="text-xl">SUB TOTAL</span>
        <span>1250</span>
      </div>
      <button className="bg-blue-500 w-60 flex items-center px-1 py-2 justify-center text-xl rounded-md text-white mb-5">
        Proceed to CheckOut
      </button>
      <span className="text-red-500 cursor-pointer">Reset Cart</span>
    </div>
  );
};

export default Cart;
