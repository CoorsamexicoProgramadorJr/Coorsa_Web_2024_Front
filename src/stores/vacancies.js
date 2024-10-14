import { reactive, ref } from 'vue'
import { defineStore } from "pinia"
import { useRouter } from 'vue-router'
import ClientService from '@/services/ClientService'
import { useApplicationStore } from './applications'

export const useVacancyStore = defineStore('vacancies', () => {
  const router = useRouter()
  const applicationStore = useApplicationStore()
  const showVacanciesList = ref(false)
  const vacancies = ref([])

  async function getVacanciesByCategoryId(category_Id) {
    await ClientService.getVacanciesByCategory(category_Id)
      .then(({data}) => {
        vacancies.value = data.data
      })
      .catch(error => console.log('Error getting vacancies by category.', error))
  }

  const chgVacancy = () => showVacanciesList.value = !showVacanciesList.value

  const openList = (id) => {
    getVacanciesByCategoryId(id)
    chgVacancy()
  }

  const applyVacancy = (vacancy) => {
    applicationStore.applicationForm.vacancy_id = vacancy.id
    applicationStore.applicationForm.category_id = vacancy.category_id
    applicationStore.resetErrors()
    router.push({ name: 'contacto', params: { vacancyId: vacancy.id}})
  }

  async function getAllVacancies(){
    await ClientService.getVacancies()
      .then((response) => {
        vacancies.value = response.data.data
      })
      .catch(error => console.log(error))
  }

  return {
    showVacanciesList,
    vacancies,
    chgVacancy,
    openList,
    applyVacancy,
    getAllVacancies,
  }
})