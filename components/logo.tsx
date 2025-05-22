"use client"

import { motion } from "framer-motion"

export default function Logo() {
  return (
    <motion.div
      className="relative w-8 h-8 mr-2"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 10, scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Mountain background */}
        <motion.path
          d="M3 18L7 10L12 15L17 10L21 18H3Z"
          fill="currentColor"
          className="text-primary/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Sun */}
        <motion.circle
          cx="18"
          cy="6"
          r="3"
          fill="currentColor"
          className="text-yellow-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Sheep silhouette */}
        <motion.path
          d="M9 16C9 16 8 14 8 13C8 12 9 11 10 11C11 11 12 12 12 13C12 14 11 16 11 16H9Z"
          fill="currentColor"
          className="text-primary"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        {/* Book/education symbol */}
        <motion.path
          d="M6 15V13C6 12.4477 6.44772 12 7 12H9C9.55228 12 10 12.4477 10 13V15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-primary"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </svg>
    </motion.div>
  )
}
