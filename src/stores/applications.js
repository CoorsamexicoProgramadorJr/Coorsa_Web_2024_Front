import { reactive, ref, onBeforeMount } from "vue"
import { useRouter, useRoute } from "vue-router"
import { defineStore } from "pinia"
import ClientService from "@/services/ClientService"
import { useAlertNotificationStore } from "./alertNotification"

export const useApplicationStore = defineStore('application', () => {
  const notificationStore = useAlertNotificationStore()
  const applicationForm = reactive({
    data: {
      name: '',
      phone: '',
      email: '',
      cv: {},
      message: '',
      category_id: 0,
      vacancy_id: 0,
      area_code_id: 0
    },
    formData: new FormData(),
    errors: {},
    setFormData: function() {
      for(let [key, value] of Object.entries(this.data)){
        if(key === 'cv' && Object.keys(value).length === 0) continue;
        this.formData.append(key, value);
      }
    },
    resetData: function(){
      Object.keys(this.data).forEach(key => {
        if(key === 'cv') this.data[key] = {}
        else if(key !== 'vacancy_id' || key !== 'category_id') this.data[key] = ''
      })
    },
    resetFormData: function() {
      for(let key of this.formData.keys()) this.formData.delete(key)
    },
    resetErrors: function() {
      Object.keys(this.errors).forEach((key) => delete this.errors[key])
    }
  })
  const sending = ref(false)
  const uploading = ref(false)
  const router = useRouter()
  const route = useRoute()

  onBeforeMount(() => {
    if(Object.keys(route.params).includes('vacancyId') && !applicationForm.data.vacancy_id) 
      applicationForm.data.vacancy_id = route.params.vacancyId
  })

  async function submitApplication(){
    applicationForm.resetErrors()
    applicationForm.setFormData()

    if(uploading.value === false){
      sending.value = true

      await ClientService.postApplication(applicationForm.formData)
        .then(response => {
          console.log(response)
          notificationStore.alertType = 'success'
          notificationStore.alertMsg = 'Postulación enviada correctamente.'
          notificationStore.manageNotificationAlert()
          
          applicationForm.resetData()
        })
        .catch(error => {
          console.log(error)
          if(error.response.status === 400) Object.assign(applicationForm.errors, error.response.data.errors)
        })
        .finally(() => {
          applicationForm.resetFormData()
          sending.value = false
          if(notificationStore.showAlert){
            setTimeout(() => {
              notificationStore.manageNotificationAlert()
              router.push('/talento')
            }, 1000)
          }
        })
        
    }
  }

  const manageCv = (event) => applicationForm.data.cv = event.target.files[0]

  return {
    applicationForm,
    sending,
    uploading,
    submitApplication,
    manageCv,
  }
})