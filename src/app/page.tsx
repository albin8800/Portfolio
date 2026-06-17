"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"
import { AnimatedText } from "@/components/animated-text"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      {/* Hero Section */}
      <section className="container relative mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 text-center md:py-32">
        {/* Background blobs for aesthetics */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-col items-center"
        >
          <div className="relative mb-8 h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 bg-muted md:h-48 md:w-48">
            <Image
              src="/Frame 90.jpg"
              alt="Albin B Thomas"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-primary">Albin B Thomas</span>
          </h1>
          <div className="mb-8 text-xl font-medium text-muted-foreground sm:text-2xl">
            I&apos;m a{" "}
            <AnimatedText
              texts={[
                "Full Stack Developer",
                "UI/UX Enthusiast",
                "Problem Solver",
                "Tech Innovator",
              ]}
              className="text-foreground"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
        >
          A passionate developer focused on creating beautiful and functional web experiences.
          Specializing in building modern, performant, and user-centric applications using the latest technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex gap-6"
        >
          <a
            href="https://github.com/albin8800"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-3 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <FaGithub className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/albin-b-thomas-a385532b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-3 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <FaLinkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </motion.div>
      </section>
    </div>
  )
}
