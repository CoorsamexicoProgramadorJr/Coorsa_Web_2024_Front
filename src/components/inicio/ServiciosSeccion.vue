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
        progressParentEl: false
      }
    };

    new Carousel(container, options, { Autoplay });
  })
</script>
<template>
  <section class="w-screen h-[92vh] text-white bg-black pt-[1%] flex flex-col justify-around items-center">
    <h2 class="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold uppercase md:text-left w-[85%] text-center">Servicios</h2>
    <!-- Carrousel -->
    <div class="f-carousel w-[85%] min-h-[60%] max-h-[70%] xl:text-3xl/none lg:text-xl/tight sm:text-lg" id="myCarousel">
      <div class="relative bg-bottom bg-cover f-carousel__slide rounded-xl" data-lazy-src="/img/almacen.jpg">
        <h3 class="absolute bottom-0 left-0 font-bold uppercase m-[5%]">Warehouse</h3>
      </div>
      <div class="relative bg-bottom bg-cover f-carousel__slide rounded-xl" data-lazy-src="/img/quinta-servicio.jpg">
        <h3 class="absolute bottom-0 left-0 font-bold uppercase m-[5%]">Camiones de Patio</h3>
      </div>
      <div class="relative bg-bottom bg-cover f-carousel__slide rounded-xl" data-lazy-src="/img/maniobras.jpg">
        <h3 class="absolute bottom-0 left-0 font-bold uppercase m-[5%]">Maniobras</h3>
      </div>
      <div class="relative bg-bottom bg-cover f-carousel__slide rounded-xl" data-lazy-src="/img/smark-glove.jpg">
        <h3 class="absolute bottom-0 left-0 font-bold uppercase m-[5%]">Desarrollo de Tecnologías</h3>
      </div>
      <div class="relative bg-bottom bg-cover f-carousel__slide rounded-xl" data-lazy-src="/img/logistica-inversa.jpg">
        <h3 class="absolute bottom-0 left-0 font-bold uppercase m-[5%]">Delivery Management</h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #myCarousel {
    --f-carousel-slide-width: calc(100% / 4);
    --f-carousel-spacing: 1%;
  }

  @media screen and (max-width: 768px) {
    #myCarousel {
      --f-carousel-slide-width: calc((100% - 2%) / 3);
      --f-carousel-spacing: 1%;
    }
  }

  @media screen and (max-width: 640px) {
    #myCarousel {
      --f-carousel-slide-width: 70%;
    }
  }
</style>