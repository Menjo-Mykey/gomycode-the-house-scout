"use client";

import Link from 'next/link';
import React, { useState } from 'react';

export function Header() {
  
  const [showHousesToBuyDropdown, setShowHousesToBuyDropdown] = useState(false);
  const [showHousesToRentDropdown, setShowHousesToRentDropdown] = useState(false);
  const [showAgentsDropdown, setShowAgentsDropdown] = useState(false);

 

  const handleHousesToBuyClick = () => {
    setShowHousesToBuyDropdown(!showHousesToBuyDropdown);
  };

  const handleHousesToRentClick = () => {
    setShowHousesToRentDropdown(!showHousesToRentDropdown);
  };

  const handleAgentsClick = () => {
    setShowAgentsDropdown(!showAgentsDropdown);
  };

  return (
    <>
      <header id="header-section" className="bg-blue-600 text-white">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl font-bold">The House Scout</div>
          <nav aria-label="Main Navigation">
            <div className="flex space-x-4">
              <Link href="/" className="hover:underline cursor-pointer">
                Home
              </Link>

              {/* Houses To Buy Dropdown */}
              <div className="relative">
                <button onClick={handleHousesToBuyClick} className="hover:underline cursor-pointer">
                  Houses To Buy
                </button>
                {showHousesToBuyDropdown && (
                  <div className="absolute bg-white text-blue-600 rounded shadow-md mt-2 p-2">
                    <Link href="/houses-to-buy/one-bedroom-apartment" className="block px-4 py-2 hover:bg-gray-200">
                      1 Bedroom Apartments
                    </Link>
                    <Link href="/houses-to-buy/two-bedroom-apartment" className="block px-4 py-2 hover:bg-gray-200">
                      2 Bedroom Apartments
                    </Link>
                    <Link href="/houses-to-buy/three-four-bedroom-apartment" className="block px-4 py-2 hover:bg-gray-200">
                      3 & 4 Bedroom Apartments
                    </Link>
                    <Link href="/houses-to-buy/studio-apartments" className="block px-4 py-2 hover:bg-gray-200">
                      Studio Apartments
                    </Link>
                    <Link href="/houses-to-buy/own-compound-mansionettes" className="block px-4 py-2 hover:bg-gray-200">
                      Own Compound Mansionettes
                    </Link>
                  </div>
                )}
              </div>

              {/* Houses To Rent Dropdown */}
              <div className="relative">
                <button onClick={handleHousesToRentClick} className="hover:underline cursor-pointer">
                  Houses To Rent
                </button>
                {showHousesToRentDropdown && (
                  <div className="absolute bg-white text-blue-600 rounded shadow-md mt-2 p-2">
                    <Link href="/houses-to-rent/one-bedroom-apartment" className="block px-4 py-2 hover:bg-gray-200">
                      1 Bedroom Apartments
                    </Link>
                    <Link href="/houses-to-rent/two-bedroom-apartment" className="block px-4 py-2 hover:bg-gray-200">
                      2 Bedroom Apartments
                    </Link>
                    <Link href="/houses-to-rent/three-four-bedroom-apartment" className="block px-4 py-2 hover:bg-gray-200">
                      3 & 4 Bedroom Apartments
                    </Link>
                    <Link href="/houses-to-rent/studio-apartments" className="block px-4 py-2 hover:bg-gray-200">
                      Studio Apartments
                    </Link>
                    <Link href="/houses-to-rent/own-compound-mansionettes" className="block px-4 py-2 hover:bg-gray-200">
                      Own Compound Mansionettes
                    </Link>
                  </div>
                )}
              </div>

              {/* Agents Dropdown */}
              <div className="relative">
                <button onClick={handleAgentsClick} className="hover:underline cursor-pointer">
                  Agents
                </button>
                {showAgentsDropdown && (
                  <div className="absolute bg-white text-blue-600 rounded shadow-md mt-2 p-2">
                    <Link href="/agents/westlands" className="block px-4 py-2 hover:bg-gray-200">
                      Westlands
                    </Link>
                    <Link href="/agents/ruiru" className="block px-4 py-2 hover:bg-gray-200">
                      Ruiru
                    </Link>
                    <Link href="/agents/karen" className="block px-4 py-2 hover:bg-gray-200">
                      Karen
                    </Link>
                    <Link href="/agents/kitengela" className="block px-4 py-2 hover:bg-gray-200">
                      Kitengela
                    </Link>
                    <Link href="/agents/nakuru" className="block px-4 py-2 hover:bg-gray-200">
                      Nakuru
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>

        
      </header>

    </>
  );
}

export default Header;
