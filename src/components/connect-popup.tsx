"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle } from "lucide-react"
import Link from "next/link"

export function ConnectPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show the popup after 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
          className="fixed bottom-6 right-6 z-50 w-72 rounded-2xl border border-primary/20 bg-card p-4 shadow-lg sm:bottom-8 sm:right-8"
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold leading-none">Let's Connect!</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  Have a project in mind or just want to chat?
                </p>
              </div>
            </div>
            
            <Link
              href="/contact"
              onClick={() => setIsVisible(false)}
              className="flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Say Hello
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}