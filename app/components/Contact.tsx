'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Let's Collaborate</h2>
        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing product management opportunities, AI/ML innovations,
              or potential collaborations.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:shardul.bargale@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope className="w-6 h-6" />
                <span>shardul.bargale@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shardulbargale/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 