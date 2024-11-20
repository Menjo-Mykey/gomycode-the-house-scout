// src/app/page.tsx

import React from "react";
import { Index } from "../components/index";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Index />
    </div>
  );
}
