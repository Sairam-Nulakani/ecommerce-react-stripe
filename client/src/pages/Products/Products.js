import React, { useState } from "react";
import List from "../../components/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  console.log(selectedSubCats);
  return (
    <div className="px-8 py-10 flex">
      <div className="w-6/12 sticky h-full top-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Product Categories</h2>
          {data?.map((item) => (
            <div className="mb-1" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label className="ml-2" htmlFor={item.id}>
                {item.attributes.title}
              </label>
            </div>
          ))}
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
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
