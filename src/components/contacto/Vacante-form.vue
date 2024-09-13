<script setup>
  import { onMounted, reactive } from 'vue'
  import { states as phoneStates } from '@/data/states'
  import { useVacancyStore } from '@/stores/vacancies'
  import { useCategoryStore } from '@/stores/categories'

  const props = defineProps({
    idVacancy: {
      type: String || Number,
      required: true
    }
  })

  const { vacancies } = useVacancyStore()
  const { categories } = useCategoryStore()

  const formData = reactive({
    name: '',
    phone: '',
    email: '',
    category_id: '',
    vacancy_id: '',
    message: '',
    cv: ''
  })

  onMounted(() => {
    formData.vacancy_id = props.idVacancy
    vacancies.forEach(vacancy => {
      if(vacancy.id == props.idVacancy){
        formData.category_id = vacancy.category_id
        return
      }
    })
  })
</script>
<template>
  <form action="" class="h-[80%] md:pt-[5%] pt-3 grid grid-cols-2 md:grid-rows-6 grid-rows-8 lg:gap-x-[3%] md:gap-x-[5%] 2xl:text-2xl text-xl">
    <div class="flex flex-col justify-center w-full gap-[8%] md:col-span-1 col-span-2">
      <label for="name" class="font-semibold uppercase">Nombre</label>
      <input type="text" id="name" name="name" placeholder="Nombre completo" class="md:h-[40%] h-1/2 md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[3%] text-black">
    </div>
    <div class="flex flex-col justify-center w-full gap-[8%] md:col-span-1 col-span-2">
      <label for="phone" class="font-semibold uppercase">Teléfono</label>
      <fieldset class="flex w-full md:h-[40%] h-1/2 text-black">
        <select name="lada" id="lada" class="2xl:w-[36%] xl:w-[40%] lg:w-[42%] md:w-[38%] w-[32%] border-l border-y focus:border-l-2 focus:border-y-2 border-red-700 md:rounded-l-xl rounded-l-full lg:pl-[1%] pl-[2%] outline-none 2xl:text-xl xl:text-lg md:text-base md:tracking-tighter">
          <option v-for="state in phoneStates" :key="state.name" :value="state.lada" :title="state.name">{{ state.code }} ({{ state.lada }})</option>
        </select>
        <input type="tel" id="phone" name="phone" placeholder="000 000 0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="2xl:w-[64%] xl:w-[60%] lg:w-[58%] md:w-[62%] w-[68%] border-r border-y focus:border-r-2 focus:border-y-2 border-red-700 outline-none md:rounded-r-xl rounded-r-full px-[3%] lg:tracking-tighter md:tracking-normal tracking-widest">
      </fieldset>
    </div>
    <div class="flex flex-col col-span-2 justify-center w-full gap-[8%]">
      <label for="email" class="font-semibold uppercase">Email</label>
      <input type="email" id="email" name="email" placeholder="correo@correo.com" class="md:h-[40%] h-1/2 w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 text-black px-[3%]">
    </div>
    <div class="flex flex-col justify-center w-full gap-[8%] md:col-span-1 col-span-2">
      <label for="service" class="font-semibold uppercase">Vacantes</label>
      <select v-model="formData.category_id" name="service" id="service" class="md:h-[40%] h-1/2 w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[1%] text-black text-center uppercase">
        <option value="" selected>-- Selecciona una opción --</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
      </select>
    </div>
    <div class="flex flex-col justify-center w-full gap-[8%] md:col-span-1 col-span-2">
      <label for="state" class="font-semibold uppercase">Puesto</label>
      <select v-model="formData.vacancy_id" name="state" id="state" class="md:h-[40%] h-1/2 w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[1%] text-black text-center uppercase">
        <option value="">-- Selecciona una opción --</option>
        <option v-for="vacancy in vacancies" :key="vacancy.id" :value="vacancy.id">{{ vacancy.position }}</option>
      </select>
    </div>
    <div class="flex flex-col row-span-2 justify-center w-full gap-[8%] col-span-1">
      <label for="message" class="font-semibold uppercase">Mensaje</label>
      <textarea name="message" id="message" cols="30" rows="10" placeholder="Cuentanos como podemos ayudarte" class="md:h-[60%] h-[70%] w-full rounded-xl outline-none border focus:border-2 border-red-700 px-[3%] text-black 2xl:text-lg text-base"></textarea>
    </div>
    <div class="flex flex-col items-center justify-center w-full row-span-2 gap-3">
      <label for="cv" class="md:w-2/3 w-3/4 font-semibold text-center uppercase bg-red-700 hover:bg-red-800 rounded-full md:h-[20%] h-[30%] flex justify-center items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
        </svg>
        Adjunta tu CV
      </label>
      <input type="file" name="cv" id="cv" accept=".pdf, .doc, .docx" class="w-3/4 mx-auto text-center file:hidden file:bg-red-700">
    </div>
    <button class="col-span-2 my-auto font-bold uppercase bg-red-700 rounded-full hover:bg-red-800 md:rounded-xl 2xl:h-1/2 md:h-2/5 h-1/2">Postularse</button>
  </form>
</template>