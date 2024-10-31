<script setup>
  import { ref, onMounted, onUnmounted, onBeforeMount } from 'vue'
  import { useRoute } from 'vue-router'
  import VacanteForm from '@/components/contacto/Vacante-form.vue'
  import { useContactStore } from '@/stores/contact'
  import ContactAlert from '@/components/ContactAlert.vue'

  const route = useRoute()
  const vacancyId = ref('')
  const contactStore = useContactStore()

  onMounted(() => {
    vacancyId.value = route.params.vacancyId
  })

  onUnmounted(() => {
    resetForm()
    resetErrors()
  })
</script>
<template>
  <section class="flex w-screen text-white bg-[url('/img/fondoContacto.jpg')] bg-top md:h-screen h-[120vh]">
    <article class="hidden w-1/3 h-full bg-center bg-cover border-r lg:block">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466.65670163614504!2d-100.33418661977989!3d20.659258586113804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd891af2432995%3A0xa4597b878ffe23a8!2sCOORSA%20M%C3%A9xico%20Soluciones%20Log%C3%ADsticas!5e0!3m2!1ses-419!2smx!4v1730324759003!5m2!1ses-419!2smx" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="size-full">
      </iframe>
    </article>
    <article class="lg:w-2/3 h-full pt-[7vh] lg:pt-10 md:px-[5%] px-[10%]">
      <!-- Contact form -->
      <ContactAlert v-if="contactStore.showAlert" alert-type="consulta"/>
      <form action="" v-if="vacancyId.length == 0" @submit.prevent="contactStore.submitContactForm" class="h-[85%] lg:h-[80%] md:pt-[5%] pt-3 grid grid-cols-2 md:grid-rows-6 grid-rows-8 lg:gap-x-[3%] md:gap-x-[5%] gap-y-2 sm:gap-y-0 2xl:text-2xl xl:text-xl text-lg" novalidate>
        <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
          <label for="name" class="mb-1 font-semibold uppercase">Nombre</label>
          <input type="text" id="name" name="name" placeholder="Nombre completo" v-model="contactStore.contactForm.name" class="md:h-[40%] max-h-[50%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-white px-[3%] py-1 bg-transparent">
          <p v-if="Object.keys(contactStore.errors).length != 0 && Object.keys(contactStore.errors).includes('name')" class="text-sm text-red-700 sm:text-base">{{ contactStore.errors.name[0] }}</p>
        </div>
        <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
          <label for="phone" class="mb-1 font-semibold uppercase">Teléfono</label>
          <fieldset class="flex w-full h-[40%]">
            <select name="lada" id="lada" v-model="contactStore.contactForm.area_code_id" class="2xl:w-[38%] xl:w-[35%] lg:w-[45%] md:w-[39%] w-[48%] border-l border-y focus:border-l-2 focus:border-y-2 border-white md:rounded-l-xl rounded-l-full px-[2%] py-1 outline-none 2xl:text-xl xl:text-lg text-base md:tracking-tighter tracking-tight text-center bg-transparent">
              <option value="">-- LADA --</option>
              <option v-for="state in contactStore.states" :key="state.name" :value="state.area_code_id" :title="state.name">{{ state.code }} ({{ state.area_code.code }})</option>
            </select>
            <input type="tel" v-model="contactStore.contactForm.phone" id="phone" name="phone" placeholder="XXX-XXX-XXXX" class="2xl:w-[62%] xl:w-[65%] lg:w-[55%] md:w-[61%] w-[72%] border-r border-y focus:border-r-2 focus:border-y-2 border-white outline-none md:rounded-r-xl rounded-r-full px-[3%] py-1 lg:tracking-tighter md:tracking-normal tracking-widest bg-transparent">
          </fieldset>
          <p v-if="Object.keys(contactStore.errors).length != 0 && Object.keys(contactStore.errors).includes('area_code_id') || Object.keys(contactStore.errors).length != 0 && Object.keys(contactStore.errors).includes('phone')" class="text-sm text-red-700 sm:text-base">
            {{ contactStore.errors.area_code_id ? contactStore.errors.area_code_id[0] : contactStore.errors.phone[0] }}
          </p>
        </div>
        <div class="flex flex-col justify-center w-full col-span-2">
          <label for="email" class="mb-1 font-semibold uppercase">Email</label>
          <input type="email" id="email" name="email" placeholder="correo@correo.com" v-model="contactStore.contactForm.email" class="h-[40%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-white bg-transparent px-[3%] py-1">
          <p v-if="Object.keys(contactStore.errors).length != 0 && Object.keys(contactStore.errors).includes('email')" class="text-sm text-red-700 sm:text-base">
            {{ contactStore.errors.email[0] }}
          </p>
        </div>
        <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
          <label for="service" class="mb-1 font-semibold uppercase">Servicio</label>
          <select name="service" id="service" v-model="contactStore.contactForm.service_id" class="h-[40%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-white px-[1%] bg-transparent text-center uppercase 2xl:text-xl xl:text-lg lg:text-base xl:tracking-tight py-1">
            <option value="" selected>-- Selecciona una opción --</option>
            <option v-for="service in contactStore.services" :key="service.id" :value="service.id">{{ service.name }}</option>
          </select>
          <p v-if="Object.keys(contactStore.errors).length != 0 && Object.keys(contactStore.errors).includes('service_id')" class="text-sm text-red-700 sm:text-base">
            {{ contactStore.errors.service_id[0] }}
          </p>
        </div>
        <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
          <label for="state" class="mb-1 font-semibold uppercase">Estado</label>
          <select name="state" id="state" v-model="contactStore.contactForm.state_id" class="h-[40%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-white px-[1%] bg-transparent text-center uppercase 2xl:text-xl xl:text-lg lg:text-base py-1">
            <option value="">-- Selecciona una opción --</option>
            <option v-for="state in contactStore.states" :key="state.id" :value="state.id">{{ state.name }}</option>
          </select>
          <p v-if="Object.keys(contactStore.errors).length != 0 && Object.keys(contactStore.errors).includes('state_id')" class="text-sm text-red-700 sm:text-base">
            {{ contactStore.errors.state_id[0] }}
          </p>
        </div>
        <div class="flex flex-col justify-center w-full col-span-2 row-span-2">
          <label for="message" class="mb-1 font-semibold uppercase">Mensaje</label>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Cuentanos como podemos ayudarte" v-model="contactStore.contactForm.message" class="md:h-[60%] h-[70%] w-full rounded-xl outline-none border focus:border-2 border-white px-[3%] bg-transparent py-1"></textarea>
          <p v-if="Object.keys(contactStore.errors).length != 0 && Object.keys(contactStore.errors).includes('message')" class="text-sm text-red-700 sm:text-base">
            {{ contactStore.errors.message[0] }}
          </p>
        </div>
        <div class="flex flex-col items-center justify-center col-span-2 gap-2">
          <button type="submit" :disabled="contactStore.sending" class="w-full font-bold uppercase bg-red-700 hover:bg-red-800 rounded-xl h-2/5 disabled:opacity-25 disabled:bg-red-950">
            Enviar
          </button>
        </div>
      </form>
      <!-- Vacancy Form -->
      <VacanteForm v-else :idVacancy="vacancyId"/>

      <footer class="h-[15%] w-full flex flex-col justify-around items-center pb-1">
        <div class="flex items-center justify-center w-full gap-2 overflow-hidden h-2/3">
          <div class="flex items-center justify-center flex-1">
            <img src="/icons/puri-01.svg" alt="Logo Purina" class="size-full">
          </div>
          <div class="flex items-center justify-center flex-1">
            <img src="/icons/walma-01.svg" alt="Logo Walmart" class="size-full">
          </div>
          <div class="flex items-center justify-center flex-1">
            <img src="/icons/dhl-01.svg" alt="Logo Dhl" class="size-full">
          </div>
          <div class="flex items-center justify-center flex-1">
            <img src="/icons/ul-01.svg" alt="Logo Unilever" class="max-w-[50%]">
          </div>
        </div>
        <p class="text-xl font-light tracking-widest uppercase max-h-[33.33%]">Ellos confian en nosotros</p>
      </footer>
    </article>
  </section>
</template>