"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import {  FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; // Import additional icons

export function Footer() {
  const [showAdvertiseDropdown, setShowAdvertiseDropdown] = useState(false);
  const [showAgentDropdown, setShowAgentDropdown] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const toggleAdvertiseDropdown = () => {
    setShowAdvertiseDropdown(!showAdvertiseDropdown);
  };

  const toggleAgentDropdown = () => {
    setShowAgentDropdown(!showAgentDropdown);
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  const handleCloseSignUpForm = () => {
    setShowSignUpForm(false);
  };

  return (
    <footer className="bg-gray-800 text-white p-4">
      {/* Footer Navigation */}
      <nav aria-label="Footer Navigation" className="mb-4">
        <ul className="flex justify-center space-x-6">
          {/* Advertise with us */}
          <li className="relative">
            <button
              onClick={toggleAdvertiseDropdown}
              className="flex items-center space-x-2 cursor-pointer hover:underline"
            >
              <span>Advertise with us</span>
            </button>
            {showAdvertiseDropdown && (
              <div className="absolute bg-white text-blue-600 rounded shadow-md mt-2 p-2">
                <Link href="https://wa.me/254745322495" target="_blank" className="block px-4 py-2 hover:bg-gray-200">
                  WhatsApp
                </Link>
                <Link href="https://instagram.com/Menjo_Mykey" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-200">
                  Instagram
                </Link>
                <Link href="mailto:mykeytech20@gmail.com" className="block px-4 py-2 hover:bg-gray-200">
                  Email
                </Link>
              </div>
            )}
          </li>

          {/* Become an Agent */}
          <li className="relative">
            <button
              onClick={handleSignUpClick}
              className="flex items-center space-x-2 cursor-pointer hover:underline"
            >
              <span>Become an Agent</span>
            </button>
            {showSignUpForm && (
              <div className="absolute bg-white text-blue-600 rounded shadow-md mt-2 p-4 w-72">
                <h3 className="text-xl font-bold mb-4">Sign Up as an Agent</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border rounded"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contact" className="block text-gray-700">Contact</label>
                    <input
                      type="text"
                      id="contact"
                      className="w-full p-2 border rounded"
                      placeholder="Enter your contact"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700">Location</label>
                    <input
                      type="text"
                      id="location"
                      className="w-full p-2 border rounded"
                      placeholder="Enter your location"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border rounded"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-bold"
                  >
                    Sign Up
                  </button>
                </form>
                <button
                  type="button"
                  onClick={handleCloseSignUpForm}
                  className="mt-2 w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded font-bold"
                >
                  Cancel
                </button>
              </div>
            )}
          </li>

          {/* Contact Us */}
          <li className="relative">
            <button
              onClick={toggleAgentDropdown}
              className="flex items-center space-x-2 cursor-pointer hover:underline"
            >
              <span>Contact Us</span>
            </button>
            {showAgentDropdown && (
              <div className="absolute bg-white text-blue-600 rounded shadow-md mt-2 p-2">
                <Link href="https://wa.me/254745322495" target="_blank" className="block px-4 py-2 hover:bg-gray-200">
                  WhatsApp
                </Link>
                <Link href="https://instagram.com/Menjo_Mykey" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-200">
                  Instagram
                </Link>
                <Link href="mailto:mykeytech20@gmail.com" className="block px-4 py-2 hover:bg-gray-200">
                  Email
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Social Media and Contact Icons */}
      <div className="flex justify-center space-x-6 mt-4">
        <Link href="https://wa.me/254745322495" target="_blank" aria-label="WhatsApp" className="text-green-500 hover:text-gray-400">
          <FaWhatsapp size={24} />
        </Link>
        <Link href="https://instagram.com/Menjo_Mykey" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-gray-400">
          <FaInstagram size={24} />
        </Link>
        <Link href="mailto:mykeytech20@gmail.com" aria-label="Email" className="text-white hover:text-gray-400">
          <FaEnvelope size={24} />
        </Link>
      </div>

      {/* Footer Text Content */}
      <div className="text-center mt-6 text-gray-400">
        <p className="mb-2">&copy; 2024 The House Scout. All Rights Reserved.</p>
        <p>Designed by MyKeyTech</p>
      </div>
    </footer>
  );
}
