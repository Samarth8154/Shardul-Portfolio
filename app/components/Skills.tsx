'use client'

// Updated Skills component with FontAwesome icons
import { motion } from 'framer-motion'
import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaBrain,
  FaProjectDiagram,
  FaUsers,
  FaCode,
  FaCogs,
  FaTable,
  FaChartLine,
  FaJira,
  FaChartPie
} from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'SQL', icon: FaDatabase },
      { name: 'Java', icon: FaCode },
      { name: 'R', icon: FaChartBar },
    ],
  },
  {
    title: 'AI/ML & Data Analytics',
    skills: [
      { name: 'Machine Learning', icon: FaBrain },
      { name: 'Data Analysis', icon: FaChartBar },
      { name: 'Business Intelligence', icon: FaProjectDiagram },
      { name: 'Predictive Analytics', icon: FaChartLine },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Tableau', icon: FaTable },
      { name: 'Power BI', icon: FaChartPie },
      { name: 'Jira', icon: FaJira },
      { name: 'MySQL', icon: FaDatabase },
    ],
  },
  {
    title: 'Product Management',
    skills: [
      { name: 'Product Strategy', icon: FaProjectDiagram },
      { name: 'Stakeholder Management', icon: FaUsers },
      { name: 'Agile/Scrum', icon: FaCogs },
      { name: 'A/B Testing', icon: FaProjectDiagram },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-6 text-blue-400">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: (categoryIndex * 4 + skillIndex) * 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 bg-gray-700/30 rounded-lg p-3"
                  >
                    <skill.icon className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 