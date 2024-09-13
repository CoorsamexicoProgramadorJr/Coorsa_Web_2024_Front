import { ref } from 'vue'
import { defineStore } from "pinia"
import ClientService from '@/services/ClientService'

export const useVacancyStore = defineStore('vacancies', () => {
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

  return {
    showVacanciesList,
    vacancies,
    chgVacancy,
    openList
  }
})