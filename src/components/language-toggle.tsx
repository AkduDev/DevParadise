"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeout = requestAnimationFrame(() => {
      setMounted(true)
    })
    return () => cancelAnimationFrame(timeout)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Globe className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 relative"
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      aria-label={language === "en" ? "Cambiar a Español" : "Switch to English"}
    >
      <Globe className="h-4 w-4" />
      <span className="absolute -bottom-0.5 -right-0.5 text-[8px] font-bold text-primary leading-none">
        {language === "en" ? "EN" : "ES"}
      </span>
      <span className="sr-only">
        {language === "en" ? "Switch language" : "Cambiar idioma"}
      </span>
    </Button>
  )
}
