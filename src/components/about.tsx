"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, Zap, Users, Target } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "We stay ahead of the technology curve, adopting the latest tools and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client-Centered",
    description:
      "Your success is our success. We work closely with every client to understand their unique challenges and deliver tailored results.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description:
      "We don't just write code or install hardware — we deliver measurable outcomes that transform businesses.",
  },
]

const highlights = [
  "Custom software tailored to your business",
  "Professional security camera installations",
  "All major operating systems supported",
  "End-to-end project management",
  "24/7 technical support & maintenance",
  "Scalable and future-proof solutions",
  "Competitive and transparent pricing",
  "Certified and experienced team",
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Your Trusted{" "}
              <span className="gradient-text">Technology Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              DevParadise was founded with a simple mission: make technology
              accessible, reliable, and impactful for businesses of all sizes.
              From writing the first line of code to mounting the last security
              camera, we handle it all.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over 8 years of experience in the IT industry, our team of
              certified professionals brings expertise across software
              development, network infrastructure, security systems, and cloud
              computing. We don&apos;t just implement solutions — we build
              partnerships that grow with your business.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                >
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Values cards */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              className="p-6 rounded-xl bg-primary text-primary-foreground"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Let&apos;s discuss how we can help transform your business with
                the right technology solutions.
              </p>
              <button
                onClick={() => {
                  const el = document.querySelector("#contact")
                  el?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary-foreground text-primary font-medium text-sm hover:bg-primary-foreground/90 transition-colors"
              >
                Contact Us Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
