<script setup>
  const logos = [
    {
      src: '/icons/walma-01.svg',
      alt: 'Icono Walmart',
    },
    {
      src: '/icons/dhl-01.svg',
      alt: 'Icono Dhl',
    },
    {
      src: '/icons/pyg-01.svg',
      alt: 'Icono P&g',
    },
    {
      src: '/icons/nest-01.svg',
      alt: 'Icono Nestle',
    },
    {
      src: '/icons/puri-01.svg',
      alt: 'Icono Purina',
    },
    {
      src: '/icons/sams-01.svg',
      alt: 'Icono Sams club',
    },
    {
      src: '/icons/sigma-01.svg',
      alt: 'Icono Sigma',
    },
    {
      src: '/icons/colgate-01.svg',
      alt: 'Icono Colgate',
    },
    {
      src: '/icons/kimberly-01.svg',
      alt: 'Icono Kimberly-clark',
    },
    {
      src: '/icons/Wella-01.svg',
      alt: 'Icono Wella',
    },
    {
      src: '/icons/Soriana-01.svg',
      alt: 'Icono Soriana',
    },
    {
      src: '/icons/Newell-01.svg',
      alt: 'Icono Newell',
    },
    {
      src: '/icons/Tms-01.svg',
      alt: 'Icono Tms',
    },
    {
      src: '/icons/Coty-01.svg',
      alt: 'Icono Coty',
    },
    {
      src: '/icons/Scania-01.svg',
      alt: 'Icono Scania',
    },
    {
      src: '/icons/ul-01.svg',
      alt: 'Icono Unileven',
    },
  ]
</script>
<template>
  <section class="w-screen h-screen p-7 md:p-10 bg-[url('/img/fondo-aliados.jpg')] bg-cover text-white">
    <h2 class="mt-5 text-4xl font-semibold text-center xl:text-7xl lg:text-7xl md:text-3xl md:text-left">Nuestros Aliados</h2>
    <div class="grid md:grid-cols-4 grid-cols-2 md:grid-rows-4 grid-rows-8 gap-2 max-h-[78%] lg:max-h-[75%] py-4 px-2 xl:px-10">
      <img v-for="(logo, i) in logos" :key="i" :src="logo.src" :alt="logo.alt" class="object-contain size-full">
    </div>
    <h3 class="text-xl font-semibold text-center uppercase md:text-2xl ">Ellos confían en nosotros</h3>
  </section>
</template>