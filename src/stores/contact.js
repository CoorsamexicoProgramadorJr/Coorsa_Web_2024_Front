import { reactive, ref, onBeforeMount } from "vue"
import { defineStore } from "pinia"
import ClientService from "@/services/ClientService"
import { useAlertNotificationStore } from "./alertNotification"

export const useContactStore = defineStore('contact', () => {
  const notificationStore = useAlertNotificationStore()
  const states = ref([])
  const errors = ref([])
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
    await ClientService.postConsult(contactForm)
      .then((response) => {
        // console.log(response)
        notificationStore.alertType = 'success'
        notificationStore.alertMsg = 'Consulta enviada correctamente.'
        notificationStore.manageNotificationAlert()

        resetForm()
        resetErrors()
        console.log(contactForm)
      })
      .catch( error => {
        notificationStore.alertType = 'error'

        if(error.status != 400){
          console.log(error)
          notificationStore.alertMsg = 'Error inesperado, trata de nuevo mas tarde.'
          notificationStore.manageNotificationAlert()
          return
        }
        notificationStore.alertMsg = 'Revisa que los campos esten llenados de forma correcta.'
        notificationStore.manageNotificationAlert()
        Object.assign(errors.value, error.response.data.errors)
        // console.log(errors.value)
      })
      .finally(() => {
        sending.value = false
      })
      setTimeout(() => notificationStore.manageNotificationAlert(), 2000)
  }

  function resetForm(){
    contactForm.name = ''
    contactForm.phone = ''
    contactForm.email = ''
    contactForm.message = ''
    contactForm.area_code_id = ''
    contactForm.service_id = ''
    contactForm.state_id = ''
  }

  function resetErrors(){
    delete errors.errors
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
    contactForm,
    requestStates,
    submitContactForm,
    resetForm,
    resetErrors,
    sending,
    getState,
    getAreaCode,
    getService,
  }
})