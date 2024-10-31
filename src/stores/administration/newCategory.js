import { reactive,ref } from "vue"
import { defineStore } from "pinia"
import { useAlertNotificationStore } from "../alertNotification"
import { useCategoryStore } from "../categories"
import ClientService from "@/services/ClientService"

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
    console.log(categoryForm)
    resetCategoryErrors()
    await ClientService.postCategory(categoryForm)
      .then((response) => {
        console.log(response)
        alertNotificationStore.alertMsg = 'Categoria creada exitosamente'
        alertNotificationStore.alertType = 'success'
        resetCategoryForm()
        manageNewForm()
        alertNotificationStore.manageNotificationAlert()
        setTimeout(() => alertNotificationStore.manageNotificationAlert(), 2000)
        categoryStore.getCategories()
      })
      .catch((error) => {
        console.log(error)
        if(error.status == 400){
          Object.assign(categoryErrors, error.response.data.errors)
          console.log(categoryErrors)
          if(Object.keys(categoryErrors).includes('user_id')){
            manageNewForm()
            alertNotificationStore.alertMsg = 'Error, con el usuario'
            alertNotificationStore.alertType = 'error'
            alertNotificationStore.manageNotificationAlert()
            setTimeout(() => {
              alertNotificationStore.manageNotificationAlert()
            }, 2000)
          }
        }
      })
  }
  
  const manageNewForm = () => visibleNewForm.value = !visibleNewForm.value

  function setUserId(){
    categoryForm.user_id = localStorage.getItem('User_id')
  }

  function resetCategoryForm(){
    Object.keys(categoryForm).forEach((key) => {
      if(key != 'user_id') categoryForm[key] = ''
    })
  }

  function resetCategoryErrors(){
    Object.keys(categoryErrors).forEach(key => {
      delete categoryErrors[key]
    })
  }

  function manageCategoryDetails(){
    categoryDetails.value = !categoryDetails.value
  }

  function selectCategory(categoryData){
    Object.assign(category, categoryData)
  }

  async function updateCategory(){
    resetCategoryErrors()
    await ClientService.updateCategory(category.id, category)
      .then(response => {
        console.log(response)
        alertNotificationStore.alertMsg = 'Categoria actualizada correctamente.'
        manageCategoryDetails()
        alertNotificationStore.manageNotificationAlert()
        setTimeout(() => alertNotificationStore.manageNotificationAlert(), 2000)
        categoryStore.getCategories()
      })
      .catch(error => {
        console.log(error)
        if(error.status == 400){
          Object.assign(categoryErrors, error.response.data.errors)
          console.log(categoryErrors)
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
    setUserId,
    resetCategoryForm,
    resetCategoryErrors,
    manageCategoryDetails,
    selectCategory,
    updateCategory,
  }
})