import React, { useState } from "react";
import List from "../../components/List";
import { useParams } from "react-router-dom";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sort, setSort] = useState(null);
  return (
    <div className="px-8 py-10 flex">
      <div className="w-6/12 sticky h-full top-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Product Categories</h2>
          <div className="mb-1">
            <input type="checkbox" id="1" value={1} />
            <label className="ml-2" htmlFor="1">
              Shoes
            </label>
          </div>
          <div className="mb-1">
            <input type="checkbox" id="2" value={2} />
            <label className="ml-2" htmlFor="2">
              Shirts
            </label>
          </div>
          <div className="mb-1">
            <input type="checkbox" id="3" value={3} />
            <label className="ml-2" htmlFor="3">
              Coats
            </label>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Filter by Price</h2>
          <div>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={2000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Sort by</h2>
          <div className="mb-1">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label className="ml-2" htmlFor="asc">
              Price(Lowest First)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label className="ml-2" htmlFor="desc">
              Price(Highest First)
            </label>
          </div>
        </div>
      </div>
      <div className="flex-3">
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="w-screen h-80 object-cover"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
