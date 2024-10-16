<script setup>
  import { ref, watch } from 'vue' 
  import { RouterLink } from 'vue-router'
  import ApplicationMark from '@/components/icons/ApplicationMark.vue'
  import Logo from '@/components/icons/Logo.vue'
  import CoorsaLogo from './icons/CoorsaLogo.vue'

  const props = defineProps({
    currentRoute : {
      type: String,
      required: true
    }
  })
  
  const openMenu = ref(false)
  const serviciosSubMenu = ref(false)


  const manageOpen = () => {
    openMenu.value = !openMenu.value
  }

  const manageSubMenu = () => {
    serviciosSubMenu.value = !serviciosSubMenu.value
  }
</script>
<template>
  <!-- Mobile nav -->
  <nav class="w-full bg-red-700 h-[8vh] flex justify-between items-center px-[2%] text-white text-lg fixed top-0 left-0 lg:hidden z-[2]">
    <div>
      <RouterLink to="/">
        <Logo />
      </RouterLink>  
    </div>
    <button @click="manageOpen">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
    <div v-if="openMenu" class="absolute top-[8vh] right-0 w-full bg-red-700 flex flex-col px-[5%] border-t-2 border-red-800 divide-y-2 divide-red-800 text-center uppercase">
      <div class="py-1">
        <RouterLink to="/" @click="manageOpen">Inicio</RouterLink>
      </div>
      <div class="flex justify-end py-1">
        <RouterLink to="/servicios" class="">Servicios</RouterLink>
        <button @click="manageSubMenu" class="ml-[32%] md:ml-[40%]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <!-- Services subMenu -->
      <div v-if="serviciosSubMenu" class="flex flex-col items-center gap-1 font-semibold bg-red-600 divide-y divide-red-800">
        <RouterLink to="/servicios" class="flex flex-col w-full gap-[1px] p-1 text-sm">
          Warehouse
          <span class="text-xs font-light normal-case">Soluciones integrales para la gestión y optimización de almacenes, y operaciones 3PL.</span>
        </RouterLink>
        <RouterLink to="/servicios" class="flex flex-col w-full gap-[1pxd] p-1 text-sm">
          Camiones de Patio
          <span class="text-xs font-light normal-case">Gestión eficiente y segura del movimiento dentro del patio.</span>
        </RouterLink>
        <RouterLink to="/servicios" class="flex flex-col w-full gap-[1px] p-1 text-sm">
          Maniobras
          <span class="text-xs font-light normal-case">Mano de obra cualificada.</span>
        </RouterLink>
        <RouterLink to="/servicios" class="flex flex-col w-full gap-[1px] p-1 text-sm">
          Desarrollo de Tecnologías
          <span class="text-xs font-light normal-case">Soluciones tecnológicas personalizadas para optimizar operaciones logísticas.</span>
        </RouterLink>
        <RouterLink to="/servicios" class="flex flex-col w-full gap-[1px] p-1 text-sm">
          Delivery Management
          <span class="text-xs font-light normal-case">Gestión integral y eficiente de entregas, garantizando puntualidad y seguridad.</span>
        </RouterLink>
      </div>
      <div class="py-1">
        <RouterLink to="/conocenos" @click="manageOpen">conocenos</RouterLink>
      </div>
      <div class="py-1">
        <RouterLink to="/talento" @click="manageOpen">Talento</RouterLink>
      </div>
      <div class="py-1">
        <RouterLink to="/blog" @click="manageOpen">Blog</RouterLink>
      </div>
      <div class="py-1">
        <RouterLink to="/contacto" @click="manageOpen">Contacto</RouterLink>
      </div>
      <div class="py-1">
        <RouterLink :to="{ name: 'login'}" @click="manageOpen">Administración</RouterLink>
      </div>
    </div>
  </nav>

  <!-- Desktop Nav -->
   <nav class="fixed top-0 hidden z-[2] bg-[#0D0C15] rounded-[43px] h-[62px] lg:flex text-white px-10 right-[50%] items-center gap-5 translate-x-1/2">
    <CoorsaLogo class="w-32"/>
    <router-link to="/" class="text-xl hover:font-bold" active-class="font-extrabold">Inicio</router-link>
    <router-link to="/servicios" class="flex text-xl group hover:font-bold" active-class="font-extrabold">
      Servicios
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 group-[.router-link-exact-active]:stroke-2 block group-hover:hidden">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden w-5 stroke-2 group-hover:block">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
      </svg>

      <div class="absolute right-[50%] hidden group-hover:block columns-3 top-16 bg-[#0D0C15] translate-x-1/2 rounded-xl p-2">
        div
      </div>
    </router-link>
    <router-link to="/conocenos" class="text-xl hover:font-bold" active-class="font-extrabold">Conócenos</router-link>
    <router-link to="/talento" class="text-xl hover:font-bold" active-class="font-extrabold">Talento</router-link>
    <router-link to="/blog" class="text-xl hover:font-bold" active-class="font-extrabold">Blog</router-link>
    <router-link to="/contacto" class="text-xl hover:font-bold" active-class="font-extrabold">Contacto</router-link>
    <router-link to="/login" class="text-xl group" active-class="font-extrabold">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 group-[.router-link-exact-active]:fill-white group-hover:fill-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    </router-link>
   </nav>
</template>