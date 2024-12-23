import { reactive, ref, onBeforeMount } from "vue"
import { defineStore } from "pinia"
import ClientService from "@/services/ClientService"
import { useAlertNotificationStore } from "./alertNotification"

export const useContactStore = defineStore('contact', () => {
  const notificationStore = useAlertNotificationStore()
  const states = ref([])
  const services = ref([])
  const sending = ref(false)
  const contactForm = reactive({
    data: {
      name: '',
      phone: '',
      email: '',
      message: '',
      area_code_id: '',
      service_id: '',
      state_id: ''
    },
    errors: {},
    resetData: function() {
      Object.keys(this.data).forEach(key => {
        this.data[key] = ''
      })
    },
    resetErrors: function() {
      Object.keys(this.errors).forEach(key => delete this.errors[key])
    }
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
    if(Object.keys(contactForm.errors).length !== 0) contactForm.resetErrors()

    await ClientService.postConsult(contactForm.data)
      .then((response) => {
        notificationStore.alertType = 'success'
        notificationStore.alertMsg = 'Consulta enviada correctamente.'
        notificationStore.manageNotificationAlert()

        contactForm.resetData()
        contactForm.resetErrors()
      })
      .catch( error => {
        console.log(error)
        if(error.status === 400){
          Object.assign(contactForm.errors, error.response.data.errors)
        }else{
          notificationStore.alertType = 'error'
          notificationStore.alertMsg = 'Error inesperado, intenta de nuevo.'
          notificationStore.manageNotificationAlert()
        }
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