<script setup>
  import { onMounted } from 'vue'
  import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js"
  import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js"
  import { directivos } from '@/data/directivos'

  onMounted(() => {

    const container = document.getElementById("directivosCarousel")
    const options = { 
      infinite: true,
      Autoplay: {
        timeout: 4000,
        showProgress: false
      }
    }

    new Carousel(container, options, { Autoplay })
  })
</script>
<template>
  <section class="w-screen h-[92vh] flex pt-[5%]">
    <div class="w-1/3 h-full px-[3%]">
      <h2 class="w-2/3 text-3xl font-light">Nuestros <span class="font-semibold">Directivos Corporativos</span></h2>
      <hr class="border-red-700 mt-[2%] w-[30%] float-right mr-[5%]">
      <p class="text-xl mt-[10%] font-light">Conoce al <span class="font-medium">increíble equipo</span> detrás de este proyecto y descubre más sobre cómo trabajamos.</p>
    </div>
    <div class="w-2/3 h-full">
      <div class="f-carousel w-full h-[80%] text-white" id="directivosCarousel">
        <div v-for="directivo in directivos" :key="directivo.nombre" class="flex flex-col justify-end overflow-hidden bg-center bg-cover rounded-xl bg-origin-content f-carousel__slide" :data-lazy-src="directivo.imagen">
          <div class="flex flex-col justify-end h-1/3 bg-gradient-to-t from-black">
            <h3 class="text-2xl ml-[5%]">{{ directivo.nombre}}</h3>
            <p class="text-xl font-semibold uppercase ml-[5%] mb-[5%]">{{ directivo.puesto }}</p>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style scoped>
  #directivosCarousel{
    --f-carousel-spacing: 1%;
    --f-carousel-slide-width: calc((100% - 2%) / 3);
    --f-button-color: black;
    --f-button-bg: white;
    --f-button-border-radius: 50%; 
  }
</style>