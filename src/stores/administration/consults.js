import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import ClientService from '@/services/ClientService'

export const useConsultStore = defineStore('consults', () => {
  const consults = ref([])
  const consultDetails = ref(false)
  const consult = reactive({})
  
  async function getAllConsults(){
    await ClientService.getConsults()
      .then((response) => {
        consults.value = response.data.data
      })
      .catch(error => console.log(error))
  }

  function manageConsultDetails(){
    consultDetails.value = !consultDetails.value
  }

  function selectConsult(consultData){
    Object.assign(consult, consultData)
    console.log(consult)
  }

  return {
    consults,
    consultDetails,
    consult,
    getAllConsults,
    manageConsultDetails,
    selectConsult,
  }
})