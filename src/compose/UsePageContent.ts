import { computed } from "vue"
import { useLocale } from "./UseLocale"

export function usePageContent<T>(content: Record<string, T>) {
  const { locale } = useLocale()
  return computed(() => content[locale.value])
}