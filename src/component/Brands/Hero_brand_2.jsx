"use client";

import React from "react";
import Button from "../Button";
import { useTheme } from '../../contexts/ThemeContext';
import Image2 from "../../assets/Image2.png"
export default function Hero_brand_2() {
  const { isDarkMode } = useTheme();
  
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${Image2})`,
    filter: isDarkMode ? 'brightness(1.2)' : 'brightness(1)',
  }}
></div>

  {/* Overlay */}
  <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/50' : 'bg-black/20'}`}></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
    <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance ${isDarkMode ? 'text-white' : 'text-gray-200'}`}>
      Elegant Designs, Timeless Beauty
    </h1>

    <p className={`text-lg sm:text-xl mb-8 max-w-2xl text-balance ${isDarkMode ? 'text-gray-300' : 'text-gray-200'}`}>
      Discover our exclusive collection of handcrafted jewelry that brings elegance and sophistication to your personal style.
    </p>

  </div>
</section>

  );
}