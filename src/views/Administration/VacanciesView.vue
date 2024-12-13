<script setup>
  import { onBeforeMount, onUnmounted, ref } from 'vue'
  import { useVacancyStore } from '@/stores/vacancies'
  import { useNewVacancyStore } from '@/stores/administration/newVacancy'
  import { useAlertNotificationStore } from '@/stores/alertNotification'
  import NewVacancyForm from '@/components/administracion/vacancies/NewVacancyForm.vue'
  import vacancyDetails from '@/components/administracion/vacancies/vacancyDetails.vue'
  import notificationAlert from '@/components/administracion/notificationAlert.vue'

  const vacancyStore = useVacancyStore()
  const newVacancyStore = useNewVacancyStore()
  const alertNotificationStore = useAlertNotificationStore()

  onBeforeMount(() => vacancyStore.getAllVacancies())

  onUnmounted(() => {
    if(newVacancyStore.visibleNewForm) newVacancyStore.manageNewForm()
    if(newVacancyStore.vacancyDetails) newVacancyStore.manageVacancyDetails()
  })
</script>

<template>
  <section class="h-screen p-3 lg:ml-[25%] ml-[16.7%] w-5/6 lg:w-3/4 pt-5">
    <notificationAlert v-if="alertNotificationStore.showAlert" />

    <h2 class="my-4 text-2xl font-extrabold text-center text-blue-900 uppercase lg:text-3xl">Administración de Vacantes</h2>
    <h3 class="mt-8 text-xl font-bold lg:text-2xl">Vacantes Disponibles</h3>
    <div class="px-2 mt-5 lg:px-3 max-h-[70%] lg:max-h-[75%] overflow-y-auto">
      <div v-for="vacancy in vacancyStore.vacancies" :key="vacancy.id" @click="newVacancyStore.selectVacancy(vacancy)" class="flex items-center justify-between h-12 text-gray-600 border-y hover:bg-gray-400 hover:text-white hover:cursor-pointer"  :class="{ 'opacity-50' : vacancy.status == 0 }">
        <h3 class="text-lg font-semibold truncate lg:text-xl">{{ vacancy.position }}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 stroke-2 lg:w-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>

    <NewVacancyForm v-if="newVacancyStore.visibleNewForm"/>

    <vacancyDetails v-if="newVacancyStore.vacancyDetails" />

    <button @click="newVacancyStore.manageNewForm()" class="absolute z-0 text-blue-900 right-3 bottom-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </button>
  </section>
</template>