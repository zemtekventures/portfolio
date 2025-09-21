import React from 'react';
import { CheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export const WhyChooseUs = () => {
  const reasons = [{
    title: 'Attention to Detail',
    description: 'Clean, maintainable, and scalable solutions.'
  }, {
    title: 'Clear Communication',
    description: 'Transparent updates throughout the project.'
  }, {
    title: 'Quality-Focused',
    description: 'Delivering solutions that are efficient and dependable.'
  }, {
    title: 'Collaborative Approach',
    description: 'Treating your goals as our shared mission.'
  }];
  return <section id="why-choose-us" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Japanese-style wave pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path d="M0,0 C30,20 70,20 100,0 L100,100 L0,100 Z" fill="currentColor" className="text-red-700" initial={{
          pathLength: 0
        }} whileInView={{
          pathLength: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 1.5,
          ease: 'easeInOut'
        }} />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div className="text-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            <span className="inline-block text-red-700 text-sm mb-2">
              WHY CHOOSE US
            </span>
            <span className="block">Why Work With ZemTek Ventures</span>
          </h2>
          <motion.div className="mt-2 mx-auto w-12 h-1 bg-red-700" initial={{
          width: 0
        }} whileInView={{
          width: 48
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}></motion.div>
        </motion.div>
        <div className="mt-16 lg:mt-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => <motion.div key={index} className="bg-gray-50 p-6 rounded-sm shadow-md relative border-t-4 border-red-700 hover:transform hover:-translate-y-1 transition-transform" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} whileHover={{
            y: -5,
            transition: {
              duration: 0.2
            }
          }}>
                <motion.div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-700 rounded-full p-2" initial={{
              scale: 0
            }} whileInView={{
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              type: 'spring',
              stiffness: 200,
              delay: 0.2 + index * 0.1
            }}>
                  <CheckIcon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">
                  {reason.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">
                  {reason.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};