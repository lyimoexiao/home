<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="h-full w-full transition-all duration-300 left-0 top-0 fixed -z-1" :class="{ 'backdrop-blur-2xl': route.path !== '/' }" />
  <div class="h-full w-full left-0 top-0 fixed -z-2">
    <img class="h-full w-full object-cover" src="/assets/images/backgrounds/background.jpg">
  </div>
</template>
