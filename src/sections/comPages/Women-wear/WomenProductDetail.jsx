import React, { useState } from "react";
import { useParams } from "react-router-dom";
import WomenWear from "./WomenWearData";
import { useOrder } from "../../Order/OrderContextStore";

const WomenProductDetail = () => {
  const { id } = useParams();
  const product = WomenWear.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { addOrder } = useOrder();

  if (!product) {
    return <div className="text-center mt-20">Product not found</div>;
  }

  const handleAddToCart = () => {
    const newOrder = {
      id: product.id,
      title: product.title,
      img: product.img,
      price: parseFloat(product.price) || 2000,
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
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-96 object-contain rounded-md"
      />
      <div>
        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>

        <p className="text-sm text-gray-600">
          <span className="font-semibold">Product Code:</span> {product.code}
        </p>
        <p className="text-sm text-green-600 mb-2">
          <span className="font-semibold">Availability:</span>{" "}
          {product.availability}
        </p>
        <p className="text-sm text-gray-500 mb-1">
          Brand: {product.brand || "Unknown"}
        </p>

        <p className="mt-2 text-xl font-bold text-red-600">
          Tk {product.price}
        </p>

        <p className="mt-4 text-gray-700">{product.description}</p>

        <div className="flex items-center mt-4">
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

        <button
          onClick={handleAddToCart}
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default WomenProductDetail;
