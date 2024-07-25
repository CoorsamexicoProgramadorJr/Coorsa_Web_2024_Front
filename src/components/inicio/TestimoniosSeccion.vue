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
        timeout: 5000
      }
    };

    new Carousel(container, options, { Autoplay });
  })
</script>
<template>
  <section class="w-screen h-[92vh] bg-black pt-[1%] flex flex-col justify-around items-center">
    <h2 class="text-5xl font-bold text-white uppercase w-[85%]">Testimonios</h2>
    <div class="f-carousel w-[90%] min-h-[60%] max-h-[80%] mx-auto text-white" id="TstCarousel">
      <div class="f-carousel__viewport">
        <div class="f-carousel__slide rounded-xl">
          <blockquote class="flex flex-col items-center justify-around size-full p-[5%]">
            <p class="text-lg text-pretty">
              <span class="inline-block leading-none text-9xl">&#8221;</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis maiores nulla quis enim corrupti officia 
              exercitationem sequi repellat harum ipsum ab, veritatis perferendis odio voluptatem facilis explicabo unde doloremque.
              <span class="block float-right leading-none text-9xl">&#8221;</span>
              <div class="clear"></div>
            </p>
            <footer class="w-[30%] flex justify-center items-center gap-[5%] bg-white rounded-md">
              <div class="bg-red-700 rounded-full w-[10%] h-[50%]"></div>
              <cite class="text-black uppercase">Lore</cite>
            </footer>
          </blockquote>
        </div>
        <div class="f-carousel__slide rounded-xl">
          <blockquote class="flex flex-col items-center justify-around size-full p-[5%]">
            <p class="text-lg text-pretty">
              <span class="inline-block leading-none text-9xl">&#8221;</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis maiores nulla quis enim corrupti officia 
              exercitationem sequi repellat harum ipsum ab, veritatis perferendis odio voluptatem facilis explicabo unde doloremque.
              <span class="block float-right leading-none text-9xl">&#8221;</span>
              <div class="clear"></div>
            </p>
            <footer class="w-[30%] flex justify-center items-center gap-[5%] bg-white rounded-md">
              <div class="bg-red-700 rounded-full w-[10%] h-[50%]"></div>
              <cite class="text-black uppercase">Lore</cite>
            </footer>
          </blockquote>
        </div>
        <div class="f-carousel__slide rounded-xl">
          <blockquote class="flex flex-col items-center justify-around size-full p-[5%]">
            <p class="text-lg">
              <span class="text-9xl">&#8221;</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis maiores nulla quis enim corrupti officia 
              exercitationem sequi repellat harum ipsum ab, veritatis perferendis odio voluptatem facilis explicabo unde doloremque.
            </p>
            <footer class="w-[30%] flex justify-center items-center gap-[5%] bg-white rounded-md">
              <div class="bg-red-700 rounded-full w-[10%] h-[50%]"></div>
              <cite class="text-black uppercase">Lore</cite>
            </footer>
          </blockquote>
        </div>
        <div class="f-carousel__slide rounded-xl">
          <blockquote class="flex flex-col items-center justify-around size-full p-[5%]">
            <p class="text-lg">
              <span class="text-9xl">&#8221;</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis maiores nulla quis enim corrupti officia 
              exercitationem sequi repellat harum ipsum ab, veritatis perferendis odio voluptatem facilis explicabo unde doloremque.
            </p>
            <footer class="w-[30%] flex justify-center items-center gap-[5%] bg-white rounded-md">
              <div class="bg-red-700 rounded-full w-[10%] h-[50%]"></div>
              <cite class="text-black uppercase">Lore</cite>
            </footer>
          </blockquote>
        </div>
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