"use client";
import React from 'react';
import Image from 'next/image';

export default function TwoBedroomApartment() {
  // Apartment details as an object
  const apartmentDetails = {
    title: "2 Bedroom Apartment in Westlands",
    size: "150 square meters",
    bedrooms: "2 bedrooms, 1 bathroom",
    parking: "1 space",
    compound: "Shared compound",
    price: "5,000,000 KSH",
    mainImage: "/images/westy1.jpg", // Ensure these images are in the public/images folder
    gallery: [
      "/images/westy2.jpg",
      "/images/westy3.jpg",
      "/images/westy4.jpg",
    ],
  };

  return (
    <div>
      <h1>{apartmentDetails.title}</h1>
      <Image
        src={apartmentDetails.mainImage}
        alt="Main view of the apartment"
        width={600} // Adjust as needed
        height={400} // Adjust as needed
      />
      <p><strong>Size:</strong> {apartmentDetails.size}</p>
      <p><strong>Bedrooms:</strong> {apartmentDetails.bedrooms}</p>
      <p><strong>Parking:</strong> {apartmentDetails.parking}</p>
      <p><strong>Compound:</strong> {apartmentDetails.compound}</p>
      <p><strong>Price:</strong> {apartmentDetails.price}</p>
      
      <h2>Gallery</h2>
      <div style={{ display: "flex", gap: "10px", overflowX: "scroll" }}>
        {apartmentDetails.gallery.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Gallery image ${index + 1}`}
            width={150} // Adjust as needed
            height={100} // Adjust as needed
          />
        ))}
      </div>
    </div>
  );
}
