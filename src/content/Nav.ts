// src/content/nav.ts
import type { Locale } from "../compose/UseLocale"

export interface NavLinks {
  home: string
  email: string
  about: string
  work: string
  blog: string
}

export const nav: Record<Locale, NavLinks> = {
  en: { home: "Home", email: "Email", about: "About Me", work: "Work", blog: "Blog" },
  nl: { home: "Home", email: "Email", about: "Over mij", work: "Werk", blog: "Blog" },
}