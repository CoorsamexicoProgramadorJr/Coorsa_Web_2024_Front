<script setup>
  import { onMounted } from 'vue'
  import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js"
  import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js"
  
  onMounted(() => {
    const container = document.getElementById("myCarousel");
    const options = { 
      Navigation: false,
      infinite: true,
      center: true,
      Dots: false,
      slidesPerPage: 1,
      AutoPlay: {
        timeout: 3000,
        showProgress: false,
        progressParentEl: null
      }
    };

    new Carousel(container, options, { Autoplay });
  })

  const slidesBg = [
    "/img/Warehouse.jpeg",
    "/img/Camiones_patio.jpeg",
    "/img/Maniobras.jpeg",
    "/img/Desarrollo_tic.jpeg",
    "/img/Delivery.jpeg"
  ]
</script>
<template>
  <section class="w-screen h-screen text-white bg-[url('/img/fondo-aliados.jpg')] pt-[1%] flex flex-col justify-around items-center">
    <h2 class="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold uppercase md:text-left w-[85%] text-center">Servicios</h2>
    <!-- Carrousel -->
    <div class="f-carousel w-[85%] h-[65%] xl:text-3xl/none lg:text-xl/tight sm:text-lg" id="myCarousel">
      <div v-for="(slide, index) in slidesBg" :key="index" :data-lazy-src="slide" class="relative bg-right bg-cover f-carousel__slide rounded-xl"></div>
    </div>
  </section>
</template>

<style scoped>
  #myCarousel {
    --f-carousel-slide-width: 70%;
    --f-carousel-spacing: 1%;
  }

  #myCarousel .is-selected{
    border: 2px solid white;
  }

  #myCarousel .f-carousel__slide:not(.is-selected){
    @apply opacity-75;
  }

  @media screen and (min-width: 768px) {
    #myCarousel {
      --f-carousel-slide-width: 60%;
    }
  }

  @media screen and (min-width: 1024px){
    #myCarousel {
      --f-carousel-slide-width: 30%;
      --f-carousel-spacing: 2%;
    }
  }

  @media screen and (min-width: 1440px){
    #myCarousel {
      --f-carousel-slide-width: 20%;
      --f-carousel-spacing: 2%;
    }
  }
</style>