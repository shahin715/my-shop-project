import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useOrder } from "../../sections/Order/OrderContextStore";
import ProductsData from "./TopProductsData";

const TopProductDetail = () => {
  const { id } = useParams();
  const product = ProductsData.find((item) => item.id === parseInt(id));
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
      price: parseFloat(product.price),
      quantity,
    };
    addOrder(newOrder);
    alert(`Added ${quantity} x ${product.title} to cart`);
  };

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <img src={product.img} alt={product.title} className="w-full h-96 object-contain" />
      <div>
        <h2 className="text-3xl font-bold">{product.title}</h2>
        <p className="text-gray-600 mb-1"><strong>Brand:</strong> {product.brand}</p>
        <p className="text-green-600 mb-1"><strong>Availability:</strong> {product.availability}</p>
        <p className="text-xl text-red-600 font-semibold mb-3">Tk {product.price}</p>
        <p>{product.description}</p>

        <div className="flex items-center mt-4">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="px-3 py-1 bg-gray-300 text-gray-700 font-bold rounded-l-md hover:bg-gray-400"
          >-</button>
          <span className="px-4 py-1 border-y border-gray-300">{quantity}</span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="px-3 py-1 bg-gray-300 text-gray-700 font-bold rounded-r-md hover:bg-gray-400"
          >+</button>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default TopProductDetail;