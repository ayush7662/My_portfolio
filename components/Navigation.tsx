"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from "react-icons/fa"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScrollSpy)
    return () => window.removeEventListener("scroll", handleScrollSpy)
  }, [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-neon text-glow cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Portfolio.
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-2 py-1 transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-neon text-glow"
                    : "text-gray-300 hover:text-neon"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon shadow-neon"
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/ayush7662"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-neon transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ayush-raj-32a503245/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-neon transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/uttam7662/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-neon transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaCode size={20} />
            </motion.a>
            <motion.a
              href="mailto:kamalayush65@gmail.com"
              className="text-gray-300 hover:text-neon transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaEnvelope size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
