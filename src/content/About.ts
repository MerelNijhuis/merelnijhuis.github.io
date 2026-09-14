import type { Locale } from "../compose/UseLocale"

export interface AboutContent {
  role: string      // shown as the .info_role line, e.g. "About"
  subtext: string   // short tagline
  body: string       // longer bio paragraph(s), rendered in the slot
}

export const about: Record<Locale, AboutContent> = {
  en: { role: "About", subtext: "A short line about you", body: "Longer bio..." },
  nl: { role: "Over mij", subtext: "Een korte regel", body: "Langere bio..." },
}