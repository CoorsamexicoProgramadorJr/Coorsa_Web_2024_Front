<script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { states } from '@/data/states.js'
  import VacanteForm from '@/components/contacto/Vacante-form.vue'

  const route = useRoute()
  const vacancyId = ref('')

  console.log(vacancyId.value.length)

  onMounted(() => {
    vacancyId.value = route.params.vacancyId
  })
</script>
<template>
  <section class="flex w-screen h-screen text-white bg-black">
    <article class="w-1/3 h-full border-r-[4px] pt-[8vh] lg:flex flex-col justify-center items-center hidden">
      <h2 class="text-5xl font-light">Zona del Mapa</h2>
    </article>
    <article class="lg:w-2/3 h-full pt-[8vh] md:px-[5%] px-[10%]">
      <!-- Contact form -->
      <form action="" v-if="vacancyId.length == 0" class="h-[80%] md:pt-[5%] pt-3 grid grid-cols-2 md:grid-rows-6 grid-rows-8 lg:gap-x-[3%] md:gap-x-[5%] text-lg">
        <div class="flex flex-col justify-center w-full gap-[8%] md:col-span-1 col-span-2">
          <label for="name" class="font-semibold uppercase">Nombre</label>
          <input type="text" id="name" name="name" placeholder="Nombre completo" class="md:h-[40%] h-1/2 w-[98%] md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[3%] ml-[1%] text-black">
        </div>
        <div class="flex flex-col justify-center w-full md:gap-[8%] md:col-span-1 col-span-2">
          <label for="phone" class="font-semibold uppercase">Teléfono</label>
          <fieldset class="flex w-full h-[40%] text-black">
            <select name="lada" id="lada" class="lg:w-[45%] md:w-[39%] w-[28%] border-l border-y focus:border-l-2 focus:border-y-2 border-red-700 md:rounded-l-xl rounded-l-full px-[2%] outline-none xl:text-sm text-base md:tracking-tighter tracking-tight">
              <option v-for="state in states" :key="state.name" :value="state.lada" :title="state.name">{{ state.code }} ({{ state.lada }})</option>
            </select>
            <input type="tel" id="phone" name="phone" placeholder="+ 1 (555) 000 0000" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="lg:w-[55%] md:w-[61%] w-[72%] border-r border-y focus:border-r-2 focus:border-y-2 border-red-700 outline-none md:rounded-r-xl rounded-r-full px-[3%]">
          </fieldset>
        </div>
        <div class="flex flex-col col-span-2 justify-center w-full gap-[8%]">
          <label for="email" class="font-semibold uppercase ">Email</label>
          <input type="email" id="email" name="email" placeholder="correo@correo.com" class="h-[40%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 text-black px-[3%]">
        </div>
        <div class="flex flex-col justify-center w-full gap-[8%] md:col-span-1 col-span-2">
          <label for="service" class="font-semibold uppercase">Servicio</label>
          <select name="service" id="service" class="h-[40%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[1%] text-black text-center uppercase lg:text-sm">
            <option value="" selected>-- Selecciona una opción --</option>
            <option value="">Warehouse</option>
            <option value="">Camiones de patio</option>
            <option value="">Maniobras</option>
            <option value="">Delibery Management</option>
            <option value="">Desarrollo de Tecnologias</option>
          </select>
        </div>
        <div class="flex flex-col justify-center w-full gap-[8%] md:col-span-1 col-span-2">
          <label for="state" class="font-semibold uppercase">Estado</label>
          <select name="state" id="state" class="h-[40%] w-full md:rounded-xl rounded-full outline-none border focus:border-2 border-red-700 px-[1%] text-black text-center uppercase lg:text-sm">
            <option value="">-- Selecciona una opción --</option>
            <option v-for="state in states" :key="state.name" :value="state.name">{{ state.name }}</option>
          </select>
        </div>
        <div class="flex flex-col col-span-2 row-span-2 justify-center w-full gap-[8%]">
          <label for="message" class="font-semibold uppercase">Mensaje</label>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Cuentanos como podemos ayudarte" class="md:h-[60%] h-[70%] w-full rounded-xl outline-none border focus:border-2 border-red-700 px-[3%] text-black"></textarea>
        </div>
        <button class="col-span-2 my-auto font-bold uppercase bg-red-700 hover:bg-red-800 rounded-xl h-2/5">Enviar</button>
      </form>
      <!-- Vacancy Form -->
      <VacanteForm v-else :idVacancy="vacancyId"/>

      <footer class="h-[20%] flex flex-col justify-around items-center">
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