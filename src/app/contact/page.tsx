"use client"

import { motion } from "framer-motion"
import { PageTransition } from "@/components/page-transition"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    value: "albinbthomas8800@gmail.com",
    href: "mailto:albinbthomas8800@gmail.com",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    label: "Phone",
    value: "+91 8137050102",
    href: "tel:+918137050102",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    label: "Location",
    value: "Kollam, Kerala, India",
    href: "#",
  },
]

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Get In Touch</h1>
          <div className="mx-auto h-1 w-20 bg-primary rounded-full" />
          <p className="mt-4 text-muted-foreground">Have a project in mind or just want to say hi? Feel free to reach out!</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-8 text-2xl font-bold">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  className="flex items-center gap-4 rounded-xl border bg-card p-4 transition-colors hover:bg-accent"
                >
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="mb-6 text-xl font-bold">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: <FaGithub />, href: "https://github.com/albin8800" },
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/albin-b-thomas-a385532b0/" },
                  { icon: <FaInstagram />, href: "https://www.instagram.com/albin__alby" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-3 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border bg-card p-8 shadow-sm"
          >
            <form className="space-y-6" action="https://formsubmit.co/albinbthomas8800@gmail.com" method="POST">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Inquiry about project"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
            </form>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
