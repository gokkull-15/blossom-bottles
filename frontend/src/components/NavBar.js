import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaShoppingCart,
  FaClipboardList,
  FaUser,
  FaSignOutAlt,
  FaHome
} from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-900 p-4 text-white shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none hover:text-yellow-400 transition"
          >
            <FaBars />
          </button>
          <h1 className="text-2xl font-bold">Blossom Bottles</h1>
        </div>
      </nav>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Pop-up (Now Always in the Front) */}
      <div
        className={`fixed left-0 top-0 h-full bg-gray-800 text-white shadow-2xl w-72 p-6 transform transition-transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition"
        >
          ✖
        </button>

        {/* Sidebar Links with More Icons */}
        <ul className="space-y-6 mt-8">
          <li>
            <Link
              to="/homepage1"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <FaShoppingCart /> Cart
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <FaClipboardList /> Orders
            </Link>
          </li>
          <li>
            <Link
              to="/account"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <FaUser /> Account
            </Link>
          </li>
          <li>
            <Link
              to="/seller"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <FaSignOutAlt /> Seller
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-3 text-red-400 hover:text-red-600 transition"
            >
              <FaSignOutAlt /> Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Page Content */}
      <div className="mt-16">{/* Your page content goes here */}</div>
    </div>
  );
}
