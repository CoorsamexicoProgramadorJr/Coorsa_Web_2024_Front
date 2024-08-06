<script setup>
  import { watch, ref } from 'vue'
  import { RouterView, useRoute } from 'vue-router'
  import Nav from '@/components/Nav.vue'
  import PiePagina from './components/PiePagina.vue'

  const route = useRoute()
  const actualRoute = ref('')

  watch(route, () =>{
    actualRoute.value = route.name
  })
  
</script>

<template>
  <main class="z-[3]">
    <Nav class="z-[2]" :currentRoute="actualRoute"/>
    <RouterView />
    <PiePagina :currentRoute="actualRoute"/>
  </main>
</template>
