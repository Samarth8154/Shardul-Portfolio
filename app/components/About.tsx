'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
          <p className="text-lg text-gray-300 leading-relaxed">
            Results-driven Product Manager with a track record of launching high-impact, data-driven solutions. 
            4+ years of expertise in product strategy, roadmap development, stakeholder management, and cross-functional 
            collaboration to drive business growth. Passionate about leveraging AI, machine learning, and automation to 
            optimize processes, enhance user experience, and maximize profitability.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700/30 rounded p-4">
              <h3 className="font-semibold mb-2">Core Strengths</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Product Strategy & Roadmap Development</li>
                <li>AI/ML Implementation</li>
                <li>Data-Driven Decision Making</li>
                <li>Cross-Functional Leadership</li>
              </ul>
            </div>
            <div className="bg-gray-700/30 rounded p-4">
              <h3 className="font-semibold mb-2">Industry Focus</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>AI/ML Solutions</li>
                <li>Business Intelligence</li>
                <li>Process Automation</li>
                <li>Data Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 