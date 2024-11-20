// src/components/index.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";

const featuredProperties = [
  {
    title: "4 Bedroom Mansionette in Nakuru",
    size: "700 square meters",
    bedrooms: "All ensuite, each with a bathtub",
    parking: "4 spaces",
    compound: "Own compound",
    price: "12,000,000 KSH",
    mainImage: "/images/beach-house1.jpg",
    gallery: [
      "/images/beach-house2.jpg",
      "/images/interior1.jpg",
      "/images/interior2.jpg",
      "/images/interior3.jpg",
    ],
    agent: {
      name: "Ashley Masiga",
      whatsapp: "254748410270",
      email: "ashleymasiga17@gmail.com",
    },
  },
  {
    title: "3 Bedroom Apartment in Ruiru",
    size: "300 square meters",
    bedrooms: "3 bedrooms, 2 bathrooms",
    parking: "2 spaces",
    compound: "Shared compound",
    price: "8,500,000 KSH",
    mainImage: "/images/apartment1.jpg",
    gallery: [
      "/images/apartment2.jpg",
      "/images/apartment3.jpg",
      "/images/apartment4.jpg",
    ],
    agent: {
      name: "Navas Herbert",
      whatsapp: "254704315435",
      email: "navashub@gmail.com",
    },
  },
  {
    title: "6 Bedroom Villa in Karen",
    size: "1200 square meters",
    bedrooms: "6 bedrooms, all ensuite",
    parking: "6 spaces",
    compound: "Private compound",
    price: "44,000,000 KSH",
    mainImage: "/images/villa1.jpg",
    gallery: [
      "/images/villa2.jpg",
      "/images/villa3.jpg",
      "/images/villa4.jpg",
    ],
    agent: {
      name: "Alex Mwangi",
      whatsapp: "254741140835",
      email: "toshmosh588@gmail.com",
    },
  },
  {
    title: "2 Bedroom Apartment in Westlands",
    size: "150 square meters",
    bedrooms: "2 bedrooms, 1 bathroom",
    parking: "1 space",
    compound: "Shared compound",
    price: "5,000,000 KSH",
    mainImage: "/images/westy1.jpg",
    gallery: [
      "/images/westy2.jpg",
      "/images/westy3.jpg",
      "/images/westy4.jpg",
    ],
    agent: {
      name: "sharmake Ibrahim",
      whatsapp: "254715623803",
      email: "ulemsee93@gmail.com",
    },
  },
  {
    title: "1 bedroom apartment",
    size: "400 square meters",
    bedrooms: "1 bedroom,ensuite",
    parking: "3 spaces",
    compound: "shared compound",
    price: "3000,000 KSH",
    mainImage: "/images/1b4.jpg",
    gallery: [
      "/images/1b1.jpg",
      "/images/1b2.jpg",
      "/images/1b3.jpg",
    ],
    agent: {
      name: "Daniel Ouma",
      whatsapp: "254773851520",
      email: "kefajohnson35@gmail.com",
    },
  },
];

export function Index() {
  const [currentGallery, setCurrentGallery] = useState<number[]>(Array(featuredProperties.length).fill(0));
  const [showMorePhotos, setShowMorePhotos] = useState<number | null>(null);
  const [showAgentContact, setShowAgentContact] = useState<number | null>(null);

  const handleNextImage = (index: number) => {
    setCurrentGallery((prev) => {
      const newGallery = [...prev];
      newGallery[index] = (newGallery[index] + 1) % featuredProperties[index].gallery.length;
      return newGallery;
    });
  };

  const handlePreviousImage = (index: number) => {
    setCurrentGallery((prev) => {
      const newGallery = [...prev];
      newGallery[index] = (newGallery[index] - 1 + featuredProperties[index].gallery.length) % featuredProperties[index].gallery.length;
      return newGallery;
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Featured Properties</h2>

      {featuredProperties.map((property, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <Image
            src={property.mainImage}
            alt={property.title}
            width={1000}
            height={400}
            className="w-full h-auto"
          />

          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">{property.title}</h3>
            <p><strong>Size:</strong> {property.size}</p>
            <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
            <p><strong>Parking:</strong> {property.parking}</p>
            <p><strong>Compound:</strong> {property.compound}</p>
            <p><strong>Price:</strong> {property.price}</p>

            <button
              onClick={() => setShowMorePhotos(index === showMorePhotos ? null : index)}
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              View the House
            </button>

            {showMorePhotos === index && (
              <div className="mt-4">
                <div className="relative w-full h-96 overflow-hidden rounded-lg">
                  <Image
                    src={property.gallery[currentGallery[index]]}
                    alt={`${property.title} image`}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                  <button
                    onClick={() => handlePreviousImage(index)}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => handleNextImage(index)}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                  >
                    →
                  </button>
                </div>

                <button
                  onClick={() => setShowAgentContact(index === showAgentContact ? null : index)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Book Viewing with Agent
                </button>
              </div>
            )}

            {showAgentContact === index && (
              <div className="mt-4 text-blue-600">
                <p><strong>Agent Name:</strong> {property.agent.name}</p>
                <p><strong>WhatsApp:</strong> <a href={`https://wa.me/${property.agent.whatsapp}`} target="_blank" rel="noopener noreferrer">{property.agent.whatsapp}</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${property.agent.email}`}>{property.agent.email}</a></p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Index;
