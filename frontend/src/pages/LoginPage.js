import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserCircle } from "react-icons/fa";
import { GiPadlock, GiSave } from "react-icons/gi";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/homepage1");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-2xl w-1/3">
        <h2 className="text-3xl font-extrabold text-center text-yellow-400 mb-6">
          Login <FaUserCircle className="inline text-yellow-500 text-4xl" />
        </h2>
        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-6 flex items-center border-b border-gray-600 py-3">
            <FaEnvelope className="text-yellow-400 mr-3 text-2xl" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-white outline-none"
              required
            />
          </div>
          <div className="mb-6 flex items-center border-b border-gray-600 py-3">
            <FaLock className="text-yellow-400 mr-3 text-2xl" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-white outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-gray-900 py-3 rounded-lg hover:bg-yellow-500 transition duration-300 flex items-center justify-center gap-2"
          >
            <GiPadlock className="text-2xl" /> Login
          </button>
          <div className="mt-6 text-center text-gray-400">
            <p>Or</p>
            <button
              onClick={() => navigate("/signup")}
              className="text-yellow-400 hover:text-yellow-300 transition"
            >
              Create an Account <GiSave className="inline-block ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
