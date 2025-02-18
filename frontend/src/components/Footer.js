import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-6">
      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mb-3">
        <a href="facebook.com" className="text-purple-400 hover:text-purple-500 text-2xl">
          <FaFacebook />
        </a>
        <a href="instagram.com" className="text-purple-400 hover:text-purple-500 text-2xl">
          <FaInstagram />
        </a>
        <a href="twitter.com" className="text-purple-400 hover:text-purple-500 text-2xl">
          <FaTwitter />
        </a>
        <a href="linkedin.com" className="text-purple-400 hover:text-purple-500 text-2xl">
          <FaLinkedin />
        </a>
      </div>

      {/* Contact Info */}
      <div className="flex justify-center gap-4 text-lg mb-4">
        <p className="flex items-center gap-2">
          <FaPhone className="text-green-400" /> +123 456 7890
        </p>
        <p className="flex items-center gap-2">
          <FaEnvelope className="text-blue-400" /> support@blossombottles.com
        </p>
      </div>

      {/* Copyright */}
      <p className="text-gray-400">
        &copy; 2024 Blossom Bottles. All rights reserved.
      </p>
    </footer>
  );
}
