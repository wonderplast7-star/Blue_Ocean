import React from "react";
import { useTheme } from '../../contexts/ThemeContext';
import MotionSection from "../../MotionSection.jsx";

export default function Hero_about_1() {
  const { isDarkMode } = useTheme();
  const title = "Mindful Living, Beautifully Designed.";
  const description =
    "Discover sustainable home goods that bring tranquility and style to your personal space.";

  // Correct YouTube embed URL with autoplay, mute, loop, no controls, and playlist for loop
  const youtubeEmbedUrl =
    "https://www.youtube.com/embed/w5ODXlwt0tU?autoplay=1&mute=1&loop=1&controls=0&playlist=w5ODXlwt0tU&modestbranding=1&rel=0&showinfo=0";

  return (
    <MotionSection
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      animationType="fadeUp"
      duration={0.8}
    >
      {/* YouTube Video Iframe as background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <iframe
          className="w-full h-full object-cover absolute inset-0"
          src={youtubeEmbedUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
          style={{ pointerEvents: "none" }} // disables user interaction
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/70' : 'bg-black/50'}`}></div>

      {/* Content */}
      { <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance ${isDarkMode ? 'text-white' : 'text-gray-100'}`}>
          {title}
        </h1>
        <p className={`text-lg sm:text-xl max-w-2xl text-balance leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-300'}`}>
          {description}
        </p>
      </div> }
    </MotionSection>
  );
}
