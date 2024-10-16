<script setup>
  import { useUserStore } from '@/stores/administration/user'
  import MobilNav from '@/components/administracion/MobilNav.vue'
  import DeskSidebar from '@/components/administracion/DeskSidebar.vue'

  const userStore = useUserStore()
</script>

<template>
  <main class="w-screen h-screen">
    <header class="fixed top-0 left-0 w-screen z-[1]">
      <MobilNav />
    </header>
    <DeskSidebar :user="userStore.user"/>
    <router-view class="z-[0]"/>
  </main>
</template>

