'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaFileDownload, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="w-64 h-64 mx-auto relative rounded-xl overflow-hidden">
            <Image
              src="/images/graduation.jpg"
              alt="Shardul Bargale at San Jose State University"
              width={256}
              height={256}
              className="rounded-xl object-cover w-full h-full"
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Shardul Bargale
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Product Manager | Data-Driven Innovator
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="/Shardul Bargale Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <FaFileDownload className="mr-2" />
            View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/shardulbargale/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            <FaLinkedin className="mr-2" />
            Connect on LinkedIn
          </a>
          <a
            href="mailto:shardul.bargale@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <FaEnvelope className="mr-2" />
            Email Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
} 