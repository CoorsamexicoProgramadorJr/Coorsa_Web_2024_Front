<script setup>
  import { RouterView } from 'vue-router'
  import Nav from '@/components/Nav.vue'
</script>

<template>
  <main>
    <Nav class="z-[1]"/>
    <RouterView />
  </main>
</template>
