<script setup>
  import { useCategoryStore } from '@/stores/categories'
  import { useVacancyStore } from '@/stores/vacancies'

  const categoryStore = useCategoryStore()
  const vacancyStore = useVacancyStore()
</script>
<template>
  <section class="w-[100vw] min-h-[92vh] p-[3%]" id="sec-vacantes">
    <h2 class="lg:text-6xl md:text-5xl text-4xl font-bold text-black uppercase lg:mb-[3%] mb-10">Vacantes</h2>
    <div class="flex lg:flex-row flex-col items-center justify-center w-full max-h-[40%] xl:gap-[10%] lg:gap-[5%] xl:text-4xl lg:text-3xl text-2xl lg:space-y-0 space-y-10 text-red-700">
      <button v-for="category in categoryStore.categories" :key="category.id" @click="vacancyStore.openList(category.id)" class="xl:w-1/4 lg:w-[28%] w-[80%] lg:h-full h-16 lg:min-h-80 lg:rounded-2xl rounded-full font-semibold pb-[1%] border-2 border-red-700 uppercase lg:break-words lg:tracking-tight">
        {{ category.name }}
      </button>
    </div>

    <div v-if="vacancyStore.showVacanciesList && vacancyStore.vacancies.length > 0" class="m-[5%] flex flex-col items-center">
      <details class="w-[90%] mb-[2%] flex flex-col items-center" v-for="vacancy in vacancyStore.vacancies" :key="vacancy.id">
        <summary class="w-full lg:text-3xl text-2xl border-b-2 border-red-700 pb-[1%] text-red-700 hover:cursor-pointer" open>
          <span class="font-bold text-black">{{ vacancy.position }}</span>
        </summary>
        <div class="py-[2%] px-[4%]">
          <dl class="text-lg xl:text-2xl lg:text-xl">
            <div class="flex flex-col sm:flex-row gap-[2%] sm:items-center my-[1%]">
              <dt class="font-semibold uppercase">Ubicación:</dt>
              <dd class="font-light">{{ vacancy.location }}</dd>
            </div>
            <div class="flex flex-col sm:flex-row gap-[2%] sm:items-center my-[2%]">
              <dt class="font-semibold uppercase">Descripción:</dt>
              <dd class="font-light">{{ vacancy.description }}</dd>
            </div>
            <div class="flex flex-col sm:flex-row gap-[2%] sm:items-center my-[2%]">
              <dt class="font-semibold uppercase">Horario Laboral:</dt>
              <dd class="font-light">{{ vacancy.schedule }}</dd>
            </div>
            <div class=" my-[1%]">
              <dt class="font-semibold uppercase ">Requisitos:</dt>
              <dd class="mx-[2%]">
                <ul class="list-disc mx-[2%]">
                  <li v-for="requirement in vacancy.requirements.split('|')" :key="requirement.position" class="font-light uppercase my-[1%] xl:leading-7 leading-5">
                    {{ requirement }}
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <button @click="vacancyStore.applyVacancy(vacancy)" class="w-1/3 h-10 mx-auto font-bold text-white uppercase bg-red-700 md:w-1/5 rounded-xl xl:text-xl">
          Postulate
        </button>
      </details>
    </div>
    <div class="w-full text-3xl md:text-5xl h-1/5" :class="{ 'md:mt-[20%] mt-[40%]' : vacancyStore.showVacanciesList == false, 'mt-[4%]' : vacancyStore.showVacanciesList}">
      <h3 class="text-center">Juntos, hagamos de lo bueno, algo mejor.</h3>
      <p class="font-bold text-center text-red-700 uppercase">Somos Coorsa</p>
    </div>
  </section>
</template>