import { reactive, ref, onBeforeMount } from "vue"
import { defineStore } from "pinia"
import ClientService from "@/services/ClientService"

export const useContactStore = defineStore('contact', () => {
  const states = ref([])
  const errors = reactive({})
  const services = ref([])
  const sending = ref(false)
  const showAlert = ref(false)

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

  const contactForm = reactive({
    name: '',
    phone: '',
    email: '',
    message: '',
    area_code_id: '',
    service_id: '',
    state_id: ''
  })

  function getSending(){
    return sending.value
  }

  function getAlertStatus(){
    return showAlert.value
  }

  async function submitContactForm(){
    sending.value = true 
    await ClientService.postConsult(contactForm)
      .then((response) => {
        console.log(response)
        showAlert.value = true
        setTimeout(() => {
          showAlert.value = false
        }, 2000)
      
        resetForm()

        resetErrors()

        console.log(contactForm)
      })
      .catch( error => {
        if(error.status != 400){
          console.log(error)
          return
        }
        errors.errors = error.response.data.errors
      })
      .finally(() => {
        console.log(errors)
        sending.value = false
      })
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

  return {
    states,
    errors,
    services,
    contactForm,
    showAlert,
    getAlertStatus,
    submitContactForm,
    resetForm,
    resetErrors,
    sending,
    getSending
  }
})