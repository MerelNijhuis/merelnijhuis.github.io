<template>

</template>

<script setup lang="ts">

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
  align-items: center;
  padding: 5rem;
  min-width: 0;
  width: 100%;
  margin-inline: 0;
  background-color: var(--color-pink);
  color: var(--ink);
}

.info_inner {
  max-width: 46ch;
}

.info__eyebrow {
  margin: 0 0 2.5rem;
  font-size: 0.8rem;
  letter-spacing: 0.02em;
  color: var(--accent);
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

.info_links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 1.25rem;
  width: fit-content;
}

.info_link {
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.6rem 0;
  position: relative;
  border: var(--ink);
  transition: color 0.15s ease;
}

.info_link::before {
  content: '→';
  position: absolute;
  left: -1.4rem;
  opacity: 0;
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform: translateX(-4px);
}

.info_link:hover,
.info_link:focus-visible {
  color: var(--accent);
}

.info_link:hover::before,
.info_link:focus-visible::before {
  opacity: 1;
  transform: translateX(0);
}

.info_link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

.locale-toggle {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.locale-toggle__btn {
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  background: none;
  border: 1px solid var(--ink);
  color: var(--ink);
  padding: 0.2rem 0.65rem;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.locale-toggle__btn:hover,
.locale-toggle__btn:focus-visible {
  opacity: 0.85;
}

.locale-toggle__btn--active {
  opacity: 1;
  border-color: var(--accent);
  color: var(--accent);
}

.locale-toggle__btn:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
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
  object-fit: cover;   /* crops any source image to fill the panel */
  object-position: center;
  display: block;
}

/* ---------- MOBILE: flip to horizontal split ---------- */
@media (max-width: 720px) {
  .poster {
    grid-template-columns: 1fr;
    grid-template-rows: auto 3px auto;
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
  }

  .info_inner {
    max-width: none;
  }

  .info__eyebrow {
    margin-bottom: 1.5rem;
  }

  .info_name {
    margin-bottom: 1.25rem;
  }

  .info_links {
    width: 100%;
  }

  .info_link {
    padding: 0.9rem 0; /* larger tap target for touch */
    font-size: 1.05rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .info_link,
  .info_link::before {
    transition: none;
  }
}
</style>