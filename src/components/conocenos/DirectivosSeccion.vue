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
      },
      Navigation: false
    }

    new Carousel(container, options, { Autoplay })
  })
</script>
<template>
  <section class="w-screen h-[92vh] flex flex-col md:flex-row pt-[5%]">
    <div class="md:w-1/3 w-full md:h-full h-1/3 px-[3%]">
      <h2 class="text-4xl font-light text-center md:w-2/3 xl:text-7xl lg:text-5xl md:text-left">
        Nuestros <span class="font-semibold">Directivos Corporativos</span>
      </h2>
      <hr class="border-red-700 mt-[2%] w-[30%] float-right mr-[5%]">
      <p class="xl:text-3xl lg:text-2xl mt-[10%] font-light text-xl text-center md:text-left">
        Conoce al <span class="font-medium">increíble equipo</span> detrás de este proyecto y descubre más sobre cómo trabajamos.
      </p>
    </div>
    <!-- Directives Carousel -->
    <div class="w-full md:w-2/3 md:h-full h-2/3">
      <div class="f-carousel md:w-full w-[90%] md:h-[80%] h-[90%] text-white mx-auto" id="directivosCarousel">
        <div v-for="directivo in directivos" :key="directivo.nombre" class="flex flex-col justify-end overflow-hidden bg-center bg-cover rounded-xl bg-origin-content f-carousel__slide" :data-lazy-src="directivo.imagen">
          <div class="flex flex-col justify-end h-1/3 bg-gradient-to-t from-black">
            <p class="xl:text-xl lg:text-xl/5 ml-[5%] mb-[3%]">{{ directivo.puesto }}</p>
            <h3 class="xl:text-2xl lg:text-xl ml-[5%] font-semibold uppercase mb-[5%]">{{ directivo.nombre}}</h3>
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

  @media screen and (max-width: 640px){
    #directivosCarousel {
      --f-carousel-spacing: 2%;
      --f-carousel-slide-width: 70%;
    }
  }
</style>