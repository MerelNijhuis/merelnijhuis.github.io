import { ref, computed } from "vue";

export type Locale = "en" | "nl"

interface LinkContent {
    email: string
    about: string
    work: string
    blog: string
}

interface Messages {
    main: string
    subtext: string
    links: LinkContent
}


const messages: Record<Locale, Messages> = {
    en: {
        main: "Writer",
        subtext: "Gallo, Giboogaboo, Abooboo",
        links: {
            email : "Email",
            about: "About Me",
            work: "Work",
            blog: "Blog"
        }
    },
    nl: {
        main: "Schrijver",
        subtext: "Gallotje, Giboogabootje, Aboobootje",
        links: {
            email: "Email",
            about: "Over mij",
            work: "Werk",
            blog: "Blog"
        }
    }
}


const KEY = "locale"

function isLocale(value: string | null) {
    return value === 'en' || value === 'nl'
}

const stored = localStorage.getItem(KEY)
const locale = ref<Locale>(isLocale(stored) ? stored : "nl")

export function useLocale() {
    const t = computed<Messages>(() => messages[locale.value])

    function setLocale(newLocale: Locale) : void {
        locale.value = newLocale
        localStorage.setItem(KEY, newLocale)
    }

    const available = Object.keys(messages) as Locale[]
    return { locale, t, setLocale, available }
}
