import { ref, onBeforeMount } from 'vue'
import { defineStore } from "pinia"
import ClientService from '@/services/ClientService'

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref([])

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

  return {
    categories
  }
})