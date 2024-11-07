import { ref, onBeforeMount, reactive } from 'vue'
import { defineStore } from "pinia"
import ClientService from '@/services/ClientService'

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref([])
  const selectedCategory = reactive({})

  onBeforeMount(() => {
    getCategories()
  })

  async function getCategories() {
    await ClientService.getCategories()
      .then( ({data}) => {
        categories.value = data.data
      })
      .catch(error => console.log('Something went wrong. ', error))
  }

  async function getCategoryById(id){
    await ClientService.getCategoryById(id)
      .then(response => {
        Object.assign(selectedCategory, response.data.data)
      })
      .catch(error => console.log(error))
  }

  return {
    categories,
    selectedCategory,
    getCategories,
    getCategoryById,
  }
})