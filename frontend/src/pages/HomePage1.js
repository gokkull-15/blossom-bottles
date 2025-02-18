
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import p2 from "../requirements/perfume2.png"
import p1 from "../requirements/perfume1.png"

const latestOffers = [
  { id: 1, name: "Luxury Perfume", price: "$49.99", image: {p2} },
  { id: 2, name: "Elegant Scent", price: "$59.99", image: {p2} },
  { id: 3, name: "Mystic Aroma", price: "$39.99", image: {p2} },
];

const bestSellers = [
  {
    id: 1,
    name: "Classic Fragrance",
    price: "$69.99",
    image: "../requirements/perfume1.png",
  },
  { id: 2, name: "Timeless Scent", price: "$79.99", image: "../requirements/perfume3.png" },
  {
    id: 3,
    name: "Signature Essence",
    price: "$89.99",
    image: "../requirements/perfume2.png",
  },
];

export default function HomePage1() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gradient-to-r from-pink-300 to-purple-400 min-h-screen">
      <NavBar />
      <div className="container mx-auto p-6">
        <div className="flex items-center bg-white p-2 rounded-full shadow-md">
          <FaSearch className="text-gray-500 ml-2" />
          <input
            type="text"
            placeholder="Search for perfumes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 outline-none rounded-full"
          />
        </div>

        <h2 className="text-3xl font-bold mt-8 text-white">Latest Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {latestOffers.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={p2}
                alt={item.name}
                className="w-full h-50 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-xl font-bold text-purple-500">{item.price}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-8 text-white">
          All-Time Bestsellers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {bestSellers.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={p1}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-xl font-bold text-purple-500">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
