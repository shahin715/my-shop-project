import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "./OrderContextStore";
import { motion as Motion } from "framer-motion";

const Checkout = () => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [address, setAddress] = useState({ street: "", city: "", zip: "" });
  const [delivery, setDelivery] = useState("home");
  const [payment, setPayment] = useState("cod");
  const navigate = useNavigate();
  const { orders } = useOrder();

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = { contact, address, delivery, payment, orders };
    console.log("Order Data:", orderData);
    navigate("/thankyou");
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="text-sm font-medium text-gray-600 mb-1">Step 2 of 3</div>
        <div className="w-full bg-gray-300 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full w-2/3"></div>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6">Review & Confirm</h1>

      {/* Contact Info */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-xl shadow p-6 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </Motion.div>

      {/* Address Info */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white rounded-xl shadow p-6 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Street Address"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="City"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="ZIP Code"
            value={address.zip}
            onChange={(e) => setAddress({ ...address, zip: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </Motion.div>

      {/* Delivery & Payment Options */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
      >
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Option</h2>
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => setDelivery("home")}
              className={`w-full p-3 rounded-lg border-2 ${
                delivery === "home"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              Home Delivery
            </button>
            <button
              type="button"
              onClick={() => setDelivery("pickup")}
              className={`w-full p-3 rounded-lg border-2 ${
                delivery === "pickup"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              Store Pickup
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => setPayment("cod")}
              className={`w-full p-3 rounded-lg border-2 ${
                payment === "cod"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              Cash on Delivery
            </button>
            <button
              type="button"
              onClick={() => setPayment("card")}
              className={`w-full p-3 rounded-lg border-2 ${
                payment === "card"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              Credit/Debit Card
            </button>
          </div>
        </div>
      </Motion.div>

      {/* Order Summary */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-white rounded-xl shadow p-6 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-4">
          {orders.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity} × ${item.price.toFixed(2)}
                </p>
                <p className="text-sm font-medium text-gray-800">
                  Total: ${(item.quantity * item.price).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Motion.div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all"
      >
        Review & Confirm Order
      </button>
    </div>
  );
};

export default Checkout;


