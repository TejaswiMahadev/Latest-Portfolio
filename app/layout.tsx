// import "./globals.css"
// import type { Metadata } from "next"
// import type React from "react"
// import { Stars } from "./components/Stars"
// import { Navbar } from "./components/Navbar"


// export const metadata: Metadata = {
//   title: "Tejaswi Mahadev",
//   description: "A retro-inspired pixel art portfolio of Tejaswi Mahadev",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <div className="min-h-screen bg-gradient-to-b from-[#000033] to-[#c912b1] relative overflow-hidden">
//           <Stars count={800} />
//           <PixelMoon />
//           <Navbar isVisible={true} />

     
//           {children}
//         </div>
//       </body>
//     </html>
//   )
// }

// function PixelMoon() {
//   return (
//     <div className="absolute top-10 left-10">
//       <svg width="128" height="128" viewBox="0 0 32 32" className="pixel-art">
//         <defs>
//           <pattern id="moonPixel" width="1" height="1" patternUnits="userSpaceOnUse">
//             <rect width="1" height="1" fill="#FFF9C4" />
//           </pattern>
//         </defs>
//         {/* Main moon shape */}
//         <path d="
//           M8,8 h16 v16 h-16 z
//           M12,6 h8 v2 h-8 z
//           M6,12 h2 v8 h-2 z
//           M24,12 h2 v8 h-2 z
//           M12,24 h8 v2 h-8 z
//         " fill="url(#moonPixel)" />
//         {/* Craters */}
//         <rect x="14" y="12" width="2" height="2" fill="#FFE082" />
//         <rect x="18" y="16" width="2" height="2" fill="#FFE082" />
//         <rect x="12" y="18" width="2" height="2" fill="#FFE082" />
//       </svg>
//     </div>
//   )
// }

import "./globals.css"
import type { Metadata } from "next"
import type React from "react"
import { Stars } from "./components/Stars"
import { Navbar } from "./components/Navbar"

export const metadata: Metadata = {
  title: "Tejaswi Mahadev",
  description: "A retro-inspired pixel art portfolio of Tejaswi Mahadev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-[#000033] to-[#c912b1] relative overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <Stars count={800} />
        <PixelMoon />
        <Navbar isVisible={true} />
        <main className="w-full max-w-4xl flex-1 flex flex-col items-center">{children}</main>
      </body>
    </html>
  )
}

function PixelMoon() {
  return (
    <div className="absolute top-5 left-5 sm:top-10 sm:left-10 md:top-14 md:left-14">
      <svg width="96" height="96" viewBox="0 0 32 32" className="pixel-art sm:w-[128px] sm:h-[128px]">
        <defs>
          <pattern id="moonPixel" width="1" height="1" patternUnits="userSpaceOnUse">
            <rect width="1" height="1" fill="#FFF9C4" />
          </pattern>
        </defs>
        <path d="
          M8,8 h16 v16 h-16 z
          M12,6 h8 v2 h-8 z
          M6,12 h2 v8 h-2 z
          M24,12 h2 v8 h-2 z
          M12,24 h8 v2 h-8 z
        " fill="url(#moonPixel)" />
        <rect x="14" y="12" width="2" height="2" fill="#FFE082" />
        <rect x="18" y="16" width="2" height="2" fill="#FFE082" />
        <rect x="12" y="18" width="2" height="2" fill="#FFE082" />
      </svg>
    </div>
  )
}
