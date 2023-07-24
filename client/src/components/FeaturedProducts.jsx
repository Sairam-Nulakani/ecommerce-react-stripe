import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="px-20 py-40">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl flex-auto w-64 "> {type} Products</h1>
        <p className="flex-auto w-32 text-gray-500">
          Featured and popular products are the best-selling items for your
          product, product range, or company. However, a featured product could
          be a new product line or seasonal products instead.
        </p>
      </div>
      <div className="flex items-center justify-center gap-12">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
