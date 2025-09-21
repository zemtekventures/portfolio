import React, { Children } from 'react';
import { motion } from 'framer-motion';
export const Testimonials = () => {
  const testimonials = [{
    quote: 'ZemTek Ventures delivered an AI solution that exceeded our expectations. Their attention to detail and clear communication made the entire process smooth.',
    author: 'Akira Tanaka',
    position: 'CTO',
    company: 'Global Tech Innovations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }, {
    quote: 'The mobile application developed by ZemTek has transformed how we engage with customers. Their collaborative approach ensured our needs were met at every stage.',
    author: 'Sarah Chen',
    position: 'Marketing Director',
    company: 'Horizon Health',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }, {
    quote: 'Working with ZemTek on our cloud migration was a game-changer for our business. Their expertise and quality-focused approach delivered reliable results.',
    author: 'Michael Rodriguez',
    position: 'Operations Manager',
    company: 'Nexus Solutions',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Japanese-style wave pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path d="M0,40 C20,20 40,60 60,40 C80,20 100,60 100,40 L100,100 L0,100 Z" fill="currentColor" className="text-red-700" initial={{
          pathLength: 0,
          pathOffset: 1
        }} whileInView={{
          pathLength: 1,
          pathOffset: 0
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
              TESTIMONIALS
            </span>
            <span className="block">What Our Clients Say</span>
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
        <motion.div className="mt-16 grid gap-8 md:grid-cols-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }}>
          {testimonials.map((testimonial, index) => <motion.div key={index} className="bg-gray-50 p-8 rounded-sm shadow-md relative border-t-2 border-red-700 hover:shadow-lg transition-shadow" variants={itemVariants} whileHover={{
          y: -5,
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}>
              {/* Japanese-inspired quotation mark */}
              <motion.div className="absolute top-4 right-4 opacity-10 text-5xl font-serif text-red-700" initial={{
            opacity: 0,
            scale: 0.5
          }} whileInView={{
            opacity: 0.1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3 + index * 0.1,
            duration: 0.4
          }}>
                "
              </motion.div>
              <motion.div className="flex items-center mb-6" initial={{
            x: -20,
            opacity: 0
          }} whileInView={{
            x: 0,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2 + index * 0.1,
            duration: 0.5
          }}>
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 ring-2 ring-red-700 ring-offset-2">
                  <img src={testimonial.image} alt={testimonial.author} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </motion.div>
              <motion.blockquote className="text-gray-600 italic relative" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3 + index * 0.1,
            duration: 0.5
          }}>
                "{testimonial.quote}"
              </motion.blockquote>
              {/* Japanese-style decorative element */}
              <motion.div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-700" initial={{
            scale: 0
          }} whileInView={{
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            type: 'spring',
            stiffness: 200,
            delay: 0.4 + index * 0.1
          }}></motion.div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};