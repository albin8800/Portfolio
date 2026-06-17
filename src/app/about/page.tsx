"use client"

import { motion } from "framer-motion"
import { PageTransition } from "@/components/page-transition"
import { SkillBar } from "@/components/skill-bar"
import { GraduationCap, Code, Layout, Database, Server, Wrench } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "College of Engineering Perumon Kollam",
    field: "Electronics and Communication",
    duration: "2021 - 2025",
    description: "A highly motivated final-year B.Tech Electronics and Communication student with a strong passion for full-stack web development. Experienced in both frontend and backend technologies.",
  },
  {
    degree: "Higher Secondary",
    institution: "Govt HSS Sadanandapuram",
    field: "Biology Science",
    duration: "2019 - 2021",
    description: "Focused on Mathematics and Science, which built a strong base for my engineering studies.",
  },
]

const skills = {
  frontend: [
    { name: "React.js", percentage: 80 },
    { name: "Next.js", percentage: 70 },
    { name: "JavaScript", percentage: 85 },
    { name: "HTML5/CSS3", percentage: 95 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "TypeScript", percentage: 60 },
   

  ],
  backend: [
    { name: "Node.js", percentage: 73 },
    { name: "Express.js", percentage: 70 },
    { name: "MongoDB", percentage: 63 },
    { name: "PostgreSQL", percentage: 63 },
    { name: "RESTful APIs", percentage: 70 },
    { name: "Nest Js", percentage: 66 },
  ],
  tools: [
    { name: "Git & GitHub", percentage: 85 },
    { name: "VS Code", percentage: 90 },
    { name: "Postman", percentage: 80 },
    { name: "Docker", percentage: 60 },
    { name: "Vercel", percentage: 75 },
     { name: "Figma", percentage: 75 },
  ],
}

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">About Me</h1>
          <div className="mx-auto h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-2xl font-bold">My Journey</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I&apos;m Albin B Thomas, a passionate developer focused on creating beautiful and functional web experiences.
              </p>
              <p>
                With a strong foundation in both front-end and back-end development, I bring ideas to life through clean, efficient code. My experience spans across various technologies and frameworks, allowing me to tackle complex problems with creative solutions.
              </p>
              <p>
                Currently, I am a final-year B.Tech student at College of Engineering Perumon, where I have been honing my skills in electronics and communication while deeply diving into the world of web development.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
               <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                 <Layout className="mb-2 h-6 w-6 text-primary" />
                 <h3 className="font-bold">UI/UX Design</h3>
                 <p className="text-sm text-muted-foreground">Creating intuitive and engaging user interfaces.</p>
               </div>
               <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                 <Code className="mb-2 h-6 w-6 text-primary" />
                 <h3 className="font-bold">Full Stack</h3>
                 <p className="text-sm text-muted-foreground">Building end-to-end applications from scratch.</p>
               </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-2xl font-bold">Education</h2>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-primary/20 last:border-0">
                  <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary" />
                  <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="mb-2 font-medium text-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Technical Skills</h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                <Layout className="h-5 w-5" /> Frontend Development
              </h3>
              {skills.frontend.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                <Database className="h-5 w-5" /> Backend Development
              </h3>
              {skills.backend.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                <Wrench className="h-5 w-5" /> Tools & Platforms
              </h3>
              {skills.tools.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
