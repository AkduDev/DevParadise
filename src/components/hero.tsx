"use client"

import { motion } from "framer-motion"
import { ArrowRight, Monitor, Shield, Cpu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating icons - hidden on mobile */}
      <motion.div
        className="absolute top-32 left-[15%] text-primary/20 hidden sm:block"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Monitor className="h-12 w-12" />
      </motion.div>
      <motion.div
        className="absolute top-48 right-[18%] text-primary/15 hidden sm:block"
        animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Shield className="h-10 w-10" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[20%] text-primary/15 hidden sm:block"
        animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Cpu className="h-14 w-14" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3 sm:mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Technology Solutions for Your Business
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-3 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We Build the
          <br />
          <span className="gradient-text">Digital Future</span>
          <br />
          You Envision
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-5 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From custom software development to security camera installations, operating systems
          deployment, and complete IT infrastructure — DevParadise is your one-stop
          technology partner.
        </motion.p>

        <motion.div
          className="flex flex-row items-center justify-center gap-2 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            size="sm"
            className="gap-1.5 text-xs sm:text-sm sm:size-lg sm:gap-2 sm:px-8"
            onClick={() => handleScroll("#contact")}
          >
            Start Your Project
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5 text-xs sm:text-sm sm:size-lg sm:gap-2 sm:px-8"
            onClick={() => handleScroll("#services")}
          >
            Explore Services
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="mt-8 sm:mt-16 grid grid-cols-4 gap-2 sm:gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { value: "150+", label: "Projects" },
            { value: "50+", label: "Clients" },
            { value: "8+", label: "Years" },
            { value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-2 sm:p-4 rounded-lg sm:rounded-xl bg-card/50 border border-border/50"
            >
              <div className="text-lg sm:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-[10px] sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <button
          onClick={() => handleScroll("#services")}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to services"
        >
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </motion.div>
    </section>
  )
}
