<script setup>
  import { onMounted, ref } from 'vue'
  import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm';
  import { useCategoryStore } from '@/stores/categories'
  import { useVacancyStore } from '@/stores/vacancies'

  const categoryStore = useCategoryStore()
  const vacancyStore = useVacancyStore()
  const showCarousel = ref(false)

  onMounted(() => {
    const categoriesContainer = document.getElementById("categoriesContainer")
    const options = {
      infinite: true,
      center: true,
      slidesPerPage: 3,
      breakpoints: {
        "(min-width: 425px)": {
          axis: "y",
        },
        "(min-width: 1024px)": {
          axis: "x"
        }
      }
    }

    setTimeout(() => {
      new Carousel(categoriesContainer, options)
      showCarousel.value = true
    }, 600)
  })
</script>
<template>
  <section class="w-[100vw] min-h-[92vh] p-[3%] bg-[url('/img/fondo-testimonios.jpg')] bg-cover bg-bottom text-white" id="vacantes">
    <h2 class="mb-10 text-4xl font-bold uppercase xl:text-7xl lg:text-6xl md:text-5xl lg:mb-20 lg:text-center">Nuestras Vacantes</h2>

    <div v-show="showCarousel" id="categoriesContainer" class="f-carousel w-[90%] mx-auto h-52 lg:h-80 lg:max-h-[40%]">
      <button v-for="category in categoryStore.categories" :key="category.id" @click="vacancyStore.openList(category.id)" class="p-1 text-xl font-bold uppercase transition ease-in-out delay-75 border-2 lg:text-2xl xl:text-3xl f-carousel__slide rounded-2xl lg:break-words focus:bg-white/20">
        {{ category.name }}
      </button>
    </div>

    <div v-if="vacancyStore.showVacanciesList && vacancyStore.vacancies.length > 0" class="m-[5%] flex flex-col items-center">
      <details v-for="vacancy in vacancyStore.vacancies" :key="vacancy.id" class="w-full lg:p-4 open:bg-white/10 rounded-2xl open:ring-1 open:ring-white open:shadow-lg open:my-4">
        <summary class="p-2 text-red-700 border-b border-white select-none hover:border-red-700 hover:cursor-pointer">
          <h3 class="inline-block font-semibold tracking-tighter text-white uppercase md:tracking-normal text-md lg:text-lg xl:text-2xl">{{ vacancy.position }}</h3>
        </summary>
        <div class="px-4 pb-2 mt-4">
          <div class="flex flex-col gap-1 mb-1 lg:flex-row lg:gap-4">
            <h4 class="font-medium text-red-500 uppercase lg:text-lg xl:text-xl">Ubicación:</h4>
            <p class="flex-1 lg:text-lg xl:text-xl">{{ vacancy.location }}</p>
          </div>
          <div class="flex flex-col gap-1 mb-1 lg:flex-row lg:gap-4">
            <h3 class="font-medium text-red-500 uppercase lg:text-lg xl:text-xl">Descripción:</h3>
            <p class="flex-1 lg:text-lg xl:text-xl">{{ vacancy.description }}</p>
          </div>
          <div class="flex flex-col gap-1 mb-1 lg:flex-row lg:gap-4">
            <h3 class="font-medium text-red-500 uppercase lg:text-lg xl:text-xl">Requerimientos</h3>
            <p class="flex-1 lg:text-lg xl:text-xl">{{ vacancy.requirements }}</p>
          </div>
          <div class="flex flex-col gap-1 mb-1 lg:flex-row lg:gap-4">
            <h3 class="font-medium text-red-500 uppercase lg:text-lg xl:text-xl">Horario</h3>
            <p class="flex-1 lg:text-lg xl:text-xl">{{ vacancy.schedule }}</p>
          </div>
          <div class="flex items-center justify-center w-full">
            <button @click="vacancyStore.applyVacancy(vacancy)" class="w-1/2 p-2 font-semibold uppercase bg-red-700 md:w-1/3 rounded-2xl hover:cursor-pointer hover:bg-red-800 lg:text-lg xl:text-xl">
              Postularse
            </button>
          </div>
        </div>
      </details>
    </div>
    <div class="w-full text-3xl md:text-5xl h-1/5" :class="{ 'md:mt-[20%] mt-[40%]' : vacancyStore.showVacanciesList == false, 'mt-[4%]' : vacancyStore.showVacanciesList}">
      <h3 class="text-center">Juntos, hagamos de lo bueno, algo mejor.</h3>
      <p class="font-bold text-center text-red-700 uppercase">Somos Coorsa</p>
    </div>
  </section>
</template>

<style scoped>
  #categoriesContainer {
    --f-carousel-slide-width: 100%;
    --f-carousel-slide-height: calc((100% - 10%) / 4);

    --f-carousel-spacing: 5%;

    --f-button-color: #b91c1c;
    --f-button-next-pos: -35px;
    --f-button-prev-pos: -35px;
    --f-button-svg-width: 30px;
    --f-button-svg-height: 30px;

    --f-carousel-dots-height: 100px;
  }

  #categoriesContainer .isSelected{
    border: 2px solid white;
  }

  @media screen and (min-width: 1024px) {
    #categoriesContainer {
      --f-carousel-slide-width: calc((100% - 10%) / 3);
      --f-carousel-slide-height: 100%;

      --f-carousel-spacing: 5%;

      --f-button-svg-width: 40px;
      --f-button-svg-height: 40px;

      --f-carousel-dots-height: 50px;
    }
  }
</style>