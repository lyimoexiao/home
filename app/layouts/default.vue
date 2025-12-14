<script setup lang="ts">

</script>

<template>
  <LayoutHeader />
  <main class="xs:mt-4 xs:mx-4 mx-4 mt-4 min-h-[calc(100vh-calc(var(--spacing)*20)-calc(var(--spacing)*4))] transition-all duration-300 sm:mx-4 xl:mx-36 sm:mt-4 xl:mt-4">
    <slot />
  </main>
  <LayoutFooter />
</template>
