
"use client"

import { useState } from "react"

const skills = [
  { name: "Artificial Intelligence", description: " Experienced in building intelligent systems that leverage AI models to solve real-world problems, with a strong focus on model optimization and deployment." },
  { name: "Machine Learning", description: "Skilled in designing, training, and deploying ML models for predictive analytics, recommendation systems, and data-driven decision-making" },
  { name: "Deep Learning", description: "Proficient in neural networks, computer vision, and advanced architectures like CNNs, RNNs, and transformers for complex AI applications." },
  { name: "Natural Language Processing", description: "Expertise in text processing, sentiment analysis, chatbot development, and language models for human-like text generation and understanding." },
  { name: "Generative AI", description: "Experienced in using AI to generate text, images, and other creative content, leveraging models like GPT, Stable Diffusion, and custom fine-tuned architectures." },
  { name: "LLM Engineering", description: "Specialized in optimizing and deploying large language models (LLMs) for various applications, including AI chatbots, summarization, and intelligent automation." },
  { name: "Cloud Computing", description: "Knowledgeable in managing AI/ML models on GCP, and Azure for scalable and efficient solutions." },
  { name: "DevOPs", description: " Containerization (Docker, Kubernetes), and infrastructure automation for seamless AI/ML application deployment." },
  { name: "Web Development", description: "Skilled in building web applications , integrating AI-powered features for dynamic user experiences." }
]

const clubs = [
  { name: "Google Developer Student Club (2022 - 2024)", description: " Actively contributed to GDSC by collaborating on tech projects, participating workshops on AI, machine learning, and web development. Engaged with a community of developers to learn, build, and share innovative solutions." },
  { name: "Microsoft Student Club (2024 - present)", description: "Engaging in tech-driven initiatives,participating in workshops. Collaborating with peers to explore Microsoft technologies and build innovative solutions." },
  { name: "Google Developer Group (2024 - present)", description: " Actively involved in GDG events, networking with industry professionals, and contributing to AI and web development discussions. Participating in hackathons, workshops, and community-driven projects to enhance technical skills and share knowledge." },
]

const publications = [
  { name: "Portfolio Optimization using ML & QML", description: "How ML and QML impacts Financial Portfolio Optimization", link: "https://example.com/portfolio-optimization" },
  
]

const blogs = [
  { name: "RLHF: The Secret Sauce Making AI Actually Useful (and Less Likely to Go Rogue)", description: "Understanding RLHF", link: "https://medium.com/@tejaswimahadev9/rlhf-the-secret-sauce-making-ai-actually-useful-and-less-likely-to-go-rogue-20a90246ede4" },
  { name: "The DeepSeek Revolution: The AI Game Changer You Need to Know About", description: "AI tool powerhouse ", link: "https://dev.to/nitdgplug/the-deepseek-revolution-the-ai-game-changer-you-need-to-know-about-1f57" },
]

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-16">
      <div className="space-y-8 max-w-6xl w-full">
        <div className="pixel-frame p-8">
          <h2 className="text-3xl mb-8 text-white text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} description={skill.description} />
            ))}
          </div>
        </div>

        <div className="pixel-frame p-8">
          <h2 className="text-3xl mb-8 text-white text-center">Clubs & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clubs.map((club, index) => (
              <SkillCard key={index} name={club.name} description={club.description} />
            ))}
          </div>
        </div>

        <div className="pixel-frame p-8">
          <h2 className="text-3xl mb-8 text-white text-center">Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {publications.map((publication, index) => (
              <SkillCard key={index} name={publication.name} description={publication.description} link={publication.link} />
            ))}
          </div>
        </div>

        <div className="pixel-frame p-8">
          <h1 className="text-3xl mb-8 text-white text-center">Blogs</h1>
          <p className="text-3xl mb-8 text-white text-center">That I have either written or read</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogs.map((blog, index) => (
              <SkillCard key={index} name={blog.name} description={blog.description} link={blog.link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ name, description, link }: { name: string; description: string; link?: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="pixel-button p-4 cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className="text-lg font-bold">{name}</h4>
      {isHovered && (
        <div className="absolute left-0 right-0 bottom-full mb-2 p-2 bg-black text-white text-sm pixel-frame z-10">
          {description}
        </div>
      )}
      {link && (
        <a href={link} target="_blank" className="text-blue-400 hover:underline text-sm block mt-2">Read more</a>
      )}
    </div>
  )
}

export default Skills;
