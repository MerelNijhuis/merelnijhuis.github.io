<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="navbar">
    <!-- Logo -->
    <a
      href="#"
      class="logo"
      :class="{ rotated: menuOpen }"
      @click="closeMenu"
    >
      Merel Nijhuis.
    </a>

    <!-- Desktop navigation -->
    <nav class="desktop-nav">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
      >
        {{ link.label }}
      </a>
    </nav>

    <!-- Desktop contact -->
    <a
      href="#contact"
      class="contact-button"
    >
      Contact
    </a>

    <!-- Mobile hamburger -->
    <button
      class="menu-button"
      :class="{ open: menuOpen }"
      :aria-expanded="menuOpen"
      aria-label="Toggle navigation menu"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Background overlay -->
    <Transition name="overlay">
      <div
        v-if="menuOpen"
        class="menu-overlay"
        @click="closeMenu"
      ></div>
    </Transition>

    <!-- Mobile side drawer -->
    <Transition name="drawer">
      <aside
        v-if="menuOpen"
        class="mobile-menu"
      >
        <nav>
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Contact only appears inside mobile menu -->
        <a
          href="#contact"
          class="mobile-contact"
          @click="closeMenu"
        >
          Contact
        </a>
      </aside>
    </Transition>
  </header>
</template>

<style scoped>
/* ================================
   NAVBAR
   ================================ */

.navbar {
  position: relative;
  z-index: 100;

  width: min(
    calc(100% - 3rem),
    var(--container-width)
  );

  margin: 0 auto;
  padding: 1.5rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
}


/* ================================
   LOGO
   ================================ */

.logo {
  position: relative;
  z-index: 102;

  font-family: var(--font-logo);
  font-size: 2.4rem;
  font-weight: 800;

  color: var(--color-coral);

  transform-origin: 10% 50%;

  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo.rotated {
  transform: rotate(90deg);
}


/* ================================
   DESKTOP NAVIGATION
   ================================ */

.desktop-nav {
  display: flex;
  gap: 2rem;
}

.desktop-nav a {
  color: var(--color-muted);
  font-family: var(--font-display);

  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;

  letter-spacing: -0.04em;

  transition: color 0.2s ease;
}

.desktop-nav a:hover {
  color: var(--color-text);
}


/* ================================
   DESKTOP CONTACT
   ================================ */

.contact-button {
  padding: 0.75rem 1.25rem;

  background: var(--color-text);
  color: white;

  border-radius: 999px;

  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.contact-button:hover {
  transform: translateY(-2px);
  background: var(--color-purple);
}


/* ================================
   HAMBURGER
   ================================ */

.menu-button {
  display: none;

  position: relative;
  z-index: 102;

  width: 48px;
  height: 48px;

  padding: 0;

  border: none;
  border-radius: 50%;

  background: var(--color-text);

  cursor: pointer;
}

.menu-button span {
  display: block;

  width: 21px;
  height: 2px;

  margin: 4px auto;

  background: white;

  transition:
    transform 0.25s ease,
    opacity 0.2s ease;
}


/* Hamburger → X */

.menu-button.open span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.menu-button.open span:nth-child(2) {
  opacity: 0;
}

.menu-button.open span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}


/* ================================
   MOBILE DRAWER
   ================================ */

.mobile-menu {
  position: fixed;

  top: 0;
  right: 0;

  z-index: 101;

  width: min(85vw, 420px);
  height: 100dvh;

  padding: 7rem 2rem 2rem;

  display: flex;
  flex-direction: column;

  background: #fffdf8;

  box-shadow:
    -20px 0 60px rgba(23, 19, 31, 0.1);

  overflow: hidden;
}


/* Mobile navigation */

.mobile-menu nav {
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
}

.mobile-menu nav a {
  color: var(--color-text);

  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 700;

  letter-spacing: -0.04em;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.mobile-menu nav a:hover {
  color: var(--color-purple);
  transform: translateX(5px);
}


/* Mobile contact */

.mobile-contact {
  margin-top: auto;

  display: block;

  padding: 1rem 1.5rem;

  background: var(--color-text);
  color: white;

  border-radius: 999px;

  text-align: center;

  font-size: 1.1rem;
  font-weight: 700;

  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.mobile-contact:hover {
  background: var(--color-purple);
  transform: translateY(-2px);
}


/* ================================
   OVERLAY
   ================================ */

.menu-overlay {
  position: fixed;

  inset: 0;

  z-index: 100;

  background: rgba(23, 19, 31, 0.18);

  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}


/* ================================
   DRAWER ANIMATION
   ================================ */

.drawer-enter-active,
.drawer-leave-active {
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}


/* ================================
   OVERLAY ANIMATION
   ================================ */

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.25s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}


/* ================================
   MOBILE
   ================================ */

@media (max-width: 700px) {
  .navbar {
    width: min(
      calc(100% - 2rem),
      var(--container-width)
    );

    padding: 1.25rem 0;
  }

  .logo {
    font-size: 1.8rem;
  }

  .desktop-nav,
  .contact-button {
    display: none;
  }

  .menu-button {
    display: block;
  }
}
</style>
