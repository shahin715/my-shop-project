import React from "react";
import { useOrder } from "./OrderContextStore";

const Order = () => {
  const { orders, removeOrder } = useOrder(); // ✅ get removeOrder from context

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={order.img}
                  alt={order.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-bold">{order.title}</h3>
                  <p>Quantity: {order.quantity}</p>
                  <p>Price: ${order.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeOrder(order.id)} // ✅ discard action
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Discard
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;

