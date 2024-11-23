"use client";

import Link from "next/link";
import React, { useState } from "react";

export function Header() {
  const [dropdown, setDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">The House Scout</div>
        <nav aria-label="Main Navigation">
          <div className="flex space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>

            {/* Dropdown Menus */}
            {[
              {
                title: "Houses To Buy",
                links: [
                  {
                    label: "1 Bedroom Apartments",
                    href: "/houses-to-buy/one-bedroom-apartment",
                  },
                  {
                    label: "2 Bedroom Apartments",
                    href: "/houses-to-buy/two-bedroom-apartment",
                  },
                  {
                    label: "3 & 4 Bedroom Apartments",
                    href: "/houses-to-buy/three-four-bedroom-apartment",
                  },

                  {
                    label: "Studio Apartments",
                    href: "/houses-to-buy/studio-apartments",
                  },
                  {
                    label: "Own Compound Mansionettes",
                    href: "/houses-to-buy/own-compound-mansionettes",
                  },
                ],
              },
              {
                title: "Houses To Rent",
                links: [
                  {
                    label: "1 Bedroom Apartments",
                    href: "/houses-to-rent/one-bedroom-apartment",
                  },
                  {
                    label: "2 Bedroom Apartments",
                    href: "/houses-to-rent/two-bedroom-apartment",
                  },
                  {
                    label: "3 & 4 Bedroom Apartments",
                    href: "/houses-to-rent/three-four-bedroom-apartment",
                  },
                  {
                    label: "Studio Apartments",
                    href: "/houses-to-rent/studio-apartments",
                  },
                  {
                    label: "Own Compound Mansionettes",
                    href: "/houses-to-rent/own-compound-mansionettes",
                  },
                ],
              },
              {
                title: "Agents",
                links: [
                  { label: "Westlands", href: "/agents/westlands" },
                  { label: "Ruiru", href: "/agents/ruiru" },
                  { label: "Karen", href: "/agents/karen" },
                  { label: "Kitengela", href: "/agents/kitengela" },
                  { label: "Nakuru", href: "/agents/nakuru" },
                ],
              },
            ].map(({ title, links }) => (
              <div key={title} className="relative">
                <button
                  onClick={() => toggleDropdown(title)}
                  className="hover:underline"
                >
                  {title}
                </button>
                {dropdown === title && (
                  <div className="absolute bg-white text-blue-600 rounded shadow-md mt-2 p-2">
                    {links.map(({ label, href }) => (
                      <Link
                        key={label}
                        href={href}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
