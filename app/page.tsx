
// "use client"

// import { useState } from "react"
// import { About } from "./components/About"
// import { Skills } from "./components/Skills"
// import { Projects } from "./components/Projects"
// import { Contact } from "./components/Contact"

// export default function Home() {
//   const [showContent, setShowContent] = useState(false)

//   const handleEnter = () => {
//     setShowContent(true)
//     setTimeout(() => {
//       document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
//     }, 100)
//   }

//   return (
//     <main className="relative">
//       {!showContent && (
//         <section id="home" className="min-h-screen flex items-center justify-center">
//           <div className="pixel-frame p-8 text-center max-w-2xl w-full">
//             <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 animate-pulse text-white">Tejaswi Mahadev</h1>
//             <p className="mb-8 text-white blink text-lg md:text-xl">Welcome to My Website</p>
//             <button onClick={handleEnter} className="pixel-button text-xl md:text-2xl px-6 py-3 md:px-8 md:py-4">
//               Enter
//             </button>
//           </div>
//         </section>
//       )}
//       {showContent && (
//         <div className="space-y-24 py-24">
//           <About />
//           <Skills />
//           <Projects />
//           <Contact />
//         </div>
//       )}
//     </main>
//   )
// }

"use client"

import { useState } from "react"
import { LandingPage } from "./components/LandingPage"
import { Navbar } from "./components/Navbar"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  const handleEnter = () => {
    setShowContent(true)
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <main className="relative">
      {!showContent && <LandingPage onEnter={handleEnter} />}
      <Navbar isVisible={showContent} />
      {showContent && (
        <>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </main>
  )
}

