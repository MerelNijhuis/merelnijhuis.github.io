<template>
  <PosterLayout
    name="Merel<br />Nijhuis"
    :role="content.role"
    :subtext="content.subtext"
    hero-image="/src/assets/about-photo.png"
    hero-alt="Portrait of Merel Nijhuis"
    :links="navLinks"
  >
    <p>{{ content.body }}</p>
  </PosterLayout>
</template>

<script setup lang="ts">
import PosterLayout from "../layout/PosterLayout.vue"
import { usePageContent } from "../compose/UsePageContent"
import { useNavLinks } from "../compose/UseNavLinks"
import { about } from "../content/About"

const content = usePageContent(about)
const navLinks = useNavLinks()
</script>