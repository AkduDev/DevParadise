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
    title: "Custom Software Development",
    description:
      "Tailored software solutions built from scratch — web apps, mobile apps, APIs, and enterprise systems designed to fit your exact business needs.",
    features: ["Web Applications", "Mobile Apps", "API Development", "Enterprise Systems"],
  },
  {
    icon: Camera,
    title: "Security Camera Installation",
    description:
      "Professional CCTV and surveillance system installation for homes and businesses. We handle everything from planning to setup and remote monitoring.",
    features: ["CCTV Systems", "Remote Monitoring", "Night Vision Setup", "NVR/DVR Config"],
  },
  {
    icon: Package,
    title: "Program Installation & Setup",
    description:
      "Expert installation and configuration of all types of software — from productivity suites to specialized industry tools and development environments.",
    features: ["Office Suites", "Design Software", "Dev Environments", "Business Tools"],
  },
  {
    icon: Monitor,
    title: "Operating Systems",
    description:
      "Installation, configuration, and maintenance of all major operating systems — Windows, Linux, macOS, and server environments for any scale.",
    features: ["Windows", "Linux Distributions", "macOS", "Server OS"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description:
      "Protect your digital assets with our comprehensive security services — firewalls, antivirus, penetration testing, and security auditing.",
    features: ["Firewall Setup", "Vulnerability Assessment", "Security Audits", "Data Protection"],
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Design and deployment of robust network infrastructure — from small office setups to enterprise-grade networks with VLANs and VPNs.",
    features: ["Network Design", "VPN Setup", "Wi-Fi Solutions", "Cabling"],
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Database design, optimization, and administration services. We ensure your data is organized, accessible, and secure at all times.",
    features: ["Database Design", "Optimization", "Migration", "Backup Solutions"],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Cloud migration, deployment, and management. Move your infrastructure to the cloud with minimal downtime and maximum efficiency.",
    features: ["Cloud Migration", "AWS / Azure / GCP", "Hybrid Cloud", "Cost Optimization"],
  },
  {
    icon: Wrench,
    title: "IT Maintenance & Support",
    description:
      "Ongoing technical support and maintenance to keep your systems running smoothly. We offer 24/7 helpdesk and on-site support options.",
    features: ["24/7 Helpdesk", "On-site Support", "System Updates", "Preventive Maintenance"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions to power your business forward.
            From code to cameras, we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
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
