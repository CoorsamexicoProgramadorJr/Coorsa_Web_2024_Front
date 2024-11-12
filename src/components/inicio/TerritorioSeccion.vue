<script setup>
  import CoorsaLogo from '@/components/icons/CoorsaLogo.vue'
  import Map from '@/components/icons/Map.vue'
</script>
<template>
  <section class="relative hidden w-screen h-screen md:block">
    <video src="https://storage.googleapis.com/coorsa-mexico-web/Videos/FONDOP%20MAP.mp4" autoplay loop muted class="object-cover size-full">
      Error!
    </video>
    <article class="absolute top-0 left-0 px-10 pt-16 pb-10 size-full bg-black/20 backdrop-blur-sm">
      <header class="float-right w-1/2">
        <h2 class="font-light text-white uppercase lg:text-7xl xl:text-7xl md:text-4xl sm:text-2xl">Territorio</h2>
        <CoorsaLogo class="text-red-700 lg:w-full md:w-[80%] sm:w-[60%] size-16"/>
      </header>
      <Map class="absolute size-[90%] translate-y-[-50%] translate-x-[-50%] top-1/2 left-1/2" />
      <h3 class="absolute w-1/2 text-base font-light text-white uppercase bottom-10 xl:text-3xl lg:text-3xl md:text-lg lg:text-left">
        CON PRESENCIA EN MÁS DE <span class="font-bold">11 ESTADOS</span> A NIVEL NACIONAL
      </h3>
    </article>
  </section>
</template>