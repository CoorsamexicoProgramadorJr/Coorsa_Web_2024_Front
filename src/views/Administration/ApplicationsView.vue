<script setup>
  import { onBeforeMount, onUnmounted } from 'vue'
  import { useAppAdmStore } from '@/stores/administration/applications'
  import { formatDate } from '@/components/helpers'
  import ApplicationDetails from '@/components/administracion/applications/ApplicationDetails.vue'

  const appAdmStore = useAppAdmStore()

  onBeforeMount(() => appAdmStore.getAllApplications())

  onUnmounted(() => {
    if(appAdmStore.applicationDetails) appAdmStore.manageApplicationDetails()
  })
</script>
<template>
  <section class="h-screen w-5/6 ml-[16.7%] p-3 lg:ml-[25%] lg:w-3/4 lg:pt-5">
    <h2 class="my-4 text-2xl font-bold text-center text-blue-900 uppercase lg:text-3xl">Administración de Postulaciones</h2>
    <h3 class="mt-8 text-xl font-semibold lg:text-2xl">Postulaciones Disponibles</h3>
    <div class="px-2 mt-5 overflow-y-auto lg:px-3 max-h-[75%] lg:max-h-[83%]">
      <div v-for="application in appAdmStore.applications" :key="application.id" @click="appAdmStore.selectApplication(application)" class="flex items-center justify-between text-gray-600 h-14 border-y hover:bg-gray-400 hover:text-white hover:cursor-pointer">
        <div>
          <h3 class="text-lg font-semibold lg:text-xl">{{ application.name }}</h3>
          <p class="text-sm">{{ formatDate(application.created_at) }}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 stroke-2 lg:w-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>

    <ApplicationDetails v-if="appAdmStore.applicationDetails" />
  </section>
</template>