import { useOrder } from "./OrderContextStore";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { orders, setOrders } = useOrder();
  const navigate = useNavigate();

  const totalPrice = orders.reduce((acc, item) => {
    return acc + (item.price || 0) * (item.quantity || 1);
  }, 0);

  const handleDiscard = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-10 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Step 1 of 3</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Order Summary</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: "33%" }}></div>
          </div>
        </div>

        {/* Order Content */}
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Your Orders
        </h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No orders yet.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {orders.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between py-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-24 w-24 object-cover rounded border"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Price: ${item.price}
                      </p>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDiscard(index)}
                    className="mt-4 md:mt-0 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
                  >
                    Discard
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4 text-right">
              <p className="text-xl font-bold text-gray-800 dark:text-white">
                Total Price: ${totalPrice.toFixed(2)}
              </p>
              <button
                onClick={() => navigate("/checkout")}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Order;





