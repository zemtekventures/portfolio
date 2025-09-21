import React from 'react';
import { motion } from 'framer-motion';
interface LoadingStateProps {
  text?: string;
}
export const LoadingState: React.FC<LoadingStateProps> = ({
  text = 'Loading...'
}) => {
  return <div className="flex flex-col items-center justify-center py-16">
      <motion.div className="w-12 h-12 rounded-full border-4 border-gray-300 border-t-red-700" animate={{
      rotate: 360
    }} transition={{
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }} />
      <p className="mt-4 text-gray-600">{text}</p>
    </div>;
};