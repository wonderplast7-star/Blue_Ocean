import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

// Import your local images
import Fur1 from "../../assets/fur1.jpg";
import Fur2 from "../../assets/fur2.jpg";
import Fur3 from "../../assets/fur3.jpg";
import Fur4 from "../../assets/fur4.jpg";

// Import slick-carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const { isDarkMode } = useTheme();
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: Fur1,
      title: "Premium Furniture Collection",
      description: "Discover elegance in every piece",
      alt: "Furniture 1"
    },
    {
      image: Fur2,
      title: "Modern Living Spaces",
      description: "Transform your home with style",
      alt: "Furniture 2"
    },
    {
      image: Fur3,
      title: "Comfort Meets Design",
      description: "Experience luxury daily",
      alt: "Furniture 3"
    },
    {
      image: Fur4,
      title: "Timeless Craftsmanship",
      description: "Quality that lasts generations",
      alt: "Furniture 4"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: dots => (
      <div style={{ bottom: "30px" }}>
        <ul style={{ margin: "0", padding: "0", display: "flex", justifyContent: "center", gap: "12px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        className={`custom-dot ${i === currentSlide ? 'active' : ''}`}
        style={{
          width: i === currentSlide ? "32px" : "12px",
          height: "12px",
          borderRadius: "6px",
          background: i === currentSlide 
            ? isDarkMode ? "linear-gradient(90deg, #60A5FA, #3B82F6)" : "linear-gradient(90deg, #3B82F6, #2563EB)"
            : isDarkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
          cursor: "pointer"
        }}
      />
    )
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className={`relative w-full overflow-hidden ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute top-0 left-0 w-1/2 h-1/2 rounded-full blur-3xl opacity-20 ${
          isDarkMode ? 'bg-blue-600' : 'bg-blue-400'
        }`}></div>
        <div className={`absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full blur-3xl opacity-20 ${
          isDarkMode ? 'bg-purple-600' : 'bg-purple-400'
        }`}></div>
      </div>

      {/* Full Width Slider Container */}
      <div className="relative z-10 w-full">
        {/* Slider Container with Full Width */}
        <div className={`relative w-full overflow-hidden ${
          isDarkMode 
            ? 'bg-gray-800 shadow-blue-500/10' 
            : 'bg-white shadow-gray-400/20'
        }`}>
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-t-4 border-l-4 border-blue-500 z-10 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 border-b-4 border-r-4 border-blue-500 z-10 opacity-50"></div>

          {/* Previous Button */}
          <motion.button
            onClick={goToPrev}
            className={`absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 
              w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center
              transition-all duration-300 backdrop-blur-md
              ${isDarkMode 
                ? 'bg-gray-900/80 hover:bg-gray-800 border border-gray-700 text-white' 
                : 'bg-white/80 hover:bg-white border border-gray-200 text-gray-900'
              } shadow-lg hover:shadow-xl group`}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            onClick={goToNext}
            className={`absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 
              w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center
              transition-all duration-300 backdrop-blur-md
              ${isDarkMode 
                ? 'bg-gray-900/80 hover:bg-gray-800 border border-gray-700 text-white' 
                : 'bg-white/80 hover:bg-white border border-gray-200 text-gray-900'
              } shadow-lg hover:shadow-xl group`}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[700px]">
                  {/* Image */}
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <AnimatePresence mode="wait">
                    {currentSlide === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 lg:px-16"
                      >
                        {/* Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full"
                        >
                          <span className="text-blue-300 text-xs sm:text-sm font-semibold">
                            Featured Collection
                          </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 max-w-5xl drop-shadow-lg leading-tight"
                        >
                          {slide.title}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl drop-shadow-md"
                        >
                          {slide.description}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Slide Counter */}
        <div className={`py-4 sm:py-6 text-center ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            {currentSlide + 1}
          </span>
          <span className="mx-2">/</span>
          <span className="text-base sm:text-lg">{slides.length}</span>
        </div>
      </div>

      <style jsx>{`
        .slick-dots {
          position: absolute !important;
          bottom: 20px !important;
        }
        
        .slick-dots li {
          margin: 0 !important;
        }

        .slick-dots li button:before {
          display: none !important;
        }

        @media (min-width: 640px) {
          .slick-dots {
            bottom: 30px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
