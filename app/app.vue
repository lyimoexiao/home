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
  <ElScrollbar height="100vh">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ElScrollbar>
</template>
