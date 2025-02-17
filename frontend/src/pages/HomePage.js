import { Link } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { GiPerfumeBottle } from "react-icons/gi";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-300 to-red-400 text-center p-6">
      <h1 className="text-5xl font-bold text-white flex items-center gap-3">
        <GiPerfumeBottle /> Blossom Bottles
      </h1>
      <p className="mt-4 text-lg text-white">
        Exquisite and Elegant Perfume Bottles Just for You
      </p>
      <div className="mt-6 flex gap-4">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-2"
        >
          <FaSignInAlt /> Login
        </Link>
        <Link
          to="/signup"
          className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition flex items-center gap-2"
        >
          <FaUserPlus /> Sign Up
        </Link>
      </div>
    </div>
  );
}
