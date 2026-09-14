import type { Locale } from "../compose/UseLocale"

export interface WorkContent {
  title: string      // shown as the .info_role line, e.g. "About"
  subtext: string   // short tagline
  body: string       // longer bio paragraph(s), rendered in the slot
}



export const work: Record<Locale, WorkContent> = {
  en: { title: "Workie 1", subtext: "A short line about you", body: "Longer bio..." },
  nl: { title: "Workie 2", subtext: "Blaaboo", body: "Gallo" },
}