"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { FaGithub, FaExternalLinkAlt, FaMagic } from "react-icons/fa"
import ProjectExplainer from "./ProjectExplainer"
import ProjectSearch from "./ProjectSearch"

const projectsData = [

  {
  title: "Patna Piano Academy",
  description:
    "Patna Piano Academy is a premium piano learning platform that allows students to explore piano classes, book online or offline sessions, make secure payments through Razorpay, and manage their bookings through a student dashboard. It also includes a teacher admin dashboard for managing students, bookings, classes, and payments.",
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "MongoDB",
    "Tailwind CSS",
    "Razorpay",
    "JWT",
    "bcrypt"
  ],
  github: "https://github.com/ayushuttam6541-code/Patna_Piano_Academy",
  Live: "https://patna-piano-academy-gold.vercel.app/",
  image: "piano.jpeg",
},

     {
      title: "Makhana Marketplace ",
      description: "Makhana Marketplace is a full‑stack e‑commerce app for buying and selling makhana (fox nuts). It uses FastAPI and MongoDB on the backend, React + Vite on the frontend, integrates Stripe for payments, and includes optional AI features (semantic search, assistant, vector indexing",
      tech: ["MongoDB, React,FastAPI,STRIPE, TAilwindCSS, Vite, sematic search, vector indexing"],
      github: "https://github.com/ayushuttam6541-code/Makhana_Marketplace",
      Live: "https://makhana-marketplace.vercel.app",
      image: "Screenshot 2026-08-07 163838.png",
    },


    {
      title: "The Foundation Academy - School Management System ",
      description: "A complete full-stack web application for managing school operations, admissions, payments, and communication, Ai Chat Support. Built with modern technologies for scalability and performance.",
      tech: ["MongoDB, React, FastAPI,STRIPE, TailwindCSS,"],
      github: "https://github.com/ayushuttam6541-code/School_Management_System",
      Live: "https://school-management-system-two-dun.vercel.app/",
      image: "Screenshot 2026-08-07 200507.png",
    },


    {
      title: "BIGA_SITE ",
      description: "A full-stack eCommerce marketplace application built using the MERN stack (MongoDB, Express, React, Node.js).It supports authentication, role-based access (customer & shopkeeper), product management, cart system, wishlist, and order handling.",
      tech: ["MongoDB, Express, React, Node.js"],
      github: "https://github.com/ayush7662/BIGA_SITE",
      Live: "https://biga-site.vercel.app/",
      image: "Screenshot 2026-08-01 202519.png",
    },

     {
      title: "The Super app ",
      description: "A comprehensive multi-feature React application built with Next.js 15 that combines user registration, category selection, weather updates, news, notes, timers, and entertainment recommendations into a single cohesive dashboard.",
      tech: ["Next.js","javaScript","tailwindcss", "Axios","API"],
      github: "https://github.com/ayush7662/The-Super-App",
      Live: "https://the-super-app-riye.vercel.app",
      image: "Screenshot 2026-06-24 130352.png",
    },

    {
      title: "AI Guest Messaging Automation",
      description: "An AI-powered guest messaging automation backend built using FastAPI and PostgreSQL. The system processes guest messages received from platforms like Airbnb, WhatsApp, and Booking.com through a webhook API, classifies the intent of the message, generates AI-powered draft replies using Claude AI, and applies confidence-based escalation logic for automated handling.",
      tech: ["FastAPI","python","SQLALchemy", "PostgreSQL", "Claude AI"],
      github: "https://github.com/ayush7662/nistula-technical-assessment",
      Live: "https://nistula-technical-assessment-5eg6.onrender.com/docs",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    },

     {
      title: "🎙️ Customer Support Voice Agent with OpenAI Agents SDK",
      description: "Build an intelligent voice-enabled customer support agent that can answer questions from your documentation using Retrieval-Augmented Generation (RAG),mistralai/Mistral-7B-Instruct-v0.2, and HuggingFace latest Text-to-Speech models.This project demonstrates how to create a production-ready Voice AI system that crawls documentation websites, builds a searchable knowledge base, retrieves relevant information, and responds to users through both text and natural-sounding voice.",
      
      tech: ["Firecrawl","python","Qdrant", "edge_tts", "HuggingFace ApI key"],
      github: "https://github.com/ayush7662/customer_support_voice_Agent/tree/main",
      Live: "https://customer-support-voice-agent-vx2c.onrender.com/",
      image: "Screenshot 2026-06-21 214939.png",
    },
    {
      title: "chat-app",
      description: "A modern real-time chat application built with React (Vite) on the frontend and Node.js + Express + Socket.io on the backend.",

      tech: ["React.js","Node.js","MongoDB","Express.js","RestAPI","prism"],
      github: "https://github.com/ayush7662/chat-app",
      Live: " https://chat-app-indol-alpha.vercel.app/",
      image: "Screenshot 2026-06-15 210810.png",
    },
    {
      title: "Image Folder Manager",
      description: "A full-stack web application that allows users to securely manage image folders, upload images, and track storage usage.",
      tech: ["React.js","Node.js", "Express", "MongoDB"],
      github: "https://github.com/ayush7662/Image-Folder-Manager",
      Live: " https://image-folder-manager.vercel.app/dashboard",
      image: "Screenshot 2026-05-14 130906.png",
    },
    {
      title: "AI Site Builder",
      description: "An AI-powered website builder is a software tool that uses artificial intelligence to automatically generate, edit, preview, and deploy websites based on simple conversational prompts from the user.",
            tech: ["Node.js", "Express", "SQL", "React.js","Stripe","prism",],
         github: "https://github.com/ayush7662/AI_SITE_BUILDER",

      Live: "https://ai-site-builder-zeta.vercel.app",
      image: "Screenshot 2026-05-12 102118.png",
    },
    {
      title: "Vibe Check",
      description: "An AI-powered quiz platform that lets you create engaging quizzes instantly, uncover personality insights, and share with friends. Whether you're testing knowledge or exploring vibes, Vibe Check makes learning and self-discovery fun and interactive.",
      tech: ["Next.js", "Tailwind.css+ Redix UI"," Supabase","Google Gemini Flash 2.0","Framer Motion", "Python"],
      github: "https://github.com/ayush7662/Role-1--vibe-check",
      Live: "https://role-1-vibe-check.vercel.app/",
      image: "Screenshot 2026-06-15 212501.png",
    },
    {
      title: "Self-Driving Loan Onboarding Agent",
      description: "A prototype of an AI-powered loan onboarding agent that takes initiative and never hallucinates.Left panel: An intelligent chat agent that drives the conversation forwardRight panel: A live application form that fills in real-time as the agent works.",
      tech: ["React.js", "Vite"," Plain CSS","Mock data/APIs"],
      github: "https://github.com/ayush7662/Self-Driving-Loan-Onboarding-Agent",
      Live: "https://self-driving-loan-onboarding-agent.vercel.app/",
      image: "Screenshot 2026-06-15 215229.png",
    },
        {
      title: "Ai_interview_coach",
      description: "This is a simple chatbot project built using Next.js. It helps users practice interview questions in a chat format.The chatbot asks questions and gives feedback on answers, just like a real interview.",
      tech: ["React.js", "Node","API_KEY","MySQl","Prism"],
      github: "https://github.com/ayush7662/Ai_interview_coach",
      Live: " https://ai-interview-coach-osgh.vercel.app/",
      image: "Screenshot 2026-06-15 221619.png",
    },
      {
      title: "ai-summarizer-fullstack",
      description: "A full-stack AI-powered application that processes unstructured text and converts it into meaningful structured insights using Large Language Models.This project summarizes unstructured text, extracts key points, and detects sentiment (positive/negative/neutral) using AI.",
      tech:["React.js","Node.js","Express.js","OpenAi-API"],
      github: "https://github.com/ayush7662/ai-summarizer-fullstack",
      Live: " https://ai-summarizer-fullstack-1zeu.vercel.app/",
      image: "Screenshot 2026-06-15 221811.png",
    },
   
    
    
  ]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [explainerProject, setExplainerProject] = useState<{ name: string; isOpen: boolean }>({
    name: "",
    isOpen: false
  })
  const [filteredProjects, setFilteredProjects] = useState<any[]>([])

  useEffect(() => {
    setFilteredProjects(projectsData)
  }, [])

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
          <div className="mt-4 flex justify-center">
            <ProjectSearch projects={projectsData} onFilteredProjects={setFilteredProjects} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                  {project.tech.map((tech: string, techIndex: number) => (
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
                    href={project.Live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-neon/10 border border-neon/30 rounded-lg text-neon hover:bg-neon hover:text-background transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </motion.a>
                  <motion.button
                    onClick={() => setExplainerProject({ name: project.title.trim(), isOpen: true })}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-neon/10 border border-neon/30 rounded-lg text-neon hover:bg-neon/20 transition-all duration-300"
                    title="Explain with AI"
                  >
                    <FaMagic />
                    Explain
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectExplainer
        projectName={explainerProject.name}
        isOpen={explainerProject.isOpen}
        onClose={() => setExplainerProject({ name: "", isOpen: false })}
      />
    </section>
  )
}