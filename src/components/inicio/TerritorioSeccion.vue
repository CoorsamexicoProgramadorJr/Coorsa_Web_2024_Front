<script setup>
  import CoorsaLogo from '../CoorsaLogo.vue'
</script>
<template>
  <section class="w-screen h-[92vh] relative">
    <header class="absolute right-[10%] top-[8%]">
      <h2 class="text-5xl font-bold text-white uppercase xl:text-7xl">Territorio</h2>
      <div class="ml-[4%]">
        <CoorsaLogo class="w-full text-red-700"/>
      </div>
    </header>
    <video src="https://storage.googleapis.com/coorsa-mexico-web/Videos/Mapa.mp4" autoplay loop muted class="object-fill size-full">
      Error!
    </video>
    <h3 class="absolute bottom-[10%] left-[5%] xl:text-3xl lg:text-xl text-white uppercase w-[30%]">
      CON PRESENCIA EN MÁS DE 11 ESTADOS A NIVEL NACIONAL
    </h3>
  </section>
</template>