"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
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
          className="w-20 h-20 bg-white/50 rounded-full"
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
          className="text-white text-3xl font-semibold"
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
          <motion.div className="w-4 h-4 bg-white rounded-full" />
          <motion.div className="w-4 h-4 bg-white rounded-full" />
          <motion.div className="w-4 h-4 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
