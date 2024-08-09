<script setup>
  import CoorsaLogo from '../CoorsaLogo.vue'
</script>
<template>
  <section class="w-screen h-[92vh] relative">
    <header class="absolute md:right-[10%] top-[8%] right-0">
      <h2 class="font-bold text-white uppercase lg:text-5xl xl:text-7xl md:text-4xl sm:text-2xl">Territorio</h2>
      <div class="ml-[4%]">
        <CoorsaLogo class="text-red-700 lg:w-full md:w-[80%] sm:w-[60%]"/>
      </div>
    </header>
    <video src="https://storage.googleapis.com/coorsa-mexico-web/Videos/Mapa.mp4" autoplay loop muted class="object-fill size-full">
      Error!
    </video>
    <h3 class="absolute bottom-[10%] left-[5%] xl:text-3xl lg:text-xl md:text-lg text-base text-white uppercase w-[30%]">
      CON PRESENCIA EN MÁS DE 11 ESTADOS A NIVEL NACIONAL
    </h3>
  </section>
</template>