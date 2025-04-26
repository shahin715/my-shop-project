import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { useOrder } from "./OrderContextStore";

const ThankYou = () => {
  const { orders } = useOrder();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-6">
      <Motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl max-w-2xl w-full text-center"
      >
        {/* Success Icon */}
        <CheckCircle className="text-green-500 w-20 h-20 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-2">
          Thank You!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Your order has been placed successfully 🎉
        </p>

        {/* Order Memo List */}
        {orders.length > 0 && (
          <div className="text-left mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Your Order Summary</h2>
            <ul className="space-y-4">
              {orders.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg bg-gray-50 dark:bg-gray-700"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-md font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Qty: {item.quantity || 1}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-white font-medium">${item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 text-sm text-gray-500 dark:text-gray-400">
          A confirmation email has been sent. We'll notify you when your items are on the way.
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all"
          >
            Back to Home
          </Link>
          <Link
            to="/electronics"
            className="border border-blue-600 hover:bg-blue-100 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 px-6 py-2 rounded-lg transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </Motion.div>
    </div>
  );
};

export default ThankYou;
