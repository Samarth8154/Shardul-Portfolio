'use client'

import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
} 