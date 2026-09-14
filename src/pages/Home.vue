<template>
  <PosterLayout
    name="Merel<br />Nijhuis"
    :role="content.role"
    :subtext="content.subtext"
    hero-image="./src/assets/Cyanotype.png"
    hero-alt="Image Placeholder"
    :links="navLinks"
  >
    <!-- <p>{{ content.body }}</p> -->
  </PosterLayout>
</template>

<script setup lang="ts">
import PosterLayout from "../layout/PosterLayout.vue"
import { usePageContent } from "../compose/UsePageContent"
import { home } from "../content/Home.ts"
import { useNavLinks } from "../compose/UseNavLinks.ts"

const content = usePageContent(home)
const navLinks = useNavLinks()
</script>