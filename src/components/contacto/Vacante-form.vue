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
  <form action="" class="h-[80%] pt-[5%] grid grid-cols-2 grid-rows-6 gap-x-[5%]">
    <div class="flex flex-col justify-center w-full gap-[8%]">
      <label for="name" class="text-xl font-semibold uppercase">Nombre</label>
      <input type="text" id="name" name="name" placeholder="Nombre completo" class="h-[40%] w-[98%] rounded-xl outline-none border focus:border-2 border-red-700 p-[2%] ml-[1%] text-black">
    </div>
    <div class="flex flex-col justify-center w-full gap-[8%]">
      <label for="phone" class="text-xl font-semibold uppercase">Teléfono</label>
      <fieldset class="flex w-full h-[40%] text-black">
        <select name="lada" id="lada" class="w-[28%] border-l border-y focus:border-l-2 focus:border-y-2 border-red-700 rounded-l-xl px-[2%] outline-none text-sm">
          <option v-for="state in phoneStates" :key="state.name" :value="state.lada" :title="state.name">{{ state.code }} ({{ state.lada }})</option>
        </select>
        <input type="tel" id="phone" name="phone" placeholder="+ 1 (555) 000 0000" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="w-[72%] border-r border-y focus:border-r-2 focus:border-y-2 border-red-700 outline-none rounded-r-xl px-[2%]">
      </fieldset>
    </div>
    <div class="flex flex-col col-span-2 justify-center w-full gap-[8%]">
      <label for="email" class="text-xl font-semibold uppercase">Email</label>
      <input type="email" id="email" name="email" placeholder="correo@correo.com" class="h-[40%] w-full rounded-xl outline-none border focus:border-2 border-red-700 text-black px-[1%]">
    </div>
    <div class="flex flex-col justify-center w-full gap-[8%]">
      <label for="service" class="text-xl font-semibold uppercase">Vacantes</label>
      <select v-model="formData.vacancyCategoryId" name="service" id="service" class="h-[40%] w-full rounded-xl outline-none border focus:border-2 border-red-700 px-[1%] text-black text-center uppercase">
        <option value="" selected>-- Selecciona una opción --</option>
        <option v-for="category in vacancyCategories" :key="category.id" :value="category.id">{{ category.name }}</option>
      </select>
    </div>
    <div class="flex flex-col justify-center w-full gap-[8%]">
      <label for="state" class="text-xl font-semibold uppercase">Puesto</label>
      <select v-model="formData.position" name="state" id="state" class="h-[40%] w-full rounded-xl outline-none border focus:border-2 border-red-700 px-[1%] text-black text-center uppercase">
        <option value="">-- Selecciona una opción --</option>
        <option v-for="vacancy in availableVacancies" :key="vacancy.id" :value="vacancy.id">{{ vacancy.name }}</option>
      </select>
    </div>
    <div class="flex flex-col row-span-2 justify-center w-full gap-[8%]">
      <label for="message" class="text-xl font-semibold uppercase">Mensaje</label>
      <textarea name="message" id="message" cols="30" rows="10" placeholder="Cuentanos como podemos ayudarte" class="h-[60%] w-full rounded-xl outline-none border focus:border-2 border-red-700 px-[1%] text-black"></textarea>
    </div>
    <div class="flex flex-col row-span-2 justify-center w-full gap-[15%]">
      <label for="cv" class="text-xl font-semibold uppercase">Upload your CV</label>
      <input type="file" name="cv" id="cv" accept=".pdf, .doc, .docx" class="file:w-2/3 file:text-white file:rounded-xl file:font-semibold file:bg-red-700 file:border-red-800 hover:file:bg-red-800">
    </div>
    <button class="col-span-2 my-auto font-bold uppercase bg-red-700 hover:bg-red-800 rounded-xl h-2/5">Postularse</button>
  </form>
</template>