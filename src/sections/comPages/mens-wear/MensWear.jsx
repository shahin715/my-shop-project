import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MensWearData from "./mensWearData"; 

const MensWear = () => {
  return (
    <>
      {/* Dynamic Helmet for the Product List Page */}
      <Helmet>
        <title>Menswear Collection - Stylish Outfits for Men</title>
        <meta name="description" content="Shop the latest menswear collection, including denim shirts, casual shirts, and T-shirts for every occasion." />
      </Helmet>

      <section className="mt-14 mb-20 px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-black dark:text-white">
            Menswear Collection
          </h1>
          <p className="text-gray-500 mt-2 dark:text-gray-400">Explore our top stylish menswear outfits</p>
        </div>

        <div
          className="grid gap-8 sm:gap-6 md:gap-10 place-items-center"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
        >
          {MensWearData.map((product) => (
            <Link to={`/menswear/${product.id}`} key={product.id}>
              {/* Dynamic Helmet for Each Product */}
              <Helmet>
                <title>{product.title} - Best Price</title>
                <meta name="description" content={product.description} />
                <meta property="og:title" content={product.title} />
                <meta property="og:description" content={product.description} />
                <meta property="og:image" content={product.img} />
              </Helmet>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 p-4 text-center">
                <img
                  src={product.img}
                  alt={product.title}
                  loading="lazy"
                  className="h-48 w-full object-contain rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{product.title}</h3>
                <p className="text-gray-500 dark:text-gray-300">{product.description}</p>
                <p className="text-gray-600 dark:text-gray-400">{product.color}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default MensWear;