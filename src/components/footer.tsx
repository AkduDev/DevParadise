"use client"

import {
  Code2,
  Mail,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Heart,
  MessageCircle,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  Services: [
    { label: "Software Dev", href: "#services" },
    { label: "Security Cameras", href: "#services" },
    { label: "Program Setup", href: "#services" },
    { label: "Operating Systems", href: "#services" },
    { label: "Cybersecurity", href: "#services" },
    { label: "Cloud Services", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Docs", href: "#" },
    { label: "Status", href: "#" },
    { label: "Agreement", href: "#" },
  ],
}

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-6 sm:py-10 lg:py-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {/* Brand section */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4">
              <div className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-primary text-primary-foreground">
                <Code2 className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
              </div>
              <span className="text-sm sm:text-lg font-bold tracking-tight">
                Dev<span className="text-primary">Paradise</span>
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-5 max-w-xs leading-relaxed">
              Your comprehensive technology partner. From software development to
              security installations and everything in between.
            </p>
            <div className="space-y-1 sm:space-y-2">
              <a
                href="https://wa.me/5355819421?text=Hola%20DevParadise%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20tecnol%C3%B3gicos.%20%C2%BFPodr%C3%ADan%20brindarme%20informaci%C3%B3n%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                +53 5581 9421 (WhatsApp)
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                akdulaydev@gmail.com
              </a>
              <span className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground">
                <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                Habana, Cuba
              </span>
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-[10px] sm:text-xs lg:text-sm mb-1.5 sm:mb-3">{title}</h4>
              <ul className="space-y-0.5 sm:space-y-1.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault()
                          handleNavClick(link.href)
                        }
                      }}
                      className="text-[10px] sm:text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator />

        {/* Bottom footer */}
        <div className="py-3 sm:py-5 flex flex-row items-center justify-between gap-2 flex-wrap">
          <p className="text-[9px] sm:text-xs text-muted-foreground">
            © {new Date().getFullYear()} DevParadise
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            ))}
          </div>
          <p className="text-[9px] sm:text-xs text-muted-foreground flex items-center gap-0.5 sm:gap-1">
            Made with <Heart className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary fill-primary" /> by
            DevParadise
          </p>
        </div>
      </div>
    </footer>
  )
}
