<script setup lang="ts">
const loadingBar = useLoadingIndicator()
const nuxtApp = useNuxtApp()

nuxtApp.hook('page:start', () => {
  loadingBar.start()
})

nuxtApp.hook('page:finish', () => {
  loadingBar.finish()
})
</script>

<template>
  <NuxtLoadingIndicator />
  <!-- <Background /> -->
  <NuxtLayout>
    <NuxtPage class="xs:mt-4 xs:mx-4 mx-4 mt-4 transition-all duration-300 sm:mx-4 xl:mx-36 sm:mt-4 xl:mt-4" />
  </NuxtLayout>
</template>
