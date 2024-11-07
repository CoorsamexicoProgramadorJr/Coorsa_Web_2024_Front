<script setup>
  import { useUserStore } from '@/stores/administration/user'
  import MobilNav from '@/components/administracion/MobilNav.vue'
  import DeskSidebar from '@/components/administracion/DeskSidebar.vue'
  import Sidebar from '@/components/administracion/Sidebar.vue'

  const userStore = useUserStore()
</script>

<template>
  <main class="w-screen h-screen">
    <Sidebar />
    <router-view class="z-[0]"/>
  </main>
</template>

