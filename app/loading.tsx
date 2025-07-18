"use client";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Loading Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center space-y-8"
      >
        {/* Main Circle */}
        <motion.div
          className="w-20 h-20 bg-black dark:bg-white rounded-full"
          animate={{
            rotate: 360,
            transition: {
              repeat: Infinity,
              ease: "linear",
              duration: 2,
            },
          }}
        />

        {/* Text */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-black dark:text-white text-3xl font-semibold"
        >
          Loading...
        </motion.h1>

        {/* Dots Animation */}
        <motion.div
          className="flex space-x-2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
            transition: {
              repeat: Infinity,
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div className="w-4 h-4 bg-black rounded-full dark:bg-white" />
          <motion.div className="w-4 h-4 bg-black rounded-full dark:bg-white" />
          <motion.div className="w-4 h-4 bg-black rounded-full dark:bg-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingPage;
