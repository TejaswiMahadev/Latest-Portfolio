import Link from "next/link"
import { FaGithub, FaLinkedin, FaMedal } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import type React from "react" // Import React

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
      <div className="pixel-frame p-8 max-w-4xl">
        <h2 className="text-4xl mb-6 text-white">About Me</h2>
        <div className="pixel-text-box mb-8 p-6">
          <p className="text-white text-lg leading-relaxed">
          Hi, I’m Tejaswi Mahadev—part machine learning engineer, part data detective, and full-time caffeine enthusiast. I specialize in turning messy datasets into meaningful insights, training AI models that (mostly) don’t hallucinate, and building intelligent systems that make life easier (or at least more interesting).
, my projects bridge the gap between innovation and real-world impact. When I’m not wrangling data, I’m leveling up in playing guitar, tinkering with new tech, or pretending I have a sleep schedule.

Let’s connect and make AI do something awesome—preferably before it tries to take over the world. 
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <SocialIcon href="https://github.com/TejaswiMahadev" icon={<FaGithub />} />
          <SocialIcon href="https://www.linkedin.com/in/tejaswi-mahadev/" icon={<FaLinkedin />} />
          <SocialIcon href="https://leetcode.com/u/TejaswiMahadev/" icon={<SiLeetcode />} />
          <SocialIcon href="https://developers.google.com/profile/u/TejaswiMahadev" icon={<FaMedal />} />
          <Link href="/Myresume.pdf" className="pixel-button" download>
            Resume
          </Link>
        </div>
      </div>
    </section>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="pixel-button p-2" target="_blank" rel="noopener noreferrer">
      {icon}
    </Link>
  )
}

