import { useState } from "react";
import {
  FaTrash,
  FaShoppingCart,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import p1 from "../requirements/perfume1.png";
import p3 from "../requirements/perfume3.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Blossom Bottle A",
      price: 19.99,
      image: p1,
    },
    {
      id: 2,
      name: "Blossom Bottle B",
      price: 24.99,
      image: p3,
    },
  ]);

  // Remove Item from Cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <NavBar />
      <div className="bg-gray-900 min-h-screen text-white p-6">
        {/* Navbar */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaShoppingCart /> Your Cart
          </h1>
          <Link
            to="/homepage1"
            className="text-yellow-400 hover:text-yellow-500 flex items-center gap-2"
          >
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400 mt-10 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="mt-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-gray-800 p-4 rounded-lg mb-4 shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg border border-gray-700"
                />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-yellow-400 font-bold">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Cart Actions */}
        {cartItems.length > 0 && (
          <div className="mt-6 flex justify-between">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold flex items-center gap-2">
              <FaCheckCircle /> Place Order
            </button>
            <button
              onClick={() => setCartItems([])}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2"
            >
              <FaTrash /> Clear Cart
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
