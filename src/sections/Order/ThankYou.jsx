import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="container mx-auto py-20 px-6 text-center max-w-2xl">
      <div className="flex flex-col items-center gap-4">
        <CheckCircle className="text-green-600 w-20 h-20 mb-4" />
        <h1 className="text-4xl font-bold text-green-700">Thank You!</h1>
        <p className="text-lg text-gray-600">
          Your order has been placed successfully 🎉
        </p>

        <div className="border-t mt-8 pt-6 text-sm text-gray-500 w-full">
          <p>
            A confirmation email has been sent to you. We’ll notify you once
            your items are on the way.
          </p>
        </div>

        <div className="mt-10 flex gap-4">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Back to Home
          </Link>
          <Link
            to="/electronics"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
