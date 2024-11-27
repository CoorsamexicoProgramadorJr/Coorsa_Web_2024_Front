<script setup>
  import { useDirectiveStore } from '@/stores/administration/directives'
  import InfoForm from './editForms/InfoForm.vue'
  import ImageForm from './editForms/ImageForm.vue'

  const directivesStore = useDirectiveStore()
</script>

<template>
  <article class="absolute top-0 left-0 w-screen h-screen bg-black/50 lg:w-3/4 z-[1] lg:ml-[25%]">
    <div class="w-[85%] mx-auto top-[5%] lg:top-[7%] max-h-[92vh] bg-white z-[3] relative rounded-2xl p-4 md:w-[70%] lg:w-2/3">
      <button @click="directivesStore.details.changeStatus()" class="fixed right-[7%] md:right-[15%] lg:right-[13%] top-[5%] lg:top-[7%] flex items-center justify-center text-blue-900 z-[4]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 stroke-2 md:w-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <h3 class="text-3xl font-bold text-blue-900 border-b border-blue-900 lg:text-4xl">Detalles del directivo</h3>
      <article class="mt-2">
        <div>
          <button @click="directivesStore.infoFormModal.changeStatus()" class="float-right mt-1" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-2 size-6 text-blue-950">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
          </button>

          <div class="flex flex-col">
            <div class="flex items-center gap-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-2 size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <h4 class="text-2xl font-semibold ">Nombre: </h4>
            </div>
            <p class="ml-8 text-xl font-medium text-gray-500">{{  directivesStore.directive.name }}</p>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
              </svg>

              <h4 class="text-2xl font-semibold ">Posición: </h4>
            </div>
            <p class="ml-8 text-xl font-medium text-gray-500">{{  directivesStore.directive.position }}</p>
          </div>
        </div>

        <div class="relative pt-1 mt-1">
          <button @click="directivesStore.newImageFormModal.changeStatus()" class="absolute top-0 right-0 mt-3" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-2 size-6 text-blue-950">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
          </button>
          <div class="h-auto pt-1 space-y-1 border-t">
            <div class="flex items-center gap-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <h4 class="text-2xl font-semibold ">Imagen: </h4>
            </div>
            <img :src="directivesStore.directive.image" alt="Imagen del directivo" class="w-[70%] md:w-[45%] mx-auto rounded-2xl max-h-96" loading="lazy">
          </div>
          <button v-if="directivesStore.directive.active === 1" type="button" @click="directivesStore.deleteDirective()" class="flex items-center justify-center w-full gap-2 px-10 py-1 mt-2 text-lg font-medium text-red-700 uppercase border-2 border-red-700 hover:text-white hover:bg-red-700 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
            Desactivar Directivo
          </button>
          <button v-else type="button" @click="directivesStore.activateDirective()" class="flex items-center justify-center w-full gap-2 px-10 py-1 mt-2 text-lg font-medium text-green-700 uppercase border-2 border-green-700 rounded-2xl hover:bg-green-700 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-2 size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>

            Activar Directivo
          </button>
        </div>
      </article>

    </div>
    <InfoForm v-if="directivesStore.infoFormModal.active"/>
    <ImageForm v-if="directivesStore.newImageFormModal.active"/>
  </article>
</template>