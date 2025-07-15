"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center text-gray-800 dark:text-gray-100 p-8 rounded-lg shadow-lg"
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-6xl font-extrabold mb-4"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl mb-6 text-gray-600 dark:text-gray-400"
        >
          Whoops! The page you are looking for does not exist.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-blue-500 text-white  dark:text-white rounded-full text-lg font-semibold transition-all duration-200"
        >
          <Link href="/">Go Home</Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
