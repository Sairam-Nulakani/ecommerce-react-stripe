import React from "react";
import payment from "../../img/payment.png";
const Footer = () => {
  return (
    <section className="px-10 py-5 bg-neutral-900	">
      <div className="flex gap-10">
        <div className="flex-1 flex flex-col gap-2 text-justify	 text-md">
          <h1 className="text-xl text-white">Categories</h1>
          <span className="text-gray-500">Men</span>
          <span className="text-gray-500">Women</span>
          <span className="text-gray-500">Shoes</span>
          <span className="text-gray-500">Accessories</span>
          <span className="text-gray-500">New Arrivals</span>
        </div>
        <div className="flex-1 flex flex-col gap-2 text-justify	 text-md">
          <h1 className="text-xl text-white">Links</h1>
          <span className="text-gray-500">FAQs</span>
          <span className="text-gray-500">Pages</span>
          <span className="text-gray-500">Stores</span>
          <span className="text-gray-500">Compare</span>
          <span className="text-gray-500">Cookies</span>
        </div>
        <div className="flex-1 flex flex-col gap-2 text-justify	 text-md">
          <h1 className="text-xl text-white">About</h1>
          <span className="text-gray-500">
            An ecommerce store is an online platform that enables businesses to
            sell products or services to customers over the internet. It
            typically includes features such as product catalogs, shopping
            carts, secure payment gateways, and order processing. Ecommerce
            stores provide a convenient and accessible way for customers to
            browse and purchase items from the comfort of their homes, making it
            a significant aspect of modern retail and consumer behavior.
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-2 text-justify	 text-md">
          <h1 className="text-xl text-white">Contact</h1>
          <span className="text-gray-500">
            In an ecommerce store, the "contact" section is a crucial component
            that provides customers with a means to reach out to the business
            for inquiries, support, or feedback. It usually includes contact
            information such as email addresses, phone numbers, and sometimes a
            contact form, offering a direct line of communication between
            customers and the online store, enhancing customer trust and
            satisfaction.
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5 ">
        <div>
          <span className="font-bold text-blue-400 text-2xl">
            ECOMMERCE STORE
          </span>
        </div>
        <div>
          <img src={payment} className="h-12" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
