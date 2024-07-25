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
        timeout: 3000
      }
    };

    new Carousel(container, options, { Autoplay });
  })
</script>
<template>
  <section class="w-screen h-[92vh] text-white bg-black pt-[2%] flex flex-col justify-around items-center">
    <h2 class="text-5xl font-bold uppercase text-left w-[85%]">Servicios</h2>
    <!-- Carrousel -->
    <div class="f-carousel w-[85%] min-h-[50%] max-h-[70%]" id="myCarousel">
      <div class="f-carousel__viewport">
        <figure class="relative f-carousel__slide">
          <a href="">
            <img src="/img/almacen.jpg" alt="Imagen de un almacen" class="w-full rounded-lg">
          </a>
          <figcaption class="h-[10%] absolute bottom-[2%] left-[5%] mx-auto ">
            <h3 class="text-2xl font-bold uppercase">Warehouse</h3>
          </figcaption>
        </figure>
        <figure class="relative f-carousel__slide">
          <a href="">
            <img src="/img/quinta-servicio.jpg" alt="Imagen de un camión de patio" class="w-full rounded-lg">
          </a>
          <figcaption class="h-[10%] absolute bottom-[2%] left-[5%] mx-auto ">
            <h3 class="text-2xl font-bold uppercase">Camiones de Patio</h3>
          </figcaption>
        </figure>
        <figure class="relative f-carousel__slide">
          <a href="">
            <img src="/img/maniobras.jpg" alt="Imagen de maniobras" class="w-full rounded-lg">
          </a>
          <figcaption class="h-[10%] absolute bottom-[2%] left-[5%] mx-auto ">
            <h3 class="text-2xl font-bold uppercase">Maniobras</h3>
          </figcaption>
        </figure>
        <figure class="relative f-carousel__slide">
          <a href="">
            <img src="/img/smark-glove.jpg" alt="Imagen de tecnologias" class="w-full rounded-lg">
          </a>
          <figcaption class="h-[10%] absolute bottom-[2%] left-[5%] mx-auto ">
            <h3 class="text-2xl font-bold uppercase">Desarrollo de Tecnologías</h3>
          </figcaption>
        </figure>
        <figure class="relative f-carousel__slide">
          <a href="">
            <img src="/img/logistica-inversa.jpg" alt="Imagen de un almacen" class="w-full rounded-lg">
          </a>
          <figcaption class="h-[10%] absolute bottom-[2%] left-[5%] mx-auto ">
            <h3 class="text-2xl font-bold uppercase">Delivery Management</h3>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #myCarousel {
    --f-carousel-slide-width: calc(100% / 4);
    --f-carousel-spacing: 5px;
  }
</style>