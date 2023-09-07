<script setup lang="ts">
import Title from './components/Title/Title.vue';
import CardsContainer from './components/Card/CardsContainer.vue';
</script>

<template>
  <Title text="Example of components" />
  <CardsContainer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
