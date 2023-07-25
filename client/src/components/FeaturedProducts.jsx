import Card from "./Card";
import useFetch from "../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
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
        {error
          ? "Something went Wrong"
          : loading
          ? "loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
