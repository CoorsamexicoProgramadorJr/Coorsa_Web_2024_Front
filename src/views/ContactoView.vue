<script setup>
  import { ref, onMounted, onUnmounted, onBeforeMount } from 'vue'
  import { useRoute } from 'vue-router'
  import VacanteForm from '@/components/contacto/Vacante-form.vue'
  import { useContactStore } from '@/stores/contact'
  import ContactAlert from '@/components/ContactAlert.vue'

  const route = useRoute()
  const vacancyId = ref('')
  const { states , contactForm, getAlertStatus, submitContactForm, errors, services, resetForm, resetErrors, getSending } = useContactStore()

  onMounted(() => {
    vacancyId.value = route.params.vacancyId
  })

  onUnmounted(() => {
    resetForm()
    resetErrors()
  })
</script>
<template>
  <section class="flex w-screen text-white bg-black md:h-screen h-[120vh]">
    <article class="w-1/3 h-full border-r-[4px] pt-[8vh] lg:flex flex-col justify-center items-center hidden">
      <h2 class="text-5xl font-light">Zona del Mapa</h2>
    </article>
    <article class="lg:w-2/3 h-full pt-[8vh] md:px-[5%] px-[10%]">
      <!-- Contact form -->
      <ContactAlert v-if="getAlertStatus()"/>
      <form action="" v-if="vacancyId.length == 0" @submit.prevent="submitContactForm" class="h-[85%] md:pt-[5%] pt-3 grid grid-cols-2 md:grid-rows-6 grid-rows-8 lg:gap-x-[3%] md:gap-x-[5%] gap-y-2 sm:gap-y-0 2xl:text-2xl xl:text-xl text-lg" novalidate>
        <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
          <label for="name" class="mb-1 font-semibold uppercase">Nombre</label>
          <input type="text" id="name" name="name" placeholder="Nombre completo" v-model="contactForm.name" class="md:h-[40%] max-h-[50%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[3%] py-1 text-black">
          <p v-if="Object.keys(errors).length != 0 && Object.keys(errors.errors).includes('name')" class="text-sm text-red-700">{{ errors.errors.name[0] }}</p>
        </div>
        <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
          <label for="phone" class="mb-1 font-semibold uppercase">Teléfono</label>
          <fieldset class="flex w-full max-h-[45%] text-black">
            <select name="lada" id="lada" v-model="contactForm.area_code_id" class="2xl:w-[38%] xl:w-[35%] lg:w-[45%] md:w-[39%] w-[48%] border-l border-y focus:border-l-2 focus:border-y-2 border-red-700 md:rounded-l-xl rounded-l-full px-[2%] py-1 outline-none 2xl:text-xl xl:text-lg text-base md:tracking-tighter tracking-tight text-center">
              <option value="">-- LADA --</option>
              <option v-for="state in states" :key="state.name" :value="state.area_code_id" :title="state.name">{{ state.code }} ({{ state.area_code.code }})</option>
            </select>
            <input type="tel" v-model="contactForm.phone" id="phone" name="phone" placeholder="XXX-XXX-XXXX" class="2xl:w-[62%] xl:w-[65%] lg:w-[55%] md:w-[61%] w-[72%] border-r border-y focus:border-r-2 focus:border-y-2 border-red-700 outline-none md:rounded-r-xl rounded-r-full px-[3%] py-1 lg:tracking-tighter md:tracking-normal tracking-widest">
          </fieldset>
          <p v-if="Object.keys(errors).length != 0 && Object.keys(errors.errors).includes('area_code_id') || Object.keys(errors).length != 0 && Object.keys(errors.errors).includes('phone')" class="text-sm text-red-700">
            {{ errors.errors.area_code_id ? errors.errors.area_code_id[0] : errors.errors.phone[0] }}
          </p>
        </div>
        <div class="flex flex-col justify-center w-full col-span-2">
          <label for="email" class="mb-1 font-semibold uppercase">Email</label>
          <input type="email" id="email" name="email" placeholder="correo@correo.com" v-model="contactForm.email" class="max-h-[50%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 text-black px-[3%] py-1">
          <p v-if="Object.keys(errors).length != 0 && Object.keys(errors.errors).includes('email')" class="text-sm text-red-700">{{ errors.errors.email[0] }}</p>
        </div>
        <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
          <label for="service" class="mb-1 font-semibold uppercase">Servicio</label>
          <select name="service" id="service" v-model="contactForm.service_id" class="max-h-[50%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[1%] text-black text-center uppercase 2xl:text-xl xl:text-lg lg:text-sm xl:tracking-tight py-1">
            <option value="" selected>-- Selecciona una opción --</option>
            <option v-for="service in services" :key="service.id" :value="service.id">{{ service.name }}</option>
          </select>
          <p v-if="Object.keys(errors).length != 0 && Object.keys(errors.errors).includes('service_id')" class="text-sm text-red-700">{{ errors.errors.service_id[0] }}</p>
        </div>
        <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
          <label for="state" class="mb-1 font-semibold uppercase">Estado</label>
          <select name="state" id="state" v-model="contactForm.state_id" class="max-h-[50%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[1%] text-black text-center uppercase 2xl:text-xl xl:text-lg lg:text-sm py-1">
            <option value="">-- Selecciona una opción --</option>
            <option v-for="state in states" :key="state.id" :value="state.id">{{ state.name }}</option>
          </select>
          <p v-if="Object.keys(errors).length != 0 && Object.keys(errors.errors).includes('state_id')" class="text-sm text-red-700">{{ errors.errors.state_id[0] }}</p>
        </div>
        <div class="flex flex-col justify-center w-full col-span-2 row-span-2">
          <label for="message" class="mb-1 font-semibold uppercase">Mensaje</label>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Cuentanos como podemos ayudarte" v-model="contactForm.message" class="md:h-[60%] h-[70%] w-full rounded-xl outline-none border focus:border-2 border-red-700 px-[3%] text-black py-1"></textarea>
          <p v-if="Object.keys(errors).length != 0 && Object.keys(errors.errors).includes('message')" class="text-sm text-red-700">{{ errors.errors.message[0] }}</p>
        </div>
        <div class="flex flex-col items-center justify-center col-span-2 gap-2">
          <button type="submit" :disabled="getSending()" class="w-full font-bold uppercase bg-red-700 hover:bg-red-800 rounded-xl h-2/5 disabled:opacity-25 disabled:bg-red-950">
            Enviar
          </button>
        </div>
      </form>
      <!-- Vacancy Form -->
      <VacanteForm v-else :idVacancy="vacancyId"/>

      <footer class="sm:h-[20%] h-[15%] flex flex-col justify-around items-center">
        <div class="h-2/3 flex justify-center items-center gap-[5%]">
          <figure class="w-1/4 md:w-1/5">
            <img src="/icons/purina-color.svg" alt="Logo Purina">
          </figure>
          <figure class="w-1/4 md:w-1/5">
            <img src="/icons/walmart-color.svg" alt="Logo Walmart">
          </figure>
          <figure class="w-1/4 md:w-1/5">
            <img src="/icons/dhl-color.svg" alt="Logo Dhl">
          </figure>
          <figure class="w-1/4 md:w-1/5">
            <img src="/icons/unilever-color.svg" alt="Logo Unilever" class="max-w-[65%] mx-auto">
          </figure>
        </div>
        <p class="text-xl font-light tracking-widest uppercase max-h-[33.33%]">Ellos confian en nosotros</p>
      </footer>
    </article>
  </section>
</template>