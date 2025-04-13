import React from 'react';
import { Link } from "react-router-dom";
import WomenWear from "../../../sections/comPages/Women-wear/WomenWearData";






const WomenAllProduct = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold">All Women Products</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
        {WomenWear.map((product) => (
          <Link
            to={`/women/${product.id}`}
            key={product.id}
            className="text-center"
          >
            <img
              src={product.img}
              alt={product.title}
              className="h-[220px] w-[150px] object-cover rounded-md cursor-pointer"
            />
            <h3 className="font-semibold mt-3">{product.title}</h3>
            {/* <p className="text-green-600 font-medium">Tk {product.price}</p> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WomenAllProduct;
