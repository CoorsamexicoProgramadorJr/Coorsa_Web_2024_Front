<script setup>
  import { onUnmounted, onMounted } from 'vue'
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

  onMounted(() => console.log(appStore.file))

  onUnmounted(() => {
    appStore.resetAppForm()
  })
</script>
<template>
  <ContactAlert v-if="appStore.alertStatus" alert-type="postulacion"/>
  <form @submit.prevent="appStore.submitApplication" class="h-[85%] md:pt-[5%] pt-3 grid grid-cols-2 md:grid-rows-6 grid-rows-9 lg:gap-x-[3%] md:gap-x-[5%] 2xl:text-2xl xl:text-xl text-lg" novalidate>
    <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
      <label for="name" class="mb-1 font-semibold uppercase">Nombre</label>
      <input type="text" v-model="appStore.applicationForm.name" id="name" name="name" placeholder="Nombre completo" class="md:h-[35%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-white px-[3%] py-1 bg-transparent">
      <p v-if="Object.keys(appStore.errors).length != 0 && Object.keys(appStore.errors).includes('name')" class="text-sm text-red-700 sm:text-base">{{ appStore.errors.name[0] }}</p>
    </div>
    <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
      <label for="phone" class="mb-1 font-semibold uppercase">Teléfono</label>
      <fieldset class="flex w-full h-[35%]">
        <select v-model="appStore.applicationForm.area_code_id" name="lada" id="lada" class="2xl:w-[38%] xl:w-[35%] lg:w-[45%] md:w-[39%] w-[48%] border-l border-y focus:border-l-2 focus:border-y-2 border-white md:rounded-l-xl rounded-l-full px-[2%] py-1 outline-none 2xl:text-xl xl:text-lg text-base md:tracking-tighter tracking-tight text-center bg-transparent">
          <option value="">-- LADA --</option>
          <option v-for="state in states" :key="state.id" :value="state.id" :title="state.name">{{ state.code }} ({{ state.area_code.code }})</option>
        </select>
        <input type="tel" v-model="appStore.applicationForm.phone" id="phone" name="phone" placeholder="XXX-XXX-XXXX" class="2xl:w-[62%] xl:w-[65%] lg:w-[55%] md:w-[61%] w-[72%] border-r border-y focus:border-r-2 focus:border-y-2 border-white outline-none md:rounded-r-xl rounded-r-full px-[3%] py-1 lg:tracking-tighter md:tracking-normal tracking-widest bg-transparent">
      </fieldset>
      <p v-if="Object.keys(appStore.errors).length != 0 && Object.keys(appStore.errors).includes('area_code_id') || Object.keys(appStore.errors).length != 0 && Object.keys(appStore.errors).includes('phone')" class="text-sm text-red-700 sm:text-base">
        {{ appStore.errors.area_code_id ? appStore.errors.area_code_id[0] : appStore.errors.phone[0] }}
      </p>
    </div>
    <div class="flex flex-col justify-center w-full col-span-2">
      <label for="email" class="mb-1 font-semibold uppercase">Email</label>
      <input type="email" v-model="appStore.applicationForm.email" id="email" name="email" placeholder="correo@correo.com" class="h-[35%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-white bg-transparent px-[3%] py-1">
      <p v-if="Object.keys(appStore.errors).length != 0 && Object.keys(appStore.errors).includes('email')" class="text-sm text-red-700 sm:text-base">
        {{ appStore.errors.email[0] }}
      </p>
    </div>
    <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
      <label for="service" class="mb-1 font-semibold uppercase">Vacantes</label>
      <select v-model="appStore.applicationForm.category_id" disabled name="service" id="service" class="h-[35%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-white px-[1%] bg-transparent text-center uppercase 2xl:text-xl xl:text-lg lg:text-base xl:tracking-tight py-1">
        <option value="" selected>-- Selecciona una opción --</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
      </select>
      <p v-if="Object.keys(appStore.errors).length != 0 && Object.keys(appStore.errors).includes('category_id')" class="text-sm text-red-700 sm:text-base">
        {{ appStore.errors.category_id[0] }}
      </p>
    </div>
    <div class="flex flex-col justify-center w-full col-span-2 md:col-span-1">
      <label for="state" class="mb-1 font-semibold uppercase">Puesto</label>
      <select v-model="appStore.applicationForm.vacancy_id" disabled name="state" id="state" class="h-[35%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-white px-[1%] bg-transparent text-center uppercase 2xl:text-xl xl:text-lg lg:text-base xl:tracking-tight py-1 truncate">
        <option value="" selected>-- Selecciona una opción --</option>
        <option v-for="vacancy in vacancies" :key="vacancy.id" :value="vacancy.id">{{ vacancy.position }}</option>
      </select>
      <p v-if="Object.keys(appStore.errors).length != 0 && Object.keys(appStore.errors).includes('vacancy_id')" class="text-sm text-red-700 sm:text-base">
        {{ appStore.errors.vacancy_id[0] }}
      </p>
    </div>
    <div class="flex flex-col justify-center w-full col-span-2 row-span-2 md:col-span-1">
      <label for="message" class="mb-1 font-semibold uppercase">Mensaje</label>
      <textarea v-model="appStore.applicationForm.message" name="message" id="message" cols="30" rows="10" placeholder="Cuentanos como podemos ayudarte" class="md:h-[60%] h-[70%] w-full rounded-xl outline-none border focus:border-2 border-white px-[3%] bg-transparent py-1"></textarea>
      <p v-if="Object.keys(appStore.errors).length != 0 && Object.keys(appStore.errors).includes('message')" class="text-sm text-red-700 sm:text-base">
        {{ appStore.errors.message[0] }}
      </p>
    </div>
    <div class="flex flex-col items-center justify-center w-full col-span-2 row-span-1 md:gap-4 md:justify-center md:col-span-1 md:row-span-2">
      <label for="cv" class="relative flex items-center justify-center w-3/4 h-[70%] gap-2 py-1 font-semibold text-center border-2 border-dashed md:w-2/3 rounded-2xl hover:cursor-pointer hover:bg-white/20" :class="{ 'opacity-75' : appStore.uploading }">
        <div v-if="Boolean(appStore.file)">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
        </div>
        <div class="flex gap-2"  v-else>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
          </svg>
          Adjunta tu CV
        </div>
        <input type="file" @change="appStore.manageCv" name="cv" id="cv" accept=".pdf, .doc, .docx" class="absolute bottom-0 right-[50%] w-3/4 mx-auto text-base text-center file:hidden file:bg-red-700 translate-x-1/2">
      </label>
    </div>
    <button type="submit" :disabled="appStore.sending || appStore.uploading" class="col-span-2 py-1 my-auto font-bold uppercase bg-red-700 rounded-full hover:bg-red-800 md:rounded-xl 2xl:h-1/2 md:h-2/5">
      Postularse
    </button>
  </form>
</template>