import { reactive,ref } from "vue"
import { defineStore } from "pinia"
import { useAlertNotificationStore } from "../alertNotification"
import { useCategoryStore } from "../categories"
import ClientService from "@/services/ClientService"
import { resetErrors, resetForm, setUserId } from "@/components/helpers"

export const useNewCatStore = defineStore('newCategory', () => {
  const alertNotificationStore = useAlertNotificationStore()
  const categoryStore = useCategoryStore()
  const category = reactive({})
  const categoryForm = reactive({
    name: '',
    user_id: ''
  })
  const visibleNewForm = ref(false)
  const categoryErrors = reactive({})
  const categoryDetails = ref(false)

  async function submitNewCategory(){
    resetErrors(categoryErrors)
    if(!categoryForm.user_id) {
      setUserId(categoryForm)
    }
    await ClientService.postCategory(categoryForm)
      .then((response) => {
        console.log(response)
        alertNotificationStore.alertMsg = 'Categoria creada exitosamente'
        alertNotificationStore.alertType = 'success'
        resetForm(categoryForm)
        manageNewForm()
        alertNotificationStore.manageNotificationAlert()
        setTimeout(() => alertNotificationStore.manageNotificationAlert(), 2000)
        categoryStore.getCategories()
      })
      .catch((error) => {
        console.log(error)
        if(error.status == 400){
          Object.assign(categoryErrors, error.response.data.errors)
        }else{
          alertNotificationStore.alertMsg = 'Ha ocurrido un error inesperado, intenta de nuevo mas tarde.'
          alertNotificationStore.alertType = 'error'
          alertNotificationStore.manageNotificationAlert()
          setTimeout(() => {
            alertNotificationStore.manageNotificationAlert()
          }, 2000)
        }
      })
  }
  
  const manageNewForm = () => visibleNewForm.value = !visibleNewForm.value

  function manageCategoryDetails(){
    categoryDetails.value = !categoryDetails.value
  }

  function selectCategory(categoryData){
    Object.assign(category, categoryData)
  }

  async function updateCategory(){
    resetErrors(categoryErrors)
    await ClientService.updateCategory(category.id, category)
      .then(response => {
        console.log(response)
        alertNotificationStore.alertMsg = 'Categoria actualizada correctamente.'
        alertNotificationStore.alertType = 'success'
        manageCategoryDetails()
        alertNotificationStore.manageNotificationAlert()
        setTimeout(() => alertNotificationStore.manageNotificationAlert(), 2000)
        categoryStore.getCategories()
      })
      .catch(error => {
        console.log(error)
        if(error.status == 400){
          Object.assign(categoryErrors, error.response.data.errors)
        }else{
          alertNotificationStore.alertMsg = 'Ha ocurrido un error inesperado, intenta de nuevo mas tarde.'
          alertNotificationStore.alertType = 'error'
          alertNotificationStore.manageNotificationAlert()
          setTimeout(() => {
            alertNotificationStore.manageNotificationAlert()
          }, 2000)
        }
      })
  }

  return {
    category,
    categoryForm,
    visibleNewForm,
    categoryErrors,
    categoryDetails,
    submitNewCategory,
    manageNewForm,
    manageCategoryDetails,
    selectCategory,
    updateCategory,
  }
})