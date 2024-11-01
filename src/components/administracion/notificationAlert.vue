<script setup>
  import { useAlertNotificationStore } from '@/stores/alertNotification'

  const alertNotificationStore = useAlertNotificationStore()
</script>
<template>
  <div class="absolute right-0 flex items-center h-10 px-2 text-white rounded-l-full z-[3]" 
    :class="{ 'bg-green-600' : alertNotificationStore.alertType == 'success', 'bg-red-700' : alertNotificationStore.alertType == 'error' }">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 mr-2 stroke-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
    <h5 class="text-lg font-semibold">{{ alertNotificationStore.alertMsg }}</h5>
  </div>
</template>
