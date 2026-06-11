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
      "Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: "/portfolio-ecommerce.jpg",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Smart Surveillance System",
    category: "Security",
    description:
      "Enterprise-grade CCTV installation with AI-powered motion detection and cloud-based remote monitoring for a retail chain.",
    tags: ["CCTV", "AI Detection", "Cloud DVR", "Remote Access"],
    image: "/portfolio-security.jpg",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Corporate Network Overhaul",
    category: "Infrastructure",
    description:
      "Complete network redesign for a 200+ employee company including VLANs, VPN, and redundant failover systems.",
    tags: ["Cisco", "VLAN", "VPN", "Failover"],
    image: "/portfolio-network.jpg",
    color: "from-teal-500/20 to-emerald-500/20",
  },
  {
    title: "Hospital Management System",
    category: "Software",
    description:
      "Custom HIS with patient records, appointment scheduling, billing, and pharmacy management modules.",
    tags: ["React", "Python", "MongoDB", "DICOM"],
    image: "/portfolio-hospital.jpg",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Cloud Migration Project",
    category: "Cloud",
    description:
      "Migrated a legacy on-premise infrastructure to AWS with zero downtime, reducing operational costs by 40%.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    image: "/portfolio-cloud.jpg",
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    title: "Multi-Site Security Network",
    category: "Security",
    description:
      "Centralized security monitoring across 12 locations with unified access control and incident management.",
    tags: ["Access Control", "ANPR", "Central Monitoring", "Alarms"],
    image: "/portfolio-multisite.jpg",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "POS & Inventory System",
    category: "Software",
    description:
      "Point-of-sale system with real-time inventory tracking, supplier management, and automated reordering.",
    tags: ["React Native", "Node.js", "Redis", "WebSocket"],
    image: "/portfolio-pos.jpg",
    color: "from-teal-500/20 to-green-500/20",
  },
  {
    title: "Server Room Setup",
    category: "Infrastructure",
    description:
      "Complete server room design and deployment including cooling, UPS, rack mounting, and cable management.",
    tags: ["Server Rack", "UPS", "Cooling", "Cable Management"],
    image: "/portfolio-server.jpg",
    color: "from-emerald-500/20 to-amber-500/20",
  },
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-muted/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of our best work across software development, security,
            infrastructure, and cloud services.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
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
                "rounded-full",
                activeCategory === category && "shadow-sm"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay for readability */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent",
                  )} />
                  <div className="absolute bottom-3 left-4">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button size="sm" variant="outline" className="gap-1.5">
                      <ExternalLink className="h-3.5 w-3.5" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1.5">
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </Button>
                  </div>
                </div>

                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-normal"
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
