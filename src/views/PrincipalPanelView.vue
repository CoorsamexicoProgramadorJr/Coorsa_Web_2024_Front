<script setup>
  import MobilNav from '@/components/administracion/MobilNav.vue'
</script>

<template>
  <main class="w-screen h-screen">
    <header class="fixed top-0 left-0 w-screen">
      <MobilNav />
    </header>
    <router-view />
  </main>
</template>

