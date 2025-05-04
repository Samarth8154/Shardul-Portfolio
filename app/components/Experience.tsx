'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Product Manager',
    company: 'Walmart Global Tech',
    location: 'Sunnyvale, California',
    period: 'February 2022 - Present',
    achievements: [
      'Spearheaded the design and launch of an AI-driven anomaly detection platform to identify pricing and dimensional discrepancies across the product catalog.',
      'Saved $2 million in potential losses and increased profit margins by automatically flagging and correcting inaccurate listings within the first 6 months of launch.',
      'Integrated an automated email alert system, ensuring that identified anomalies were promptly corrected or escalated.',
      'Partnered with data science and engineering teams to implement advanced ML algorithms, enabling real-time detection and automated remediation of anomalies.',
      'Developed short-term and long-term product roadmaps aligned with organization\'s objectives, focusing on improving catalog data accuracy, pricing intelligence, and product discovery.',
      'Delivered customer-centric solutions that boosted platform adoption by 25%, contributing to a significant lift in revenue.'
    ]
  },
  {
    title: 'Business Analyst Intern',
    company: 'Therm-X',
    location: 'Hayward, California',
    period: 'August 2021 – December 2021',
    achievements: [
      'Extracted and analyzed large datasets using complex SQL queries, resulting in 30% faster reporting pipelines.',
      'Built Power BI dashboards to monitor financial service KPIs and presented insights to leadership.',
      'Translated stakeholder needs into data models and analytics workflows, enhancing reporting consistency.',
      'Led business reviews with data-driven recommendations, improving service response and financial planning.',
      'Drove end-to-end analytics project delivery within Agile environments, aligning with strategic business goals.'
    ]
  },
  {
    title: 'Product Manager',
    company: 'Omnisys IT Solutions Pvt. Ltd.',
    location: 'Pune, India',
    period: 'January 2018 - July 2019',
    achievements: [
      'Optimized SQL queries to enhance data retrieval speeds and system performance for large-scale databases.',
      'Led business reviews, providing data-driven insights to improve financial services intelligence.',
      'Managed Agile product development, ensuring timely and budget-conscious project delivery.',
      'Collaborated with stakeholders to translate business requirements into scalable data-driven solutions.',
      'Built data visualization dashboards using SQL and Power BI for executive decision-making.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-600"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute ${
                index % 2 === 0 ? 'right-0 md:-right-4' : 'left-0 md:-left-4'
              } top-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-gray-900 transform translate-x-${
                index % 2 === 0 ? '1/2' : '-1/2'
              }`}></div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                <h4 className="text-lg font-semibold text-gray-300">{exp.company}</h4>
                <p className="text-gray-400 mb-4">{exp.location} • {exp.period}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="leading-relaxed">{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 