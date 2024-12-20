import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import ClientService from '@/services/ClientService'
import { useVacancyStore } from '../vacancies'
import { useCategoryStore } from '../categories'

export const useAppAdmStore = defineStore('app-adm', () => {
  const vacancyStore = useVacancyStore()
  const categoryStore = useCategoryStore()
  const applications = ref([])
  const applicationDetails = ref(false)
  const application = reactive({})
  
  async function getAllApplications(){
    await ClientService.getApplications()
      .then((response) => {
        applications.value = response.data.data
      })
      .catch(error => console.log(error))
  }

  function manageApplicationDetails(){
    applicationDetails.value = !applicationDetails.value
  }

  function selectApplication(applicationData){
    Object.assign(application, applicationData)
    manageApplicationDetails()
    vacancyStore.getVacancyById(applicationData.vacancy_id)
    categoryStore.getCategoryById(applicationData.category_id)
  }

  return {
    applications,
    applicationDetails,
    application,
    getAllApplications,
    manageApplicationDetails,
    selectApplication,
  }
})