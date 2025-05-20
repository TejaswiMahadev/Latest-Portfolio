"use client"

import { useState } from "react"
import Image from "next/image"

interface ProjectProps {
  name: string
  description: string
  thumbnail: string
  gif: string
  liveDemo: string
  sourceCode: string
}

const projects: ProjectProps[] = [
  {
    name: "SWIFT - Budget Tracking Application",
    description: "Swift simplifies budgeting with expense tracking, insights, and personalized tips using SVM, helping users manage finances and maximize savings.",
    thumbnail: "/cat.webp",
    gif: "/money.gif",
    liveDemo: "https://budgettracking.onrender.com/",
    sourceCode: "https://github.com/TejaswiMahadev/Budgettracking",
  },
  {
    name: "CURA - Healthcare Assistant",
    description: "CURA is an AI-powered healthcare chatbot offering instant symptom analysis, medication guidance, and doctor recommendations for personalized care.",
    thumbnail: "/cat.webp",
    gif: "/health.gif",
    liveDemo: "https://cura-jl65.onrender.com",
    sourceCode: "https://github.com/TejaswiMahadev/Cura",
  },
  {
    name: "ShowShuffle",
    description: "A movie recommendation app using cosine similarity, offering personalized suggestions with an interactive and user-friendly interface.",
    thumbnail: "/cat.webp",
    gif: "/movie.gif",
    liveDemo: "https://showshuffle.onrender.com/",
    sourceCode: "https://github.com/TejaswiMahadev/ShowShuffle",
  },
  {
    name: "Data Enrichment Tool",
    description: "The CSV Enrichment Tool automates data augmentation by extracting info via web searches and LLMs, enriching datasets with structured results.",
    thumbnail: "/cat.webp",
    gif: "/data.gif",
    liveDemo: "https://csv-enrichment-tool.onrender.com/",
    sourceCode: "https://github.com/TejaswiMahadev/CSV-Enrichment-Tool",

  },
  {
    name: "Yap",
    description: "This tool processes video files by transcribing audio using the Deepgram API, and replacing the original audio with AI-generated voice via the Eleven Labs API..",
    thumbnail: "/cat.webp",
    gif: "/talk.gif",
    liveDemo: "https://github.com/TejaswiMahadev/AudioToTextToSpeech",
    sourceCode:"https://github.com/TejaswiMahadev/AudioToTextToSpeech",

  },
  {
    name: "CipherSolver",
    description: "CipherSolver is a tool for decrypting encoded messages and solving cryptographic puzzles using natural language processing.",
    thumbnail: "/cat.webp",
    gif: "/crypt.gif",
    liveDemo: "https://ciphersolver.onrender.com",
    sourceCode:"https://github.com/TejaswiMahadev/CipherSolver",

  },
  {
    name: "Telegram AI-Agent",
    description: "A Telegram AI Agent is a smart bot that automates tasks, answers queries, and engages users through AI-driven conversations on Telegram.",
    thumbnail: "/cat.webp",
    gif: "/telegram.webp",
    liveDemo: "https://www.linkedin.com/posts/tejaswi-mahadev_ai-conversationalai-chatbots-activity-7291114934032084992-CTZt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE52a_MBpN79VFWTXDkHGwlLSxVvHJSbq0s",
    sourceCode:"https://github.com/TejaswiMahadev/Telegram-AI-Agent",

  },
    {
    name: "Graphly",
    description: "A 3D Knowledge Graph Builder built using Google Gemini , LangChain and Neo4j",
    thumbnail: "/cat.webp",
    gif: "/know.webp",
    liveDemo: "https://graphly-axpk.onrender.com",
    sourceCode:"https://github.com/TejaswiMahadev/Graphly",

  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-16">
      <div className="pixel-frame p-8 max-w-6xl w-full">
        <h2 className="text-4xl mb-12 text-white text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ name, description, thumbnail, gif, liveDemo, sourceCode }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="pixel-frame p-4 flex flex-col h-full transition-transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl mb-2 text-white">{name}</h3>
      <p className="text-sm mb-4 text-white flex-grow">{description}</p>
      <div className="relative aspect-video mb-4">
        <Image src={isHovered ? gif : thumbnail} alt={name} layout="fill" objectFit="cover" className="pixel-art" />
      </div>
      <div className="flex justify-between mt-auto">
        <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="pixel-button text-sm px-3 py-2">
          Live Demo
        </a>
        <a href={sourceCode} target="_blank" rel="noopener noreferrer" className="pixel-button text-sm px-3 py-2">
          Source Code
        </a>
      </div>
    </div>
  )
}

