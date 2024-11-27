<script setup>
  import { useDirectiveStore } from '@/stores/administration/directives'
  import { onUnmounted, onBeforeMount } from 'vue'

  const directivesStore = useDirectiveStore()

  onBeforeMount(() => {
    if(Object.keys(directivesStore.infoForm.errors).length != 0) directivesStore.infoForm.resetErrors()
  })

  onUnmounted(() => {
    if(directivesStore.infoFormModal.active) directivesStore.infoFormModal.changeStatus()
  })
</script>

<template>
  <article class="absolute top-0 left-0 w-full h-full bg-black/50 z-[4]">
    <div class="w-[85%] mx-auto top-[5%] lg:top-[7%] max-h-[92vh] bg-white z-[3] relative rounded-2xl p-4 md:w-[70%] lg:w-2/3">
      <button @click="directivesStore.infoFormModal.changeStatus()" class="fixed right-[7%] md:right-[15%] lg:right-[13%] top-[5%] lg:top-[7%] flex items-center justify-center text-blue-900 z-[4]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 stroke-2 md:w-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <h3 class="text-3xl font-bold text-blue-900 border-b border-blue-900 lg:text-4xl">Editar Información</h3>
      <article>
        <form @submit.prevent="directivesStore.editDirectiveInfo()" novalidate class="relative flex flex-col my-2 space-y-2">
          <div>
          <div class="flex flex-col md:gap-4 md:flex-row md:items-center">
            <label class="text-lg font-semibold text-gray-600 lg:text-xl" for="name">Nombre</label>
            <input type="text" v-model="directivesStore.infoForm.data.name" placeholder="Ejem. Fulanito de la garza" name="name" id="name" class="flex-1 my-1 border-b border-gray-600 outline-none">
          </div>
          <p v-if="directivesStore.infoForm.errors?.name" class="text-sm text-red-700">
            {{ directivesStore.infoForm.errors.name[0] }}
          </p>
        </div>
        <div>
          <div class="flex flex-col md:gap-4 md:flex-row md:items-center">
            <label class="text-lg font-semibold text-gray-600 lg:text-xl" for="position">Puesto</label>
            <input type="text" v-model="directivesStore.infoForm.data.position" placeholder="Ejem. CEO, Gerente, etc" name="position" id="position" class="flex-1 my-1 border-b border-gray-600 outline-none">
          </div>
          <p v-if="directivesStore.infoForm.errors?.position" class="text-sm text-red-700">
            {{ directivesStore.infoForm.errors.position[0] }}
          </p>
        </div>
          <button type="submit" class="w-full px-10 py-1 text-lg text-white uppercase bg-blue-900 rounded-2xl">Editar</button>
        </form>
      </article>
    </div>
  </article>
</template>