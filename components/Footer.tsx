"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-8 px-6 border-t border-neon/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-neon text-glow cursor-pointer"
            onClick={scrollToTop}
          >
            Portfolio.
          </motion.div>

          <div className="flex items-center space-x-6">
            <motion.a
              href="https://github.com/ayushraj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-neon transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ayushraj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-neon transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="https://leetcode.com/ayushraj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-neon transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaCode size={20} />
            </motion.a>
            <motion.a
              href="mailto:ayushraj@email.com"
              className="text-gray-300 hover:text-neon transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaEnvelope size={20} />
            </motion.a>
          </div>

          <p className="text-gray-400 text-sm">
            © 2026 Ayush Raj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
