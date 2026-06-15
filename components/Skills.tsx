"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaServer,
  FaBrain,
  FaRobot,
} from "react-icons/fa"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend",
      icon: FaReact,
      skills: [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: FaReact },
        { name: "Tailwind CSS", icon: FaCss3Alt },
      ],
    },
    {
      title: "Backend",
      icon: FaServer,
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: FaNodeJs },
        { name: "FastAPI", icon: FaPython },
        { name: "REST APIs", icon: FaServer },
      ],
    },
    {
      title: "Database",
      icon: FaDatabase,
      skills: [
        { name: "MongoDB", icon: FaDatabase },
        { name: "PostgreSQL", icon: FaDatabase },
        { name: "MySQL", icon: FaDatabase },
      ],
    },
    {
      title: "AI/ML",
      icon: FaBrain,
      skills: [
        { name: "Python", icon: FaPython },
        { name: "LangChain", icon: FaRobot },
        { name: "OpenAI API", icon: FaRobot },
        { name: "Hugging Face", icon: FaBrain },
        { name: "Vector DBs", icon: FaDatabase },
        { name: "RAG Systems", icon: FaRobot },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-glow mb-4">
            My <span className="text-neon">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-neon mx-auto shadow-neon" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-3xl text-neon" />
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-background/50 border border-neon/20 rounded-xl p-4 text-center hover:border-neon/50 hover:shadow-neon transition-all duration-300 cursor-pointer"
                  >
                    <skill.icon className="text-3xl text-neon mb-2 mx-auto" />
                    <p className="text-gray-300 text-sm font-medium">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
