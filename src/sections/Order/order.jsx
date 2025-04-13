import { useOrder } from "./OrderContextStore";

const Order = () => {
  const { orders, setOrders } = useOrder();

  // ✅ Calculate the total price correctly
  const totalPrice = orders.reduce((acc, item) => {
    return acc + (item.price || 0) * (item.quantity || 1);
  }, 0);

  // ✅ Discard an item by index
  const handleDiscard = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {orders.map((item, index) => (
              <li key={index} className="border p-4 rounded shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-20 w-20 object-cover mb-2"
                    />
                    <div className="ml-4">
                      <h2 className="font-bold">{item.title}</h2>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price}</p>
                      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDiscard(index)}
                    className="bg-red-500 text-white py-1 px-4 rounded-full hover:bg-red-600 transition-all duration-200"
                  >
                    Discard
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-xl font-semibold">
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Order;


