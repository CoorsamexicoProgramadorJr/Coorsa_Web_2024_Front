<script setup>
  import { onUnmounted } from 'vue'
  import { useDirectiveStore } from '@/stores/administration/directives'

  const directivesStore = useDirectiveStore()

  onUnmounted(() => {
    if(Object.keys(directivesStore.newDirectiveForm.errors).length != 0 ) directivesStore.newDirectiveForm.resetErrors()
    directivesStore.newDirectiveForm.resetData()
  })
</script>

<template>
  <article class="absolute top-0 left-0 w-screen h-screen bg-black/50 lg:w-3/4 z-[1] lg:ml-[25%]">
    <div class="w-[85%] mx-auto top-[5%] lg:top-[7%] max-h-[92vh] bg-white z-[3] relative rounded-2xl p-4 overflow-y-auto md:w-[70%] lg:w-2/3">
      <button @click="directivesStore.newDirectiveModal.changeStatus()" class="fixed right-[7%] md:right-[15%] lg:right-[13%] top-[5%] lg:top-[7%] flex items-center justify-center text-blue-900 z-[4]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 stroke-2 md:w-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <h3 class="text-3xl font-bold text-blue-900 lg:text-4xl">Nuevo Directivo</h3>
      <form class="relative flex flex-col my-2 space-y-2" @submit.prevent="directivesStore.registerDirective()" novalidate>
        <div>
          <div class="flex flex-col md:gap-4 md:flex-row md:items-center">
            <label class="text-lg font-semibold text-gray-600 lg:text-xl" for="name">Nombre</label>
            <input type="text" v-model="directivesStore.newDirectiveForm.data.name" placeholder="Ejem. Fulanito de la garza" name="name" id="name" class="flex-1 my-1 border-b border-gray-600 outline-none">
          </div>
          <p v-if="directivesStore.newDirectiveForm.errors?.name" class="text-sm text-red-700">
            {{ directivesStore.newDirectiveForm.errors.name[0] }}
          </p>
        </div>
        <div>
          <div class="flex flex-col md:gap-4 md:flex-row md:items-center">
            <label class="text-lg font-semibold text-gray-600 lg:text-xl" for="position">Puesto</label>
            <input type="text" v-model="directivesStore.newDirectiveForm.data.position" placeholder="Ejem. CEO, Gerente, etc" name="position" id="position" class="flex-1 my-1 border-b border-gray-600 outline-none">
          </div>
          <p v-if="directivesStore.newDirectiveForm.errors?.position" class="text-sm text-red-700">
            {{ directivesStore.newDirectiveForm.errors.position[0] }}
          </p>
        </div>
        <div>
          <div class="flex flex-col md:gap-4">
            <label class="text-lg font-semibold text-gray-600 lg:text-xl" for="image">Imagen</label>
            <input type="file" @change="directivesStore.manageImage" accept=".jpg, .png, .jpeg" name="image" id="image" class="file:border-0 file:rounded-full file:px-4 file:py-1 file:bg-blue-200 file:text-blue-950 file:mr-2">
          </div>
          <p v-if="directivesStore.newDirectiveForm.errors?.image" class="text-sm text-red-700">
            {{ directivesStore.newDirectiveForm.errors.image[0] }}
          </p>
        </div>
        <div v-if="directivesStore.imageUrl.length != 0" class="space-y-2">
          <h4 class="text-base font-semibold text-gray-600">Vista previa</h4>
          <img :src="directivesStore.imageUrl" alt="Image preview" class="size-[50%] mx-auto rounded-2xl">
        </div>
        <button type="submit" class="flex items-center justify-center w-full gap-2 px-10 py-1 text-lg text-white uppercase bg-blue-900 rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg>
          Crear
        </button>
      </form>
    </div>
  </article>
</template>