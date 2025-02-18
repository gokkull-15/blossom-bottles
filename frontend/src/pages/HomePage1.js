import { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaStar,
  FaHeart,
  FaBolt,
} from "react-icons/fa";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import p1 from "../requirements/perfume1.png";
import p2 from "../requirements/perfume2.png";
import p3 from "../requirements/perfume3.png";

const allProducts = [
  { id: 1, name: "Luxury Perfume", price: "$49.99", image: p1 },
  { id: 2, name: "Elegant Scent", price: "$59.99", image: p2 },
  { id: 3, name: "Mystic Aroma", price: "$39.99", image: p3 },
  { id: 4, name: "Classic Fragrance", price: "$69.99", image: p1 },
  { id: 5, name: "Timeless Scent", price: "$79.99", image: p2 },
  { id: 6, name: "Signature Essence", price: "$89.99", image: p3 },
];

export default function HomePage1() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <NavBar />
      <div className="container mx-auto p-6">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-800 p-3 rounded-full shadow-md">
          <FaSearch className="text-gray-400 ml-3" />
          <input
            type="text"
            placeholder="Search for perfumes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 bg-transparent outline-none text-white"
          />
        </div>

        {/* All-Time Best */}
        <h2 className="text-4xl font-bold mt-8 text-center">
          🌟 All-Time Best 🌟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {allProducts.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 p-5 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover rounded-md"
                />
                <button className="absolute top-3 right-3 text-red-500 text-xl">
                  <FaHeart />
                </button>
              </div>
              <h3 className="text-lg font-semibold mt-3">{item.name}</h3>
              <p className="text-xl font-bold text-yellow-400">{item.price}</p>

              {/* Ratings */}
              <div className="flex items-center mt-2 text-yellow-300">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-500" />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <button className="flex-1 bg-yellow-500 text-black py-2 rounded-lg font-bold hover:bg-yellow-400 transition duration-300 flex items-center justify-center gap-2">
                  <FaBolt /> Buy Now
                </button>
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg font-bold hover:bg-gray-600 transition duration-300 flex items-center justify-center gap-2">
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
