"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const categories = ["All", "Software", "Security", "Infrastructure", "Cloud"]

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Software",
    description:
      "Full-stack e-commerce solution with real-time inventory, payments, and analytics.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: "/portfolio-ecommerce.jpg",
  },
  {
    title: "Smart Surveillance",
    category: "Security",
    description:
      "CCTV installation with AI motion detection and cloud remote monitoring.",
    tags: ["CCTV", "AI Detection", "Cloud DVR", "Remote Access"],
    image: "/portfolio-security.jpg",
  },
  {
    title: "Network Overhaul",
    category: "Infrastructure",
    description:
      "Complete network redesign with VLANs, VPN, and redundant failover.",
    tags: ["Cisco", "VLAN", "VPN", "Failover"],
    image: "/portfolio-network.jpg",
  },
  {
    title: "Hospital System",
    category: "Software",
    description:
      "Custom HIS with patient records, scheduling, billing, and pharmacy.",
    tags: ["React", "Python", "MongoDB", "DICOM"],
    image: "/portfolio-hospital.jpg",
  },
  {
    title: "Cloud Migration",
    category: "Cloud",
    description:
      "Migrated legacy infrastructure to AWS with zero downtime, 40% cost savings.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    image: "/portfolio-cloud.jpg",
  },
  {
    title: "Multi-Site Security",
    category: "Security",
    description:
      "Centralized monitoring across 12 locations with access control.",
    tags: ["Access Control", "ANPR", "Monitoring", "Alarms"],
    image: "/portfolio-multisite.jpg",
  },
  {
    title: "POS & Inventory",
    category: "Software",
    description:
      "Point-of-sale with real-time inventory tracking and auto-reordering.",
    tags: ["React Native", "Node.js", "Redis", "WebSocket"],
    image: "/portfolio-pos.jpg",
  },
  {
    title: "Server Room Setup",
    category: "Infrastructure",
    description:
      "Server room design with cooling, UPS, rack mounting, and cable mgmt.",
    tags: ["Server Rack", "UPS", "Cooling", "Cabling"],
    image: "/portfolio-server.jpg",
  },
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-10 sm:py-20 lg:py-28 bg-muted/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-4 sm:mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-2 sm:mb-4">
            Our Work
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 sm:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xs sm:text-base lg:text-lg">
            A showcase of our best work across software, security,
            infrastructure, and cloud services.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className={cn(
                "rounded-full text-[10px] sm:text-xs h-7 sm:h-9",
                activeCategory === category && "shadow-sm"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid — 2 cols on mobile */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                {/* Project image */}
                <div className="relative h-24 sm:h-36 lg:h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent",
                  )} />
                  <div className="absolute bottom-1.5 sm:bottom-2 left-2 sm:left-3">
                    <Badge variant="secondary" className="text-[9px] sm:text-[10px] px-1.5 py-0 sm:px-2 sm:py-0.5">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Hover overlay — hidden on touch devices */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center gap-3">
                    <Button size="sm" variant="outline" className="gap-1.5 h-7 text-xs">
                      <ExternalLink className="h-3 w-3" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1.5 h-7 text-xs">
                      <Github className="h-3 w-3" />
                      Code
                    </Button>
                  </div>
                </div>

                <CardContent className="p-2.5 sm:p-3.5 lg:p-4">
                  <h3 className="text-[11px] sm:text-sm lg:text-base font-semibold mb-1 sm:mb-1.5 line-clamp-1">{project.title}</h3>
                  <p className="text-muted-foreground text-[9px] sm:text-xs leading-relaxed mb-2 sm:mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[8px] sm:text-[10px] font-normal px-1 sm:px-1.5 py-0"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
