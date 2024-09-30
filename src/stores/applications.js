import { reactive, ref } from "vue"
import { defineStore } from "pinia"
import ClientService from "@/services/ClientService"

export const useApplicationStore = defineStore('application', () => {
  const cv = reactive({})
  const errors = reactive({})
  const sending = ref(false)

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
    sending.value = true
    await ClientService.postApplication(applicationForm)
      .then(response => {
        console.log(response)
        resetAppForm()
        resetErrors()
      })
      .catch(error => {
        if(error.response.status !== 400){
          console.log(error)
          return
        }
        Object.assign(errors, error.response.data.errors)
        console.log(errors)
      })
      .finally(() => {
        sending.value = false
      })
  }

  function getSendingStatus(){
    return sending.value
  }

  function getErrors(){
    return errors.value
  }

  function manageCv(event){
    cv.file = event.target.files[0]
    console.log(cv)
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
    console.log(errors)
  }

  return {
    errors,
    sending,
    applicationForm,
    submitApplication,
    getSendingStatus,
    getErrors,
    manageCv,
    resetAppForm,
    resetErrors
  }
})