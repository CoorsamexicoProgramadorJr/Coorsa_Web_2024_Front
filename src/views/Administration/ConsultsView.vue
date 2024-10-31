<script setup>
  import { onBeforeMount, onUnmounted } from 'vue'
  import { formatDate } from '@/components/helpers'
  import { useConsultStore } from '@/stores/administration/consults'
  import ConsultDetails from '@/components/administracion/consults/ConsultDetails.vue'

  const consultStore = useConsultStore()

  onBeforeMount(() => consultStore.getAllConsults())

  onUnmounted(() => {
    if(consultStore.consultDetails) consultStore.manageConsultDetails()
  })
</script>

<template>
  <section class="h-screen pt-[8vh] p-3 lg:ml-[25%] lg:w-3/4 lg:pt-5">
    <h2 class="my-4 text-2xl font-bold text-center text-blue-900 uppercase lg:text-3xl">Administración de Consultas</h2>
    <h3 class="mt-8 text-xl font-semibold lg:text-2xl">Consultas Disponibles</h3>
    <div class="px-2 mt-5 overflow-auto lg:px-3 max-h-[80%]">
      <div v-for="consult in consultStore.consults" :key="consult.id" @click="consultStore.selectConsult(consult); consultStore.manageConsultDetails()" class="flex items-center justify-between text-gray-600 h-14 border-y hover:bg-gray-400 hover:text-white hover:cursor-pointer">
        <div>
          <h3 class="text-lg font-semibold lg:text-xl">{{ consult.name }}</h3>
          <p class="text-sm">{{ formatDate(consult.created_at) }}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 stroke-2 lg:w-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>

    <ConsultDetails v-if="consultStore.consultDetails" />
  </section>
</template>