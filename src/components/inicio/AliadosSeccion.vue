<script setup>
  const logos = [
    {
      src: '/icons/ul-01.svg',
      alt: 'Icono Unileven',
      class: 'size-[90%]'
    },
    {
      src: '/icons/walma-01.svg',
      alt: 'Icono Walmart',
      class: 'size-full'
    },
    {
      src: '/icons/dhl-01.svg',
      alt: 'Icono Dhl',
      class: 'max-w-full max-h-full'
    },
    {
      src: '/icons/pyg-01.svg',
      alt: 'Icono P&g',
      class: 'max-w-[90%] max-h-[90%]'
    },
    {
      src: '/icons/nest-01.svg',
      alt: 'Icono Nestle',
      class: 'max-w-[85%]'
    },
    {
      src: '/icons/puri-01.svg',
      alt: 'Icono Purina',
      class: 'max-w-[85%]'
    },
    {
      src: '/icons/sams-01.svg',
      alt: 'Icono Sams club',
      class: 'max-w-[85%]'
    },
    {
      src: '/icons/sigma-01.svg',
      alt: 'Icono Sigma',
      class: 'max-w-[85%]'
    },
    {
      src: '/icons/colgate-01.svg',
      alt: 'Icono Colgate',
      class: 'max-w-[85%]'
    },
    {
      src: '/icons/kimberly-01.svg',
      alt: 'Icono Kimberly-clark',
      class: 'max-w-[85%]'
    },
    {
      src: '/icons/Wella-01.svg',
      alt: 'Icono Wella',
      class: 'max-h-[90%] max-w-[90%]'
    },
    {
      src: '/icons/Soriana-01.svg',
      alt: 'Icono Soriana',
      class: 'max-w-full max-h-full'
    },
    {
      src: '/icons/Newell-01.svg',
      alt: 'Icono Newell',
      class: 'max-h-[90%] max-w-[90%]'
    },
    {
      src: '/icons/Tms-01.svg',
      alt: 'Icono Tms',
      class: 'max-w-[90%]'
    },
    {
      src: '/icons/Coty-01.svg',
      alt: 'Icono Coty',
      class: 'max-w-full max-h-full'
    },
    {
      src: '/icons/Scania-01.svg',
      alt: 'Icono Scania',
      class: 'max-h-full max-w-full',
      containerClass: 'lg:col-start-3'
    },
  ]
</script>
<template>
  <section class="w-screen h-screen p-10 bg-[url('/img/fondo-aliados.jpg')] bg-cover text-white">
    <h2 class="mt-5 text-4xl font-semibold text-center xl:text-7xl lg:text-7xl md:text-3xl md:text-left">Nuestros Aliados</h2>
    <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:grid-rows-3 grid-rows-6 gap-2 w-[90%] mx-auto my-[5%] md:max-h-[75%] max-h-[85%]">
      <div v-for="(logo, index) in logos" :key="index" class="flex items-center justify-center" :class="logo.containerClass">
        <img :src="logo.src" :alt="logo.alt" :class="logo.class"> 
      </div>
    </div>
    <h3 class="mt-10 text-2xl font-semibold text-center uppercase">Ellos confían en nosotros</h3>
  </section>
</template>