import KidsWear from "../../comPages/kids-wear/KidsWearData";
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // ✅ Helmet import


const KidsWearProductList = () => {
  return (
    <>
      {/* Dynamic Helmet for the Kids' Wear Product List Page */}
      <Helmet>
        <title>Kidswear Collection - Trendy Outfits for Children</title>
        <meta name="description" content="Explore our kidswear collection, featuring a variety of colorful and comfortable outfits for your little ones." />
      </Helmet>

      <section className="mt-14 mb-20 px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-black dark:text-white">
            Kidswear Collection
          </h1>
          <p className="text-gray-500 mt-2 dark:text-gray-400">Explore the latest collection of stylish and comfortable outfits for kids</p>
        </div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6">
          {KidsWear.map((product) => (
            <Link to={`/kids/${product.id}`} key={product.id}>
              {/* Dynamic Helmet for Each Product */}
              <Helmet>
                <title>{product.title} - Best Price</title>
                <meta name="description" content={product.description} />
                <meta property="og:title" content={product.title} />
                <meta property="og:description" content={product.description} />
                <meta property="og:image" content={product.img} />
              </Helmet>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 p-4 text-center">
                <img
                  src={product.img}
                  alt={product.title}
                  loading="lazy"
                  className="h-48 w-full object-contain rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{product.title}</h3>
                <p className="text-gray-500 dark:text-gray-300">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default KidsWearProductList;



