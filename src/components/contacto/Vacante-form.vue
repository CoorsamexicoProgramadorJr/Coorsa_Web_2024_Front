<script setup>
  import { onMounted, ref, reactive } from 'vue'
  import { states as phoneStates } from '@/data/states'
  import { vacancies } from '@/data/vacancies'
  import { vacancyCategories } from '@/data/vacCategories'

  const props = defineProps({
    idVacancy: {
      type: String || Number,
      required: true
    }
  })

  const formData = reactive({
    name: '',
    phone: '',
    email: '',
    vacancyCategoryId: '',
    position: '',
    message: '',
    cv: ''
  })
  const vacancy = ref({})
  const availableVacancies = ref([])
  
  onMounted(() => {
    vacancy.value = vacancies.filter((vacancy) => vacancy.id == props.idVacancy)[0]
    availableVacancies.value = vacancies.filter((vacancyInfo) => vacancyInfo.category == vacancy.value.category)

    formData.vacancyCategoryId = vacancy.value.category
    formData.position = vacancy.value.id
    console.log(formData)
  })
</script>
<template>
  <form action="" class="h-[80%] md:pt-[5%] pt-3 grid grid-cols-2 md:grid-rows-6 grid-rows-8 md:gap-x-[5%] text-xl">
    <div class="flex flex-col justify-center w-full gap-[8%] md:col-span-1 col-span-2">
      <label for="name" class="font-semibold uppercase">Nombre</label>
      <input type="text" id="name" name="name" placeholder="Nombre completo" class="md:h-[40%] h-1/2 w-[98%] md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[3%] text-black">
    </div>
    <div class="flex flex-col justify-center w-full gap-[8%] md:col-span-1 col-span-2">
      <label for="phone" class="font-semibold uppercase">Teléfono</label>
      <fieldset class="flex w-full md:h-[40%] h-1/2 text-black">
        <select name="lada" id="lada" class="w-[28%] border-l border-y focus:border-l-2 focus:border-y-2 border-red-700 md:rounded-l-xl rounded-l-full px-[3%] outline-none md:text-sm">
          <option v-for="state in phoneStates" :key="state.name" :value="state.lada" :title="state.name">{{ state.code }} ({{ state.lada }})</option>
        </select>
        <input type="tel" id="phone" name="phone" placeholder="+ 1 (555) 000 0000" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="w-[72%] border-r border-y focus:border-r-2 focus:border-y-2 border-red-700 outline-none md:rounded-r-xl rounded-r-full px-[3%]">
      </fieldset>
    </div>
    <div class="flex flex-col col-span-2 justify-center w-full gap-[8%]">
      <label for="email" class="font-semibold uppercase">Email</label>
      <input type="email" id="email" name="email" placeholder="correo@correo.com" class="md:h-[40%] h-1/2 w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 text-black px-[3%]">
    </div>
    <div class="flex flex-col justify-center w-full gap-[8%] md:col-span-1 col-span-2">
      <label for="service" class="font-semibold uppercase">Vacantes</label>
      <select v-model="formData.vacancyCategoryId" name="service" id="service" class="md:h-[40%] h-1/2 w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[1%] text-black text-center uppercase">
        <option value="" selected>-- Selecciona una opción --</option>
        <option v-for="category in vacancyCategories" :key="category.id" :value="category.id">{{ category.name }}</option>
      </select>
    </div>
    <div class="flex flex-col justify-center w-full gap-[8%] md:col-span-1 col-span-2">
      <label for="state" class="font-semibold uppercase">Puesto</label>
      <select v-model="formData.position" name="state" id="state" class="md:h-[40%] h-1/2 w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[1%] text-black text-center uppercase">
        <option value="">-- Selecciona una opción --</option>
        <option v-for="vacancy in availableVacancies" :key="vacancy.id" :value="vacancy.id">{{ vacancy.name }}</option>
      </select>
    </div>
    <div class="flex flex-col row-span-2 justify-center w-full gap-[8%] md:col-span-1 col-span-2">
      <label for="message" class="font-semibold uppercase">Mensaje</label>
      <textarea name="message" id="message" cols="30" rows="10" placeholder="Cuentanos como podemos ayudarte" class="md:h-[60%] h-[70%] w-full rounded-xl outline-none border focus:border-2 border-red-700 px-[3%] text-black"></textarea>
    </div>
    <div class="md:flex flex-col row-span-1 justify-center w-full gap-[15%] hidden">
      <label for="cv" class="font-semibold uppercase">Upload your CV</label>
      <input type="file" name="cv" id="cv" accept=".pdf, .doc, .docx" class="file:w-2/3 file:text-white file:rounded-xl file:font-semibold file:bg-red-700 file:border-red-800 hover:file:bg-red-800">
    </div>
    <button class="col-span-2 my-auto font-bold uppercase bg-red-700 rounded-full hover:bg-red-800 md:rounded-xl md:h-2/5 h-1/2">Postularse</button>
  </form>
</template>