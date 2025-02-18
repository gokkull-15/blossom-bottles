import { useState } from "react";
import { FaBox, FaCalendarAlt, FaTimesCircle } from "react-icons/fa";
import p1 from "../requirements/perfume1.png";
import p3 from "../requirements/perfume3.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Orders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "Blossom Bottle A",
      image: p1,
      deliveryDate: "Feb 25, 2025",
      cancelled: false,
    },
    {
      id: 2,
      name: "Blossom Bottle B",
      image: p3,
      deliveryDate: "Feb 27, 2025",
      cancelled: false,
    },
  ]);

  // Cancel Order
  const cancelOrder = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, cancelled: true } : order
      )
    );
  };

  return (
    <div>
      <NavBar />
      <div className="bg-gray-900 min-h-screen text-white p-6">
        {/* Page Header */}
        <h1 className="text-2xl font-bold flex items-center gap-2 pb-4 border-b border-gray-700">
          <FaBox /> Your Orders
        </h1>

        {/* Orders List */}
        {orders.length === 0 ? (
          <p className="text-center text-gray-400 mt-10 text-lg">
            No orders placed yet.
          </p>
        ) : (
          <div className="mt-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-gray-800 p-4 rounded-lg mb-4 shadow-lg"
              >
                <div className="flex items-center">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-20 h-20 rounded-lg border border-gray-700"
                  />
                  <div className="ml-4 flex-1">
                    <h2 className="text-lg font-semibold">{order.name}</h2>
                    <p className="text-yellow-400 flex items-center gap-2">
                      <FaCalendarAlt /> Delivery Date: {order.deliveryDate}
                    </p>
                  </div>
                  {order.cancelled ? (
                    <p className="text-red-400 font-bold flex items-center gap-2">
                      <FaTimesCircle /> Order Cancelled
                    </p>
                  ) : (
                    <button
                      onClick={() => cancelOrder(order.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      <FaTimesCircle /> Cancel Order
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
