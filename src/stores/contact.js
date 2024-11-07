import { reactive, ref, onBeforeMount } from "vue"
import { defineStore } from "pinia"
import ClientService from "@/services/ClientService"
import { useAlertNotificationStore } from "./alertNotification"
import { resetErrors, resetForm } from "@/components/helpers"

export const useContactStore = defineStore('contact', () => {
  const notificationStore = useAlertNotificationStore()
  const states = ref([])
  const errors = reactive({})
  const services = ref([])
  const sending = ref(false)
  const contactForm = reactive({
    name: '',
    phone: '',
    email: '',
    message: '',
    area_code_id: '',
    service_id: '',
    state_id: ''
  })

  onBeforeMount(() => {
    requestStates()
    requestServices()
  })

  async function requestStates(){
    await ClientService.getStates()
      .then( ({ data }) => {
        states.value = data.data
      })
      .catch(error => console.log('Something went wrong. ', error))
  }

  async function requestServices(){
    await ClientService.getServices()
      .then( ({data}) => {
        services.value = data.data
      })
      .catch(error => console.log(error))
  }

  async function submitContactForm(){
    sending.value = true 
    resetErrors(errors)
    await ClientService.postConsult(contactForm)
      .then((response) => {
        notificationStore.alertType = 'success'
        notificationStore.alertMsg = 'Consulta enviada correctamente.'
        notificationStore.manageNotificationAlert()

        resetForm(contactForm)
        resetErrors(errors)
      })
      .catch( error => {
        console.log(error)
        notificationStore.alertType = 'error'

        if(error.status != 400){
          notificationStore.alertMsg = 'Error inesperado, trata de nuevo mas tarde.'
          notificationStore.manageNotificationAlert()
          return
        }
        notificationStore.alertMsg = 'Revisa que los campos esten llenados de forma correcta.'
        notificationStore.manageNotificationAlert()
        Object.assign(errors, error.response.data.errors)
      })
      .finally(() => {
        sending.value = false
        if(notificationStore.showAlert) setTimeout(() => notificationStore.manageNotificationAlert(), 2000)
      })
  }
  
  function getState(id){
    for(let state of states.value){
      if(state.id == id) return state.name
    }
  }

  function getAreaCode(id){
    for(let state of states.value){
      if(state.area_code.id == id) return state.area_code.code
    }
  }

  function getService(id){
    for(let service of services.value){
      if(service.id == id) return service.name
    }
  }

  return {
    states,
    errors,
    services,
    sending,
    contactForm,
    requestStates,
    submitContactForm,
    getState,
    getAreaCode,
    getService,
  }
})