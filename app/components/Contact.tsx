// "use client"

// import { useState } from "react"

// export function Contact() {
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Here you would typically handle the form submission
//     setIsSubmitted(true)
//     setTimeout(() => setIsSubmitted(false), 3000)
//   }

//   return (
//     <section id="contact" className="min-h-screen flex items-center justify-center">
//       <div className="pixel-frame p-8 max-w-2xl w-full">
//         <h2 className="text-3xl mb-8 text-white text-center">Contact Me</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="text" placeholder="Your Name" className="w-full p-2 pixel-text-box" required />
//           <input type="email" placeholder="Your Email" className="w-full p-2 pixel-text-box" required />
//           <textarea placeholder="Your Message" className="w-full p-2 pixel-text-box" rows={4} required></textarea>
//           <button type="submit" className="pixel-button w-full">
//             Send Message
//           </button>
//         </form>
//         {isSubmitted && (
//           <div className="mt-4 text-center text-white animate-bounce">
//             Message sent! A pixel bird is delivering your message.
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

"use client"

import type React from "react"
import { useState } from "react"
import { sendEmail } from "../actions/sendEmail"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    const formData = new FormData(e.currentTarget)
    const result = await sendEmail(formData)

    setIsSubmitting(false)
    setSubmitMessage(result.message)

    if (result.success) {
      e.currentTarget.reset()
    }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center">
      <div className="pixel-frame p-8 max-w-2xl w-full">
        <h2 className="text-3xl mb-8 text-white text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-2 pixel-text-box" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-2 pixel-text-box" required />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 pixel-text-box"
            rows={4}
            required
          ></textarea>
          <button type="submit" className="pixel-button w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {submitMessage && (
          <div
            className={`mt-4 text-center ${submitMessage.includes("successfully") ? "text-green-400" : "text-red-400"} animate-pulse`}
          >
            {submitMessage}
          </div>
        )}
      </div>
    </section>
  )
}

