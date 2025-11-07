import React, { useEffect, useState } from "react";
import Hero from "../component/Home/Hero";
import Blue_ocean from "../component/Home/Blue_ocean";
import { useTheme } from '../contexts/ThemeContext';
import InlineGallery from "../component/Home/InlineGallery";

export default function Home() {
  const { isDarkMode } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="animate-pulse">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}>
      <Hero />
      <Blue_ocean />
      <InlineGallery />
    </div>
  );
}
