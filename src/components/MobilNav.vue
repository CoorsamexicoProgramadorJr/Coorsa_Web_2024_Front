<script setup>
import { ref } from 'vue' 
  import Logo from '@/components/icons/Logo.vue'

  const manageOpen = () => openMenu.value = !openMenu.value
  const serviciosSubMenu = ref(false)
  const manageSubMenu = () => serviciosSubMenu.value = !serviciosSubMenu.value
  const openMenu = ref(false)
  
  const submenuLinks = [
    {
      text: 'Warehouse',
      to: '/servicios',
      description: 'Soluciones integrales para la gestión y optimización de almacenes, y operaciones 3PL.'
    },
    {
      text: 'Camiones de Patio',
      to: '/servicios',
      description: 'Gestión eficiente y segura del movimiento dentro del patio.'
    },
    {
      text: 'Maniobras',
      to: '/servicios',
      description: 'Mano de obra cualificada.'
    },
    {
      text: 'Desarrollo de Tecnologías',
      to: '/servicios',
      description: 'Soluciones tecnológicas personalizadas para optimizar operaciones logísticas.'
    },
    {
      text: 'Delivery Management',
      to: '/servicios',
      description: 'Gestión integral y eficiente de entregas, garantizando puntualidad y seguridad.'
    },
  ]
</script>

<template>
  <nav class="w-full bg-[#0D0C15] h-[8vh] flex justify-between items-center px-[2%] text-white text-lg fixed top-0 left-0 lg:hidden z-[2]">
    <RouterLink to="/">
      <Logo />
    </RouterLink>
    <button @click="manageOpen">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
    <div v-if="openMenu" class="absolute top-[8vh] right-0 w-full bg-[#0D0C15] flex flex-col px-[5%] border-t-2 border-slate-400 divide-y-2 divide-slate-400 text-center uppercase">
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
      <div v-if="serviciosSubMenu" class="flex flex-col items-center gap-1 font-semibold bg-[#38383f] divide-y divide-slate-400">
        <RouterLink to="/servicios" class="flex flex-col w-full gap-[1px] p-1 text-sm" v-for="(submenuLink, index) in submenuLinks" :key="index">
          {{ submenuLink.text }}
          <span class="text-xs font-light normal-case">{{ submenuLink.description }}</span>
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
        <RouterLink to="/login" @click="manageOpen">Administración</RouterLink>
      </div>
    </div>
  </nav>
</template>