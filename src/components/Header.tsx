import { useState } from "react";
import { motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        staggerChildren: 0.1,
      },
    },
  };
  const navItemVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div
              className="flex-shrink-0 flex items-center"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <img
                src="/zemtek.jpg"
                alt="ZemTek Ventures Logo"
                className="h-12 w-12 mr-2 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-gray-900">
                ZemTek Ventures
              </span>
            </motion.div>
          </div>
          <motion.nav
            className="hidden md:flex items-center space-x-8"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            <motion.a
              href="#services"
              className="text-gray-900 hover:text-red-700 transition-colors px-3 py-2 text-sm font-medium"
              variants={navItemVariants}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Services
            </motion.a>
            <motion.a
              href="#why-choose-us"
              className="text-gray-900 hover:text-red-700 transition-colors px-3 py-2 text-sm font-medium"
              variants={navItemVariants}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Why Choose Us
            </motion.a>
            <motion.a
              href="#tools"
              className="text-gray-900 hover:text-red-700 transition-colors px-3 py-2 text-sm font-medium"
              variants={navItemVariants}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Tools
            </motion.a>
            <motion.a
              href="#about"
              className="text-gray-900 hover:text-red-700 transition-colors px-3 py-2 text-sm font-medium"
              variants={navItemVariants}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-red-700 text-white hover:bg-red-800 transition-colors px-4 py-2 rounded-sm text-sm font-medium"
              variants={navItemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#b91c1c",
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Contact Us
            </motion.a>
          </motion.nav>
          <div className="flex items-center md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              whileTap={{
                scale: 0.95,
              }}
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <motion.a
              href="#services"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-700"
              onClick={() => setIsMenuOpen(false)}
              initial={{
                x: -20,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              Services
            </motion.a>
            <motion.a
              href="#why-choose-us"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-700"
              onClick={() => setIsMenuOpen(false)}
              initial={{
                x: -20,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
              }}
            >
              Why Choose Us
            </motion.a>
            <motion.a
              href="#tools"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-700"
              onClick={() => setIsMenuOpen(false)}
              initial={{
                x: -20,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
            >
              Tools
            </motion.a>
            <motion.a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-700"
              onClick={() => setIsMenuOpen(false)}
              initial={{
                x: -20,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
              }}
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-white bg-red-700 rounded-sm hover:bg-red-800"
              onClick={() => setIsMenuOpen(false)}
              initial={{
                x: -20,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
              }}
              whileHover={{
                scale: 1.02,
              }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  );
};
