// src/compose/useNavLinks.ts
import { computed } from "vue"
import { usePageContent } from "./UsePageContent"
import { nav } from "../content/Nav"

export function useNavLinks() {
  const t = usePageContent(nav) // same `t` naming you're used to

  return computed(() => [
    { label: t.value.home, to: "/" },
    { label: t.value.about, to: "/about" },
    { label: t.value.work, to: "/work" },
    { label: t.value.blog, to: "/blog" },
    { label: t.value.email, href: "mailto:merelnijhuiss@gmail.com" },
  ])
}