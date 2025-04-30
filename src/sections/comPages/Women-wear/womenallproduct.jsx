import React from 'react';
import { Link } from 'react-router-dom';
import Img1 from "../../../assets/images/product1.webp";
import Img2 from "../../../assets/images/product2.jpg";
import Img3 from "../../../assets/images/product3i.webp";
import Img4 from "../../../assets/images/product4.jpg";
import Img5 from "../../../assets/images/product5.jpg";
import Img6 from "../../../assets/images/product6.jpg";
import Img7 from "../../../assets/images/product7.jpg";
import Img8 from "../../../assets/images/product8.jpg";
import Img9 from "../../../assets/images/product9.jpg";
import Img10 from "../../../assets/images/product10.jpg";
import { Helmet } from 'react-helmet-async';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    description: "Elegant ethnic wear for a traditional look."
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    description: "Stylish western outfits for modern women."
  },
  {
    id: 3,
    img: Img3,
    title: "Printed Top",
    description: "Trendy printed tops for casual wear."
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    description: "Comfortable and stylish printed t-shirts."
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion T-Shirt",
    description: "Fashionable t-shirts in various styles."
  },
  {
    id: 6,
    img: Img6,
    title: "Casual Dress",
    description: "Perfect casual dress for day events."
  },
  {
    id: 7,
    img: Img7,
    title: "Summer Top",
    description: "Lightweight summer tops for hot days."
  },
  {
    id: 8,
    img: Img8,
    title: "Sweater Dress",
    description: "Cozy sweater dresses for colder seasons."
  },
  {
    id: 9,
    img: Img9,
    title: "Maxi Dress",
    description: "Elegant maxi dresses for formal occasions."
  },
  {
    id: 10,
    img: Img10,
    title: "Sporty Outfit",
    description: "Comfortable outfits for active women."
  }
];

const WomenAllProduct = () => {
  return (
    <>
      {/* Dynamic Helmet for the Product List Page */}
      <Helmet>
        <title>Womenwear Collection - Fashionable Apparel</title>
        <meta name="description" content="Explore the latest collection of women's clothing including ethnic wear, t-shirts, dresses, and more." />
      </Helmet>

      <section className="mt-14 mb-20 px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 data-aos="fade-up" className="text-4xl font-extrabold tracking-tight text-black dark:text-white">
            Womenwear Collection - All Products
          </h1>
          <p className="text-gray-500 mt-2 dark:text-gray-400">Explore our full collection of women's trendy clothing.</p>
        </div>

        <div className="grid gap-8 sm:gap-6 md:gap-10 place-items-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
          {ProductsData.map((product) => (
            <Link to={`/womenwear/${product.id}`} key={product.id}>
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
                  className="h-48 w-full object-contain rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{product.title}</h3>
                <p className="text-gray-500 dark:text-gray-300">{product.description}</p>
                
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button (Optional if needed) */}
        <div className="text-center mt-8">
          <Link to="/womenwear">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all">
              Back to Womenwear
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default WomenAllProduct;


