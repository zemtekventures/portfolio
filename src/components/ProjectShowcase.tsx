import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProjectsData } from '../hooks/useData';
import { LoadingState } from './ui/LoadingState';
export const ProjectShowcase = () => {
  const {
    data,
    loading,
    error
  } = useProjectsData();
  const [activeProject, setActiveProject] = useState(0);
  if (loading) return <LoadingState text="Loading projects..." />;
  if (error) return <div className="text-center py-16 text-red-700">
        Error loading projects data
      </div>;
  if (data.projects.length === 0) return null;
  return <section id="projects" className="py-16 md:py-24 bg-gray-50 relative">
      {/* Japanese-style decorative element */}
      <motion.div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none" animate={{
      rotate: [0, 360]
    }} transition={{
      duration: 100,
      ease: 'linear',
      repeat: Infinity
    }}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-700" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-700" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-700" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-700" />
        </svg>
      </motion.div>
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
        <div className="mt-16">
          {/* Project Navigation */}
          <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            {data.projects.map((project, index) => <motion.button key={index} onClick={() => setActiveProject(index)} className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${activeProject === index ? 'bg-red-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                {project.category}
              </motion.button>)}
          </motion.div>
          {/* Active Project Display */}
          <motion.div className="bg-white rounded-sm shadow-lg overflow-hidden" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="lg:grid lg:grid-cols-2">
              <AnimatePresence mode="wait">
                <motion.div key={`image-${activeProject}`} className="relative h-64 lg:h-auto" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} transition={{
                duration: 0.3
              }}>
                  <img src={data.projects[activeProject].image} alt={data.projects[activeProject].title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <motion.div className="inline-block px-3 py-1 bg-red-700 text-xs font-medium text-white rounded-sm mb-2" initial={{
                      x: -20,
                      opacity: 0
                    }} animate={{
                      x: 0,
                      opacity: 1
                    }} transition={{
                      delay: 0.2
                    }}>
                        {data.projects[activeProject].category}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div key={`content-${activeProject}`} className="p-8 lg:p-12" initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: -20
              }} transition={{
                duration: 0.3
              }}>
                  <motion.h3 className="text-2xl font-bold text-gray-900 mb-4" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.1
                }}>
                    {data.projects[activeProject].title}
                  </motion.h3>
                  <motion.p className="text-gray-600 mb-6" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.2
                }}>
                    {data.projects[activeProject].description}
                  </motion.p>
                  <motion.div className="mb-6" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.3
                }}>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {data.projects[activeProject].technologies.map((tech, index) => <motion.span key={index} className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-medium bg-gray-100 text-gray-800" initial={{
                      opacity: 0,
                      scale: 0.8
                    }} animate={{
                      opacity: 1,
                      scale: 1
                    }} transition={{
                      delay: 0.3 + index * 0.1
                    }}>
                            {tech}
                          </motion.span>)}
                    </div>
                  </motion.div>
                  <motion.a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-red-700 hover:bg-red-800 transition-colors" initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.4
                }} whileHover={{
                  scale: 1.03
                }} whileTap={{
                  scale: 0.97
                }}>
                    Discuss a Similar Project
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
          {/* Project Thumbnails */}
          <motion.div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            {data.projects.map((project, index) => <motion.div key={index} onClick={() => setActiveProject(index)} className={`cursor-pointer rounded-sm overflow-hidden relative ${activeProject === index ? 'ring-2 ring-red-700' : ''}`} whileHover={{
            scale: 1.03,
            transition: {
              duration: 0.2
            }
          }} whileTap={{
            scale: 0.97
          }}>
                <div className="aspect-w-16 aspect-h-9">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                </div>
                <motion.div className={`absolute inset-0 bg-black transition-opacity ${activeProject === index ? 'opacity-0' : 'opacity-50'}`} animate={{
              opacity: activeProject === index ? 0 : 0.5
            }}></motion.div>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};