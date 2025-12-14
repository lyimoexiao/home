<script setup lang="ts">
const router = useRouter()

function isActive(path: string) {
  return router.currentRoute.value.path === path
}

interface NavigationItem {
  path: string
  name: string
  icon?: string
}

const navigationItems: NavigationItem[] = [
  {
    path: '/',
    name: '简介',
    icon: 'i-icon-park-outline-id-card-h',
  },
  {
    path: 'https://blog.lyi.moe',
    name: '博客',
    icon: 'i-mingcute-quill-pen-line',
  },
  {
    path: '/project',
    name: '项目',
    icon: 'i-mingcute-code-line',
  },
]
</script>

<template>
  <div
    class="nav rounded-md flex gap-8 items-center"
  >
    <NuxtLink v-for="item in navigationItems" :key="item.path" class="transition-all duration-300 hover:text-[var(--c-primary)]" :to="item.path" :class="{ 'text-[var(--c-primary)]': isActive(item.path) }">
      <div class="flex gap-2 items-center">
        <div v-if="item.icon" :class="item.icon" />
        <span>{{ item.name }}</span>
      </div>
    </NuxtLink>
  </div>
</template>
