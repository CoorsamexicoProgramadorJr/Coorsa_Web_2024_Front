<script setup>
  import { watch, ref, onMounted } from 'vue'
  import { RouterView, useRoute, useRouter } from 'vue-router'
  import Nav from '@/components/Nav.vue'
  import PiePagina from '@/components/PiePagina.vue'

  const route = useRoute()
  const router = useRouter()
  const actualRoute = ref('')

  watch(route, () =>{
    actualRoute.value = route.name
  })
</script>

<template class="relative z-1">
  <main class="z-[3] overflow-x-hidden">
    <Nav :currentRoute="actualRoute"/>
    <router-view></router-view>
    <PiePagina :currentRoute="actualRoute"/>
  </main>
</template>
