import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../../assets/images/Smarthphone.avif";
import Img2 from "../../../assets/images/Laptop.jpeg";
import Img3 from "../../../assets/images/TV.jpeg";
import Img4 from "../../../assets/images/headphone.webp";
import Img5 from "../../../assets/images/Gaming.jpeg";

const Electronic = [
  { id: 1, img: Img1, title: "Smartphone" },
  { id: 2, img: Img2, title: "Laptop" },
  { id: 3, img: Img3, title: "Smart TV" },
  { id: 4, img: Img4, title: "Headphones" },
  { id: 5, img: Img5, title: "Gaming Console" },
];

const ElectronicsProductList = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Electronics Collection
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {Electronic.map((product) => (
           <Link to={`/electronics/${product.id}`} key={product.id}>
              <div className="text-center cursor-pointer">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <h3 className="font-semibold mt-3">{product.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsProductList;



