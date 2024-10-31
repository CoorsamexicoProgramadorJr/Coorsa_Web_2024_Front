import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { defineStore } from "pinia"
import ClientService from "@/services/ClientService"

export const useApplicationStore = defineStore('application', () => {
  const errors = reactive({})
  const sending = ref(false)
  const uploading = ref(false)
  const file = ref()
  const alertStatus = ref(false)
  const router = useRouter()

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

  async function submitApplication(){
    if(file.value != null && applicationForm.cv == ''){
      await uploadFile()
    }
    
    if(uploading.value === false){
      sending.value = true
      resetErrors()
      await ClientService.postApplication(applicationForm)
        .then(response => {
          alertStatus.value = true
          setTimeout(() => {
            alertStatus.value = false
          }, 2000)
          console.log(response)
          resetAppForm()
          resetErrors()
          setTimeout(() => {
            router.push({ name: 'talento' })
          }, 3000)
        })
        .catch(error => {
          if(error.response.status !== 400){
            console.log(error)
            return
          }
          Object.assign(errors, error.response.data.errors)
        })
        .finally(() => {
          sending.value = false
        })
    }
  }

  function getSendingStatus(){
    return sending.value
  }

  function getErrors(){
    return errors.value
  }

  function resetAppForm(){
    applicationForm.name = ''
    applicationForm.area_code_id = ''
    applicationForm.phone = ''
    applicationForm.email = ''
    applicationForm.category_id = ''
    applicationForm.vacancy_id = ''
    applicationForm.message = ''
    applicationForm.cv = ''
  }

  function resetErrors(){
    for(var member in errors){
      delete errors[member]
    }
    // console.log(errors)
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
        // console.log(applicationForm.cv)
      })
      .catch((error) => {
        console.log(error)
        if(error.status == 400){
          console.log(error.response.data.errors)
          alert('Ha ocurrido un error al subir el cv, intenta de nuevo o prueba con otro archivo.')
        }
      })
      .finally(() => {
        uploading.value = false
      })
  }

  function getAlertStatus(){
    return alertStatus.value
  }

  return {
    errors,
    sending,
    uploading,
    file,
    alertStatus,
    applicationForm,
    submitApplication,
    getSendingStatus,
    getErrors,
    manageCv,
    resetAppForm,
    resetErrors,
    manageCv,
    getAlertStatus
  }
})