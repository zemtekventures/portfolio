import React, { Children } from 'react';
import { GitBranchIcon, SlackIcon, TrelloIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToolsData } from '../hooks/useData';
import { LoadingState } from './ui/LoadingState';
// Icon mapping to convert string names to components
const iconMap: Record<string, React.ReactNode> = {
  GitBranch: <GitBranchIcon className="h-8 w-8" />,
  Slack: <SlackIcon className="h-8 w-8" />,
  Trello: <TrelloIcon className="h-8 w-8" />
};
export const ToolsSection = () => {
  const {
    data,
    loading,
    error
  } = useToolsData();
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
  if (loading) return <LoadingState text="Loading tools..." />;
  if (error) return <div className="text-center py-16 text-red-700">
        Error loading tools data
      </div>;
  return <section id="tools" className="py-16 md:py-24 bg-gray-50 relative">
      {/* Japanese-style decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" className="text-red-700" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" className="text-red-700" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" className="text-red-700" />
        </svg>
      </div>
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
        <motion.div className="mt-16 grid gap-8 md:grid-cols-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }}>
          {data.tools.map((tool, index) => <motion.div key={index} className="bg-white p-8 rounded-sm shadow-md text-center hover:shadow-lg transition-shadow" variants={itemVariants} whileHover={{
          y: -5
        }}>
              <motion.div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full text-red-700 mb-4" initial={{
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
                {iconMap[tool.icon]}
              </motion.div>
              <h3 className="text-xl font-medium text-gray-900">
                {tool.title}
              </h3>
              <p className="mt-2 text-gray-600">{tool.description}</p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};