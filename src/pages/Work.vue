<template>
  <PosterLayout
    name="Merel<br />Nijhuis"
    :role="content.title"
    :subtext="content.subtext"
    hero-image="./src/assets/Cyanotype.png"
    hero-alt="Portrait of Merel Nijhuis"
    :links="navLinks"
  >
    <p>{{ content.body }}</p>
  </PosterLayout>
</template>

<script setup lang="ts">
import PosterLayout from "../layout/PosterLayout.vue"
import { usePageContent } from "../compose/UsePageContent"
import {work} from "../content/Work"
import { useNavLinks } from "../compose/UseNavLinks"


const content = usePageContent(work)
const navLinks = useNavLinks()

</script>