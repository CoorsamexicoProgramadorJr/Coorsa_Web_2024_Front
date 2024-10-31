<script setup>
  import { onUnmounted } from 'vue'
  import { useAlertNotificationStore } from '@/stores/alertNotification'
  import { useCategoryStore } from '@/stores/categories'
  import { useNewCatStore } from '@/stores/administration/newCategory'
  import notificationAlert from '@/components/administracion/notificationAlert.vue'
  import NewCategory from '@/components/administracion/categories/NewCategory.vue'
  import CategoryDetails from '@/components/administracion/categories/CategoryDetails.vue'
  
  const alertNotificationStore = useAlertNotificationStore()
  const categoryStore = useCategoryStore()
  const newCatStore = useNewCatStore()

  onUnmounted(() => {
    if(newCatStore.visibleNewForm) newCatStore.manageNewForm()
    if(newCatStore.categoryDetails) newCatStore.manageCategoryDetails()
  })
</script>
<template>
  <section class="h-screen pt-[8vh] p-3 lg:ml-[25%] lg:w-3/4 lg:pt-5">
    <notificationAlert v-if="alertNotificationStore.showAlert">{{ alertNotificationStore.alertMsg }}</notificationAlert>
    
    <h2 class="my-4 text-2xl font-bold text-center text-blue-900 uppercase lg:text-3xl">Administración de Categorias de Vacantes</h2>
    <h3 class="mt-8 text-xl font-semibold lg:text-2xl">Categorias Disponibles</h3>
    <div class="px-2 mt-5 lg:px-3">
      <div v-for="category in categoryStore.categories" :key="category.id" @click="newCatStore.selectCategory(category); newCatStore.manageCategoryDetails()" class="flex items-center justify-between h-12 text-gray-600 border-y hover:bg-gray-400 hover:text-white hover:cursor-pointer" :class="{ 'opacity-50' : category.status == 0 }">
        <h3 class="text-lg font-semibold lg:text-xl">{{ category.name }}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 stroke-2 lg:w-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>

    <NewCategory v-if="newCatStore.visibleNewForm"/>

    <CategoryDetails v-if="newCatStore.categoryDetails" />

    <button @click="newCatStore.manageNewForm()" class="absolute z-0 text-blue-900 right-3 bottom-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </button>
  </section>
</template>