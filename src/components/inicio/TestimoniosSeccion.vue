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
    <h2 class="xl:text-7xl lg:text-5xl md:text-3xl sm:text-2xl font-bold text-white uppercase w-[85%]">Testimonios</h2>
    <div class="f-carousel md:w-[80%] min-h-[70%] max-h-[75%]  mx-auto text-white xl:text-lg lg:text-base sm:px-[5%]" id="TstCarousel">
      <div class="f-carousel__slide rounded-xl">
        <blockquote class="flex flex-col items-center justify-around size-full p-[5%]">
          <p class="text-pretty lg:text-lg md:text-base/5">
            <span class="inline-block text-5xl leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis maiores nulla quis enim corrupti officia 
            exercitationem sequi repellat harum ipsum ab, veritatis perferendis odio voluptatem facilis explicabo unde doloremque.
            <span class="block float-right text-5xl leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
          </p>
          <div class="xl:w-[30%] lg:w-[40%] md:w-[50%] w-[60%] flex justify-center items-center gap-[5%] bg-white rounded-md p-[1%]">
            <div class="bg-red-700 rounded-full xl:size-4 md:size-3 size-4"></div>
            <cite class="text-black uppercase md:text-sm">Lore</cite>
          </div>
        </blockquote>
      </div>
      <div class="f-carousel__slide rounded-xl">
        <blockquote class="flex flex-col items-center justify-around size-full p-[5%]">
          <p class="text-pretty lg:text-lg md:text-base/5">
            <span class="inline-block text-5xl leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis maiores nulla quis enim corrupti officia 
            exercitationem sequi repellat harum ipsum ab, veritatis perferendis odio voluptatem facilis explicabo unde doloremque.
            <span class="block float-right text-5xl leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
          </p>
          <div class="xl:w-[30%] lg:w-[40%] md:w-[50%] w-[60%] flex justify-center items-center gap-[5%] bg-white rounded-md p-[1%]">
            <div class="bg-red-700 rounded-full xl:size-4 md:size-3 size-4"></div>
            <cite class="text-black uppercase md:text-sm">Lore</cite>
          </div>
        </blockquote>
      </div>
      <div class="f-carousel__slide rounded-xl">
        <blockquote class="flex flex-col items-center justify-around size-full p-[5%]">
          <p class="text-pretty lg:text-lg md:text-base/5">
            <span class="inline-block text-5xl leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis maiores nulla quis enim corrupti officia 
            exercitationem sequi repellat harum ipsum ab, veritatis perferendis odio voluptatem facilis explicabo unde doloremque.
            <span class="block float-right text-5xl leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
          </p>
          <div class="xl:w-[30%] lg:w-[40%] md:w-[50%] w-[60%] flex justify-center items-center gap-[5%] bg-white rounded-md p-[1%]">
            <div class="bg-red-700 rounded-full xl:size-4 md:size-3 size-4"></div>
            <cite class="text-black uppercase md:text-sm">Lore</cite>
          </div>
        </blockquote>
      </div>
      <div class="f-carousel__slide rounded-xl">
        <blockquote class="flex flex-col items-center justify-around size-full p-[5%]">
          <p class="text-pretty lg:text-lg md:text-base/5">
            <span class="inline-block text-5xl leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis maiores nulla quis enim corrupti officia 
            exercitationem sequi repellat harum ipsum ab, veritatis perferendis odio voluptatem facilis explicabo unde doloremque.
            <span class="block float-right text-5xl leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
          </p>
          <div class="xl:w-[30%] lg:w-[40%] md:w-[50%] w-[60%] flex justify-center items-center gap-[5%] bg-white rounded-md p-[1%]">
            <div class="bg-red-700 rounded-full xl:size-4 md:size-3 size-4"></div>
            <cite class="text-black uppercase md:text-sm">Lore</cite>
          </div>
        </blockquote>
      </div>
      <div class="f-carousel__slide rounded-xl">
        <blockquote class="flex flex-col items-center justify-around size-full p-[5%]">
          <p class="text-pretty lg:text-lg md:text-base/5">
            <span class="inline-block text-5xl leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis maiores nulla quis enim corrupti officia 
            exercitationem sequi repellat harum ipsum ab, veritatis perferendis odio voluptatem facilis explicabo unde doloremque.
            <span class="block float-right text-5xl leading-none xl:text-9xl lg:text-8xl">&#8221;</span>
          </p>
          <div class="xl:w-[30%] lg:w-[40%] md:w-[50%] w-[60%] flex justify-center items-center gap-[5%] bg-white rounded-md p-[1%]">
            <div class="bg-red-700 rounded-full xl:size-4 md:size-3 size-4"></div>
            <cite class="text-black uppercase md:text-sm">Lore</cite>
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

  @media screen and (max-width: 768px) {
    #TstCarousel {
      --f-carousel-spacing: 1%;
      --f-carousel-slide-width: calc(100% / 3)
    }
  }
  
  @media screen and (max-width: 640px) {
    #TstCarousel {
      --f-carousel-slide-width: calc(100% / 1.5)
    }
  }
</style>