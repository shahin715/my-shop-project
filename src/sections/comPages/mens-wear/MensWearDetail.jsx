import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"; 
import MensWearData from "./mensWearData";
import { useOrder } from "../../Order/OrderContextStore";

const MensWearDetail = () => {
  const { id } = useParams();
  const { addOrder } = useOrder();
  const [quantity, setQuantity] = useState(1);

  const product = MensWearData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-20 text-2xl font-semibold">Product not found</div>;
  }

  const handleAddToCart = () => {
    const newOrder = {
      id: product.id,
      title: product.title,
      img: product.img,
      price: product.price,
      quantity,
    };
    addOrder(newOrder);
    alert(`Added ${quantity} of ${product.title} to cart`);
  };

  return (
    <div className="container mx-auto p-8">
      {/* ✅ Helmet Title, Description set dynamically */}
      <Helmet>
        <title>{product.title} - Best Price in Bangladesh</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.img} />
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-auto max-w-lg rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h2>
          <p className="text-gray-500">Color: {product.color}</p>
          <p className="text-gray-500">Rating: {product.rating} ⭐</p>
          <p className="mt-2 text-xl font-bold text-red-600">৳{product.price.toLocaleString()}</p>
          <p className="mt-2 text-gray-700">{product.description}</p>

          <div className="mt-4 space-y-2">
            <p><span className="font-semibold">Product Code:</span> {product.code}</p>
            <p><span className="font-semibold">Availability:</span> {product.availability}</p>
          
            <p><span className="font-semibold">Shipping:</span> Free Shipping</p>
            <p><span className="font-semibold">Customer Support:</span> 24/7 Support</p>
          </div>

          <div className="flex items-center mt-4">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              className="px-3 py-1 bg-gray-300 text-gray-700 font-bold rounded-l-md hover:bg-gray-400"
            >
              -
            </button>
            <span className="px-4 py-1 border-t border-b border-gray-300 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-3 py-1 bg-gray-300 text-gray-700 font-bold rounded-r-md hover:bg-gray-400"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Add to Cart
          </button>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">What customers say</h3>
            <div className="space-y-2 mt-2">
              <p><span className="font-semibold">Rahim:</span> "Amazing quality! Totally worth the price." ⭐⭐⭐⭐⭐</p>
              <p><span className="font-semibold">Sadia:</span> "Great service and fast delivery." ⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MensWearDetail;


