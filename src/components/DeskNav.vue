<script setup>
  import { useRouter } from 'vue-router'
  import CoorsaLogo from './icons/CoorsaLogo.vue'

  const router = useRouter()
</script>
<template>
   <nav class="fixed top-0 hidden z-[2] bg-[#0D0C15] rounded-[43px] h-[62px] lg:flex text-white px-10 right-[50%] items-center gap-5 translate-x-1/2">
    <CoorsaLogo class="w-32"/>
    <router-link to="/" class="text-xl hover:font-bold">Inicio</router-link>
    <div class="flex items-center justify-center h-full group">
      <router-link to="/servicios" class="flex text-xl hover:font-bold" active-class="font-extrabold">
        Servicios
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 group-[.router-link-exact-active]:stroke-2 block group-hover:hidden">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden w-5 stroke-2 group-hover:block">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
        </svg>
      </router-link>
      <!-- SubMenu -->
      <div class="absolute right-[50%] hidden group-hover:grid top-[63px] bg-[#0D0C15] translate-x-1/2 rounded-xl p-2 w-[110%] h-96 grid-cols-3 grid-rows-3 gap-3">
        <div class="bg-[url('/img/serv.jpg')] bg-cover p-3 rounded-xl flex flex-col justify-between col-start-1 row-start-1 row-end-3">
          <h3 class="w-full text-3xl font-semibold text-left">Servicios</h3>
          <button @click="router.push('/servicios')" class="w-2/3 h-8 mx-auto mb-3 text-xl text-center bg-red-700 rounded-2xl hover:bg-red-800">Más</button>
        </div>
        <router-link to="/servicios" class="bg-[url('/img/ware.jpg')] bg-cover bg-center rounded-xl col-start-1 row-start-3 row-end-4 flex justify-center items-center text-2xl">
          Warehouse
        </router-link>
        <router-link to="/servicios" class="bg-[url('/img/camiones.jpg')] bg-cover bg-center rounded-xl col-start-2 row-start-1 flex justify-center items-center text-center text-2xl">
          Camiones de Patio
        </router-link>
        <router-link to="/servicios" class="bg-[url('/img/maniobras-h.jpg')] bg-cover bg-center rounded-xl col-start-2 row-start-2 flex justify-center items-center text-2xl">
          Maniobras
        </router-link>
        <router-link to="/servicios" class="bg-[url('/img/ti.jpg')] bg-cover bg-center rounded-xl col-start-2 row-start-3 flex justify-center items-center text-2xl">
          Desarrollo de Tecnologías
        </router-link>
        <router-link to="/servicios" class="bg-[url('/img/delivery.jpg')] bg-cover bg-center rounded-xl row-start-1 col-start-3 flex justify-center items-center text-2xl">
          Delivery Management
        </router-link>
        <div class="flex flex-col justify-between w-full col-start-3 row-start-2 row-end-4 p-3 text-xl font-bold text-black bg-white rounded-xl">
          <h3>Soluciones Logísticas Innovadoras</h3>
          <h4>Para Impulsar tu Empresa</h4>
        </div>
      </div>
    </div>
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