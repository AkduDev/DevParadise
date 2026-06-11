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
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" className="py-10 sm:py-20 lg:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start">
          {/* Left side - About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-2 sm:mb-4">
              About Us
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-6">
              Your Trusted{" "}
              <span className="gradient-text">Technology Partner</span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-base lg:text-lg mb-3 sm:mb-6 leading-relaxed">
              DevParadise was founded with a simple mission: make technology
              accessible, reliable, and impactful for businesses of all sizes.
              From writing the first line of code to mounting the last security
              camera, we handle it all.
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-8 leading-relaxed">
              With over 8 years of experience in the IT industry, our team of
              certified professionals brings expertise across software
              development, network infrastructure, security systems, and cloud
              computing. We don&apos;t just implement solutions — we build
              partnerships that grow with your business.
            </p>

            {/* Highlights — 2 cols on all screens */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-1.5 sm:gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                >
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-[10px] sm:text-xs lg:text-sm leading-tight">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Values cards */}
          <motion.div
            className="space-y-2.5 sm:space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="group p-3 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-start gap-2.5 sm:gap-4">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <value.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-base lg:text-lg font-semibold mb-0.5 sm:mb-1">{value.title}</h3>
                    <p className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              className="p-3 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl bg-primary text-primary-foreground"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">Ready to Get Started?</h3>
              <p className="text-primary-foreground/80 text-[10px] sm:text-xs lg:text-sm mb-2 sm:mb-4">
                Let&apos;s discuss how we can help transform your business with
                the right technology solutions.
              </p>
              <button
                onClick={() => {
                  const el = document.querySelector("#contact")
                  el?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-primary-foreground text-primary font-medium text-[10px] sm:text-sm hover:bg-primary-foreground/90 transition-colors"
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
