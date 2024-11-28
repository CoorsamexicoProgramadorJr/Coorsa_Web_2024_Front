<script setup>
  import { onMounted, onBeforeMount, ref } from 'vue'
  import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js"
  import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js"
  import { useDirectiveStore } from '@/stores/administration/directives'

  const directivesStore = useDirectiveStore()
  const show = ref(false)

  onBeforeMount(() => {
    if(directivesStore.directives.length === 0) directivesStore.getAllDirectives()
  })

  onMounted(() => {
    const container = document.getElementById("directivosCarousel")

    const options = { 
      Navigation: false,
      infinite: true,
      Dots: false,
      center: false,
      slidesPerPage: 1,
      Autoplay: {
        timeout: 2500,
        showProgress: false
      },
    }

    setTimeout(() => {
      new Carousel(container, options, { Autoplay })
      show.value = true
    }, 400)
  })
</script>
<template>
  <section class="w-screen h-[92vh] flex flex-col lg:flex-row pt-[5%] overflow-hidden">
    <div class="lg:w-1/3 w-full lg:h-full h-1/3 px-[3%]">
      <h2 class="text-4xl font-light text-center 2xl:text-7xl xl:text-6xl lg:w-2/3 md:tracking-wide md:text-5xl md:text-left">
        Nuestros <span class="font-semibold">Directivos Corporativos</span>
      </h2>
      <hr class="border-red-700 mt-[2%] w-[30%] float-right mr-[5%]">
      <p class="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl lg:mt-[15%] mt-[8%] font-light text-center md:text-left">
        Conoce al <span class="font-medium">increíble equipo</span> detrás de este proyecto y descubre más sobre cómo trabajamos.
      </p>
    </div>
    <!-- Directives Carousel -->
    <div class="w-full lg:w-2/3 lg:h-full h-2/3">
      <div v-show="show" class="f-carousel lg:w-full w-[90%] lg:h-[80%] h-[90%] text-white mx-auto" id="directivosCarousel">
        <template v-for="directive in directivesStore.directives" :key="directive.id">
          <div v-if="directive.active" class="flex flex-col justify-end overflow-hidden bg-top bg-cover rounded-xl bg-origin-content f-carousel__slide" :data-lazy-src="directive.image">
            <div class="flex flex-col justify-end h-1/3 bg-gradient-to-t from-black">
              <p class="2xl:text-2xl/5 lg:text-xl/5 text-lg/5 mx-[3%] mb-[3%] tracking-tighter">{{ directive.position }}</p>
              <h3 class="2xl:text-3xl lg:text-2xl text-xl mx-[3%] font-semibold uppercase mb-[5%] lg:leading-6">{{ directive.name }}</h3>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #directivosCarousel {
    --f-carousel-spacing: 2%;
  }

  #directivosCarousel .f-carousel__slide{
    width: 70%;
    @apply shadow-lg;
  }
  
  @media screen and (min-width: 1024px){
    #directivosCarousel{
      --f-carousel-spacing: 1%;
    }

    #directivosCarousel .f-carousel__slide {
      width: calc((100% - 2%) / 3);
    }
    
    #directivosCarousel .f-carousel__slide:not(.is-selected){
      @apply grayscale;
    }
  }

  @media screen and (min-Width: 1440px){
    #directivosCarousel .f-carousel__slide {
      width: calc((100% - 2%) / 4);
    }
  }
</style>