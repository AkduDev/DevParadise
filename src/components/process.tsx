"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageSquare, Search, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description:
      "Free consultation to understand your needs, challenges, and goals.",
  },
  {
    icon: Search,
    step: "02",
    title: "Planning",
    description:
      "Detailed project plan and design mockups aligned with your vision.",
  },
  {
    icon: Code,
    step: "03",
    title: "Development",
    description:
      "Precise execution with regular updates throughout the process.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description:
      "Deployment, training, and ongoing support after launch.",
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-10 sm:py-20 lg:py-28 bg-muted/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-5 sm:mb-10 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-2 sm:mb-4">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 sm:mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xs sm:text-base lg:text-lg">
            A proven methodology that ensures every project is delivered on time,
            within budget, and beyond expectations.
          </p>
        </motion.div>

        {/* Process steps — 2 cols on mobile, 4 on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-center group">
                {/* Step number with icon */}
                <div className="relative inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-2 sm:mb-4 lg:mb-5">
                  <step.icon className="h-4 w-4 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                  <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-background border-2 border-primary text-primary text-[8px] sm:text-[10px] lg:text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-[11px] sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-[9px] sm:text-xs lg:text-sm text-muted-foreground leading-relaxed max-w-[200px] sm:max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
