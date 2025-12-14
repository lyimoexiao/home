<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#1a1a1a]">
    <div class="footer xs:py-4 xs:px-4 px-4 py-4 transition-all duration-300 sm:px-4 sm:py-4 xl:px-36 xl:py-4">
      <div class="copy xs:flex-row flex flex-col gap-2 xl:flex-row sm:flex-col">
        <span class="xs:after:content-['|'] text-[0.8em] after:text-[#808080] after:content-[''] sm:after:content-[''] xl:after:content-['|']">
          Copyright &copy; {{ currentYear }} Lyi.
        </span>
        <NuxtLink to="https://beian.miit.gov.cn/" target="_blank" class="xs:after:content-['|'] text-[0.8em] text-[#808080] flex gap-1 transition-all duration-300 items-center after:text-[#808080] hover:text-[rgba(255,255,255,0.8)] after:content-[''] sm:after:content-[''] xl:after:content-['|']">
          <div class="i-ph-certificate-bold" />
          <span class="">
            赣ICP备2024039717号-2
          </span>
        </NuxtLink>
        <NuxtLink to="https://icp.gov.moe/?keyword=20250725" target="_blank" class="text-[0.8em] text-[#808080] flex gap-1 transition-all duration-300 items-center after:text-[#808080] hover:text-[rgba(255,255,255,0.8)]">
          <div class="i-ph-certificate-bold" />
          <span class="">
            萌ICP备20250725号
          </span>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
