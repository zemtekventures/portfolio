import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white relative overflow-hidden">
      {/* Japanese-style wave pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C20,60 40,40 60,50 C80,60 100,40 100,50 L100,100 L0,100 Z"
            fill="currentColor"
            className="text-red-700"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <motion.span
                className="block text-red-700 mb-2"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.6,
                }}
              >
                INNOVATION
              </motion.span>
              <motion.span
                className="block"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                }}
              >
                Innovating tomorrow with
              </motion.span>
              <motion.span
                className="block"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                }}
              >
                AI, Cloud, and Care
              </motion.span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-gray-600 max-w-3xl"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
            >
              At ZemTek Ventures, we deliver tailored software solutions
              designed to meet your business objectives. From AI-driven systems
              to modern web and mobile applications, our focus is on creating
              reliable, scalable, and impactful products.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
            >
              <motion.a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-red-700 hover:bg-red-800 transition-colors"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                Explore Our Services
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-sm text-gray-900 bg-white hover:bg-gray-50 transition-colors"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-5 xl:col-span-6 flex justify-center">
            <motion.div
              className="relative w-full max-w-lg"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
            >
              {/* Cherry blossom decorative element */}
              <motion.div
                className="absolute top-0 -left-4 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-8 right-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 9,
                  ease: "easeInOut",
                  delay: 1,
                }}
              ></motion.div>
              <motion.div
                className="absolute -right-4 -top-20 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut",
                  delay: 2,
                }}
              ></motion.div>
              <div className="relative">
                <motion.div
                  className="aspect-w-16 aspect-h-9 rounded-lg shadow-2xl overflow-hidden"
                  initial={{
                    y: 30,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.7,
                  }}
                >
                  <img
                    src="./hero.jpg"
                    alt="Japanese-inspired tech workspace"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-4 h-24 w-24 bg-red-700 flex items-center justify-center rounded-sm shadow-lg"
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                    type: "spring",
                  }}
                >
                  <span className="text-white text-3xl font-bold">VISION</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
