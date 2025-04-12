import React, { useState } from "react";
import { OrderContext } from "./OrderContextStore";

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (product) => {
    setOrders((prev) => [...prev, product]);
  };

  const removeOrder = (productId) => {
    setOrders((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

