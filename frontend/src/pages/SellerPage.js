import { useState } from "react";
import { FaBox, FaDollarSign, FaImage, FaUpload } from "react-icons/fa";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function SellerPage() {
  const [product, setProduct] = useState({ name: "", price: "", image: null });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.image) {
      alert("Please select an image!");
      return;
    }
    alert("Product Submitted!");
    console.log(product);
  };

  return (
    <div>
      <NavBar />
      <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
        {/* Card Container */}
        <div className="bg-gray-800 p-12 rounded-2xl shadow-lg text-white w-[550px] h-[500px] text-center">
          {/* Title */}
          <h1 className="text-3xl font-bold text-purple-400 mb-6">
            Add a Product
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Product Name */}
            <div className="flex items-center bg-gray-700 p-4 rounded-lg">
              <FaBox className="text-purple-400 mr-3 text-xl" />
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="Product Name"
                required
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-lg"
              />
            </div>

            {/* Price */}
            <div className="flex items-center bg-gray-700 p-4 rounded-lg">
              <FaDollarSign className="text-green-400 mr-3 text-xl" />
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Price"
                required
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-lg"
              />
            </div>

            {/* Image Upload */}
            <label className="flex items-center bg-gray-700 p-4 rounded-lg cursor-pointer">
              <FaImage className="text-blue-400 mr-3 text-xl" />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
                className="hidden"
              />
              <span className="text-white text-lg">Choose an Image</span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-lg text-lg flex items-center justify-center gap-2 w-full"
            >
              <FaUpload /> Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
