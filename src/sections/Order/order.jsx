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
    <div className="min-h-screen bg-gray-900 px-4 py-10 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Your Orders
        </h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders yet.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
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
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-sm text-gray-500">
                        Price: ${item.price}
                      </p>
                      <p className="text-sm font-semibold text-gray-700">
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

            <div className="mt-6 border-t pt-4 text-right">
              <p className="text-xl font-bold text-gray-800">
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



