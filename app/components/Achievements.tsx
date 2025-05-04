'use client'

import { motion } from 'framer-motion'
import { FaTrophy, FaFutbol, FaHandHoldingHeart } from 'react-icons/fa'

const achievements = [
  {
    title: 'National Soccer Player',
    description: 'Led a squad of 22 players as team captain for university team',
    icon: FaFutbol,
    highlight: 'Leadership & Teamwork'
  },
  {
    title: 'Rotary International Fundraiser',
    description: 'Successfully raised $51,000 for humanitarian causes through strategic planning and community engagement',
    icon: FaHandHoldingHeart,
    highlight: 'Social Impact'
  }
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border-2 border-blue-500/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-500/20 rounded-full">
                  <achievement.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">{achievement.title}</h3>
                <p className="text-gray-300 mb-4">{achievement.description}</p>
                <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                  {achievement.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 