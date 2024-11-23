"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface IAgent {
  name: string;
  whatsapp: string;
  email: string;
}

interface IProperty {
  title: string;
  size: string;
  bedrooms: number;
  parking: string;
  bathrooms: number;
  compound: string;
  price: number;
  mainImage: string;
  gallery: string[];
  agent?: IAgent; // Mark agent as optional
}

export default function OwnCompoundMansionettes() {
  const [properties, setProperties] = useState<IProperty[]>([]);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number[]>([]);
  const [showMorePhotos, setShowMorePhotos] = useState<number | null>(null);
  const [showAgentContact, setShowAgentContact] = useState<number | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("/api/properties?bedrooms=4");
        if (!response.ok) throw new Error(`Fetch failed with status ${response.status}`);

        const data = await response.json();

        // Ensure valid data structure and provide defaults
        const updatedData = data.map((property: Partial<IProperty>) => ({
          ...property,
          mainImage: property.mainImage || `/images/villa1.jpg`, // Use a valid default image
          gallery: property.gallery || [`/images/villa2.jpg`, `/images/villa3.jpg`,`/images/villa4.jpg`],
          agent: property.agent || { name: "Unknown", whatsapp: "N/A", email: "N/A" }, // Default agent
        }));

        setProperties(updatedData);
        setActiveGalleryIndex(new Array(updatedData.length).fill(0));
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const changeGalleryImage = (propertyIndex: number, direction: "next" | "prev") => {
    setActiveGalleryIndex((prev) =>
      prev.map((currentIndex, i) =>
        i === propertyIndex
          ? (currentIndex +
              (direction === "next" ? 1 : -1) +
              properties[i].gallery.length) %
            properties[i].gallery.length
          : currentIndex
      )
    );
  };

 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl sm:text-4xl font-bold mb-6">Own Compound Mansionette</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {properties.map((property, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image
          src={property.mainImage}
          alt={property.title || "Property"}
          width={1000}
          height={600}
          layout="responsive"
          className="rounded-lg"
        />

        <div className="p-4">
          <h3 className="text-lg sm:text-xl font-bold mb-2">{property.title || "Untitled Property"}</h3>
          <p className="text-sm sm:text-base"><strong>Size:</strong> {property.size || "N/A"}</p>
          <p className="text-sm sm:text-base"><strong>Bedrooms:</strong> {property.bedrooms || 0}</p>
          <p className="text-sm sm:text-base"><strong>Parking:</strong> {property.parking || "N/A"}</p>
          <p className="text-sm sm:text-base"><strong>Compound:</strong> {property.compound || "N/A"}</p>
          <p className="text-sm sm:text-base"><strong>Price:</strong> {property.price || "N/A"}</p>

          <button
            onClick={() => setShowMorePhotos(showMorePhotos === index ? null : index)}
            className="mt-4 bg-orange-500 text-white px-3 py-2 rounded text-sm sm:text-base hover:bg-orange-600 w-full sm:w-auto"
          >
            View the House
          </button>

          {showMorePhotos === index && (
            <div className="mt-4">
              <div className="relative w-full h-64 sm:h-96 overflow-hidden rounded-lg">
                <Image
                  src={property.gallery[activeGalleryIndex[index]]}
                  alt={`${property.title || "Property"} image`}
                  layout="fill"
                  objectFit="cover"
                />
                <button
                  onClick={() => changeGalleryImage(index, "prev")}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 sm:left-4"
                >
                  ←
                </button>
                <button
                  onClick={() => changeGalleryImage(index, "next")}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 sm:right-4"
                >
                  →
                </button>
              </div>

              <button
                onClick={() => setShowAgentContact(showAgentContact === index ? null : index)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Book Viewing with Agent
              </button>
            </div>
          )}

          {showAgentContact === index && property.agent && (
            <div className="mt-4 text-blue-600">
              <p><strong>Agent Name:</strong> {property.agent.name}</p>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href={`https://wa.me/${property.agent.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {property.agent.whatsapp}
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${property.agent.email}`}>
                  {property.agent.email}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

}
