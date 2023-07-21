import React from "react";
import Card from "./Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://n8london.co.uk/wp-content/uploads/2019/11/HARLEYKINGSXLONG.jpg",
      img: "https://assets.ajio.com/medias/sys_master/root/20230629/Hfug/649cb3cca9b42d15c917653b/-1117Wx1400H-465969963-black-MODEL.jpg",
      title: "Shirt",
      oldPrice: 1999,
      newPrice: 599,
      isNew: true,
    },
    {
      id: 2,
      img: "https://www.wildsouthclothing.co.nz/cdn/shop/products/MJ167Black1.jpg?v=1636597959",
      title: "Coat",
      isNew: true,
      oldPrice: 599,
      newPrice: 299,
    },
    {
      id: 3,
      img: "https://britishretro.co.uk/wp-content/uploads/2019/08/Lindsay-tartan-skirt.jpg",
      title: "Skirt",
      oldPrice: 599,
      newPrice: 499,
    },
    {
      id: 4,
      img: "https://ih1.redbubble.net/image.2558085042.4847/ssrco,baseball_cap,mens,161D36:1628f0f39d,back_front,tall_portrait,750x1000-bg,f8f8f8.jpg",
      title: "Hat",
      oldPrice: 199,
      newPrice: 99,
    },
  ];
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
