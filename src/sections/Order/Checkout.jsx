import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "./OrderContextStore";
import { motion as Motion } from "framer-motion";

const Checkout = () => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [address, setAddress] = useState({ street: "", city: "", zip: "" });
  const [delivery, setDelivery] = useState("home");
  const [payment, setPayment] = useState("cod");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { orders } = useOrder();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contact.name.trim()) newErrors.name = "Name is required";
    if (!contact.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(contact.email)) newErrors.email = "Invalid email address";
    if (!contact.phone.trim()) newErrors.phone = "Phone is required";
    if (!address.street.trim()) newErrors.street = "Street Address is required";
    if (!address.city.trim()) newErrors.city = "City is required";
    if (!address.zip.trim()) newErrors.zip = "ZIP Code is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const orderData = { contact, address, delivery, payment, orders };
      console.log("Order Data:", orderData);
      navigate("/thankyou");
    }
  };

  const inputClass = (error) =>
    `w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-white ${
      error ? "border-red-500" : "border-gray-300 dark:border-gray-600"
    }`;

  const labelClass = "block mb-1 font-medium text-gray-700 dark:text-gray-300";

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 max-w-3xl mx-auto">

      {/* Progress */}
      <div className="mb-6">
        <div className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Step 2 of 3</div>
        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full w-2/3"></div>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Review & Confirm</h1>

      {/* Contact Information */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h2>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
              className={inputClass(errors.name)}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              className={inputClass(errors.email)}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input
              type="tel"
              placeholder="Phone Number"
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              className={inputClass(errors.phone)}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>
      </Motion.div>

      {/* Address */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Delivery Address</h2>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Street Address</label>
            <input
              type="text"
              placeholder="Street Address"
              value={address.street}
              onChange={(e) => setAddress({ ...address, street: e.target.value })}
              className={inputClass(errors.street)}
            />
            {errors.street && <p className="text-red-500 text-sm mt-1">{errors.street}</p>}
          </div>
          <div>
            <label className={labelClass}>City</label>
            <input
              type="text"
              placeholder="City"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              className={inputClass(errors.city)}
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>
          <div>
            <label className={labelClass}>ZIP Code</label>
            <input
              type="text"
              placeholder="ZIP Code"
              value={address.zip}
              onChange={(e) => setAddress({ ...address, zip: e.target.value })}
              className={inputClass(errors.zip)}
            />
            {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
          </div>
        </div>
      </Motion.div>

      {/* Delivery & Payment */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
      >
        {/* Delivery */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Delivery Option</h2>
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => setDelivery("home")}
              className={`w-full p-3 rounded-lg border-2 ${
                delivery === "home"
                  ? "border-blue-600 bg-blue-50 dark:bg-blue-900"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            >
              Home Delivery
            </button>
            <button
              type="button"
              onClick={() => setDelivery("pickup")}
              className={`w-full p-3 rounded-lg border-2 ${
                delivery === "pickup"
                  ? "border-blue-600 bg-blue-50 dark:bg-blue-900"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            >
              Store Pickup
            </button>
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Payment Method</h2>
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => setPayment("cod")}
              className={`w-full p-3 rounded-lg border-2 ${
                payment === "cod"
                  ? "border-blue-600 bg-blue-50 dark:bg-blue-900"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            >
              Cash on Delivery
            </button>
            <button
              type="button"
              onClick={() => setPayment("card")}
              className={`w-full p-3 rounded-lg border-2 ${
                payment === "card"
                  ? "border-blue-600 bg-blue-50 dark:bg-blue-900"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            >
              Card Payment
            </button>
          </div>
        </div>
      </Motion.div>

      {/* Submit */}
      <Motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold"
      >
        Review & Confirm
      </Motion.button>

    </div>
  );
};

export default Checkout;






