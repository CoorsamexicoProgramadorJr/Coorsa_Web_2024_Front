<script setup>
  import { onMounted } from 'vue'
  import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm'
  import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js"

  onMounted(() => {
    const container = document.getElementById("TstCarousel");
    const options = { 
      Navigation: false,
      infinite: true,
      center: true,
      slidesPerPage: 1,
      centered: true,
      Autoplay: {
        timeout: 4000,
        showProgress: false,
        prograssParentEl: false
      },
    };

    new Carousel(container, options, { Autoplay });
  })

  const opinios = [
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex voluptatibus quibusdam iusto beatae eveniet non in perspiciatis, distinctio iste, facere eum saepe assumenda! Architecto fugiat doloribus nam temporibus dolores?",
      name: "Alejandro"
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex voluptatibus quibusdam iusto beatae eveniet non in perspiciatis, distinctio iste, facere eum saepe assumenda! Architecto fugiat doloribus nam temporibus dolores?",
      name: "Alejandro"
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex voluptatibus quibusdam iusto beatae eveniet non in perspiciatis, distinctio iste, facere eum saepe assumenda! Architecto fugiat doloribus nam temporibus dolores?",
      name: "Alejandro"
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex voluptatibus quibusdam iusto beatae eveniet non in perspiciatis, distinctio iste, facere eum saepe assumenda! Architecto fugiat doloribus nam temporibus dolores?",
      name: "Alejandro"
    },
  ]
</script>
<template>
  <section class="w-screen h-screen bg-[url('/img/fondo-testimonios.jpg')] pt-[1%] flex flex-col justify-center items-center relative lg:gap-28">
    <h2 class="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold text-white w-[85%] text-center md:text-left">
      Testimonios
    </h2>
    <div class="f-carousel lg:w-[90%] md:w-[80%] w-[85%] h-[65%] mx-auto text-white xl:text-lg lg:text-base" id="TstCarousel">
      <div v-for="(opinion, index) in opinios" :key="index" class="border-[3px] f-carousel__slide rounded-2xl">
        <blockquote class="flex flex-col justify-around h-full px-2">
          <p class="text-lg text-center">
            <span class="block text-center text-red-700 text-9xl">&#8221;</span>
            {{ opinion.quote }}
          </p>
          <div class="flex items-center justify-center h-10 gap-1 mx-auto bg-white w-44 rounded-2xl">
            <div class="bg-red-700 rounded-full size-5"></div>
            <p class="text-xl text-black">{{ opinion.name }}</p>
          </div>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #TstCarousel{
    --f-carousel-slide-width: 80%;
    --f-carousel-spacing: 8%;
    --f-carousel-slide-padding: 16px;
  }

  #TstCarousel .is-selected{
    border: 3px solid red;
  }

  #TstCarousel .f-carousel__slide:not(.is-selected){
    @apply opacity-75;
  }

  @media screen and (min-width: 768px) {
    #TstCarousel {
      --f-carousel-slide-width: 45%;
      --f-carousel-spacing: 4%;
    }
  }
  
  @media screen and (min-width: 1024px) {
    #TstCarousel {
      --f-carousel-slide-width: calc((100% - 6%) / 3);
      --f-carousel-spacing: 3%;
    }
  }
</style>