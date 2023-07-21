import React from "react";
import Card from "./Card";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://n8london.co.uk/wp-content/uploads/2019/11/HARLEYKINGSXLONG.jpg",
      img2: "https://assets.ajio.com/medias/sys_master/root/20230629/Hfug/649cb3cca9b42d15c917653b/-1117Wx1400H-465969963-black-MODEL.jpg",
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
    {
      id: 5,
      img: "https://www.wildsouthclothing.co.nz/cdn/shop/products/MJ167Black1.jpg?v=1636597959",
      title: "Coat",
      isNew: true,
      oldPrice: 599,
      newPrice: 299,
    },
    {
      id: 6,
      img: "https://britishretro.co.uk/wp-content/uploads/2019/08/Lindsay-tartan-skirt.jpg",
      title: "Skirt",
      oldPrice: 599,
      newPrice: 499,
    },
    {
      id: 7,
      img: "https://ih1.redbubble.net/image.2558085042.4847/ssrco,baseball_cap,mens,161D36:1628f0f39d,back_front,tall_portrait,750x1000-bg,f8f8f8.jpg",
      title: "Hat",
      oldPrice: 199,
      newPrice: 99,
    },
    {
      id: 8,
      img: "https://n8london.co.uk/wp-content/uploads/2019/11/HARLEYKINGSXLONG.jpg",
      img2: "https://assets.ajio.com/medias/sys_master/root/20230629/Hfug/649cb3cca9b42d15c917653b/-1117Wx1400H-465969963-black-MODEL.jpg",
      title: "Shirt",
      oldPrice: 1999,
      newPrice: 599,
      isNew: true,
    },
  ];
  return (
    <div className="flex justify-between flex-wrap">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
