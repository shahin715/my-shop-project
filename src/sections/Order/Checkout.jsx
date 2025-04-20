import { useState } from "react";

const Checkout = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [delivery, setDelivery] = useState("home");
  const [payment, setPayment] = useState("cod");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle final order logic here
    console.log("Order Submitted", { contact, delivery, payment });
    alert("Order placed successfully!");
  };

  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <input
            type="text"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            className="w-full p-2 border rounded mb-2"
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

        {/* Delivery Option */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Delivery Option</h2>
          <label className="block">
            <input
              type="radio"
              name="delivery"
              value="home"
              checked={delivery === "home"}
              onChange={() => setDelivery("home")}
              className="mr-2"
            />
            Home Delivery
          </label>
          <label className="block">
            <input
              type="radio"
              name="delivery"
              value="pickup"
              checked={delivery === "pickup"}
              onChange={() => setDelivery("pickup")}
              className="mr-2"
            />
            Store Pickup
          </label>
        </div>

        {/* Payment Method */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={payment === "cod"}
              onChange={() => setPayment("cod")}
              className="mr-2"
            />
            Cash on Delivery
          </label>
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={payment === "card"}
              onChange={() => setPayment("card")}
              className="mr-2"
            />
            Credit/Debit Card
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
