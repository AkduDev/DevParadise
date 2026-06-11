"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code2,
  Camera,
  Package,
  Monitor,
  Shield,
  Network,
  Wrench,
  Database,
  Cloud,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailored solutions — web apps, mobile apps, APIs, and enterprise systems.",
    features: ["Web Apps", "Mobile Apps", "APIs", "Enterprise"],
  },
  {
    icon: Camera,
    title: "Security Cameras",
    description:
      "Professional CCTV and surveillance system installation with remote monitoring.",
    features: ["CCTV", "Remote Monitoring", "Night Vision", "NVR/DVR"],
  },
  {
    icon: Package,
    title: "Program Setup",
    description:
      "Installation and configuration of all types of software and tools.",
    features: ["Office Suites", "Design SW", "Dev Envs", "Business Tools"],
  },
  {
    icon: Monitor,
    title: "Operating Systems",
    description:
      "Installation, configuration, and maintenance of all major OS platforms.",
    features: ["Windows", "Linux", "macOS", "Server OS"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Firewalls, antivirus, penetration testing, and security auditing.",
    features: ["Firewalls", "Vuln Assessment", "Audits", "Data Protection"],
  },
  {
    icon: Network,
    title: "Network Infra",
    description:
      "Design and deployment from small offices to enterprise-grade networks.",
    features: ["Network Design", "VPN", "Wi-Fi", "Cabling"],
  },
  {
    icon: Database,
    title: "Database Mgmt",
    description:
      "Design, optimization, and administration — organized, accessible, secure.",
    features: ["Design", "Optimization", "Migration", "Backups"],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Cloud migration, deployment, and management with minimal downtime.",
    features: ["Migration", "AWS/Azure/GCP", "Hybrid Cloud", "Cost Opt."],
  },
  {
    icon: Wrench,
    title: "IT Support",
    description:
      "24/7 technical support and maintenance to keep systems running smoothly.",
    features: ["24/7 Helpdesk", "On-site", "Updates", "Preventive"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" className="py-10 sm:py-20 lg:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-6 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-2 sm:mb-4">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 sm:mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xs sm:text-base lg:text-lg">
            Comprehensive technology solutions to power your business forward.
            From code to cameras, we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Services grid — 2 cols on mobile, 3 on lg */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5 sm:hover:-translate-y-1">
                <CardContent className="p-3 sm:p-4 lg:p-5">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                    </div>
                    <h3 className="text-xs sm:text-sm lg:text-base font-semibold leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-[10px] sm:text-xs lg:text-sm mb-2 sm:mb-3 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-[9px] sm:text-[10px] lg:text-xs px-1.5 sm:px-2 lg:px-2.5 py-0.5 sm:py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {feature}
                      </span>
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
