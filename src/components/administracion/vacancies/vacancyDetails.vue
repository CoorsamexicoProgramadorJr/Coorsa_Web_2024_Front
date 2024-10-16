<script setup>
  import { useNewVacancyStore } from '@/stores/administration/newVacancy'
  import { useCategoryStore } from '@/stores/categories'

  const newVacancyStore = useNewVacancyStore()
  const categoryStore = useCategoryStore()

  console.log(newVacancyStore.newVacancy)
  console.log(categoryStore.categories)
</script>

<template>
  <div class="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-black/50 lg:w-3/4 lg:ml-[25%] lg:z-[1]">
    <div class="w-[85%] max-h-[92vh] bg-white z-[3] relative rounded-2xl p-4 overflow-y-auto md:w-[80%]">
      <button @click="newVacancyStore.manageVacancyDetails" class="float-right flex items-center justify-center text-blue-900 z-[4]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 stroke-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <h3 class="text-3xl font-bold text-blue-900 lg:text-4xl">Detalles de la vacante</h3>
      <form class="relative flex flex-col my-2 space-y-2" @submit.prevent="newVacancyStore.updateVacancy" novalidate>
        <div class="flex items-center gap-4">
          <label class="text-lg font-semibold text-gray-600 lg:text-xl" for="status">Estatus</label>
          <select name="status" v-model="newVacancyStore.vacancy.status" id="status" class="flex-1 py-1 text-base text-center uppercase border-b border-gray-600 outline-none">
            <option value="0">Inactiva</option>
            <option value="1">Activa</option>
          </select>
        </div>
        <div>
          <div class="flex flex-col md:gap-4 md:flex-row md:items-center">
            <label class="text-lg font-semibold text-gray-600 lg:text-xl" for="position">Posición</label>
            <input type="text" v-model="newVacancyStore.vacancy.position" placeholder="Practicante de Gerente" name="position" id="position" class="flex-1 my-1 border-b border-gray-600 outline-none">
          </div>
          <p v-if="Object.keys(newVacancyStore.vacancyErrors).length != 0 && Object.keys(newVacancyStore.vacancyErrors).includes('position')" class="text-sm text-red-700">
            {{ newVacancyStore.vacancyErrors.position[0] }}
          </p>
        </div>
        <div>
          <div class="flex flex-col md:gap-4 md:flex-row md:items-center">
            <label class="text-lg font-semibold text-gray-600 lg:text-xl" for="location">Ubicación</label>
            <input type="text" v-model="newVacancyStore.vacancy.location" placeholder="Querétaro" id="location" name="location" class="flex-1 my-1 border-b border-gray-600 outline-none">
          </div>
          <p v-if="Object.keys(newVacancyStore.vacancyErrors).length != 0 && Object.keys(newVacancyStore.vacancyErrors).includes('location')" class="text-sm text-red-700">
            {{ newVacancyStore.vacancyErrors.location[0] }}
          </p>
        </div>
        <div>
          <div class="flex flex-col md:flex-row md:gap-4 md:items-center">
            <label for="category" class="text-lg font-semibold text-gray-600 lg:text-xl">Categoria</label>
            <select v-model="newVacancyStore.vacancy.category_id" name="category" id="category" class="flex-1 py-1 text-base text-center uppercase border-b border-gray-600 outline-none">
              <option value="">-- SELECCIONA UNA OPCIÓN --</option>
              <option :value="category.id" v-for="category in categoryStore.categories" :key="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>
          <p v-if="Object.keys(newVacancyStore.vacancyErrors).length != 0 && Object.keys(newVacancyStore.vacancyErrors).includes('category_id')" class="text-sm text-red-700">
            {{ newVacancyStore.vacancyErrors.category_id[0] }}
          </p>
        </div>
        <div class="flex flex-col">
          <label class="text-lg font-semibold text-gray-600">Horario</label>
          <textarea v-model="newVacancyStore.vacancy.schedule" name="schedule" id="schedule" placeholder="3 turnos de 12 hrs" cols="30" rows="2" class="p-2 text-sm border border-gray-600 outline-none rounded-2xl"></textarea>
          <p v-if="Object.keys(newVacancyStore.vacancyErrors).length != 0 && Object.keys(newVacancyStore.vacancyErrors).includes('schedule')" class="text-sm text-red-700">
            {{ newVacancyStore.vacancyErrors.schedule[0] }}
          </p>
        </div>
        <div class="flex flex-col">
          <label class="text-lg font-semibold text-gray-600">Requisitos</label>
          <textarea v-model="newVacancyStore.vacancy.requirements" name="requirements" id="requirements" placeholder="- Mayor de 18 años" cols="30" rows="5" class="p-2 text-sm border border-gray-600 outline-none rounded-2xl"></textarea>
          <p v-if="Object.keys(newVacancyStore.vacancyErrors).length != 0 && Object.keys(newVacancyStore.vacancyErrors).includes('requirements')" class="text-sm text-red-700">
            {{ newVacancyStore.vacancyErrors.requirements[0] }}
          </p>
        </div>
        <div class="flex flex-col">
          <label class="text-lg font-semibold text-gray-600" for="description">Descripción</label>
          <textarea v-model="newVacancyStore.vacancy.description" name="description" id="description" cols="30" rows="5" placeholder="Trabajo estable" class="p-2 text-sm border border-gray-600 outline-none rounded-2xl"></textarea>
          <p v-if="Object.keys(newVacancyStore.vacancyErrors).length != 0 && Object.keys(newVacancyStore.vacancyErrors).includes('description')" class="text-sm text-red-700">
            {{ newVacancyStore.vacancyErrors.description[0] }}
          </p>
        </div>
        <button type="submit" class="flex items-center justify-center w-full gap-1 px-10 py-1 text-lg text-white uppercase bg-blue-900 rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          Actualizar
        </button>
      </form>
    </div>
  </div>
</template>