<script setup>
  import CoorsaLogo from '../icons/CoorsaLogo.vue';
</script>
<template>
  <section class="relative w-screen h-screen">
    <video class="object-fill object-center size-full backdrop-opacity-75" src="https://storage.googleapis.com/coorsa-mexico-web/Videos/fondo%20portada.mp4" autoplay muted loop>
      Your browser does not support the video tag.
    </video>
    <div class="size-full bg-black/40 z-[1] absolute top-0 left-0 backdrop-blur-sm p-10">
      <div class="flex flex-col justify-end w-3/5 h-full gap-2 p-8 text-white uppercase border-t border-b border-l rounded-l-3xl">
        <h2 id="trans-text1">Somos</h2>
        <CoorsaLogo class="w-3/4" />
        <h1 class="2xl:bottom-[10%] font-light uppercase xl:text-7xl lg:text-5xl text-3xl">
          Soluciones logísticas
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #trans-text1{
    @apply font-bold lg:text-6xl text-transparent;
    -webkit-text-stroke: 1px #fff;
  }
</style>