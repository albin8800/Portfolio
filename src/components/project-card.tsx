"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"

interface Project {
  title: string
  description: string
  tech: string[]
  liveLink?: string
  githubLink?: string
  isPlaceholder?: boolean
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl ${
        project.isPlaceholder ? "border-dashed opacity-80" : ""
      }`}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
         {/* Background pattern for project image placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
            <span className="text-4xl font-black text-primary/10 group-hover:scale-110 transition-transform duration-500">
                {project.title.split(' ')[0]}
            </span>
        </div>
        {!project.isPlaceholder && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/40 backdrop-blur-sm">
             <Link href={project.liveLink || "#"} target="_blank" className="rounded-full bg-primary p-3 text-primary-foreground shadow-lg">
                <ArrowUpRight className="h-6 w-6" />
             </Link>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <div className="flex gap-2">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <FaGithub className="h-5 w-5" />
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <p className="mb-6 flex-1 text-sm text-muted-foreground line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-md bg-secondary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
