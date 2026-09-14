import type { Locale } from "../compose/UseLocale"

export interface HomeContent {
  role: string
  subtext: string
}

export const home: Record<Locale, HomeContent> = {
  en: { role: "Writer", subtext: "Gallo, Giboogaboo, Abooboo" },
  nl: { role: "Schrijver", subtext: "Gallotje, Giboogabootje, Aboobootje" },
}