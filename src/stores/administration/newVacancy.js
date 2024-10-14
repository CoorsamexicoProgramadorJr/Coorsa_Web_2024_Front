import { reactive, ref, onBeforeMount } from "vue"
import { defineStore } from "pinia"
import { useUserStore } from '@/stores/administration/user'
import ClientService from "@/services/ClientService"
import { useVacancyStore } from "../vacancies"

export const useNewVacancyStore = defineStore('newVacancy', () => {
  const userStore = useUserStore()
  const vacancyStore = useVacancyStore()
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
  const showAlert = ref(false)
  const alertMsg = ref('')

  const vacancyDetails = ref(false)
  const vacancy = reactive({})

  onBeforeMount(() => newVacancy.user_id = userStore.user.id)

  async function submitNewVacancy(){
    console.log(newVacancy)
    resetVacancyErrors()
    await ClientService.postNewVacancy(newVacancy)
      .then((response) => {
        console.log(response)
        alertMsg.value = 'Vacante creada exitosamente'
        resetNewVacancyForm()
        manageNewForm()
        manageNotificationAlert()
        setTimeout(() => manageNotificationAlert(), 2000)
        vacancyStore.getAllVacancies()
      })
      .catch((error) => {
        console.log(error)
        if(error.status == 400){
          Object.assign(vacancyErrors, error.response.data.errors)
          console.log(vacancyErrors)
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

  function manageNotificationAlert(){
    showAlert.value = !showAlert.value
  }

  function manageVacancyDetails(){
    vacancyDetails.value = !vacancyDetails.value
  }

  function selectVacancy(vacancyData){
    Object.assign(vacancy, vacancyData)
    console.log(vacancy)
  }

  async function updateVacancy(){
    await ClientService.updateVacancy(vacancy.id, vacancy)
      .then(response => {
        console.log(response)
        alertMsg.value = 'Vacante actualizada correctamente.'
        manageVacancyDetails()
        manageNotificationAlert()
        setTimeout(() => manageNotificationAlert(), 2000)
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

  return {
    visibleNewForm,
    newVacancy,
    vacancyErrors,
    showAlert,
    alertMsg,
    vacancyDetails,
    vacancy,
    submitNewVacancy,
    resetNewVacancyForm,
    manageNewForm,
    manageNotificationAlert,
    manageVacancyDetails,
    selectVacancy,
    updateVacancy,
  }
})