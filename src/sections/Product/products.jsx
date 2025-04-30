import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProductsData from "./ProductsData";

const Products = () => {
  return (
    <div className="mt-14 mb-12 px-4">
      <div>
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => (
              <Link
                key={data.id}
                to={`/products/${data.id}`}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 w-full max-w-[250px] text-center"
              >
                <div className="relative w-full h-[220px]">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-full h-full object-contain rounded-md cursor-pointer"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link to="/Womenallproduct">
              <button className="cursor-pointer bg-primary text-black dark:text-white py-1 px-5 rounded-md">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;


