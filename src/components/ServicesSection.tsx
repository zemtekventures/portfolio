import React, { Children } from 'react';
import { BrainCircuitIcon, MessageSquareTextIcon, SmartphoneIcon, LineChartIcon, WrenchIcon, CloudIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useServicesData } from '../hooks/useData';
import { LoadingState } from './ui/LoadingState';
// Icon mapping to convert string names to components
const iconMap: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuitIcon className="h-8 w-8" />,
  MessageSquareText: <MessageSquareTextIcon className="h-8 w-8" />,
  Smartphone: <SmartphoneIcon className="h-8 w-8" />,
  LineChart: <LineChartIcon className="h-8 w-8" />,
  Wrench: <WrenchIcon className="h-8 w-8" />,
  Cloud: <CloudIcon className="h-8 w-8" />
};
export const ServicesSection = () => {
  const {
    data,
    loading,
    error
  } = useServicesData();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        duration: 0.5
      }
    }
  };
  if (loading) return <LoadingState text="Loading services..." />;
  if (error) return <div className="text-center py-16 text-red-700">
        Error loading services data
      </div>;
  return <section id="services" className="py-16 md:py-24 bg-gray-50 relative">
      {/* Japanese-style decorative element */}
      <motion.div className="absolute top-0 left-0 w-full h-4 bg-red-700" initial={{
      scaleX: 0
    }} whileInView={{
      scaleX: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.7
    }}></motion.div>
      <motion.div className="absolute top-4 left-0 w-full h-1 bg-black" initial={{
      scaleX: 0
    }} whileInView={{
      scaleX: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.7,
      delay: 0.2
    }}></motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {data.title.highlight}
            </span>
            <span className="block">{data.title.main}</span>
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
        <motion.div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }}>
          {data.services.map((service, index) => <motion.div key={index} className="bg-white p-8 rounded-sm shadow-md border-l-4 border-red-700 hover:shadow-lg transition-shadow" variants={itemVariants} whileHover={{
          y: -5,
          transition: {
            duration: 0.2
          }
        }}>
              <div className="flex items-center mb-4">
                <motion.div className="mr-4 text-red-700" initial={{
              scale: 0.8,
              opacity: 0
            }} whileInView={{
              scale: 1,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2 + index * 0.1,
              duration: 0.4
            }}>
                  {iconMap[service.icon]}
                </motion.div>
                <h3 className="text-xl font-medium text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};