<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/stores/administration/user'
  import Logo from '@/components/icons/Logo.vue'
  import MobilSidebar from './MobilSidebar.vue'

  const router = useRouter()
  const userStore = useUserStore()
  const sidebar = ref(false)

  function manageSidebar(){
    sidebar.value = !sidebar.value
  }
</script>

<template>
  <nav class="h-[8vh] bg-blue-900 text-white flex items-center px-4 justify-between">
    <button @click="manageSidebar">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
    <Logo class="w-10" @click="router.push('/panel-principal')"/>
    <MobilSidebar v-if="sidebar" @manage-sideBar="manageSidebar()" :user="userStore.user"/>
  </nav>
</template>
