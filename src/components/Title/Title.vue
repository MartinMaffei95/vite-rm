<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <h1 class="title">{{ text }}</h1>
</template>

<style>
.title {
  background-color: yellow;
  font-weight: bold;
  color: black;
}
</style>
