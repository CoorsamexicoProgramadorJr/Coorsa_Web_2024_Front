<script setup>
import { onBeforeMount } from 'vue'
import { useNewCatStore } from '@/stores/administration/newCategory'

const newCatStore = useNewCatStore()

onBeforeMount(() => {
  newCatStore.setUserId()
  newCatStore.resetCategoryForm()
  newCatStore.resetCategoryErrors()
})

</script>

<template>
  <div class="absolute top-0 left-0 w-screen h-screen bg-black/50 lg:w-3/4 z-[1] lg:ml-[25%]">
    <div class="w-[85%] mx-auto top-[5%] lg:top-[7%] max-h-[92vh] bg-white z-[3] relative rounded-2xl p-4 overflow-y-auto md:w-[70%] lg:w-2/3">
      <button @click="newCatStore.manageNewForm()" class="fixed right-[7%] md:right-[15%] lg:right-[13%] top-[5%] lg:top-[7%] flex items-center justify-center text-blue-900 z-[4]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 stroke-2 md:w-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <h3 class="text-3xl font-bold text-blue-900 lg:text-4xl">Nueva Categoria</h3>
      <form class="relative flex flex-col my-2 space-y-2" @submit.prevent="newCatStore.submitNewCategory" novalidate>
        <div>
          <div class="flex flex-col md:gap-4 md:flex-row md:items-center">
            <label class="text-lg font-semibold text-gray-600 lg:text-xl" for="name">Nombre</label>
            <input type="text" v-model="newCatStore.categoryForm.name" placeholder="Gerencial" name="name" id="name" class="flex-1 my-1 border-b border-gray-600 outline-none">
          </div>
          <p v-if="Object.keys(newCatStore.categoryErrors).length != 0 && Object.keys(newCatStore.categoryErrors).includes('name')" class="text-sm text-red-700">
            {{ newCatStore.categoryErrors.name[0] }}
          </p>
        </div>
        <button type="submit" class="w-full px-10 py-1 text-lg text-white uppercase bg-blue-900 rounded-2xl">Crear</button>
      </form>
    </div>
  </div>
</template>