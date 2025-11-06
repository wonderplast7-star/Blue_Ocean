import React from "react";
import { useTheme } from '../../contexts/ThemeContext';
import MotionSection from "../../MotionSection.jsx";
import { motion } from "framer-motion";

const Banner = ({
  backgroundImage,
  title,
  description,
  overlayBg,
  showButton = true,
  buttonText = "Discover More",
  buttonLink = "#"
}) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="relative w-full h-screen min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image - Simple Fade In */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Simple Gradient Overlay */}
      <div className={`absolute inset-0 ${overlayBg || (isDarkMode ? "bg-gradient-to-br from-black/70 via-black/60 to-black/50" : "bg-gradient-to-br from-black/50 via-black/40 to-black/30")}`} />

      {/* Minimal Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Single subtle accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full w-full">
        <div className="max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-10">
          <MotionSection
            className="w-full max-w-4xl"
            animationType="fadeUp"
            duration={0.6}
            delay={0.2}
          >
            {/* Badge - Simple */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm bg-white/10 text-white border border-white/20">
                ✨ Welcome
              </span>
            </motion.div>

            {/* Title - Clean Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
            >
              {title}
              {/* Simple underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "25%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4"
              />
            </motion.h1>

            {/* Description - Simple Fade */}
            {description && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed max-w-3xl"
              >
                {description}
              </motion.p>
            )}

            {/* Buttons - Minimal */}
            

            {/* Feature Tags - Simplified */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              {['Premium Quality', 'Fast Delivery', 'Trusted Brand'].map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 backdrop-blur-sm bg-white/5 border border-white/20 text-white text-xs sm:text-sm font-medium rounded-full"
                >
                  ✓ {tag}
                </span>
              ))}
            </motion.div>
          </MotionSection>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      {/* Simple Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs font-medium tracking-wider">SCROLL</span>
          <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
