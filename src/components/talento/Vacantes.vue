<script setup>
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { vacancies } from '@/data/vacancies'

  const router = useRouter()
  const openVacancies = ref(false)
  const newVacancies = ref([])
  const mt_text = ref('')

  const chgVacancy = () => openVacancies.value = !openVacancies.value
  
  const openList = (type) => {
    newVacancies.value = vacancies.filter((vacancy) => vacancy.category == type)
    chgVacancy()
    console.log(openVacancies.value)
  }

  const apply = (id) => {
    router.push({ name: 'contacto', params: { vacancyId: id}})
  }
</script>
<template>
  <section class="w-[100vw] min-h-[92vh] p-[3%]" id="sec-vacantes">
    <h2 class="text-5xl font-bold text-black uppercase mb-[3%]">Vacantes</h2>
    <div class="flex items-center justify-center w-full max-h-[40%] gap-[10%]">
      <button @click="openList(1)" class="w-[20%] h-full min-h-80 rounded-2xl flex justify-center items-center font-semibold text-3xl text-red-700 pb-[1%] border-2 border-red-700 uppercase">
        Practicas
      </button>
      <button @click="openList(2)" class="w-[20%] h-full min-h-80 rounded-2xl flex justify-center items-center font-semibold text-3xl text-red-700 pb-[1%] border-2 border-red-700 uppercase">
        Operación
      </button>
      <button @click="openList(3)" class="w-[20%] h-full min-h-80 rounded-2xl flex justify-center items-center font-semibold text-3xl text-red-700 pb-[1%] border-2 border-red-700 uppercase">
        Administrativas
      </button>
    </div>
    <div v-if="newVacancies.length != 0 && openVacancies" class="m-[5%] flex flex-col items-center">
      <details class="w-[90%] mb-[2%] flex flex-col items-center" v-for="vacancy in newVacancies" :key="vacancy.id">
        <summary class="w-full text-3xl border-b-2 border-red-700 pb-[1%] text-red-700" open>
          <span class="font-bold text-black">{{ vacancy.name }}</span>
        </summary>
        <div class="py-[2%] px-[4%]">
          <dl>
            <div class="flex gap-[2%] items-center my-[1%]">
              <dt class="text-xl font-semibold uppercase">Ubicación:</dt>
              <dd class="text-xl font-light">{{ vacancy.location }}</dd>
            </div>
            <div class="flex gap-[2%] items-center my-[2%]">
              <dt class="text-xl font-semibold uppercase">Descripción:</dt>
              <dd class="text-xl font-light">{{ vacancy.description }}</dd>
            </div>
            <div class="flex gap-[2%] items-center my-[2%]">
              <dt class="text-xl font-semibold uppercase">Horario Laboral:</dt>
              <dd class="text-xl font-light">{{ vacancy.shift }}</dd>
            </div>
            <div class=" my-[1%]">
              <dt class="text-xl font-semibold uppercase">Requisitos:</dt>
              <dd class="mx-[2%]">
                <ul class="list-disc mx-[2%]">
                  <li v-for="requirement in vacancy.requirements" :key="requirement" class="text-xl font-light uppercase">
                    {{ requirement }}
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <button @click="apply(vacancy.id)" class="w-1/5 h-10 mx-auto font-bold text-white uppercase bg-red-700 rounded-xl">Postulate</button>
      </details>
    </div>
    <div class="w-full h-1/5" :class="{ 'mt-[10%]' : openVacancies == false, 'mt-[4%]' : openVacancies}">
      <h3 class="text-5xl text-center">Juntos, hagamos de lo bueno, algo mejor.</h3>
      <p class="text-5xl font-bold text-center text-red-700 uppercase">Somos Coorsa</p>
    </div>
  </section>
</template>