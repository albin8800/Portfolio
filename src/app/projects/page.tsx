"use client"

import { PageTransition } from "@/components/page-transition"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "SARA Constructions",
    description: "Client Project for a Construction based company in Punalur, Kollam. Features a modern UI with high performance.",
    image: "/projects/sara.jpg",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    liveLink: "https://sara-constructions.vercel.app/",
    githubLink: "https://github.com/albin8800/sara-construction",
  },
  {
    title: "Timeless Luxe",
    description: "Basic Fullstack Ecommerce Website with product listings, cart functionality, and integrated backend.",
    image: "/projects/velvet.jpg",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
    liveLink: "https://github.com/albin8800/watch-store-frontend",
    githubLink: "https://github.com/albin8800/watch-store-frontend",
  },
  {
    title: "Concert Ticket Platform",
    description: "A responsive concert ticket booking platform built with Nest.js, Prisma, and PostgreSQL featuring event discovery and detailed views via API integration.",
    image: "/projects/concert-ticket.jpg",
    tech: ["Next.js", "Tailwind CSS", "Nest.js", "Prisma", "PostgreSQL"],
    liveLink: "https://github.com/albin8800/concert-ticketing-platform",
    githubLink: "https://github.com/albin8800/concert-ticketing-platform",
  },
  {
    title: "Image Search App",
    description: "An interactive image search application that fetches data from Unsplash API based on user queries.",
    image: "/projects/image-search.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "API Fetch"],
    liveLink: "https://albin8800.github.io/Image-Search-App-/",
    githubLink: "https://github.com/albin8800/Image-Search-App-",
  },
  {
    title: "School Management System",
    description: "A comprehensive school management system designed to streamline administrative tasks and enhance the learning experience.",
    image: "/projects/school-management.jpg",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    liveLink: "https://github.com/albin8800/school-management-system-frontend",
    githubLink: "https://github.com/albin8800/school-management-system-frontend",
  },
]

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Projects</h1>
          <div className="mx-auto h-1 w-20 bg-primary rounded-full" />
          <p className="mt-4 text-muted-foreground">A showcase of my recent work and experimental projects.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
