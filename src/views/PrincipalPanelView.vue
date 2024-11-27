<script setup>
  import { useUserStore } from '@/stores/administration/user'
  import Sidebar from '@/components/administracion/Sidebar.vue'

  const userStore = useUserStore()
</script>

<template>
  <main class="w-screen h-screen">
    <Sidebar />
    <router-view/>
  </main>
</template>

