<script setup>
  import { RouterView } from 'vue-router'
  import Nav from '@/components/Nav.vue'
  import PiePagina from './components/PiePagina.vue'
</script>

<template>
  <main >
    <Nav class="z-[2]" />
    <RouterView class="z-1"/>
    <PiePagina />
  </main>
</template>
