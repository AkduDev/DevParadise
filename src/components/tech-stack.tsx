"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Linux", category: "Systems" },
  { name: "Windows Server", category: "Systems" },
  { name: "Ubuntu", category: "Systems" },
  { name: "CentOS", category: "Systems" },
]

const categories = [
  "Frontend",
  "Backend",
  "Database",
  "Cloud",
  "DevOps",
  "Systems",
]

export function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-10 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-5 sm:mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-2 sm:mb-4">
            Our Toolkit
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 sm:mb-4">
            Technologies We <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xs sm:text-base lg:text-lg">
            We leverage the best tools and technologies to deliver exceptional
            results for every project.
          </p>
        </motion.div>

        {/* Tech categories — 2 cols on mobile, 3 on lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 lg:gap-5">
          {categories.map((category, ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: ci * 0.06 }}
              className="p-2.5 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl border bg-card hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-[10px] sm:text-xs lg:text-sm font-semibold text-primary mb-1.5 sm:mb-3 uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2">
                {technologies
                  .filter((t) => t.category === category)
                  .map((tech) => (
                    <span
                      key={tech.name}
                      className="text-[9px] sm:text-xs lg:text-sm px-1.5 sm:px-2.5 lg:px-3 py-0.5 sm:py-1 lg:py-1.5 rounded-md sm:rounded-lg bg-muted text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                    >
                      {tech.name}
                    </span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
