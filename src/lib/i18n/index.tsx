"use client"

import React, { createContext, useContext, useState, useCallback } from "react"
import { en } from "./dictionaries/en"
import { es } from "./dictionaries/es"

export type Language = "en" | "es"
export type Dictionary = typeof en

const dictionaries: Record<Language, Dictionary> = { en, es }

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  dict: Dictionary
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  dict: en,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "en"
    try {
      const saved = localStorage.getItem("devparadise-lang") as Language | null
      if (saved === "en" || saved === "es") return saved
    } catch {
      // localStorage not available
    }
    return "en"
  })

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("devparadise-lang", lang)
    document.documentElement.lang = lang
  }, [])

  const dict = dictionaries[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
