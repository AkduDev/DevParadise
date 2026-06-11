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
    text: "DevParadise transformed our entire retail operation. Their custom POS system and security camera installation across all 12 locations was flawless.",
    service: "Software & Security",
  },
  {
    name: "María González",
    role: "CTO, HealthPlus Medical",
    initials: "MG",
    rating: 5,
    text: "The hospital management system they built has revolutionized how we handle patient records and appointments. Highly recommend their team.",
    service: "Software Dev",
  },
  {
    name: "Roberto Méndez",
    role: "Ops Director, LogiTrans",
    initials: "RM",
    rating: 5,
    text: "Complete network infrastructure overhaul delivered beyond expectations. VPN and VLANs improved our security and efficiency tenfold.",
    service: "Network Infra",
  },
  {
    name: "Ana Martínez",
    role: "Owner, Boutique del Sol",
    initials: "AM",
    rating: 5,
    text: "Affordable security system with top-notch quality. The remote monitoring gives me peace of mind even when I'm away from the store.",
    service: "Security Cameras",
  },
  {
    name: "Diego Fernández",
    role: "IT Manager, FinGroup",
    initials: "DF",
    rating: 5,
    text: "Cloud migration handled with zero downtime. They migrated our legacy system to AWS and cost savings have been significant.",
    service: "Cloud Services",
  },
  {
    name: "Laura Sánchez",
    role: "Principal, Academia Digital",
    initials: "LS",
    rating: 5,
    text: "Set up our entire computer lab with software, OS, and CCTV for student safety. Professional, reliable, and always available for support.",
    service: "OS & Security",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(2)

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2)
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
      className="py-10 sm:py-20 lg:py-28 bg-muted/30 relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-4 sm:mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-2 sm:mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 sm:mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xs sm:text-base lg:text-lg">
            Don&apos;t just take our word for it — hear from the businesses
            we&apos;ve helped succeed.
          </p>
        </motion.div>

        {/* Testimonials grid — 2 cols on mobile */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {currentTestimonials.map((testimonial, i) => (
            <motion.div
              key={`${testimonial.name}-${currentPage}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-2.5 sm:p-4 lg:p-5">
                  <div className="flex items-center gap-0.5 mb-1.5 sm:mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <Quote className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary/30 mb-1 sm:mb-2" />

                  <p className="text-[9px] sm:text-xs lg:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-1.5 sm:gap-2.5 pt-2 sm:pt-3 border-t">
                    <Avatar className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 bg-primary/10">
                      <AvatarFallback className="bg-primary/10 text-primary text-[8px] sm:text-[10px] lg:text-xs font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-[9px] sm:text-xs lg:text-sm truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-[8px] sm:text-[10px] lg:text-xs text-muted-foreground truncate">
                        {testimonial.role}
                      </div>
                    </div>
                    <span className="text-[8px] sm:text-[10px] px-1 sm:px-2 py-0.5 rounded-full bg-primary/10 text-primary shrink-0 hidden sm:inline">
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
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-8">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 sm:h-9 sm:w-9"
              onClick={() =>
                setCurrentPage((p) => (p > 0 ? p - 1 : totalPages - 1))
              }
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                variant={currentPage === i ? "default" : "outline"}
                size="icon"
                className="h-7 w-7 sm:h-9 sm:w-9 text-[10px] sm:text-sm"
                onClick={() => setCurrentPage(i)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 sm:h-9 sm:w-9"
              onClick={() =>
                setCurrentPage((p) => (p < totalPages - 1 ? p + 1 : 0))
              }
            >
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
