import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import KidsWear from './KidsWearData'; // Import the data

const KidsProductDetail = () => {
  const { id } = useParams();
  const product = KidsWear.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1); // State for quantity

  if (!product) {
    return <div className="text-center mt-20">Product not found</div>;
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.title} to the cart.`);
    alert(`Added ${quantity} of ${product.title} to the cart.`);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <img
        src={product.img}
        alt={product.title}
        className="h-[350px] w-[250px] object-cover rounded-md mb-6"
      />
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <p className="text-xl font-semibold text-red-500 mb-2">{product.price}</p>
      <p className="max-w-[500px] text-center text-gray-600">{product.description}</p>

      {/* Quantity Selector */}
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

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default KidsProductDetail;