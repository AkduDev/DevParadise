import dynamic from "next/dynamic"
import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"

// Lazy load below-the-fold sections for better initial performance
const Services = dynamic(() => import("@/components/sections/services").then(m => ({ default: m.Services })), { ssr: true })
const Portfolio = dynamic(() => import("@/components/sections/portfolio").then(m => ({ default: m.Portfolio })), { ssr: true })
const TechStack = dynamic(() => import("@/components/sections/tech-stack").then(m => ({ default: m.TechStack })), { ssr: true })
const Process = dynamic(() => import("@/components/sections/process").then(m => ({ default: m.Process })), { ssr: true })
const About = dynamic(() => import("@/components/sections/about").then(m => ({ default: m.About })), { ssr: true })
const Testimonials = dynamic(() => import("@/components/sections/testimonials").then(m => ({ default: m.Testimonials })), { ssr: true })
const Contact = dynamic(() => import("@/components/sections/contact").then(m => ({ default: m.Contact })), { ssr: true })
const Footer = dynamic(() => import("@/components/sections/footer").then(m => ({ default: m.Footer })), { ssr: true })

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <TechStack />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
