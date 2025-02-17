

// "use client"

// import Link from "next/link"
// import { useState } from "react"
// import { Menu, X } from "lucide-react"

// const navItems = ["About", "Skills", "Projects", "Contact"]

// interface NavbarProps {
//   isVisible: boolean
// }

// export function Navbar({ isVisible }: NavbarProps) {
//   const [activeItem, setActiveItem] = useState("Home")
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   if (!isVisible) return null

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 p-4 z-50">
//       <div className="container mx-auto flex justify-between items-center relative">
//         <Link href="/" className="text-white text-xl pixel-art">
//           TM
//         </Link>

//         {/* Hamburger button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden pixel-button p-2 !bg-transparent hover:!bg-opacity-50"
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>

//         {/* Mobile menu */}
//         <div
//           className={`
//             md:hidden fixed top-[72px] left-0 right-0 bg-black bg-opacity-95
//             transition-transform duration-300 ease-in-out pixel-frame border-t-2
//             ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
//           `}
//         >
//           <ul className="flex flex-col items-center space-y-4 p-4">
//             {navItems.map((item) => (
//               <li key={item} className="w-full">
//                 <Link
//                   href={`#${item.toLowerCase()}`}
//                   className={`pixel-button w-full justify-center ${
//                     activeItem === item ? "!bg-blue-500" : "!bg-gray-800"
//                   }`}
//                   onClick={() => {
//                     setActiveItem(item)
//                     setIsMenuOpen(false)
//                   }}
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Desktop menu */}
//         <ul className="hidden md:flex space-x-4">
//           {navItems.map((item) => (
//             <li key={item}>
//               <Link
//                 href={`#${item.toLowerCase()}`}
//                 className={`pixel-button ${activeItem === item ? "!bg-blue-500" : "!bg-gray-800"}`}
//                 onClick={() => setActiveItem(item)}
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   )
// }
"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = ["About", "Skills", "Projects", "Contact"]

interface NavbarProps {
  isVisible: boolean
}

export function Navbar({ isVisible }: NavbarProps) {
  const [activeItem, setActiveItem] = useState("Home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (!isVisible) return null

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        <Link href="/" className="text-white text-xl pixel-art">
          TM
        </Link>

        {/* Hamburger button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden pixel-button p-2 !bg-transparent hover:!bg-opacity-50 z-60"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden fixed top-0 left-0 right-0 bg-black bg-opacity-95
            transition-transform duration-300 ease-in-out pixel-frame border-t-2
            ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
            z-50
          `}
        >
          <ul className="flex flex-col items-center space-y-4 p-4">
            {navItems.map((item) => (
              <li key={item} className="w-full">
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={`pixel-button w-full justify-center ${
                    activeItem === item ? "!bg-blue-500" : "!bg-gray-800"
                  }`}
                  onClick={() => {
                    setActiveItem(item)
                    setIsMenuOpen(false)
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className={`pixel-button ${activeItem === item ? "!bg-blue-500" : "!bg-gray-800"}`}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
