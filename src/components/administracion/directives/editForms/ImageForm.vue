<script setup>
  import { useDirectiveStore } from '@/stores/administration/directives'
  import { onUnmounted } from 'vue'

  const directivesStore = useDirectiveStore()

  onUnmounted(() => {
    if(directivesStore.newImageFormModal.active) directivesStore.newImageFormModal.changeStatus()
    if(directivesStore.imageUrl.length != 0) directivesStore.imageUrl = ''
    if(Object.keys(directivesStore.imageForm.errors).length != 0) directivesStore.imageForm.resetErrors()
  })
</script>

<template>
  <article class="absolute top-0 left-0 w-full h-full bg-black/50 z-[4]">
    <div class="w-[85%] mx-auto top-[5%] lg:top-[7%] max-h-[92vh] bg-white z-[3] relative rounded-2xl p-4 md:w-[70%] lg:w-2/3">
      <button @click="directivesStore.newImageFormModal.changeStatus()" class="fixed right-[7%] md:right-[15%] lg:right-[13%] top-[5%] lg:top-[7%] flex items-center justify-center text-blue-900 z-[4]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 stroke-2 md:w-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <h3 class="text-3xl font-bold text-blue-900 border-b border-blue-900 lg:text-4xl">Editar Imagen</h3>
      <article>
        <form class="relative flex flex-col my-2 space-y-2" @submit.prevent="directivesStore.updateDirectiveImage()" novalidate>
          <div>
            <div class="flex flex-col md:gap-4 md:flex-row md:items-center">
              <label class="text-lg font-semibold text-gray-600 lg:text-xl" for="image">Imagen</label>
              <input type="file" @change="directivesStore.setImageToForm" accept=".jpg, .png, .jpeg" name="image" id="image" class="file:border-0 file:rounded-full file:px-4 file:py-1 file:bg-blue-200 file:text-blue-950 file:mr-2">
            </div>
            <p v-if="directivesStore.imageForm.errors?.image" class="text-sm text-red-700">
              {{ directivesStore.imageForm.errors.image[0] }}
            </p>
          </div>
          <div v-if="directivesStore.imageUrl.length != 0" class="space-y-2">
            <h4 class="text-base font-semibold text-gray-600">Vista previa</h4>
            <img :src="directivesStore.imageUrl" alt="Image preview" class="size-[50%] mx-auto rounded-2xl">
          </div>
          <button type="submit" class="w-full px-10 py-1 text-lg text-white uppercase bg-blue-900 rounded-2xl">Cambiar Imagen</button>
        </form>
      </article>
    </div>
  </article>
</template>