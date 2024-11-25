"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IProperty } from "@/models/PropertyModel";
import { IUser } from "@/models/UserModel";


 

export default function OneBedroomApartment() {
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
          mainImage: (property?.images as string[]||[`/images/1b1.jpg`] )[0],  // Use a valid default image
          gallery:(property?.images as string[])|| [`/images/apartment1.jpg`, `/images/apartment2.jpg`],
          agent: property.owner || { name: "Unknown", whatsapp: "N/A", email: "N/A" }, // Default agent
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
              properties[i].images.length) %
            properties[i].images.length
          : currentIndex
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">4 Bedroom Apartment</h2>

      {properties.map((property, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <Image
            src={property.images[0]}
            alt={property.title || "Property"}
            width={1000}
            height={400}
            className="w-full h-auto"
          />

          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">{property.title || "Untitled Property"}</h3>
            <p><strong>Size:</strong> {property.size || "N/A"}</p>
            <p><strong>Bedrooms:</strong> {property.bedrooms || 0}</p>
            <p><strong>Parking:</strong> {property.parking || "N/A"}</p>
            <p><strong>Compound:</strong> {property.compound || "N/A"}</p>
            <p><strong>Price:</strong> {property.price || "N/A"}</p>

            <button
              onClick={() => setShowMorePhotos(showMorePhotos === index ? null : index)}
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              View the House
            </button>

            {showMorePhotos === index && (
              <div className="mt-4">
                <div className="relative w-full h-96 overflow-hidden rounded-lg">
                  <Image
                    src={property.images[activeGalleryIndex[index]]}
                    alt={`${property.title || "Property"} image`}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                  <button
                    onClick={() => changeGalleryImage(index, "prev")}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => changeGalleryImage(index, "next")}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
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

            {showAgentContact === index && property.owner && (
              <div className="mt-4 text-blue-600">
                <p><strong>Agent Name:</strong> {(property.owner as IUser).name}</p>
                <p>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href={`https://wa.me/${(property.owner as IUser).phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {(property.owner as IUser).phoneNumber}
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${(property.owner as IUser).email}`}>
                    {(property.owner as IUser).email}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
