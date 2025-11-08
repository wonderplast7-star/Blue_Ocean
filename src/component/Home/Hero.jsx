import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

// Import your local images
import design6 from "../../assets/design6.png";
import design7 from "../../assets/design7.png";
import design8 from "../../assets/design8.png";
import design9 from "../../assets/design9.png";
import design10 from "../../assets/design10.png";
import design11 from "../../assets/design11.png";
import design12 from "../../assets/design12.jpg";
import design13 from "../../assets/design13.png";

// Import slick-carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const { isDarkMode } = useTheme();
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: design6,
      title: "Premium Furniture Collection",
      description: "Discover elegance in every piece",
      alt: "Furniture 1"
    },
    {
      image: design7,
      title: "Modern Living Spaces",
      description: "Transform your home with style",
      alt: "Furniture 2"
    },
    {
      image: design8,
      title: "Comfort Meets Design",
      description: "Experience luxury daily",
      alt: "Furniture 3"
    },
    {
      image: design9,
      title: "Timeless Craftsmanship",
      description: "Quality that lasts generations",
      alt: "Furniture 4"
    },
    {
      image: design10,
      title: "Timeless Craftsmanship",
      description: "Quality that lasts generations",
      alt: "Furniture 4"
    },
    {
      image: design11,
      title: "Timeless Craftsmanship",
      description: "Quality that lasts generations",
      alt: "Furniture 4"
    },
    {
      image: design12,
      title: "Timeless Craftsmanship",
      description: "Quality that lasts generations",
      alt: "Furniture 4"
    }
    ,
    {
      image: design13,
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
  className={`absolute top-1/2 left-4 -translate-y-1/2 z-30
    px-5 py-3 rounded-full flex items-center justify-center gap-1
    bg-gradient-to-r from-indigo-300 to-blue-300
    shadow-md text-white font-semibold text-lg
    hover:from-indigo-700 hover:to-blue-700
    active:scale-95 active:shadow-inner
    transition-transform duration-100 focus:outline-none`}
  whileHover={{ scale: 1.05, x: 5 }}
  whileTap={{ scale: 0.9, x: 0 }}
  animate={{ transition: { type: "spring", stiffness: 300, damping: 20 } }}
>
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
  </svg>
  
</motion.button>

<motion.button
  onClick={goToNext}
  className={`absolute top-1/2 right-4 -translate-y-1/2 z-30
    px-5 py-3 rounded-full flex items-center justify-center gap-1
    bg-gradient-to-r from-indigo-300 to-blue-300
    shadow-md text-white font-semibold text-lg
    hover:from-indigo-700 hover:to-blue-700
    active:scale-95 active:shadow-inner
    transition-transform duration-100 focus:outline-none`}
  whileHover={{ scale: 1.05, x: -5 }}
  whileTap={{ scale: 0.9, x: 0 }}
  animate={{ transition: { type: "spring", stiffness: 300, damping: 20 } }}
>
  
  <svg
    className="w-6 h-6"
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
                {/* Updated responsive height - uses viewport height */}
                <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] xl:h-[90vh]">
                  {/* Image */}
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-transparent"></div>
                  
                  {/* Content Overlay - NO ANIMATIONS */}
                  
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Slide Counter */}
        {/* <div className={`py-4 sm:py-6 text-center ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            {currentSlide + 1}
          </span>
          <span className="mx-2">/</span>
          <span className="text-base sm:text-lg">{slides.length}</span>
        </div> */}
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
