<script setup>
  import { onMounted } from 'vue'
  import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm'
  import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js"

  onMounted(() => {
    const container = document.getElementById("TstCarousel");
    const options = { 
      infinite: true,
      center: true,
      slidesPerPage: 3,
      Autoplay: {
        timeout: 4000,
        showProgress: false
      }
    };

    new Carousel(container, options, { Autoplay });
  })
</script>
<template>
  <section class="w-screen h-[92vh] bg-black pt-[1%] flex flex-col justify-around items-center relative">
    <h2 class="xl:text-7xl lg:text-5xl font-bold text-white uppercase w-[85%]">Testimonios</h2>
    <div class="f-carousel w-[80%] min-h-[70%]  mx-auto text-white xl:text-lg lg:text-base" id="TstCarousel">
      <div class="f-carousel__slide rounded-xl">
        <blockquote class="flex flex-col items-center justify-around size-full p-[5%]">
          <p class="text-pretty">
            <span class="inline-block leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis maiores nulla quis enim corrupti officia 
            exercitationem sequi repellat harum ipsum ab, veritatis perferendis odio voluptatem facilis explicabo unde doloremque.
            <span class="block float-right leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
          </p>
          <div class="xl:w-[30%] lg:w-[40%] flex justify-center items-center gap-[5%] bg-white rounded-md">
            <div class="bg-red-700 rounded-full xl:size-4 lg:size-3"></div>
            <cite class="text-black uppercase">Lore</cite>
          </div>
        </blockquote>
      </div>
      <div class="f-carousel__slide rounded-xl">
        <blockquote class="flex flex-col items-center justify-around size-full p-[5%]">
          <p class="ttext-pretty">
            <span class="inline-block leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis maiores nulla quis enim corrupti officia 
            exercitationem sequi repellat harum ipsum ab, veritatis perferendis odio voluptatem facilis explicabo unde doloremque.
            <span class="block float-right leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
          </p>
          <div class="xl:w-[30%] lg:w-[40%] flex justify-center items-center gap-[5%] bg-white rounded-md">
            <div class="bg-red-700 rounded-full xl:size-4 lg:size-3"></div>
            <cite class="text-black uppercase">Lore</cite>
          </div>
        </blockquote>
      </div>
      <div class="f-carousel__slide rounded-xl">
        <blockquote class="flex flex-col items-center justify-around size-full p-[5%]">
          <p class="">
            <span class="inline-block leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis maiores nulla quis enim corrupti officia 
            exercitationem sequi repellat harum ipsum ab, veritatis perferendis odio voluptatem facilis explicabo unde doloremque.
            <span class="block float-right leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
          </p>
          <div class="xl:w-[30%] lg:w-[40%] flex justify-center items-center gap-[5%] bg-white rounded-md">
            <div class="bg-red-700 rounded-full xl:size-4 lg:size-3"></div>
            <cite class="text-black uppercase">Lore</cite>
          </div>
        </blockquote>
      </div>
      <div class="f-carousel__slide rounded-xl">
        <blockquote class="flex flex-col items-center justify-around size-full p-[5%]">
          <p class="">
            <span class="inline-block leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis maiores nulla quis enim corrupti officia 
            exercitationem sequi repellat harum ipsum ab, veritatis perferendis odio voluptatem facilis explicabo unde doloremque.
            <span class="block float-right leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
          </p>
          <div class="xl:w-[30%] lg:w-[40%] flex justify-center items-center gap-[5%] bg-white rounded-md">
            <div class="bg-red-700 rounded-full xl:size-4 lg:size-3"></div>
            <cite class="text-black uppercase">Lore</cite>
          </div>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #TstCarousel{
    --f-carousel-spacing: 3%;
    --f-carousel-slide-width: calc((90% - 6%) / 3);

    --f-button-color: #fff;
    --f-button-svg-width: 2rem;
    --f-button-svg-height: 2rem;
    --f-button-svg-stroke-width: 2;
  }

  #TstCarousel .f-carousel__slide.is-selected{
    --f-carousel-slide-bg: red;
  }
</style>