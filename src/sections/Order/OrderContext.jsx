import React, { useState } from "react";
import { OrderContext } from "./OrderContextStore"; // shared context

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (product) => {
    setOrders((prev) => [...prev, product]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

