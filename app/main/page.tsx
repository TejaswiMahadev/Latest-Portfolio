"use client"

import { useState } from "react"
import Image from "next/image"

const projects = [
  { id: 1, title: "Project 1", gif: "/placeholder.svg" },
  { id: 2, title: "Project 2", gif: "/placeholder.svg" },
  { id: 3, title: "Project 3", gif: "/placeholder.svg" },
]

export default function MainContent() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="min-h-screen p-8">
      <nav className="pixel-frame mb-8 p-4 flex justify-around">
        {["about", "projects", "skills", "contact"].map((section) => (
          <button
            key={section}
            className={`pixel-button ${activeSection === section ? "bg-blue-500" : ""}`}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>

      <main>
        {activeSection === "about" && (
          <div className="pixel-frame p-4">
            <h2 className="text-2xl mb-4 text-white">About Me</h2>
            <p className="text-white">
              &apos;I'm a pixel artist and web developer passionate about creating retro-inspired digital experiences.
            </p>
          </div>
        )}

        {activeSection === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="pixel-frame p-4 transition-transform hover:scale-105">
                <h3 className="text-xl mb-2 text-white">{project.title}</h3>
                <Image
                  src={project.gif || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        )}

        {activeSection === "skills" && (
          <div className="pixel-frame p-4">
            <h2 className="text-2xl mb-4 text-white">Skills</h2>
            <ul className="list-disc list-inside text-white">
              <li>Pixel Art</li>
              <li>Web Development</li>
              <li>Game Design</li>
              <li>Animation</li>
            </ul>
          </div>
        )}

        {activeSection === "contact" && (
          <div className="pixel-frame p-4">
            <h2 className="text-2xl mb-4 text-white">Contact Me</h2>
            <div className="flex justify-around mb-8">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="pixel-button">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="pixel-button">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="pixel-button">
                GitHub
              </a>
            </div>
            <form className="pixel-text-box">
              <input type="email" placeholder="Your email" className="w-full mb-4 p-2 bg-black text-white" />
              <textarea placeholder="Your message" className="w-full mb-4 p-2 bg-black text-white" rows={4}></textarea>
              <button type="submit" className="pixel-button w-full">
                Send
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  )
}
