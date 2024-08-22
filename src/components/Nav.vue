<script setup>
  import { ref } from 'vue' 
  import { RouterLink } from 'vue-router'
  import ApplicationMark from '@/components/icons/ApplicationMark.vue'
  import Logo from '@/components/icons/Logo.vue'

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
        <button @click="manageSubMenu" class="ml-[38%]">
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
    </div>
  </nav>

  <!-- Desktop Nav -->
  <nav class="bg-red-700 w-screen h-[8vh] lg:flex justify-between items-center fixed top-0 left-0 right-0 px-[3%] hidden z-[2]">
    <div class="h-full xl:w-[15%] lg:w-[20%] flex justify-center items-center">
      <ApplicationMark class="text-white lg:w-[75%]"/>
    </div>

    <!-- Links for desktop devices -->
    <div class=" xl:w-[60%] lg:w-[70%] lg:h-[100%] gap-[2%] text-white uppercase tracking-wide xl:text-xl lg:text lg:flex hidden">
      <div class="flex items-center justify-center flex-1">
        <RouterLink to="/" active-class="underline underline-offset-8" class="max-h-full lg:hover:underline lg:hover:underline-offset-8">
          Inicio
        </RouterLink>
      </div>
      <div class="flex flex-col items-center justify-center flex-1 lg:flex-row group">
        <RouterLink to="/servicios" active-class="underline underline-offset-8" class="flex items-center hover:underline hover:underline-offset-8">
          Servicios
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
          </svg>
        </RouterLink>
        <!-- Start Dropdown Services -->
        <div class="lg:absolute lg:top-[8vh] xl:right-[2%] lg:right-0 bg-red-700 lg:h-[20vh] xl:w-[50vw] lg:w-[70vw] lg:border-t lg:border-t-white lg:divide-x divide-white hidden group-hover:flex 2xl:text-xl xl:text-lg/3 pb-1">
          <div class="lg:w-1/5 h-[100%] normal-case px-[1%] hover:bg-red-800">
            <a href="" class="h-[100%] flex flex-col justify-around items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-1/3">
                <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                <path fill-rule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clip-rule="evenodd" />
              </svg>
              <span class="font-bold max-h-[20%]">Warehouse</span>
              <span class="text-xs leading-tight tracking-tighter text-center max-h-[43%]">
                Soluciones integrales para la gestión y optimización de almacenes, y operaciones 3PL.
              </span>
            </a>
          </div>
          <div class="lg:w-1/5 h-[100%] normal-case px-[1%] hover:bg-red-800">
            <a href="" class="h-[100%] flex flex-col justify-around items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-1/3">
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
              </svg>
              <span class="mb-1 font-bold leading-4 text-center max-h-[33.33%]">Camiones Patio</span>
              <span class="text-xs leading-tight tracking-tighter text-center max-h-[33%]">
                Gestión eficiente y segura del movimiento dentro del patio.
              </span>
            </a>
          </div>
          <div class="lg:w-1/5 h-[100%] normal-case px-[1%] hover:bg-red-800">
            <a href="" class="h-[100%] flex flex-col justify-around items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="max-h-[33.33%]">
                <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
              </svg>
              <span class="font-bold text-center max-h-[33.33%]">Maniobras</span>
              <span class="text-xs leading-tight tracking-tighter text-center max-h-[33%]">Mano de obra cualificada.</span>
            </a>
          </div>
          <div class="lg:w-1/5 h-[100%] normal-case px-[1%] hover:bg-red-800">
            <a href="" class="h-[100%] flex flex-col justify-around items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-1/3">
                <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd" />
              </svg>
              <span class="mb-1 font-bold leading-4 text-center max-h-[33.33%]">Desarrollo Tecnologías</span>
              <span class="text-xs leading-3 tracking-tighter text-center max-h-[33%]">
                Soluciones tecnológicas personalizadas para optimizar operaciones logísticas.
              </span>
            </a>
          </div>
          <div class="lg:w-1/5 h-[100%] normal-case px-[1%] hover:bg-red-800">
            <a href="" class="h-[100%] flex flex-col items-center justify-around">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="max-h-[33.33%]">
                <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" />
                <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
              </svg>
              <span class="mb-1 font-bold leading-4 text-center">Delivery Management</span>
              <span class="text-xs leading-3 tracking-tighter text-center max-h-[33%]">
                Gestión integral y eficiente de entregas, garantizando puntualidad y
                seguridad.
              </span>
            </a>
          </div>  
        </div>
      </div>
      <!-- End Dropdown Services -->
       
      <div class="flex items-center justify-center flex-1">
        <RouterLink to="/conocenos" active-class="underline underline-offset-8" class="hover:underline hover:underline-offset-8">
          Conócenos
        </RouterLink>
      </div>
      <div class="flex items-center justify-center flex-1">
        <RouterLink to="/talento"  active-class="underline underline-offset-8" class="hover:underline hover:underline-offset-8">Talento</RouterLink>
      </div>
      <div class="flex items-center justify-center flex-1">
        <RouterLink to="/blog" active-class="underline underline-offset-8" class="hover:underline hover:underline-offset-8">Blog</RouterLink>
      </div>
      <div class="flex items-center justify-center flex-1">
        <RouterLink to="/contacto" active-class="underline underline-offset-8" class="hover:underline hover:underline-offset-8">Contacto</RouterLink>
      </div>
      <div class="flex items-center justify-center flex-1">
        <RouterLink to="" class="hover:underline hover:underline-offset-8">ERP</RouterLink>
      </div>
    </div>
  </nav>
</template>