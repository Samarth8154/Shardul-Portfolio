'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import ParticlesBackground from './components/ParticlesBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <ParticlesBackground />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </div>
    </main>
  )
} 