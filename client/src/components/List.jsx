import React from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

const List = ({ subCats, sort, catId, maxPrice }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filter][categories][id]=$${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  return (
    <div className="flex justify-between flex-wrap">
      {loading
        ? "loading"
        : data.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
