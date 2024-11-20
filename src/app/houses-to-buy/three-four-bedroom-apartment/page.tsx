import React from 'react';

export default function ThreeFourBedroomApartment() {
  const rent = "KSH 100,000 per month";
  return (
    <div>
      <h1>Three & Four Bedroom Apartments</h1>
      <p>
        Welcome to our spacious three and four-bedroom apartments. These units are designed to offer the perfect balance of luxury and comfort for families or groups.
      </p>
      <ul>
        <li>Modern kitchen with granite countertops</li>
        <li>Master bedroom with ensuite bathroom</li>
        <li>Spacious living room with a balcony</li>
        <li>24/7 security and ample parking</li>
      </ul>
      <p>The monthly rent for these apartments is {rent}.</p>
    </div>
  );
}
