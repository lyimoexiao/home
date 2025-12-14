<script setup lang="ts">

</script>

<template>
  <header class="header xs:px-4 p-4 flex h-fit transition-all duration-300 items-center top-0 justify-between sticky z-10 sm:px-4 xl:px-36">
    <div class="avatar">
      <NuxtLink to="/" class="flex gap-2 items-center">
        <NuxtImg src="https://i.lyi.moe/avatar" alt="avatar" class="rounded-full h-8 w-8" />
        <div class="flex flex-col">
          <span>依如初梦</span>
          <span class="text-3 text-gray-500">@LyiMoeXiao</span>
        </div>
      </NuxtLink>
    </div>

    <div class="nav xs:block hidden xl:block sm:hidden">
      <LayoutNavigation />
    </div>

    <div class="social xs:flex gap-4 hidden xl:flex sm:hidden">
      <NuxtLink to="mailto:me@lyi.moe">
        <div class="i-icon-park-outline-mail transition-all duration-300 hover:text-[var(--c-primary)]" />
      </NuxtLink>
      <!-- <NuxtLink to="">
        <div class="i-mingcute-qq-line transition-all duration-300 hover:text-[var(--c-primary)]" />
      </NuxtLink> -->
      <NuxtLink to="https://y.music.163.com/m/user?id=295726463" target="_blank">
        <div class="i-mingcute-netease-music-line transition-all duration-300 hover:text-[var(--c-primary)]" />
      </NuxtLink>
      <NuxtLink to="https://github.com/lyimoexiao" target="_blank">
        <div class="i-mingcute-github-line transition-all duration-300 hover:text-[var(--c-primary)]" />
      </NuxtLink>
    </div>

    <div class="mobile-menu xs:hidden block sm:block xl:hidden">
      <div class="i-mingcute-menu-line transition-all duration-300 hover:text-[var(--c-primary)]" />
    </div>
  </header>
</template>
