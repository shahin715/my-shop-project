import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../../assets/images/Smarthphone.avif";
import Img2 from "../../../assets/images/Laptop.jpeg";
import Img3 from "../../../assets/images/TV.jpeg";
import Img4 from "../../../assets/images/headphone.webp";
import Img5 from "../../../assets/images/Gaming.jpeg";
import { Helmet } from "react-helmet-async";

const Electronics = [
  { id: 1, img: Img1, title: "Smartphone", description: "Latest smartphones with cutting-edge features." },
  { id: 2, img: Img2, title: "Laptop", description: "High-performance laptops for work and play." },
  { id: 3, img: Img3, title: "Smart TV", description: "4K Smart TVs with immersive picture quality." },
  { id: 4, img: Img4, title: "Headphones", description: "Noise-canceling headphones for the best audio experience." },
  { id: 5, img: Img5, title: "Gaming Console", description: "Next-gen gaming consoles with incredible graphics." },
];

const ElectronicsProductList = () => {
  return (
    <>
      {/* Dynamic Helmet for the Product List Page */}
      <Helmet>
        <title>Electronics Collection - Best Tech Products</title>
        <meta name="description" content="Discover the latest electronics including smartphones, laptops, TVs, gaming consoles, and headphones." />
      </Helmet>

      <section className="mt-14 mb-20 px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 data-aos="fade-up" className="text-4xl font-extrabold tracking-tight text-black dark:text-white">
            Electronics Collection
          </h1>
          <p className="text-gray-500 mt-2 dark:text-gray-400">Explore our top tech products</p>
        </div>

        <div
          className="grid gap-8 sm:gap-6 md:gap-10 place-items-center"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
        >
          {Electronics.map((product) => (
            <Link to={`/electronics/${product.id}`} key={product.id}>
              {/* Dynamic Helmet for Each Product */}
              <Helmet>
                <title>{product.title} - Best Price in Bangladesh</title>
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
                  className="h-48 w-full object-cover rounded-xl mb-4"
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

export default ElectronicsProductList;





