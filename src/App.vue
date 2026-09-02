<script setup lang="ts">
    import Navbar from './components/Navbar.vue';
    // import About from './components/About.vue';
    import Hero from './components/Hero.vue';
    // import WorkSection from './components/WorkSection.vue';
    // import WorkCard from './components/WorkCard.vue';

</script>

<template>
  <Navbar></Navbar>

  <main>
    <h1>Header 1 in main in App</h1>
    <Hero></Hero>
  </main>
</template>

<style>
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
}
</style>
