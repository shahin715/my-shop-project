import React from 'react';
import { useParams } from 'react-router-dom'; 
import { Helmet } from 'react-helmet-async';
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

// Simulate product data (in a real app, you might fetch this from an API)
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    description: "Elegant ethnic wear for a traditional look.",
    details: "This beautiful ethnic wear is perfect for all traditional occasions. Made with high-quality fabric and exquisite designs, it brings elegance and comfort."
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    description: "Stylish western outfits for modern women.",
    details: "This western outfit is designed for modern women who like to stay on top of the fashion game. With a sleek design and vibrant colors, it's perfect for casual outings."
  },
  {
    id: 3,
    img: Img3,
    title: "Printed Top",
    description: "Trendy printed tops for casual wear.",
    details: "A variety of printed tops that are perfect for casual occasions. These tops are comfortable and stylish, made with breathable fabrics."
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    description: "Comfortable and stylish printed t-shirts.",
    details: "These printed t-shirts are trendy and made for comfort. Perfect for any casual occasion or relaxed day out."
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion T-Shirt",
    description: "Fashionable t-shirts in various styles.",
    details: "Explore a collection of fashion-forward t-shirts. These are trendy, comfortable, and perfect for any casual outing."
  },
  {
    id: 6,
    img: Img6,
    title: "Casual Dress",
    description: "Perfect casual dress for day events.",
    details: "This casual dress is perfect for day events, offering both comfort and style in one design."
  },
  {
    id: 7,
    img: Img7,
    title: "Summer Top",
    description: "Lightweight summer tops for hot days.",
    details: "These lightweight summer tops are perfect for staying cool and stylish during the hot summer days."
  },
  {
    id: 8,
    img: Img8,
    title: "Sweater Dress",
    description: "Cozy sweater dresses for colder seasons.",
    details: "Cozy sweater dresses that provide warmth and style for the colder seasons. Ideal for casual outings and winter holidays."
  },
  {
    id: 9,
    img: Img9,
    title: "Maxi Dress",
    description: "Elegant maxi dresses for formal occasions.",
    details: "Our maxi dresses are designed for elegance and comfort. Perfect for formal events, they add a touch of sophistication to any outfit."
  },
  {
    id: 10,
    img: Img10,
    title: "Sporty Outfit",
    description: "Comfortable outfits for active women.",
    details: "Sporty outfits designed for active women who want to stay stylish and comfortable during their workouts or casual outings."
  }
];

const ProductDetails = () => {
  const { id } = useParams(); // Get the product id from the URL
  const product = ProductsData.find((product) => product.id === parseInt(id)); // Find the product by id

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <Helmet>
        <title>{product.title} - Product Details</title>
        <meta name="description" content={product.details} />
      </Helmet>

      <section className="mt-14 mb-20 px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 data-aos="fade-up" className="text-4xl font-extrabold tracking-tight text-black dark:text-white">
            {product.title} - Product Details
          </h1>
          <p className="text-gray-500 mt-2 dark:text-gray-400">{product.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          <div>
            <img
              src={product.img}
              alt={product.title}
              loading="lazy"
              className="w-full h-auto object-contain rounded-xl mb-4"
            />
          </div>

          <div className="flex flex-col justify-center items-start">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">Details</h2>
            <p className="text-gray-500 dark:text-gray-300 mt-4">{product.details}</p>
          </div>
        </div>

        {/* Add to Cart or Buy Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all">
            Add to Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;

