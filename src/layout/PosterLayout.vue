<!-- src/layouts/PosterLayout.vue -->
<template>
  <div class="poster">
    <section class="info">
      <div class="info_inner">
        <h1 class="info_name" v-html="name" />
        <p class="info_role">{{ role }}</p>
        <p class="info_desc">{{ subtext }}</p>

        <div class="info_body">
          <slot />
        </div>
      </div>
    </section>

    <div class="rule" aria-hidden="true"></div>

    <section class="visual">
      <img :src="heroImage" :alt="heroAlt" class="visual__img" />
    </section>

    <!-- Fixed panel: nav + locale toggle -->
    <div class="fixed-panel" :class="{ 'fixed-panel--hidden': hidePanel }">
      <nav class="nav_links" aria-label="Contact and social links">
        <component
          v-for="link in links"
          :key="link.label"
          :is="link.to ? 'router-link' : 'a'"
          :to="link.to"
          :href="link.href"
          :target="link.href ? '_blank' : undefined"
          :rel="link.href ? 'noopener noreferrer' : undefined"
          class="nav_link"
        >
          {{ link.label }}
        </component>
      </nav>

      <div class="locale-toggle" role="group" aria-label="Language selector">
        <button
          v-for="loc in available"
          :key="loc"
          type="button"
          class="locale-toggle__btn"
          :class="{ 'locale-toggle__btn--active': locale === loc }"
          :aria-pressed="locale === loc"
          @click="setLocale(loc)"
        >
          {{ loc.toUpperCase() }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useLocale } from '../compose/UseLocale'

defineProps<{
  name: string
  role: string
  subtext: string
  heroImage: string
  heroAlt: string
  links: { label: string; href?: string; to?: string }[]
}>()

const { locale, setLocale, available } = useLocale()

// --- scroll-direction detection ---
const hidePanel = ref(false)
let lastY = 0
let ticking = false

function handleScroll() {
  if (ticking) return
  ticking = true

  requestAnimationFrame(() => {
    const currentY = window.scrollY
    const delta = currentY - lastY

    // ignore tiny jitters (e.g. rubber-band scroll on iOS)
    if (Math.abs(delta) > 4) {
      hidePanel.value = delta > 0 && currentY > 40 // scrolling down, and not right at the top
      lastY = currentY
    }

    ticking = false
  })
}

onMounted(() => {
  lastY = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Mono:wght@400;500;600&display=swap');



.poster {
  --paper: #efebe2;
  --ink: #696d8e;
  --accent: #2c4a8c;

  display: grid;
  grid-template-columns: 40fr 3px 60fr;
  min-height: 100vh;
  background: var(--color-pink);
  font-family: 'IBM Plex Mono', monospace;
}

/* ---------- LEFT: info column ---------- */
.info {
  display: flex;
  align-items: flex-start;      /* was: center */
  justify-content: flex-start;  /* explicit, though flex-start is already the default */
  padding: 5rem;
  padding-bottom: 8rem; /* leave room so fixed panel doesn't overlap content */
  min-width: 0;
  width: 100%;
  margin-inline: 0;
  background-color: var(--color-pink);
  color: var(--ink);
}

.info_inner {
  max-width: 46ch;
}

.info_name {
  font-family: 'Mayur';
  font-weight: 900;
  font-size: 7rem;
  line-height: 0.52;
  letter-spacing: 0.005em;
  margin: 0 0 1.75rem;
  color: var(--ink);
  text-transform: lowercase;
}

.info_role {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1.25rem;
}

.info_desc {
  font-size: 0.92rem;
  line-height: 1.6;
  opacity: 0.85;
  margin: 0 0 3rem;
}

/* ---------- FIXED PANEL: nav + locale toggle ---------- */
.fixed-panel {
  position: fixed;
  left: 5rem;
  bottom: 2rem;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: var(--color-pink);
  padding: 1rem 1.25rem;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.fixed-panel--hidden {
  transform: translateY(140%);
  opacity: 0;
  pointer-events: none;
}

.nav_links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: fit-content;
}

.nav_link {
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  position: relative;
  color: var(--ink);
  text-decoration: none;
  transition: color 0.15s ease;
  cursor: pointer;
}

.nav_link.router-link-exact-active {
  font-weight: 700;
  background: none;
  border: 1px solid var(--ink);
  color: var(--ink);
}

/* .nav_link::before {
  content: '*';
  position: absolute;
  left: -0.4rem;
  opacity: 0;
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform: translateX(-4px);
} */

.nav_link:hover,
.nav_link:focus-visible {
  color: var(--accent);
}

.nav_link:hover::before,
.nav_link:focus-visible::before {
  opacity: 1;
  transform: translateX(0);
}

.nav_link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

.locale-toggle {
  display: flex;
  gap: 0.5rem;
}

.locale-toggle__btn {
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  background: none;
  color: var(--ink);
  padding: 0.2rem 0.65rem;
  cursor: pointer;
  opacity: 1;
  border: 1px solid transparent;
}

.locale-toggle__btn--active {
  opacity: 1;
  border-color: var(--accent);
  color: var(--accent);
}

/* ---------- RULE ---------- */
.rule {
  background: var(--color-blue);
  visibility: hidden;
}

/* ---------- RIGHT: image column ---------- */
.visual {
  min-width: 0;
  min-height: 100%;
  width: 100%;
  margin-inline: 0;
}

.visual__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* ---------- MOBILE ---------- */
@media (max-width: 1000px) {
  .poster {
    grid-template-columns: 1fr;
    grid-template-rows: auto 3px auto;
    align-content: start;  /* prevents rows from stretching — keeps top alignment */
    min-height: 100vh;     /* restore this — guarantees background covers the screen */
  }

  .visual {
    order: -1;
  }

  .visual__img {
    min-height: 42vh;
    height: 42vh;
  }

  .rule {
    height: 3px;
    width: 100%;
  }

  .info {
    padding: 9vw 7vw 5vw;
    padding-bottom: 8rem;
    align-items: flex-start;      /* was: center */
    justify-content: flex-start;  /* explicit, though flex-start is already the default */
  }

  .info_inner {
    max-width: none;
  }

  .fixed-panel {
    left: 7vw;
    right: 7vw;
    bottom: 1rem;
  }

  .nav_links {
    width: 100%;
  }

  .nav_link {
    padding: 0.9rem 0;
    font-size: 1.05rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fixed-panel,
  .nav_link,
  .nav_link::before {
    transition: none;
  }
}
</style>