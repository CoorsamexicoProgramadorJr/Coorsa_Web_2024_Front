<script setup>
  defineProps({
    alertType: {
      type: String,
      required: true
    }
  })
</script>
<template>
  <div class="flex items-center h-10 gap-2 px-2 font-bold bg-green-500 rounded-lg brightness-95 md:absolute md:right-0 md:top-[9vh] lg:top-[8vh]">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 stroke-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
    <p>{{alertType == 'consulta' ? 'Consulta' : 'Postulación'}} enviada correctamente.</p>
  </div>
</template>