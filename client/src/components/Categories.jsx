import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex h-fit gap-2 m-10 w-full overflow-hidden">
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex-1 flex gap-2 relative">
          <img
            className="w-full h-full object-cover"
            src="https://assets.ajio.com/medias/sys_master/root/h62/h4b/14083708715038/-473Wx593H-460447145-beige-MODEL.jpg"
          />
          <button className="absolute h-10 top-0 bottom-0 left-0 right-0 w-fit m-auto bg-gray-200 px-5 py-2 rounded-lg uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-1000">
            <Link to="/products/1" className="">
              Sale
            </Link>
          </button>
        </div>
        <div className="flex-1 flex gap-2 relative">
          <img
            className="w-full h-full object-cover"
            src="https://assets.ajio.com/medias/sys_master/root/hbe/he2/13464353177630/-1117Wx1400H-460307974-black-MODEL.jpg"
          />
          <button className="absolute h-10 top-0 bottom-0 left-0 right-0 w-fit m-auto bg-gray-200 px-5 py-2 rounded-lg uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-1000">
            <Link to="/products/1" className="">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex-1 flex gap-3 relative">
          <img
            className="w-full h-full object-cover"
            src="https://www.bringitonline.in/uploads/2/2/4/5/22456530/ajio-photography-in-delhi-bring-it-online-2_orig.jpg"
          />
          <button className="absolute h-10 top-0 bottom-0 left-0 right-0 w-fit m-auto bg-gray-200 px-5 py-2 rounded-lg uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-1000">
            <Link to="/products/1" className="">
              Men
            </Link>
          </button>
        </div>
      </div>
      <div className="flex-2">
        <div className="flex-1 flex gap-2 relative">
          <div className="flex-1 flex  gap-2">
            <div className="flex-1 flex gap-2 relative">
              <img
                className="w-full h-full object-cover"
                src="https://t3.ftcdn.net/jpg/05/33/69/68/360_F_533696861_3JSZjCkdWZpXh91gd2gR3X3FJIMzISFX.jpg"
              />
              <button className="absolute h-10 top-0 bottom-0 left-0 right-0 w-fit m-auto bg-gray-200 px-5 py-2 rounded-lg uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-1000">
                <Link to="/products/1" className="">
                  New Season
                </Link>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex-1 flex gap-2 relative">
              <img
                className="w-full h-full object-cover"
                src="https://bobbysfashions.com/wp-content/uploads/2018/05/Style-Accessories-for-Men.jpg"
              />
              <button className="absolute h-10 top-0 bottom-0 left-0 right-0 w-fit m-auto bg-gray-200 px-5 py-2 rounded-lg uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-1000">
                <Link to="/products/1" className="">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-2 relative h-96 mt-2 object-center">
          <img
            className="w-full h-4/4 object-center object-cover	"
            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/ff97efa39395448683e6af4301233e2b_9366/Ventador_Climacool_Shoes_Black_HQ4181_01_standard.jpg"
          />
          <button className="absolute h-10 top-0 bottom-0 left-0 right-0 w-fit m-auto bg-gray-200 px-5 py-2 rounded-lg uppercase transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-1000">
            <Link to="/products/1" className="">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
