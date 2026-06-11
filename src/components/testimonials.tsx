"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "CEO, TechRetail Corp",
    initials: "CR",
    rating: 5,
    text: "DevParadise transformed our entire retail operation. Their custom POS system and security camera installation across all 12 of our locations was flawless. The team was professional, responsive, and delivered ahead of schedule.",
    service: "Software & Security",
  },
  {
    name: "María González",
    role: "CTO, HealthPlus Medical",
    initials: "MG",
    rating: 5,
    text: "The hospital management system they built for us has revolutionized how we handle patient records and appointments. Their understanding of our industry-specific needs was impressive. Highly recommend their software development team.",
    service: "Software Development",
  },
  {
    name: "Roberto Méndez",
    role: "Operations Director, LogiTrans",
    initials: "RM",
    rating: 5,
    text: "We needed a complete network infrastructure overhaul and DevParadise delivered beyond expectations. The new setup with VPN and VLANs has improved our security and efficiency tenfold. Their 24/7 support is outstanding.",
    service: "Network Infrastructure",
  },
  {
    name: "Ana Martínez",
    role: "Owner, Boutique del Sol",
    initials: "AM",
    rating: 5,
    text: "As a small business owner, I was worried about the cost of a good security system. DevParadise offered an affordable solution with top-notch quality. The remote monitoring feature gives me peace of mind even when I'm away.",
    service: "Security Cameras",
  },
  {
    name: "Diego Fernández",
    role: "IT Manager, FinGroup",
    initials: "DF",
    rating: 5,
    text: "The cloud migration project was handled with zero downtime. They migrated our entire legacy system to AWS and the cost savings have been significant. Their expertise in cloud architecture is top-tier.",
    service: "Cloud Services",
  },
  {
    name: "Laura Sánchez",
    role: "Principal, Academia Digital",
    initials: "LS",
    rating: 5,
    text: "DevParadise set up our entire computer lab with all the necessary software and operating systems. They also installed a comprehensive CCTV system for student safety. Professional, reliable, and always available for support.",
    service: "OS & Security",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    updateItemsPerPage()
    window.addEventListener("resize", updateItemsPerPage)
    return () => window.removeEventListener("resize", updateItemsPerPage)
  }, [])

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-muted/30 relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it — hear from the businesses
            we&apos;ve helped succeed.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {currentTestimonials.map((testimonial, i) => (
            <motion.div
              key={`${testimonial.name}-${currentPage}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <Quote className="h-6 w-6 text-primary/30 mb-2" />

                  <p className="text-sm leading-relaxed mb-5">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t">
                    <Avatar className="h-10 w-10 bg-primary/10">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {testimonial.role}
                      </div>
                    </div>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary shrink-0">
                      {testimonial.service}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9"
              onClick={() =>
                setCurrentPage((p) => (p > 0 ? p - 1 : totalPages - 1))
              }
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                variant={currentPage === i ? "default" : "outline"}
                size="icon"
                className="h-9 w-9"
                onClick={() => setCurrentPage(i)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9"
              onClick={() =>
                setCurrentPage((p) => (p < totalPages - 1 ? p + 1 : 0))
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
