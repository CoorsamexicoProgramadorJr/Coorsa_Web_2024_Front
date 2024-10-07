<script setup>
  import { useLoginStore } from '@/stores/login'

  const loginStore = useLoginStore()
</script>

<template>
  <section class="w-screen h-screen pt-[8vh]">
    <h2>Welcome</h2>
    <button class="px-4 py-1 border border-gray-700 rounded-2xl hover:bg-gray-700 hover:text-white" @click="loginStore.logOut">
      Cerrar Sesión
    </button>
  </section>
</template>

