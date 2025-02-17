import type React from "react"

// Define custom CSS properties type
type CSSProperties = React.CSSProperties & {
  [key: `--${string}`]: string | number
}

interface CloudProps {
  x: number
  y: number
  width: number
  height: number
  opacity: number
  speed: number
}

const Cloud: React.FC<CloudProps> = ({ x, y, width, height, opacity, speed }) => (
  <div
    className="absolute cloud"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${width}px`,
      height: `${height}px`,
      opacity,
      backgroundColor: "#B19CD9",
      borderRadius: "50%",
      boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
      "--float-distance": `${width / 2}px`,
      "--float-duration": `${speed}s`,
    } as CSSProperties}
  />
)

interface CloudsProps {
  count: number
}

export const Clouds: React.FC<CloudsProps> = ({ count }) => {
  const clouds = Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 50, // Keep clouds in upper half of screen
    width: Math.random() * 100 + 50, // Width between 50-150px
    height: Math.random() * 40 + 20, // Height between 20-60px
    opacity: Math.random() * 0.5 + 0.3, // Opacity between 0.3-0.8
    speed: Math.random() * 20 + 10, // Animation duration between 10-30s
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      {clouds.map((cloud, index) => (
        <Cloud key={index} {...cloud} />
      ))}
    </div>
  )
}