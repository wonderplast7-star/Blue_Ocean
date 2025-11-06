import React from "react";
import { useTheme } from '../../contexts/ThemeContext';
import MotionSection from "../../MotionSection.jsx";
import { motion } from "framer-motion";

export default function Journey() {
  const { isDarkMode } = useTheme();
  
  const milestones = [
    { year: "2020", title: "The Beginning", description: "Started with a vision" },
    { year: "2021", title: "First Product", description: "Launched our flagship" },
    { year: "2023", title: "Global Reach", description: "Expanded worldwide" },
    { year: "2024", title: "Innovation", description: "Leading the industry" }
  ];

  return (
    <div className={`relative w-full py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden ${
      isDarkMode ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse ${
          isDarkMode ? 'bg-blue-600' : 'bg-blue-400'
        }`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse ${
          isDarkMode ? 'bg-purple-600' : 'bg-purple-400'
        }`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5 animate-pulse ${
          isDarkMode ? 'bg-cyan-600' : 'bg-cyan-400'
        }`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <MotionSection 
          className="max-w-4xl mx-auto text-center mb-16 lg:mb-20"
          animationType="fadeUp"
          duration={0.7}
          delay={0.1}
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <span className={`px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
              isDarkMode 
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                : 'bg-blue-100 text-blue-600 border border-blue-200'
            }`}>
              📖 Our Story
            </span>
          </motion.div>

          {/* Title */}
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our <span className={`bg-gradient-to-r ${
              isDarkMode 
                ? 'from-blue-400 to-purple-400' 
                : 'from-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>Journey</span>
          </h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 max-w-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          ></motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Founded in 2020 with a mission to redefine digital experiences, Innovate Co. started as a small group of
            friends with a big idea. We saw a gap in the market for user-centric design paired with powerful, scalable
            technology.
          </motion.p>
        </MotionSection>

        {/* Timeline Section */}
        <MotionSection
          className="mb-16"
          animationType="fadeUp"
          duration={0.7}
          delay={0.3}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative p-6 rounded-2xl transition-all duration-300 group ${
                  isDarkMode 
                    ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700' 
                    : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-lg'
                }`}
              >
                {/* Connecting Line (Hidden on mobile, visible on lg) */}
                {index < milestones.length - 1 && (
                  <div className={`hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                  }`}></div>
                )}

                {/* Year Badge */}
                <div className={`inline-block px-4 py-2 rounded-full mb-4 font-bold text-lg ${
                  isDarkMode 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {milestone.year}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/50' 
                    : 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30'
                }`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {milestone.title}
                </h3>

                {/* Description */}
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {milestone.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </MotionSection>

        {/* Philosophy Card */}
        <MotionSection
          animationType="fadeUp"
          duration={0.7}
          delay={0.5}
        >
          <div className={`max-w-4xl mx-auto p-8 lg:p-12 rounded-3xl relative overflow-hidden ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
              : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-2xl'
          }`}>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-500/50' 
                    : 'bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30'
                }`}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </motion.div>

              <h3 className={`text-2xl lg:text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Core Philosophy
              </h3>

              <p className={`text-base lg:text-lg leading-relaxed mb-8 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Over the years, we've grown into a dynamic team, but our core philosophy remains the same: build
                products that people love to use. Every decision we make is guided by empathy, innovation, and a
                commitment to excellence.
              </p>
              <div>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </div>
  );
}
