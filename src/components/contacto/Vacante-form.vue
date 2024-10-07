<script setup>
  import { onUnmounted } from 'vue'
  import { useVacancyStore } from '@/stores/vacancies'
  import { useCategoryStore } from '@/stores/categories'
  import { useContactStore } from '@/stores/contact'
  import { useApplicationStore } from '@/stores/applications'
  import ContactAlert from '../ContactAlert.vue'

  const props = defineProps({
    idVacancy: {
      type: String || Number,
      required: true
    }
  })

  const { vacancies } = useVacancyStore()
  const { categories } = useCategoryStore()
  const { states } = useContactStore()
  const appStore = useApplicationStore()

  onUnmounted(() => {
    appStore.resetAppForm()
  })
</script>
<template>
  <ContactAlert v-if="appStore.alertStatus" alert-type="postulacion"/>
  <form @submit.prevent="appStore.submitApplication" class="h-[85%] md:pt-[5%] pt-3 grid grid-cols-2 md:grid-rows-6 grid-rows-9 lg:gap-x-[3%] md:gap-x-[5%] 2xl:text-2xl xl:text-xl text-lg" novalidate>
    <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
      <label for="name" class="mb-1 font-semibold uppercase">Nombre</label>
      <input type="text" v-model="appStore.applicationForm.name" id="name" name="name" placeholder="Nombre completo" class="md:h-[40%] max-h-[50%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[3%] py-1 text-black">
      <p v-if="Object.keys(appStore.errors).length != 0 && Object.keys(appStore.errors).includes('name')" class="text-sm text-red-700 sm:text-base">{{ appStore.errors.name[0] }}</p>
    </div>
    <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
      <label for="phone" class="mb-1 font-semibold uppercase">Teléfono</label>
      <fieldset class="flex w-full max-h-[45%] text-black">
        <select v-model="appStore.applicationForm.area_code_id" name="lada" id="lada" class="2xl:w-[38%] xl:w-[35%] lg:w-[45%] md:w-[39%] w-[48%] border-l border-y focus:border-l-2 focus:border-y-2 border-red-700 md:rounded-l-xl rounded-l-full px-[2%] py-1 outline-none 2xl:text-xl xl:text-lg text-base md:tracking-tighter tracking-tight text-center">
          <option value="">-- LADA --</option>
          <option v-for="state in states" :key="state.id" :value="state.id" :title="state.name">{{ state.code }} ({{ state.area_code.code }})</option>
        </select>
        <input type="tel" v-model="appStore.applicationForm.phone" id="phone" name="phone" placeholder="XXX-XXX-XXXX" class="2xl:w-[62%] xl:w-[65%] lg:w-[55%] md:w-[61%] w-[72%] border-r border-y focus:border-r-2 focus:border-y-2 border-red-700 outline-none md:rounded-r-xl rounded-r-full px-[3%] py-1 lg:tracking-tighter md:tracking-normal tracking-widest">
      </fieldset>
      <p v-if="Object.keys(appStore.errors).length != 0 && Object.keys(appStore.errors).includes('area_code_id') || Object.keys(appStore.errors).length != 0 && Object.keys(appStore.errors).includes('phone')" class="text-sm text-red-700 sm:text-base">
        {{ appStore.errors.area_code_id ? appStore.errors.area_code_id[0] : appStore.errors.phone[0] }}
      </p>
    </div>
    <div class="flex flex-col justify-center w-full col-span-2">
      <label for="email" class="mb-1 font-semibold uppercase">Email</label>
      <input type="email" v-model="appStore.applicationForm.email" id="email" name="email" placeholder="correo@correo.com" class="max-h-[50%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 text-black px-[3%] py-1">
      <p v-if="Object.keys(appStore.errors).length != 0 && Object.keys(appStore.errors).includes('email')" class="text-sm text-red-700 sm:text-base">
        {{ appStore.errors.email[0] }}
      </p>
    </div>
    <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
      <label for="service" class="mb-1 font-semibold uppercase">Vacantes</label>
      <select v-model="appStore.applicationForm.category_id" disabled name="service" id="service" class="max-h-[50%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[1%] text-black text-center uppercase 2xl:text-xl xl:text-lg lg:text-base xl:tracking-tight py-1">
        <option value="" selected>-- Selecciona una opción --</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
      </select>
      <p v-if="Object.keys(appStore.errors).length != 0 && Object.keys(appStore.errors).includes('category_id')" class="text-sm text-red-700 sm:text-base">
        {{ appStore.errors.category_id[0] }}
      </p>
    </div>
    <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
      <label for="state" class="mb-1 font-semibold uppercase">Puesto</label>
      <select v-model="appStore.applicationForm.vacancy_id" disabled name="state" id="state" class="max-h-[50%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[1%] text-black text-center uppercase 2xl:text-xl xl:text-lg lg:text-base xl:tracking-tight py-1">
        <option value="" selected>-- Selecciona una opción --</option>
        <option v-for="vacancy in vacancies" :key="vacancy.id" :value="vacancy.id">{{ vacancy.position }}</option>
      </select>
      <p v-if="Object.keys(appStore.errors).length != 0 && Object.keys(appStore.errors).includes('vacancy_id')" class="text-sm text-red-700 sm:text-base">
        {{ appStore.errors.vacancy_id[0] }}
      </p>
    </div>
    <div class="flex flex-col justify-center w-full col-span-2 row-span-2 md:col-span-1">
      <label for="message" class="mb-1 font-semibold uppercase">Mensaje</label>
      <textarea v-model="appStore.applicationForm.message" name="message" id="message" cols="30" rows="10" placeholder="Cuentanos como podemos ayudarte" class="md:h-[60%] h-[70%] w-full rounded-xl outline-none border focus:border-2 border-red-700 px-[3%] text-black py-1"></textarea>
      <p v-if="Object.keys(appStore.errors).length != 0 && Object.keys(appStore.errors).includes('message')" class="text-sm text-red-700 sm:text-base">
        {{ appStore.errors.message[0] }}
      </p>
    </div>
    <div class="flex flex-col items-center justify-around w-full col-span-2 row-span-1 md:gap-4 md:justify-center md:col-span-1 md:row-span-2">
      <label for="cv" class="md:w-2/3 w-3/4 font-semibold text-center bg-red-700 hover:bg-red-800 rounded-full md:h-[20%] max-h-[50%] flex justify-center items-center gap-2 py-1" :class="{ 'opacity-75' : appStore.uploading }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
        </svg>
        Adjunta tu CV
      </label>
      <input type="file" @change="appStore.manageCv" name="cv" id="cv" accept=".pdf, .doc, .docx" class="w-3/4 mx-auto text-base text-center file:hidden file:bg-red-700">
    </div>
    <button type="submit" :disabled="appStore.sending || appStore.uploading" class="col-span-2 py-1 my-auto font-bold uppercase bg-red-700 rounded-full hover:bg-red-800 md:rounded-xl 2xl:h-1/2 md:h-2/5">
      Postularse
    </button>
  </form>
</template>