'use client'

import { motion } from 'framer-motion'
import { FaChartLine, FaRobot, FaSearchDollar } from 'react-icons/fa'

const projects = [
  {
    title: 'Anomaly Detection Platform',
    description: 'Designed and launched an end-to-end ML-driven anomaly-detection platform for Walmart\'s Catalog team',
    icon: FaRobot,
    achievements: [
      'Drove cross-functional roadmap from concept to production in 6 months',
      'Delivered $8.4M in annualized profit lift',
      'Implemented real-time anomaly detection and automated remediation',
      'Enhanced catalog data accuracy and pricing intelligence'
    ],
    technologies: ['Machine Learning', 'Python', 'SQL', 'Tableau', 'A/B Testing']
  },
  {
    title: 'Business Intelligence Dashboard for Dynamic Pricing',
    description: 'Created a Tableau dashboard integrated with real-time pricing and demand data to optimize pricing strategies',
    icon: FaChartLine,
    achievements: [
      'Implemented Python-based ML models for pricing predictions and competitive benchmarking',
      'Conducted A/B testing on pricing strategies, which improved conversions by 10%',
      'Developed automated reporting and alerting systems',
      'Enhanced data-driven decision making for pricing optimization'
    ],
    technologies: ['Tableau', 'Python', 'Machine Learning', 'SQL', 'A/B Testing']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <project.icon className="w-12 h-12 text-blue-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{project.description}</p>
                  
                  <h4 className="text-lg font-semibold mb-3">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="leading-relaxed">{achievement}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 