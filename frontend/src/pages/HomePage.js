import { Link } from "react-router-dom";
import {
  FaSignInAlt,
  FaUserPlus,
  FaShoppingCart,
  FaGift,
  FaStar,
} from "react-icons/fa";
import { GiPerfumeBottle, GiShoppingBag } from "react-icons/gi";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-center p-10">
      {/* Header */}
      <h1 className="text-6xl font-extrabold text-yellow-400 flex items-center gap-5">
        <GiPerfumeBottle className="text-7xl text-yellow-500" /> Blossom Bottles
      </h1>
      <p className="mt-5 text-2xl text-gray-300 flex items-center gap-3">
        <FaGift className="text-4xl text-yellow-400" /> Exquisite & Elegant
        Perfume Bottles Just for You
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-6">
        <Link
          to="/login"
          className="bg-yellow-600 text-gray-900 text-lg px-10 py-3 rounded-lg hover:bg-yellow-500 transition flex items-center gap-3 shadow-lg"
        >
          <FaSignInAlt className="text-3xl" /> Login
        </Link>
        <Link
          to="/signup"
          className="bg-gray-800 text-yellow-400 text-lg px-10 py-3 rounded-lg hover:bg-gray-700 transition flex items-center gap-3 shadow-lg"
        >
          <FaUserPlus className="text-3xl" /> Sign Up
        </Link>
      </div>

      {/* Additional Icons */}
      <div className="mt-10 flex gap-8 text-yellow-400 text-5xl">
        <FaShoppingCart className="hover:text-yellow-300 transition" />
        <GiShoppingBag className="hover:text-yellow-500 transition" />
        <FaGift className="hover:text-yellow-400 transition" />
        <FaStar className="hover:text-yellow-300 transition" />
      </div>
    </div>
  );
}
