'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const education = [
  {
    degree: 'Masters of Science, Engineering Management',
    school: 'San Jose State University',
    location: 'San Jose, California',
    period: '2019 - 2021',
    gpa: 'GPA: 3.8/4.0'
  },
  {
    degree: 'Bachelor of Engineering, Mechanical Engineering',
    school: 'Savitribai Phule Pune University',
    location: 'Pune, India',
    period: '2013 - 2017',
    gpa: 'GPA: 3.6/4.0'
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <FaGraduationCap className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-400">{edu.degree}</h3>
                  <h4 className="text-lg font-semibold text-gray-300">{edu.school}</h4>
                  <p className="text-gray-400">{edu.location}</p>
                  <div className="flex items-center gap-4 mt-2 text-gray-400">
                    <span>{edu.period}</span>
                    {edu.gpa && <span className="text-blue-400 font-semibold">{edu.gpa}</span>}
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