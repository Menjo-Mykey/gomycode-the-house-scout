"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function HeroSection() {
  const [showLearnMore, setShowLearnMore] = useState(false);
  const handleLearnMoreClick = () => {
    setShowLearnMore(true);
    const learnMoreSection = document.getElementById("learn-more-section");
    if (learnMoreSection) {
      learnMoreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <div
        className="bg-cover bg-center text-white text-center py-20"
        style={{ backgroundImage: `url('/images/banner-background.jpg')` }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to The House Scout!</h1>
        <p className="mb-6 text-lg">
          Find your dream residence with just one click.
        </p>
        <button
          onClick={handleLearnMoreClick}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded"
        >
          Learn More
        </button>
      </div>

      {/* Learn More Section */}
      {showLearnMore && (
        <section
          id="learn-more-section"
          className="bg-gray-100 text-gray-800 p-8"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">About The House Scout</h2>
            <p className="mb-4">
              The House Scout is designed to simplify the house-hunting
              experience. Our platform connects renters and homebuyers with real
              estate agents to help them find the perfect home. With powerful
              search and filtering options, users can explore properties based
              on their preferences, like location, price, and amenities.
            </p>
            <p className="mb-4">
              Whether you are looking for a cozy apartment, a family home, or a
              place close to your workplace, The House Scout has it all. Our
              mission is to make your house-hunting journey as smooth and
              enjoyable as possible.
            </p>
            <Image
              src="/images/happy.jpg"
              alt="Features of The House Scout"
              width={1000}
              height={400}
              className="mx-auto"
            />
          </div>
        </section>
      )}
    </div>
  );
}
