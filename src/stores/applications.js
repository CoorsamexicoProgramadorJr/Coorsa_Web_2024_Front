import { reactive, ref, onBeforeMount } from "vue"
import { useRouter, useRoute } from "vue-router"
import { defineStore } from "pinia"
import ClientService from "@/services/ClientService"
import { useAlertNotificationStore } from "./alertNotification"
import { resetErrors, resetForm } from "@/components/helpers"

export const useApplicationStore = defineStore('application', () => {
  const notificationStore = useAlertNotificationStore()
  const applicationForm = reactive({
    name: '',
    phone: '',
    email: '',
    message: '',
    cv: '',
    category_id: '',
    vacancy_id: '',
    area_code_id: ''
  })
  const errors = reactive({})
  const sending = ref(false)
  const uploading = ref(false)
  const file = ref()
  const router = useRouter()
  const route = useRoute()

  onBeforeMount(() => {
    if(Object.keys(route.params).includes('vacancyId')){
      if(!applicationForm.vacancy_id){
        applicationForm.vacancy_id = route.params.vacancyId
      }
    }
  })

  async function submitApplication(){
    if(file.value != null && applicationForm.cv == ''){
      await uploadFile()
    }
    
    if(uploading.value === false){
      sending.value = true
      resetErrors(applicationForm)
      await ClientService.postApplication(applicationForm)
        .then(response => {
          console.log(response)
          notificationStore.alertType = 'success'
          notificationStore.alertMsg = 'Postulación enviada correctamente.'
          notificationStore.manageNotificationAlert()
          
          resetForm(applicationForm)
          resetErrors(applicationForm)
        })
        .catch(error => {
          console.log(error)
          notificationStore.alertType = 'error'
          if(error.response.status !== 400){
            notificationStore.alertMsg = 'Ha ocurrido un error inesperado.'
            return
          }else{
            Object.assign(errors, error.response.data.errors)
            notificationStore.alertMsg = 'Los campos son invalidos.'
          }
          notificationStore.manageNotificationAlert()
        })
        .finally(() => {
          sending.value = false
        })
        setTimeout(() => {
            notificationStore.manageNotificationAlert()
            if(Object.keys(errors).length == 0) router.push({ name: 'talento' })
        }, 2000)
    }
  }

  function manageCv(event){
    file.value = event.target.files[0]
  }

  async function uploadFile(){
    const fileFormData = new FormData()
    fileFormData.append('file', file.value)
    uploading.value = true
    await ClientService.postCv(fileFormData)
      .then(({ data }) => {
        console.log(data)
        applicationForm.cv = data.public_url
      })
      .catch((error) => {
        console.log(error)
        notificationStore.alertType = 'error'
        if(error.status == 400){
          console.log(error.response.data.errors)
          notificationStore.alertMsg = 'Ha ocurrido un error al subir el cv, intenta de nuevo o prueba con otro archivo.'
          notificationStore.manageNotificationAlert()
        }
      })
      .finally(() => {
        uploading.value = false
      })

    setTimeout(() => notificationStore.manageNotificationAlert(), 3000)
  }

  return {
    errors,
    sending,
    uploading,
    file,
    applicationForm,
    submitApplication,
    manageCv,
    manageCv,
  }
})