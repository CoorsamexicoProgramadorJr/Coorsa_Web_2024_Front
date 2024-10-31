import { reactive, ref } from "vue"
import { defineStore } from "pinia"
import ClientService from "@/services/ClientService"
import { useVacancyStore } from "../vacancies"
import { useAlertNotificationStore } from "../alertNotification"

export const useNewVacancyStore = defineStore('newVacancy', () => {
  
  const vacancyStore = useVacancyStore()
  const alertNotificationStore = useAlertNotificationStore()
  const visibleNewForm = ref(false)
  const newVacancy = reactive({
    position: '',
    location: '',
    description: '',
    schedule: '',
    requirements: '',
    user_id: '',
    category_id: ''
  })
  const vacancyErrors = reactive({})

  const vacancyDetails = ref(false)
  const vacancy = reactive({})

  async function submitNewVacancy(){
    console.log(newVacancy)
    resetVacancyErrors()
    await ClientService.postNewVacancy(newVacancy)
      .then((response) => {
        console.log(response)
        alertNotificationStore.alertMsg = 'Vacante creada exitosamente'
        alertNotificationStore.alertType = 'success'
        resetNewVacancyForm()
        manageNewForm()
        alertNotificationStore.manageNotificationAlert()
        setTimeout(() => alertNotificationStore.manageNotificationAlert(), 2000)
        vacancyStore.getAllVacancies()
      })
      .catch((error) => {
        console.log(error)
        if(error.status == 400){
          Object.assign(vacancyErrors, error.response.data.errors)
          console.log(vacancyErrors)
          if(Object.keys(vacancyErrors).includes('user_id')){
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

  function resetNewVacancyForm(){
    Object.keys(newVacancy).forEach((key) => {
      if(key != 'user_id') newVacancy[key] = ''
    })
  }

  const manageNewForm = () => visibleNewForm.value = !visibleNewForm.value

  function resetVacancyErrors(){
    Object.keys(vacancyErrors).forEach(key => {
      delete vacancyErrors[key]
    })
  }

  function manageVacancyDetails(){
    vacancyDetails.value = !vacancyDetails.value
  }

  function selectVacancy(vacancyData){
    Object.assign(vacancy, vacancyData)
    console.log(vacancy)
  }

  async function updateVacancy(){
    resetVacancyErrors()
    await ClientService.updateVacancy(vacancy.id, vacancy)
      .then(response => {
        console.log(response)
        alertNotificationStore.alertMsg = 'Vacante actualizada correctamente.'
        manageVacancyDetails()
        alertNotificationStore.manageNotificationAlert()
        setTimeout(() => alertNotificationStore.manageNotificationAlert(), 2000)
        vacancyStore.getAllVacancies()
      })
      .catch(error => {
        console.log(error)
        if(error.status == 400){
          Object.assign(vacancyErrors, error.response.data.errors)
          console.log(vacancyErrors)
        }
      })
  }

  function setUserId(){    
    newVacancy.user_id = localStorage.getItem('User_id')
  }

  return {
    visibleNewForm,
    newVacancy,
    vacancyErrors,
    vacancyDetails,
    vacancy,
    submitNewVacancy,
    resetNewVacancyForm,
    manageNewForm,
    resetVacancyErrors,
    manageVacancyDetails,
    selectVacancy,
    updateVacancy,
    setUserId,
  }
})