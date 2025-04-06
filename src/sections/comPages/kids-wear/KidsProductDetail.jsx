import React, { useState } from "react";
import { useParams } from "react-router-dom";
import KidsWear from "./KidsWearData";
import axios from "axios";

const KidsProductDetail = () => {
    const { id } = useParams();
    const product = KidsWear.find((item) => item.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div className="text-center mt-20">Product not found</div>;
    }

    const handleAddToCart = async () => {
        const orderData = {
            userId: 1, // Replace with real user ID if needed
            date: new Date().toISOString().split("T")[0],
            products: [
                {
                    productId: product.id,
                    quantity: quantity,
                },
            ],
        };

        try {
            const response = await axios.post(
                "https://fakestoreapi.com/carts",
                orderData
            );
            console.log("Order placed:", response.data);
            alert(
                `Order placed successfully for ${quantity} of ${product.title}`
            );
        } catch (error) {
            console.error("Order failed:", error);
            alert("Failed to place order. Please try again.");
        }
    };

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity((prevQuantity) =>
            prevQuantity > 1 ? prevQuantity - 1 : 1
        );
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
                <p className="text-sm text-gray-500">
                    Brand: {product.brand || "Unknown"}
                </p>
                <p className="mt-2 text-xl font-bold text-red-600">
                    {product.price}
                </p>

                <div className="mt-4 space-y-2">
                    <p>
                        <span className="font-semibold">Product Code:</span>{" "}
                        {product.code || "N/A"}
                    </p>
                    <p>
                        <span className="font-semibold">Availability:</span>{" "}
                        {product.availability || "In Stock"}
                    </p>
                </div>

                <p className="mt-4 text-gray-600">{product.description}</p>

                {product.sizes && (
                    <div className="mt-4">
                        <p className="font-semibold">Size:</p>
                        <div className="flex gap-2 mt-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    className="px-3 py-1 rounded-full border hover:bg-black hover:text-white"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

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

export default KidsProductDetail;
