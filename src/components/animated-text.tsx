"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedTextProps {
  texts: string[]
  className?: string
}

export function AnimatedText({ texts, className }: AnimatedTextProps) {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const typingSpeed = 150
  const deletingSpeed = 100
  const pauseTime = 2000

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[index]

      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1))
        if (displayText === "") {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % texts.length)
        }
      } else {
        setDisplayText((prev) => fullText.substring(0, prev.length + 1))
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      }
    }

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, index, texts])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 inline-block h-[1em] w-[2px] bg-primary"
      />
    </span>
  )
}
