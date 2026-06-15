"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaCode, FaLaptopCode, FaTrophy } from "react-icons/fa"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: FaCode, value: "50+", label: "Projects Completed" },
    { icon: FaLaptopCode, value: "20+", label: "Technologies Learned" },
    { icon: FaTrophy, value: "500+", label: "Coding Problems Solved" },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-glow mb-4">
            About <span className="text-neon">Me</span>
          </h2>
          <div className="w-24 h-1 bg-neon mx-auto shadow-neon" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate Software Developer with a strong foundation in  Computer Science. My journey began with a B.Tech in Civil Engineering, but my fascination with technology and problem-solving led me to transition into Software Development and AI.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Over the years, I have developed expertise in building scalable web applications, implementing machine learning models, and creating AI-powered solutions. I specialize in the MERN stack, Python, FastAPI, and modern AI technologies like LangChain and OpenAI APIs.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My goal is to leverage technology to solve real-world problems and create innovative solutions that make a positive impact. I am always eager to learn new technologies and take on challenging projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-neon mb-6">Education</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-neon pl-4">
                <h4 className="text-xl font-semibold text-white">B.Tech Civil Engineering</h4>
                <p className="text-gray-400">Graduated from NIT ROURKELA</p>
                <p className="text-gray-400 text-sm mt-1">Transitioned to Software Development</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <stat.icon className="text-5xl text-neon" />
              </motion.div>
              <motion.h3
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-4xl font-bold text-white text-glow mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
