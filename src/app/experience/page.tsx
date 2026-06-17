"use client"

import { motion } from "framer-motion"
import { PageTransition } from "@/components/page-transition"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    duration: "2024 - Present",
    description: [
      "Developed and maintained full-stack web applications using modern technologies.",
      "Implemented responsive designs and enhanced user experience.",
      "Collaborated with cross-functional teams to deliver high-quality solutions.",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "PostgreSQL", "Next.js"],
  },
  {
    role: "UI/UX Designer",
    company: "Solwyz Technologies",
    duration: "2025 - 2026",
    description: [
      "Designed responsive and interactive user interfaces.",
      "Optimized application performance and loading times.",
      "Worked closely with the development team to ensure design fidelity.",
    ],
    tech: ["Figma", "HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    role: "Software Engineer",
    company: "Incredible Visibility Solutions",
    duration: "2026 - Present",
    isPlaceholder: true,
    description: [
      "I'm always looking for new opportunities to grow and contribute to innovative projects.",
      "Open to roles in Full Stack Development, UI/UX Design, or Frontend Engineering.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "Docker", "Tailwind CSS", "Version Control", "Nest.js", "Gen AI"],
  },
]

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Experience</h1>
          <div className="mx-auto h-1 w-20 bg-primary rounded-full" />
          <p className="mt-4 text-muted-foreground">My professional journey and career highlights.</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line for desktop */}
          <div className="absolute left-0 top-0 hidden h-full w-[2px] bg-primary/20 md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Desktop timeline dot */}
                <div className="absolute left-0 top-0 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 md:block" />

                <div className="w-full md:w-1/2 md:px-8">
                  <div className={`rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md ${exp.isPlaceholder ? 'opacity-70 border-dashed' : ''}`}>
                    <div className="mb-4 flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-primary">{exp.duration}</span>
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h3 className="mb-1 text-xl font-bold">{exp.role}</h3>
                    <p className="mb-4 font-medium text-muted-foreground">{exp.company}</p>
                    <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
