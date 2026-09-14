import { ref } from "vue"

export type Locale = "en" | "nl"

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'nl'
}

const KEY = "locale"
const stored = localStorage.getItem(KEY)
const locale = ref<Locale>(isLocale(stored) ? stored : "nl")

export function useLocale() {
  function setLocale(newLocale: Locale): void {
    locale.value = newLocale
    localStorage.setItem(KEY, newLocale)
  }
  const available: Locale[] = ["en", "nl"]
  return { locale, setLocale, available }
}