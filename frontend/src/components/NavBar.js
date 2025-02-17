import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaShoppingCart,
  FaClipboardList,
  FaUser,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-red-500 p-4 text-white shadow-lg">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
        <h1 className="text-2xl font-bold">Blossom Bottles</h1>
      </div>
      {isOpen && (
        <div className="mt-4 bg-white shadow-md rounded-lg p-4 text-gray-800">
          <ul className="space-y-4">
            <li>
              <Link
                to="/homepage1"
                className="flex items-center gap-2 hover:text-purple-500"
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="flex items-center gap-2 hover:text-purple-500"
              >
                <FaShoppingCart /> Cart
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className="flex items-center gap-2 hover:text-purple-500"
              >
                <FaClipboardList /> Orders
              </Link>
            </li>
            <li>
              <Link
                to="/account"
                className="flex items-center gap-2 hover:text-purple-500"
              >
                <FaUser /> Account
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className="flex items-center gap-2 text-red-500 hover:text-red-700"
              >
                <FaSignOutAlt /> Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
