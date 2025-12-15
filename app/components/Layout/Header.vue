<script setup lang="ts">
const mobileMenuDrawerOpen = ref(false)

const route = useRoute()

watch(() => route.path, () => {
  mobileMenuDrawerOpen.value = false
})
</script>

<template>
  <header class="header xs:px-4 p-4 flex h-20 transition-all duration-300 items-center top-0 justify-between sticky z-10 backdrop-blur sm:px-4 xl:px-36">
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

    <div class="mobile-menu xs:hidden block sm:block xl:hidden" @click="mobileMenuDrawerOpen = true">
      <div class="i-mingcute-menu-line transition-all duration-300 hover:text-[var(--c-primary)]" />
    </div>
  </header>

  <ElDrawer v-model="mobileMenuDrawerOpen" direction="btt" header-class="mb-0!" class="h-[40%]!">
    <template #header>
      <div class="flex gap-2 items-center">
        <div class="i-mingcute-navigation-line" />
        <span>菜单</span>
      </div>
    </template>
    <div class="flex flex-col gap-4">
      <div class="nav flex flex-col gap-4">
        <span>导航</span>
        <LayoutNavigation />
      </div>

      <div class="social flex flex-col gap-4">
        <span>社交</span>
        <div class="social flex gap-4">
          <NuxtLink to="mailto:me@lyi.moe" class="flex gap-2 items-center">
            <div class="i-icon-park-outline-mail transition-all duration-300 hover:text-[var(--c-primary)]" />
            <span>邮箱</span>
          </NuxtLink>
          <!-- <NuxtLink to="">
        <div class="i-mingcute-qq-line transition-all duration-300 hover:text-[var(--c-primary)]" />
      </NuxtLink> -->
          <NuxtLink to="https://y.music.163.com/m/user?id=295726463" target="_blank" class="flex gap-2 items-center">
            <div class="i-mingcute-netease-music-line transition-all duration-300 hover:text-[var(--c-primary)]" />
            <span>网易云音乐</span>
          </NuxtLink>
          <NuxtLink to="https://github.com/lyimoexiao" target="_blank" class="flex gap-2 items-center">
            <div class="i-mingcute-github-line transition-all duration-300 hover:text-[var(--c-primary)]" />
            <span>GitHub</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </ElDrawer>
</template>
