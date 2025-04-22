import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../../assets/images/Smarthphone.avif";
import Img2 from "../../../assets/images/Laptop.jpeg";
import Img3 from "../../../assets/images/TV.jpeg";
import Img4 from "../../../assets/images/headphone.webp";
import Img5 from "../../../assets/images/Gaming.jpeg";

const Electronics = [
  { id: 1, img: Img1, title: "Smartphone" },
  { id: 2, img: Img2, title: "Laptop" },
  { id: 3, img: Img3, title: "Smart TV" },
  { id: 4, img: Img4, title: "Headphones" },
  { id: 5, img: Img5, title: "Gaming Console" },
];

const ElectronicsProductList = () => {
  return (
    <section className="mt-14 mb-20 px-4 sm:px-8">
      <div className="text-center mb-12">
        <h1
          data-aos="fade-up"
          className="text-4xl font-extrabold tracking-tight text-white"
        >
          Electronics Collection
        </h1>
        <p className="text-gray-500 mt-2">Explore our top tech products</p>
      </div>

      <div
        className="grid gap-8 sm:gap-6 md:gap-10 place-items-center"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
      >
        {Electronics.map((product) => (
          <Link to={`/electronics/${product.id}`} key={product.id}>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 p-4 text-center">
              <img
                src={product.img}
                alt={product.title}
                loading="lazy"
                className="h-48 w-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {product.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ElectronicsProductList;



