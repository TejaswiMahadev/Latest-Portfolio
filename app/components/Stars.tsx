// "use client"

// import { useState, useEffect } from "react"

// interface StarsProps {
//   count: number
// }

// export function Stars({ count }: StarsProps) {
//   const [stars, setStars] = useState<{ top: string; left: string; size: string; animationDuration: string }[]>([])

//   useEffect(() => {
//     const newStars = Array.from({ length: 200 }, () => ({
//       top: `${Math.random() * 100}%`,
//       left: `${Math.random() * 100}%`,
//       size: `${Math.random() * 2 + 1}px`,
//       animationDuration: `${Math.random() * 3 + 2}s`,
//     }))
//     setStars(newStars)
//   }, [])

//   return (
//     <>
//       {stars.map((star, index) => (
//         <div
//           key={index}
//           className="star absolute bg-white rounded-full"
//           style={{
//             top: star.top,
//             left: star.left,
//             width: star.size,
//             height: star.size,
//             animationDuration: star.animationDuration,
//           }}
//         />
//       ))}
//     </>
//   )
// }
import type React from "react"

// Define custom CSS properties type
type CSSProperties = React.CSSProperties & {
  [key: `--${string}`]: string | number
}

interface StarProps {
  x: number
  y: number
  size: number
  color: string
  twinkleDuration: number
}

const Star: React.FC<StarProps> = ({ x, y, size, color, twinkleDuration }) => (
  <div
    className="absolute star"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      borderRadius: "50%",
      "--twinkle-duration": `${twinkleDuration}s`,
    } as CSSProperties}
  />
)

interface StarsProps {
  count: number
}

export const Stars: React.FC<StarsProps> = ({ count }) => {
  const stars = Array.from({ length: count }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    color: Math.random() > 0.5 ? "#FFFFFF" : "#87CEEB",
    twinkleDuration: Math.random() * 3 + 2,
  }))

  return (
    <div className="absolute inset-0">
      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}
    </div>
  )
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
  const clouds = Array.from({ length: count }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 50,
    width: Math.random() * 100 + 50,
    height: Math.random() * 40 + 20,
    opacity: Math.random() * 0.5 + 0.3,
    speed: Math.random() * 20 + 10,
  }))

  return (
    <div className="absolute inset-0">
      {clouds.map((cloud, index) => (
        <Cloud key={index} {...cloud} />
      ))}
    </div>
  )
}