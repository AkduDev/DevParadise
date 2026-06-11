"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  MessageCircle,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useLanguage } from "@/lib/i18n"

const WHATSAPP_NUMBER = "5355819421"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola DevParadise, me interesa conocer más sobre sus servicios tecnológicos. ¿Podrían brindarme información?"
)
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export function Contact() {
  const { dict } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: MessageCircle,
      label: dict.contact.whatsapp,
      value: "+53 5581 9421",
      href: WHATSAPP_LINK,
      external: true,
    },
    {
      icon: Mail,
      label: dict.contact.email,
      value: "akdulaydev@gmail.com",
      href: "#contact-form",
      internal: true,
    },
    {
      icon: MapPin,
      label: dict.contact.address,
      value: "Habana, Cuba",
      href: "#",
    },
    {
      icon: Clock,
      label: dict.contact.hours,
      value: dict.contact.hoursValue,
      href: "#",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", service: "", message: "" })
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch {
      // Error handling
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-10 sm:py-20 lg:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-5 sm:mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-2 sm:mb-4">
            {dict.contact.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 sm:mb-4">
            {dict.contact.title} <span className="gradient-text">{dict.contact.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xs sm:text-base lg:text-lg">
            {dict.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-4 sm:gap-8 lg:gap-12">
          {/* Contact info sidebar */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4">{dict.contact.infoTitle}</h3>
            {/* Contact items — 2 cols on mobile */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-1.5 sm:gap-2 lg:gap-3">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                >
                  <a
                    href={info.href}
                    {...(info.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    onClick={(e) => {
                      if (info.internal) {
                        e.preventDefault()
                        const form = document.getElementById("contact-form")
                        form?.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-accent transition-colors group"
                  >
                    <div className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                      <info.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] sm:text-[10px] lg:text-xs text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="text-[10px] sm:text-xs lg:text-sm font-medium truncate">{info.value}</div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div
              className="mt-3 sm:mt-5 rounded-lg sm:rounded-xl border bg-muted/30 overflow-hidden h-24 sm:h-36 lg:h-48 flex items-center justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="text-center text-muted-foreground">
                <MapPin className="h-5 w-5 sm:h-7 sm:w-7 mx-auto mb-1 sm:mb-2 text-primary/40" />
                <p className="text-[10px] sm:text-xs">Habana, Cuba</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card id="contact-form">
              <CardContent className="p-3 sm:p-5 lg:p-8">
                {isSubmitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-8 sm:py-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <CheckCircle2 className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">
                      {dict.contact.successTitle}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm max-w-md">
                      {dict.contact.successDescription}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-5">
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                      <div className="space-y-1 sm:space-y-2">
                        <Label htmlFor="name" className="text-[10px] sm:text-xs">{dict.contact.formName}</Label>
                        <Input
                          id="name"
                          placeholder={dict.contact.formNamePlaceholder}
                          required
                          className="h-8 sm:h-10 text-xs sm:text-sm"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <Label htmlFor="email" className="text-[10px] sm:text-xs">{dict.contact.formEmail}</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={dict.contact.formEmailPlaceholder}
                          required
                          className="h-8 sm:h-10 text-xs sm:text-sm"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="service" className="text-[10px] sm:text-xs">{dict.contact.formService}</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                      >
                        <SelectTrigger id="service" className="h-8 sm:h-10 text-xs sm:text-sm">
                          <SelectValue placeholder={dict.contact.formServicePlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(dict.contact.serviceOptions).map(([key, label]) => (
                            <SelectItem key={key} value={key}>
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="message" className="text-[10px] sm:text-xs">{dict.contact.formMessage}</Label>
                      <Textarea
                        id="message"
                        placeholder={dict.contact.formMessagePlaceholder}
                        rows={3}
                        required
                        className="text-xs sm:text-sm min-h-[60px] sm:min-h-[100px]"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gap-2 h-8 sm:h-10 lg:h-12 text-xs sm:text-sm"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                          {dict.contact.formSending}
                        </>
                      ) : (
                        <>
                          {dict.contact.formSubmit}
                          <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
