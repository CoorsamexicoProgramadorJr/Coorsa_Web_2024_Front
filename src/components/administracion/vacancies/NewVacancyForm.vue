<script setup>
  import { onBeforeMount } from 'vue'
  import { useNewVacancyStore } from '@/stores/administration/newVacancy'
  import { useCategoryStore } from '@/stores/categories'

  const newVacancyStore = useNewVacancyStore()
  const categoryStore = useCategoryStore()

  onBeforeMount(() => {
    newVacancyStore.resetNewVacancyForm()
  })

  console.log(newVacancyStore.newVacancy)
  console.log(categoryStore.categories)
</script>

<template>
  <div class="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-black/50">
    <div class="w-[85%] h-[92vh] bg-white z-[3] relative rounded-2xl p-4 overflow-y-auto">
      <button @click="newVacancyStore.manageNewForm()" class="fixed flex items-center justify-center text-blue-900 right-[8%] top-[4vh] z-[4]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 stroke-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <h3 class="text-3xl font-bold text-blue-900">Nueva Vacante</h3>
      <form class="relative flex flex-col my-4 space-y-2" @submit.prevent="newVacancyStore.submitNewVacancy" novalidate>
        <div class="flex flex-col">
          <label class="text-lg font-semibold text-gray-600" for="position">Posición</label>
          <input type="text" v-model="newVacancyStore.newVacancy.position" placeholder="Practicante de Gerente" name="position" id="position" class="my-1 border-b border-gray-600 outline-none">
          <p v-if="Object.keys(newVacancyStore.vacancyErrors).length != 0 && Object.keys(newVacancyStore.vacancyErrors).includes('position')" class="text-sm text-red-700">
            {{ newVacancyStore.vacancyErrors.position[0] }}
          </p>
        </div>
        <div class="flex flex-col">
          <label class="text-lg font-semibold text-gray-600" for="location">Ubicación</label>
          <input type="text" v-model="newVacancyStore.newVacancy.location" placeholder="Querétaro" id="location" name="location" class="my-1 border-b border-gray-600 outline-none">
          <p v-if="Object.keys(newVacancyStore.vacancyErrors).length != 0 && Object.keys(newVacancyStore.vacancyErrors).includes('location')" class="text-sm text-red-700">
            {{ newVacancyStore.vacancyErrors.location[0] }}
          </p>
        </div>
        <div class="flex flex-col">
          <label for="category" class="text-lg font-semibold text-gray-600">Categoria</label>
          <select v-model="newVacancyStore.newVacancy.category_id" name="category" id="category" class="py-1 text-base text-center uppercase border-b border-gray-600 outline-none">
            <option value="">-- SELECCIONA UNA OPCIÓN --</option>
            <option :value="category.id" v-for="category in categoryStore.categories" :key="category.id">
              {{ category.name }}
            </option>
          </select>
          <p v-if="Object.keys(newVacancyStore.vacancyErrors).length != 0 && Object.keys(newVacancyStore.vacancyErrors).includes('category_id')" class="text-sm text-red-700">
            {{ newVacancyStore.vacancyErrors.category_id[0] }}
          </p>
        </div>
        <div class="flex flex-col">
          <label class="text-lg font-semibold text-gray-600">Horario</label>
          <textarea v-model="newVacancyStore.newVacancy.schedule" name="schedule" id="schedule" placeholder="3 turnos de 12 hrs" cols="30" rows="2" class="p-2 text-sm border border-gray-600 outline-none rounded-2xl"></textarea>
          <p v-if="Object.keys(newVacancyStore.vacancyErrors).length != 0 && Object.keys(newVacancyStore.vacancyErrors).includes('schedule')" class="text-sm text-red-700">
            {{ newVacancyStore.vacancyErrors.schedule[0] }}
          </p>
        </div>
        <div class="flex flex-col">
          <label class="text-lg font-semibold text-gray-600">Requisitos</label>
          <textarea v-model="newVacancyStore.newVacancy.requirements" name="requirements" id="requirements" placeholder="- Mayor de 18 años" cols="30" rows="5" class="p-2 text-sm border border-gray-600 outline-none rounded-2xl"></textarea>
          <p v-if="Object.keys(newVacancyStore.vacancyErrors).length != 0 && Object.keys(newVacancyStore.vacancyErrors).includes('requirements')" class="text-sm text-red-700">
            {{ newVacancyStore.vacancyErrors.requirements[0] }}
          </p>
        </div>
        <div class="flex flex-col">
          <label class="text-lg font-semibold text-gray-600" for="description">Descripción</label>
          <textarea v-model="newVacancyStore.newVacancy.description" name="description" id="description" cols="30" rows="5" placeholder="Trabajo estable" class="p-2 text-sm border border-gray-600 outline-none rounded-2xl"></textarea>
          <p v-if="Object.keys(newVacancyStore.vacancyErrors).length != 0 && Object.keys(newVacancyStore.vacancyErrors).includes('description')" class="text-sm text-red-700">
            {{ newVacancyStore.vacancyErrors.description[0] }}
          </p>
        </div>
        <button type="submit" class="w-full px-10 py-1 text-lg text-white uppercase bg-blue-900 rounded-2xl">Crear</button>
      </form>
    </div>
  </div>
</template>
