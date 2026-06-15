"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "AI Guest Messaging Automation",
      description: "Automated guest messaging system using Claude AI for hospitality industry",
      tech: ["FastAPI", "PostgreSQL", "Claude AI"],
      github: "https://github.com/ayushraj/guest-messaging",
      demo: "https://demo.example.com",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    },
    {
      title: "chat-app",
      description: "A modern real-time chat application built with React (Vite) on the frontend and Node.js + Express + Socket.io on the backend.",

      tech: ["React.js","Node.js","MongoDB","Express.js","RestAPI","prism"],
      github: "https://github.com/ayush7662/chat-app",
      demo: "https://demo.example.com",
      image: "Screenshot 2026-06-15 210810.png",
    },
    {
      title: "Identity Reconciliation API",
      description: "High-performance API for matching and reconciling user identities across systems",
      tech: ["Node.js", "Express", "SQL"],
      github: "https://github.com/ayushraj/identity-reconciliation",
      demo: "https://demo.example.com",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
    {
      title: "AI Site Builder",
      description: "An AI-powered website builder is a software tool that uses artificial intelligence to automatically generate, edit, preview, and deploy websites based on simple conversational prompts from the user.",
            tech: ["Node.js", "Express", "SQL", "React.js","Stripe","prism",],
      github: "https://github.com/ayush7662/AI_SITE_BUILDER",

      demo: "12.05.2026_10.35.28_REC.mp4",
      image: "Screenshot 2026-05-12 102118.png",
    },
    {
      title: "AI Resume Analyzer",
      description: "AI-powered resume analysis tool using OpenAI GPT for intelligent feedback",
      tech: ["FastAPI", "OpenAI", "Python"],
      github: "https://github.com/ayushraj/resume-analyzer",
      demo: "https://demo.example.com",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-glow mb-4">
            My <span className="text-neon">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-neon mx-auto shadow-neon" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-neon/10 text-neon text-xs rounded-full border border-neon/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-background/50 border border-neon/30 rounded-lg text-neon hover:border-neon hover:shadow-neon transition-all duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-neon/10 border border-neon/30 rounded-lg text-neon hover:bg-neon hover:text-background transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
