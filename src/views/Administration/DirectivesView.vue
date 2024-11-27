<script setup>
  import { onBeforeMount, onUnmounted } from 'vue'
  import { useDirectiveStore } from '@/stores/administration/directives'
  import { useAlertNotificationStore } from '@/stores/alertNotification'
  import notificationAlert from '@/components/administracion/notificationAlert.vue'
  import NewDirectiveForm from '@/components/administracion/directives/NewDirectiveForm.vue'
  import DirectiveDetails from '@/components/administracion/directives/DirectiveDetails.vue'

  const directivesStore = useDirectiveStore()
  const notificationStore = useAlertNotificationStore()

  onBeforeMount(() => {
    if(directivesStore.directives.length === 0) directivesStore.getAllDirectives()
  })

  onUnmounted(() => {
    if(directivesStore.newDirectiveModal.active) directivesStore.newDirectiveModal.changeStatus()
    if(directivesStore.details.active) directivesStore.details.changeStatus()
  })
</script>

<template>
  <section class="h-screen p-3 md:ml-[12%] lg:ml-[25%] ml-[16.7%] w-5/6 md:w-[88%] lg:w-3/4 pt-5 z-0">
    <notificationAlert v-if="notificationStore.showAlert" />
    
    <h2 class="my-4 text-2xl font-extrabold text-center text-blue-900 uppercase md:text-3xl lg:text-3xl">Administración de directivos</h2>
    <h3 class="mt-8 text-xl font-bold md:text-2xl lg:text-2xl">Directivos Activos</h3>
    
    <div class="px-2 mt-5 lg:px-3 max-h-[70%] md:max-h-[75%] overflow-y-auto">
      <div v-for="directive in directivesStore.directives" :key="directive.id" @click="directivesStore.selectDirective(directive)" class="flex items-center justify-between pl-2 text-gray-600 h-14 border-y hover:bg-gray-400 hover:text-white hover:cursor-pointer" :class="{ 'opacity-50' : directive.active == 0 }">
        <div>
          <h3 class="text-lg font-semibold truncate lg:text-xl">{{ directive.name }}</h3>
          <p class="ml-2 text-sm">{{ directive.position }}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 stroke-2 lg:w-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>

    <NewDirectiveForm v-if="directivesStore.newDirectiveModal.active" />

    <DirectiveDetails v-if="directivesStore.details.active" />
    
    <button @click="directivesStore.newDirectiveModal.changeStatus()" class="absolute z-0 text-blue-900 right-3 bottom-3 hover:scale-105 drop-shadow-xl">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </button>
  </section>

</template>