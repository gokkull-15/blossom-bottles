import {
  FaUserCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClipboardList,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function AccountPage() {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Blossom Street, NY, USA",
  };

  return (
    <div>
      <NavBar />
      <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
        {/* Card Container */}
        <div className="bg-gray-800 p-10 rounded-xl shadow-lg text-white w-[450px] h-[500px] text-center">
          {/* My Account Title */}
          <h1 className="text-2xl font-bold text-purple-400 mb-4">
            My Account
          </h1>

          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <FaUserCircle className="text-7xl text-purple-400 mb-4" />
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-400 flex items-center gap-2 justify-center">
              <FaEnvelope /> {user.email}
            </p>
            <p className="text-gray-400 flex items-center gap-2 justify-center">
              <FaMapMarkerAlt /> {user.address}
            </p>
          </div>

          {/* Buttons Section */}
          <div className="mt-6 space-y-4">
            <Link
              to="/orders"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-lg flex items-center justify-center gap-2"
            >
              <FaClipboardList /> Orders
            </Link>

            <Link
              to="/cart"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg flex items-center justify-center gap-2"
            >
              <FaShoppingCart /> Cart
            </Link>

            <Link
              to="/"
              className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-lg text-lg flex items-center justify-center gap-2"
            >
              <FaSignOutAlt /> Logout
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
