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
      centered: true,
      Autoplay: {
        timeout: 4000,
        showProgress: false
      },
      Navigation: false
    };

    new Carousel(container, options, { Autoplay });
  })
</script>
<template>
  <section class="w-screen h-[92vh] bg-black pt-[1%] flex flex-col justify-around items-center relative">
    <h2 class="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold text-white uppercase w-[85%] text-center md:text-left">
      Testimonios
    </h2>
    <div class="f-carousel md:w-[80%] w-[85%] min-h-[70%] mx-auto text-white xl:text-lg lg:text-base" id="TstCarousel">
      <div class="border-[3px] f-carousel__slide rounded-2xl">
        <blockquote class="flex flex-col justify-around h-full px-2">
          <p class="text-lg text-center">
            <span class="block text-center text-red-700 text-9xl">&#8221;</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex voluptatibus quibusdam iusto beatae eveniet non in perspiciatis,
             distinctio iste, facere eum saepe assumenda! Architecto fugiat doloribus nam temporibus dolores?
          </p>
          <div class="flex items-center justify-center h-10 gap-1 mx-auto bg-white w-44 rounded-2xl">
            <div class="bg-red-700 rounded-full size-5"></div>
            <p class="text-xl text-black">Alejandro</p>
          </div>
        </blockquote>
      </div>
      <div class="border-[3px] f-carousel__slide rounded-2xl">
        <blockquote class="flex flex-col justify-around h-full px-2">
          <p class="text-lg text-center">
            <span class="block text-center text-red-700 text-9xl">&#8221;</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex voluptatibus quibusdam iusto beatae eveniet non in perspiciatis,
             distinctio iste, facere eum saepe assumenda! Architecto fugiat doloribus nam temporibus dolores?
          </p>
          <div class="flex items-center justify-center h-10 gap-1 mx-auto bg-white w-44 rounded-2xl">
            <div class="bg-red-700 rounded-full size-5"></div>
            <p class="text-xl text-black">Alejandro</p>
          </div>
        </blockquote>
      </div>
      <div class="border-[3px] f-carousel__slide rounded-2xl">
        <blockquote class="flex flex-col justify-around h-full px-2">
          <p class="text-lg text-center">
            <span class="block text-center text-red-700 text-9xl">&#8221;</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex voluptatibus quibusdam iusto beatae eveniet non in perspiciatis,
             distinctio iste, facere eum saepe assumenda! Architecto fugiat doloribus nam temporibus dolores?
          </p>
          <div class="flex items-center justify-center h-10 gap-1 mx-auto bg-white w-44 rounded-2xl">
            <div class="bg-red-700 rounded-full size-5"></div>
            <p class="text-xl text-black">Alejandro</p>
          </div>
        </blockquote>
      </div>
      <div class="border-[3px] f-carousel__slide rounded-2xl">
        <blockquote class="flex flex-col justify-around h-full px-2">
          <p class="text-lg text-center">
            <span class="block text-center text-red-700 text-9xl">&#8221;</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex voluptatibus quibusdam iusto beatae eveniet non in perspiciatis,
             distinctio iste, facere eum saepe assumenda! Architecto fugiat doloribus nam temporibus dolores?
          </p>
          <div class="flex items-center justify-center h-10 gap-1 mx-auto bg-white w-44 rounded-2xl">
            <div class="bg-red-700 rounded-full size-5"></div>
            <p class="text-xl text-black">Alejandro</p>
          </div>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #TstCarousel{
    --f-carousel-spacing: 3%;
    --f-carousel-slide-width: calc((100% - 6%) / 3);

    --f-carousel-slide-padding: 16px;
  }

  @media screen and (max-width: 768px) {
    #TstCarousel {
      --f-carousel-spacing: 1%;
      --f-carousel-slide-width: calc(100% / 2.5)
    }
  }
  
  @media screen and (max-width: 640px) {
    #TstCarousel {
      --f-carousel-slide-width: calc(100% / 1.5)
    }
  }
</style>