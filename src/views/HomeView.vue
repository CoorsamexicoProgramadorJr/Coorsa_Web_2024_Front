<script setup>
  import { RouterView } from 'vue-router'
  import DeskNav from '@/components/DeskNav.vue'
  import MobilNav from '@/components/MobilNav.vue'
  import PiePagina from '@/components/PiePagina.vue'
</script>

<template class="relative z-1">
  <main class="z-[3] overflow-x-hidden">
    <MobilNav />
    <DeskNav />
    <router-view></router-view>
    <PiePagina />
  </main>
</template>
