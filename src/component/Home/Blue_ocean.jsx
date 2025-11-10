import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "../../component/Button";
import Brandlogo from "../../assets/Brandlogo1.png"
import BangleBoutiqueLogo from "../../assets/blue_lotus_logo.png";
import { Meteors } from "../../registry/magicui/meteors";
import { useTheme } from '../../contexts/ThemeContext';
import MotionSection from "../../MotionSection.jsx";

export default function Blue_ocean() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/brand1');
  };
  const handleExploreMore2 = () => {
    navigate('/brand2');
  };

  return (
    <div>
      <style>{`
        @keyframes shine-pulse {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        .shine-border {
          position: relative;
          border-radius: 0.5rem;
          z-index: 0;
          overflow: hidden;
        }
        .shine-border::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          padding: 2px;
          background: conic-gradient(
            #A07CFE,
            #FE8FB5,
            #FFBE7B,
            #A07CFE
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          animation: shine-pulse 14s linear infinite;
        }
      `}</style>

      <main className={`relative min-h-screen overflow-hidden ${
        isDarkMode ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
      }`}>
        {/* Meteor animation background */}
        <Meteors number={30} className="absolute inset-0 z-0" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className={`absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full blur-3xl opacity-20 animate-pulse ${
            isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
            isDarkMode ? 'bg-purple-500' : 'bg-purple-300'
          }`} style={{ animationDelay: '1s' }}></div>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 sm:w-80 h-52 sm:h-80 rounded-full blur-3xl opacity-10 animate-pulse ${
            isDarkMode ? 'bg-pink-500' : 'bg-pink-300'
          }`} style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Content container with higher z-index */}
        <div className="relative z-10">
          {/* Header Section */}
          <MotionSection 
            className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center"
            animationType="fadeUp"
            duration={0.8}
          >
            <div className="inline-block mb-3 sm:mb-4">
              <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${
                isDarkMode 
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                  : 'bg-blue-100 text-blue-600 border border-blue-200'
              }`}>
                🌊 Our Brand Portfolio
              </span>
            </div>

            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Discover the World of <span className={`bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-blue-400 to-purple-400' 
                  : 'from-blue-600 to-purple-600'
              } bg-clip-text text-transparent`}>Blue Ocean</span>
            </h1>
            
            <p className={`max-w-2xl mx-auto text-base sm:text-lg md:text-xl px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We are a family of brands, each dedicated to providing unique products and exceptional quality. Explore our diverse companies, each a leader in their field.
            </p>
          </MotionSection>

          {/* Product Cards Section */}
          <MotionSection 
            className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20"
            animationType="fadeUp"
            duration={0.8}
            delay={0.3}
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Wonderplast Card */}
              <MotionSection
                className={`shine-border rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 md:hover:scale-100 hover:-translate-y-2 p-[1px] ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:shadow-blue-500/50' 
                    : 'bg-white border-gray-200 hover:shadow-blue-500/30'
                }`}
                animationType="fadeUp"
                duration={0.6}
                delay={0.2}
              >
                <div className="relative">
                  {/* Image Container */}
                  <div className="bg-gradient-to-br from-blue-900 to-blue-700 h-48 sm:h-56 md:h-64 flex items-center justify-center overflow-hidden rounded-t-xl relative group">
                    <img
                      src={Brandlogo}
                      alt="Wonderplast"
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      style={{ display: "block" }}
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className={`p-5 sm:p-6 md:p-8 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="inline-block mb-2 sm:mb-3">
                      <span className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                        isDarkMode 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                          : 'bg-blue-100 text-blue-600 border border-blue-200'
                      }`}>
                        Water Solutions
                      </span>
                    </div>

                    <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      Wonderplast
                    </h2>
                    
                    <p className={`mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      A leading name in high-quality PVC pipes, water tanks, and fittings. Discover durable and innovative solutions for all your water management needs.
                    </p>
                    
                    <button
                      onClick={handleExploreMore}
                      className={`group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base overflow-hidden transform transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto ${
                        isDarkMode
                          ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg shadow-blue-500/50'
                          : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/30'
                      }`}
                    >
                      <span className="relative z-10">Explore More</span>
                      <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                  </div>
                </div>
              </MotionSection>

              {/* Bangle Boutique Card */}
              <MotionSection
                className={`shine-border rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 md:hover:scale-100 hover:-translate-y-2 p-[1px] ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:shadow-pink-500/50' 
                    : 'bg-white border-gray-200 hover:shadow-pink-500/30'
                }`}
                animationType="fadeUp"
                duration={0.6}
                delay={0.4}
              >
                <div className="relative">
                  {/* Image Container */}
                  <div className="bg-gradient-to-br from-pink-300 to-pink-300 h-48 sm:h-56 md:h-64 flex items-center justify-center overflow-hidden rounded-t-xl relative group">
                    <img
                      src={BangleBoutiqueLogo}
                      alt="Bangle Boutique"
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      style={{ display: "block" }}
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className={`p-5 sm:p-6 md:p-8 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="inline-block mb-2 sm:mb-3">
                      <span className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                        isDarkMode 
                          ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' 
                          : 'bg-pink-100 text-pink-600 border border-pink-200'
                      }`}>
                        Fashion & Jewelry
                      </span>
                    </div>

                    <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                      Bangle Boutique
                    </h2>
                    
                    <p className={`mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      An exclusive online destination for beautiful bangles. Explore a handpicked collection of bridal chura, kadas, and stylish everyday designs.
                    </p>
                    
                    <button
                      onClick={handleExploreMore2}
                      className={`group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base overflow-hidden transform transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto ${
                        isDarkMode
                          ? 'bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white shadow-lg shadow-pink-500/50'
                          : 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-lg shadow-pink-500/30'
                      }`}
                    >
                      <span className="relative z-10">Explore More</span>
                      <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                  </div>
                </div>
              </MotionSection>
            </div>
          </MotionSection>

          {/* Feature Highlights Section */}
          <MotionSection
            className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20"
            animationType="fadeUp"
            duration={0.8}
            delay={0.6}
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: '🏆', title: 'Industry Leaders', desc: 'Top-tier brands in their sectors', color: 'blue' },
                { icon: '✨', title: 'Quality First', desc: 'Premium products & services', color: 'purple' },
                { icon: '🚀', title: 'Innovation', desc: 'Cutting-edge solutions', color: 'pink' }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-5 sm:p-6 rounded-lg sm:rounded-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                    isDarkMode
                      ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700'
                      : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-md'
                  }`}
                >
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{item.icon}</div>
                  <h3 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </MotionSection>
        </div>
      </main>
    </div>
  );
}
