import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/blue_lotus_logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our Brands', path: '/brands' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const waterFlowVariants = {
  animate: {
    backgroundPositionX: [0, 120],
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 4,
      ease: 'linear',
    },
  },
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const rippleVariant = {
  initial: {
    opacity: 0.5,
    scale: 0,
  },
  animate: {
    opacity: 0,
    scale: 5,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  },
};

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBgAnimating, setIsBgAnimating] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleHeaderClick = (e) => {
    if (e.target === e.currentTarget && !isBgAnimating) {
      setIsBgAnimating(true);
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const size = rect.width > rect.height ? rect.width : rect.height;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { id: Date.now(), x, y, size };
    setRipples((old) => [...old, newRipple]);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timer;
    if (isBgAnimating) {
      timer = setTimeout(() => {
        setIsBgAnimating(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [isBgAnimating]);

  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((old) => old.slice(1));
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <motion.header
      onClick={handleHeaderClick}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-100
        ${scrolled ? 'shadow-2xl' : 'shadow-lg'}
        ${isDarkMode 
          ? 'bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 text-white' 
          : 'bg-gradient-to-r from-white/95 via-blue-50/95 to-cyan-50/95 text-blue-900'
        }
        backdrop-blur-xl border-b
        ${isDarkMode ? 'border-gray-700/50' : 'border-blue-200/50'}
      `}
      style={{ 
        WebkitBackdropFilter: 'blur(20px)', 
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: 'linear',
          }}
        />
      </div>

      {/* Water Flow Overlay */}
      <AnimatePresence>
        {isBgAnimating && (
          <motion.div
            key="waterFlow"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  120deg,
                  rgba(59, 130, 246, 0.1) 0,
                  rgba(59, 130, 246, 0.1) 6px,
                  rgba(59, 130, 246, 0.05) 8px,
                  rgba(59, 130, 246, 0.05) 14px
                ),
                repeating-linear-gradient(
                  60deg,
                  rgba(147, 197, 253, 0.08) 0,
                  rgba(147, 197, 253, 0.08) 6px,
                  rgba(147, 197, 253, 0.03) 8px,
                  rgba(147, 197, 253, 0.03) 14px
                )
              `,
              backgroundSize: '110px 110%, 55px 55%',
              backgroundRepeat: 'repeat',
              backgroundPositionX: 0,
            }}
            variants={waterFlowVariants}
            initial="hidden"
            animate="animate"
            exit="hidden"
          />
        )}
      </AnimatePresence>

      {/* Cursor Ripples */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {ripples.map(({ id, x, y, size }) => (
          <motion.span
            key={id}
            className={`absolute rounded-full ${
              isDarkMode ? 'bg-blue-400/40' : 'bg-blue-500/30'
            }`}
            style={{
              width: size,
              height: size,
              top: y,
              left: x,
            }}
            variants={rippleVariant}
            initial="initial"
            animate="animate"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`relative p-2 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/70' 
                  : 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50'
              }`}>
                <img src={logo} alt="Logo" className="w-7 h-7 lg:w-8 lg:h-8 drop-shadow-md" />
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div>
                <span className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${
                  isDarkMode 
                    ? 'from-blue-400 to-cyan-400' 
                    : 'from-blue-600 to-cyan-600'
                } bg-clip-text text-transparent`}>
                  Blue Ocean
                </span>
                <div className={`text-[10px] font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-blue-600'
                }`}>
                  Excellence in Every Wave
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group"
                >
                  <motion.div
                    className={`
                      px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300
                      ${isActive
                        ? isDarkMode
                          ? 'bg-blue-600/20 text-blue-400'
                          : 'bg-blue-100 text-blue-700'
                        : isDarkMode
                          ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                          : 'text-blue-800 hover:text-blue-600 hover:bg-blue-50'
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                          isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle - Desktop */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                toggleTheme();
              }}
              className={`
                hidden lg:flex items-center justify-center w-10 h-10 rounded-full
                transition-all duration-300 group relative overflow-hidden
                ${isDarkMode 
                  ? 'bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 shadow-lg shadow-gray-900/50' 
                  : 'bg-gradient-to-br from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 shadow-lg shadow-blue-500/20'
                }
              `}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiSun className="w-5 h-5 text-yellow-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiMoon className="w-5 h-5 text-blue-700" />
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Dark Mode Toggle - Mobile */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTheme();
                }}
                className={`
                  flex items-center justify-center w-10 h-10 rounded-full
                  transition-all duration-300
                  ${isDarkMode 
                    ? 'bg-gradient-to-br from-gray-700 to-gray-800 shadow-lg shadow-gray-900/50' 
                    : 'bg-gradient-to-br from-blue-100 to-cyan-100 shadow-lg shadow-blue-500/20'
                  }
                `}
                whileTap={{ scale: 0.9 }}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? (
                  <FiSun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <FiMoon className="w-5 h-5 text-blue-700" />
                )}
              </motion.button>

              {/* Hamburger Menu */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                className={`
                  flex items-center justify-center w-10 h-10 rounded-full
                  transition-all duration-300
                  ${isDarkMode 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/50' 
                    : 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiX className="w-6 h-6 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiMenu className="w-6 h-6 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`lg:hidden border-t overflow-hidden ${
              isDarkMode 
                ? 'bg-gradient-to-b from-gray-900/98 to-gray-800/98 border-gray-700/50' 
                : 'bg-gradient-to-b from-white/98 to-blue-50/98 border-blue-200/50'
            } backdrop-blur-xl`}
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`
                        block px-4 py-3 rounded-xl font-medium text-base
                        transition-all duration-300
                        ${isActive
                          ? isDarkMode
                            ? 'bg-blue-600/20 text-blue-400 shadow-lg shadow-blue-500/20'
                            : 'bg-blue-100 text-blue-700 shadow-lg shadow-blue-500/10'
                          : isDarkMode
                            ? 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                            : 'text-blue-900 hover:bg-blue-50 hover:text-blue-600'
                        }
                      `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{link.name}</span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className={`w-2 h-2 rounded-full ${
                              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                            }`}
                          />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
