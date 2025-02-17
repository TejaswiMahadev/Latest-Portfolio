"use client"

interface LandingPageProps {
  onEnter: () => void
}

export function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="pixel-frame p-8 text-center">
        <h1 className="text-4xl mb-4 animate-pulse text-white">Tejaswi Mahadev</h1>
        <p className="mb-8 text-white blink">Welcome to My Portfolio</p>
        <button onClick={onEnter} className="pixel-button text-2xl px-8 py-4">
          Enter
        </button>
      </div>
    </section>
  )
}

