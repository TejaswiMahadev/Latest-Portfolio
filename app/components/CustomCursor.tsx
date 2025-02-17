"use client"

import { useState, useEffect } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = () => {
      const target = document.elementFromPoint(position.x, position.y)
      setIsPointer(window.getComputedStyle(target as Element).cursor === "pointer")
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", updateCursorType)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", updateCursorType)
    }
  }, [position.x, position.y])

  return (
    <div
      className={`custom-cursor ${isPointer ? "pointer" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="cursor-body"></div>
    </div>
  )
}

