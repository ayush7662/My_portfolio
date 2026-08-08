export const portfolioData = {
  // Basic Information
  name: "Ayush Raj",
  title: "Software Developer & AI Engineer",
  email: "kamalayush65@gmail.com",
  phone: "+91 8709610659",
  location: "India",
  github: "https://github.com/ayushraj",
  linkedin: "https://linkedin.com/in/ayushraj",
  leetcode: "https://leetcode.com/ayushraj",

  // About
  about: `I am a passionate Software Developer with a strong foundation in both Civil Engineering and Computer Science. My journey began with a B.Tech in Civil Engineering, but my fascination with technology and problem-solving led me to transition into Software Development and AI.

Over the years, I have developed expertise in building scalable web applications, implementing machine learning models, and creating AI-powered solutions. I specialize in the MERN stack, Python, FastAPI, and modern AI technologies like LangChain and OpenAI APIs.

My goal is to leverage technology to solve real-world problems and create innovative solutions that make a positive impact. I am always eager to learn new technologies and take on challenging projects.`,

  // Education
  education: [
    {
      degree: "B.Tech Civil Engineering",
      institution: "NIT ROURKELA",
      period: "BTech",
      details: "Transitioned to Software Development"
    }
  ],

  // Skills
  skills: {
    programmingLanguages: ["Python", "JavaScript", "TypeScript", "SQL"],
    frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
    databases: ["MongoDB", "PostgreSQL", "MySQL"],
    aiMl: ["Python", "LangChain", "OpenAI API", "Hugging Face", "Vector Databases", "RAG Systems"],
    tools: ["Git", "Docker", "VS Code", "Postman"]
  },

  // Projects
  projects: [
    {
      name: "Makhana Marketplace",
      description: "Makhana Marketplace is a full-stack e-commerce app for buying and selling makhana (fox nuts). It uses FastAPI and MongoDB on the backend, React + Vite on the frontend, integrates Stripe for payments, and includes optional AI features (semantic search, assistant, vector indexing",
      technologies: ["MongoDB", "React", "FastAPI", "Stripe", "TailwindCSS", "Vite", "Semantic Search", "Vector Indexing"],
      features: [
        "E-commerce platform for makhana trading",
        "Stripe payment integration",
        "AI-powered semantic search",
        "Vector indexing for intelligent search",
        "FastAPI backend with MongoDB",
        "React + Vite frontend"
      ],
      aiComponents: "Optional AI features including semantic search and vector indexing for intelligent product discovery",
      architecture: "Full-stack application with FastAPI backend, MongoDB database, React + Vite frontend, Stripe payments, and AI-powered search capabilities",
      github: "https://github.com/ayushuttam6541-code/Makhana_Marketplace",
      demo: "https://makhana-marketplace.vercel.app"
    },
    {
      name: "The Foundation Academy - School Management System",
      description: "A complete full-stack web application for managing school operations, admissions, payments, and communication, AI Chat Support. Built with modern technologies for scalability and performance.",
      technologies: ["MongoDB", "React", "FastAPI", "Stripe", "TailwindCSS"],
      features: [
        "School operations management",
        "Admissions system",
        "Payment processing with Stripe",
        "AI Chat Support",
        "Communication system",
        "Scalable architecture"
      ],
      aiComponents: "AI Chat Support for automated student and parent assistance",
      architecture: "Full-stack school management system with FastAPI backend, MongoDB database, React frontend, Stripe payments, and AI chat integration",
      github: "https://github.com/ayushuttam6541-code/School_Management_System",
      demo: "https://school-management-system-omega-blush.vercel.app"
    },
    {
      name: "BIGA_SITE",
      description: "A full-stack eCommerce marketplace application built using the MERN stack (MongoDB, Express, React, Node.js). It supports authentication, role-based access (customer & shopkeeper), product management, cart system, wishlist, and order handling.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      features: [
        "User authentication",
        "Role-based access control",
        "Product management",
        "Shopping cart",
        "Wishlist functionality",
        "Order handling",
        "MERN stack architecture"
      ],
      aiComponents: "No AI components - traditional e-commerce platform",
      architecture: "MERN stack e-commerce platform with MongoDB, Express.js backend, React frontend, and Node.js server",
      github: "https://github.com/ayush7662/BIGA_SITE",
      demo: "https://biga-site.vercel.app/"
    },
    {
      name: "The Super app",
      description: "A comprehensive multi-feature React application built with Next.js 15 that combines user registration, category selection, weather updates, news, notes, timers, and entertainment recommendations into a single cohesive dashboard.",
      technologies: ["Next.js", "JavaScript", "TailwindCSS", "Axios", "API"],
      features: [
        "User registration and authentication",
        "Category selection",
        "Weather updates",
        "News feed",
        "Notes system",
        "Timers",
        "Entertainment recommendations",
        "Unified dashboard"
      ],
      aiComponents: "No AI components - multi-feature utility dashboard",
      architecture: "Next.js 15 application with multiple integrated features, API integrations for weather and news, and unified state management",
      github: "https://github.com/ayush7662/The-Super-App",
      demo: "https://the-super-app-riye.vercel.app"
    },
    {
      name: "AI Guest Messaging Automation",
      description: "An AI-powered guest messaging automation backend built using FastAPI and PostgreSQL. The system processes guest messages received from platforms like Airbnb, WhatsApp, and Booking.com through a webhook API, classifies the intent of the message, generates AI-powered draft replies using Claude AI, and applies confidence-based escalation logic for automated handling.",
      technologies: ["FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "Claude AI"],
      features: [
        "Webhook API for message intake",
        "Multi-platform integration (Airbnb, WhatsApp, Booking.com)",
        "Intent classification",
        "AI-powered reply generation with Claude AI",
        "Confidence-based escalation",
        "Automated guest communication"
      ],
      aiComponents: "Uses Claude AI for intelligent message generation, intent classification, and automated reply drafting",
      architecture: "FastAPI backend with PostgreSQL database, webhook API for message intake, Claude AI integration for natural language processing and response generation",
      github: "https://github.com/ayush7662/nistula-technical-assessment",
      demo: "https://nistula-technical-assessment-5eg6.onrender.com/docs"
    },
    {
      name: "Customer Support Voice Agent with OpenAI Agents SDK",
      description: "Build an intelligent voice-enabled customer support agent that can answer questions from your documentation using Retrieval-Augmented Generation (RAG), mistralai/Mistral-7B-Instruct-v0.2, and HuggingFace latest Text-to-Speech models. This project demonstrates how to create a production-ready Voice AI system that crawls documentation websites, builds a searchable knowledge base, retrieves relevant information, and responds to users through both text and natural-sounding voice.",
      technologies: ["Firecrawl", "Python", "Qdrant", "edge_tts", "HuggingFace API"],
      features: [
        "Documentation crawling with Firecrawl",
        "RAG (Retrieval-Augmented Generation)",
        "Mistral-7B-Instruct-v0.2 for text generation",
        "HuggingFace Text-to-Speech",
        "Vector database (Qdrant)",
        "Voice-enabled responses",
        "Knowledge base building"
      ],
      aiComponents: "Full AI stack with RAG, Mistral-7B LLM, HuggingFace TTS, and vector database for intelligent voice responses",
      architecture: "Production-ready Voice AI system with Firecrawl for web crawling, Qdrant vector database, Mistral-7B for text generation, and HuggingFace TTS for voice output",
      github: "https://github.com/ayush7662/customer_support_voice_Agent/tree/main",
      demo: "https://customer-support-voice-agent-vx2c.onrender.com/"
    },
    {
      name: "chat-app",
      description: "A modern real-time chat application built with React (Vite) on the frontend and Node.js + Express + Socket.io on the backend.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "REST API", "Prisma"],
      features: [
        "Real-time messaging with Socket.io",
        "User authentication",
        "Chat rooms",
        "Message persistence with MongoDB",
        "Modern React UI with Vite",
        "REST API backend"
      ],
      aiComponents: "No AI components - traditional real-time chat application",
      architecture: "Real-time chat application with React + Vite frontend, Node.js + Express backend, Socket.io for real-time communication, MongoDB for data persistence, and Prisma ORM",
      github: "https://github.com/ayush7662/chat-app",
      demo: "https://chat-app-indol-alpha.vercel.app/"
    },
    {
      name: "Image Folder Manager",
      description: "A full-stack web application that allows users to securely manage image folders, upload images, and track storage usage.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB"],
      features: [
        "Image folder management",
        "Secure image upload",
        "Storage usage tracking",
        "Folder organization",
        "User authentication"
      ],
      aiComponents: "No AI components - file management application",
      architecture: "Full-stack image management system with React frontend, Node.js + Express backend, MongoDB for data storage, and secure file upload handling",
      github: "https://github.com/ayush7662/Image-Folder-Manager",
      demo: "https://image-folder-manager.vercel.app/dashboard"
    },
    {
      name: "AI Site Builder",
      description: "An AI-powered website builder is a software tool that uses artificial intelligence to automatically generate, edit, preview, and deploy websites based on simple conversational prompts from the user.",
      technologies: ["Node.js", "Express", "SQL", "React.js", "Stripe", "Prisma"],
      features: [
        "Conversational website generation",
        "AI-powered design suggestions",
        "Real-time preview",
        "One-click deployment",
        "Stripe integration for payments",
        "SQL database for project storage"
      ],
      aiComponents: "AI-powered website generation from conversational prompts, automated design suggestions",
      architecture: "AI website builder with Node.js + Express backend, SQL database, React frontend, AI integration for conversational site generation, and Stripe for payments",
      github: "https://github.com/ayush7662/AI_SITE_BUILDER",
      demo: "https://ai-site-builder-zeta.vercel.app"
    },
    {
      name: "Vibe Check",
      description: "An AI-powered quiz platform that lets you create engaging quizzes instantly, uncover personality insights, and share with friends. Whether you're testing knowledge or exploring vibes, Vibe Check makes learning and self-discovery fun and interactive.",
      technologies: ["Next.js", "TailwindCSS", "Radix UI", "Supabase", "Google Gemini Flash 2.0", "Framer Motion", "Python"],
      features: [
        "AI-powered quiz creation",
        "Personality insights",
        "Social sharing",
        "Interactive UI with Framer Motion",
        "Supabase backend",
        "Google Gemini Flash 2.0 for AI"
      ],
      aiComponents: "Uses Google Gemini Flash 2.0 for AI-powered quiz generation and personality analysis",
      architecture: "Next.js application with Supabase backend, Google Gemini Flash 2.0 for AI features, Radix UI components, and Framer Motion for animations",
      github: "https://github.com/ayush7662/Role-1--vibe-check",
      demo: "https://role-1-vibe-check.vercel.app/"
    },
    {
      name: "Self-Driving Loan Onboarding Agent",
      description: "A prototype of an AI-powered loan onboarding agent that takes initiative and never hallucinates. Left panel: An intelligent chat agent that drives the conversation forward. Right panel: A live application form that fills in real-time as the agent works.",
      technologies: ["React.js", "Vite", "Plain CSS", "Mock data/APIs"],
      features: [
        "AI-driven conversation",
        "Real-time form filling",
        "Anti-hallucination logic",
        "Loan onboarding automation",
        "Split-panel interface"
      ],
      aiComponents: "AI agent that drives conversation and fills forms in real-time with anti-hallucination safeguards",
      architecture: "React + Vite application with AI chat agent, real-time form synchronization, and anti-hallucination logic",
      github: "https://github.com/ayush7662/Self-Driving-Loan-Onboarding-Agent",
      demo: "https://self-driving-loan-onboarding-agent.vercel.app/"
    },
    {
      name: "Ai_interview_coach",
      description: "This is a simple chatbot project built using Next.js. It helps users practice interview questions in a chat format. The chatbot asks questions and gives feedback on answers, just like a real interview.",
      technologies: ["React.js", "Node", "API_KEY", "MySQL", "Prisma"],
      features: [
        "Interview practice chatbot",
        "Question generation",
        "Answer feedback",
        "Real interview simulation",
        "MySQL database with Prisma"
      ],
      aiComponents: "AI-powered interview coaching with question generation and answer feedback",
      architecture: "Next.js chatbot with AI integration for interview practice, MySQL database with Prisma ORM, and real-time feedback system",
      github: "https://github.com/ayush7662/Ai_interview_coach",
      demo: "https://ai-interview-coach-osgh.vercel.app/"
    },
    {
      name: "ai-summarizer-fullstack",
      description: "A full-stack AI-powered application that processes unstructured text and converts it into meaningful structured insights using Large Language Models. This project summarizes unstructured text, extracts key points, and detects sentiment (positive/negative/neutral) using AI.",
      technologies: ["React.js", "Node.js", "Express.js", "OpenAI API"],
      features: [
        "Text summarization",
        "Key point extraction",
        "Sentiment analysis",
        "Unstructured text processing",
        "Large Language Model integration"
      ],
      aiComponents: "Uses OpenAI API for text summarization, key point extraction, and sentiment analysis",
      architecture: "Full-stack AI text processing application with React frontend, Node.js + Express + Express backend, and OpenAI API integration",
      github: "https://github.com/ayush7662/ai-summarizer-fullstack",
      demo: "https://ai-summarizer-fullstack-1zeu.vercel.app/"
    }
  ],

  // Experience
  experience: [
    {
      title: "Software Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description: "Developing scalable web applications and AI-powered solutions using MERN stack and Python."
    },
    {
      title: "AI Engineer Intern",
      company: "AI Startup",
      period: "2022 - 2023",
      description: "Worked on implementing machine learning models and integrating OpenAI APIs for various applications."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2021 - 2022",
      description: "Built responsive web applications and RESTful APIs using Node.js, Express, and React."
    }
  ],

  // Achievements
  achievements: [
    "Solved 500+ DSA problems on LeetCode and other platforms",
    "Built multiple AI-powered applications integrating OpenAI, Claude, and custom ML models",
    "Developed end-to-end full stack web applications using MERN stack",
    "Implemented machine learning projects for real-world problems",
    "Transitioned from Civil Engineering to Software Development successfully"
  ],

  // Statistics
  statistics: {
    projectsCompleted: "50+",
    technologiesLearned: "20+",
    codingProblemsSolved: "500+"
  },

  // Core Strengths
  coreStrengths: [
    "Full Stack Development (MERN)",
    "AI/ML Engineering",
    "Python Development",
    "API Development",
    "Problem Solving",
    "Quick Learner",
    "Adaptable to new technologies"
  ],

  // Why Hire
  whyHire: `Ayush brings a unique combination of full-stack development skills and AI/ML expertise. With a strong foundation in both traditional web development and cutting-edge AI technologies, he can build complete solutions from frontend to backend, including intelligent features.

His transition from Civil Engineering to Software Development demonstrates adaptability and passion for technology. He has practical experience building production-ready applications, implementing machine learning models, and integrating AI APIs.

Ayush is a quick learner who stays updated with modern technologies and is always ready to take on challenging projects. His problem-solving skills and 500+ DSA problems showcase his analytical thinking abilities.`,

  // Contact
  contact: {
    email: "kamalayush65@gmail.com",
    phone: "+91 8709610659",
    location: "India",
    github: "https://github.com/ayushraj",
    linkedin: "https://linkedin.com/in/ayushraj",
    leetcode: "https://leetcode.com/ayushraj"
  }
}
