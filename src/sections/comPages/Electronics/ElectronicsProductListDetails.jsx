import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // ✅ Helmet import
import Electronic from "./ElectronicData";
import { useOrder } from "../../Order/OrderContextStore";
import { FaStar, FaRegStar } from "react-icons/fa";

const ElectronicProductDetail = () => {
  const { id } = useParams();
  const product = Electronic.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { addOrder } = useOrder();

  if (!product) {
    return (
      <div className="text-center mt-20">
        <Helmet>
          <title>Product Not Found | Electronics</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        Product not found
      </div>
    );
  }

  const handleAddToCart = () => {
    const cleanedPrice = Number(product.price.replace(/[^\d.-]/g, ""));
    const newOrder = {
      id: product.id,
      title: product.title,
      img: product.img,
      price: cleanedPrice,
      quantity: quantity,
    };
    addOrder(newOrder);
    alert(`Order added: ${quantity} x ${product.title}`);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* ✅ Helmet Title, Description set dynamically */}
      <Helmet>
        <title>{product.title} - Best Price in Bangladesh</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.img} />
      </Helmet>

      {/* Image */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-[400px] object-contain rounded-md"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-between">
        {/* (same as your code...) */}
        <div>
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            {product.title}
          </h2>

          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaRegStar />
            </div>
            <span className="text-sm text-gray-500">(124 reviews)</span>
          </div>

          <div className="mb-2 text-sm text-gray-600">
            <span className="font-semibold">Code:</span> #{product.id}
          </div>
          <div className="mb-2 text-sm">
            <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs">
              In Stock
            </span>
          </div>
          <p className="text-xl font-bold text-red-600 mb-2">{product.price}</p>

          <p className="text-gray-700 mb-4">{product.description}</p>

          <ul className="mb-6 space-y-2">
            <li className="text-sm text-gray-600">✅ 1-Year Warranty</li>
            <li className="text-sm text-gray-600">✅ Free Shipping</li>
            <li className="text-sm text-gray-600">✅ 24/7 Customer Support</li>
          </ul>

          {/* Quantity Controller */}
          <div className="flex items-center mb-4">
            <button
              onClick={handleDecrement}
              className="px-3 py-1 bg-gray-300 text-gray-700 font-bold rounded-l-md hover:bg-gray-400"
            >
              -
            </button>
            <span className="px-4 py-1 border-t border-b border-gray-300 text-center">
              {quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="px-3 py-1 bg-gray-300 text-gray-700 font-bold rounded-r-md hover:bg-gray-400"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>

        {/* Customer Reviews */}
        <div className="mt-10 border-t pt-4">
          <h4 className="text-lg font-semibold mb-2">What customers say</h4>
          <p className="text-sm text-gray-600 italic mb-1">
            "Amazing quality! Totally worth the price." — <strong>Rahim</strong>
          </p>
          <p className="text-sm text-gray-600 italic">
            "Great service and fast delivery." — <strong>Sadia</strong>
          </p>
        </div>
      </div>

    </div>
  );
};

export default ElectronicProductDetail;




