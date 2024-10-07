import { ref, reactive, watch } from "vue"
import { useRouter } from "vue-router"
import { defineStore } from "pinia"
import ClientService from "@/services/ClientService"

export const useLoginStore = defineStore('login', () => {
  const router = useRouter()
  const loginForm = reactive({
    email: '',
    password: ''
  })
  const passwordVisibility = ref(false)
  const errors = reactive({})
  const sending = ref(false)
  const userToken = ref('')

  watch(passwordVisibility, () => {
    if(passwordVisibility.value){
      document.getElementById('password').type = 'text'
    }else if(passwordVisibility.value == false) {
      document.getElementById('password').type = 'password'
    }
  })

  async function login(){
    resetErrors()
    sending.value = true
    console.log(loginForm)
    await ClientService.attempLogin(loginForm)
      .then((response) => {
        console.log(response)
        userToken.value = response.data.access_token
        saveToLocalStorage('Bearer Token', userToken.value)
        resetForm()
        resetErrors()
        router.push({ name: 'panel principal'})
      })
      .catch(error => {
        if(error.status == 400){
          console.log(error.response.data.errors)
          Object.assign(errors, error.response.data.errors)
        }else if(error.status == 404){
          Object.assign(errors, error.response.data)
          console.log(error.response.data)
        }else{
          alert('Ha ocurrido un error inesperado. Por favor intenta de nuevo mas tarde.')
          console.log(error)
        }
      })
      .finally(() => {
        sending.value = false
        console.log(errors)
        console.log(userToken.value)
      })
  }

  function saveToLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
  }

  function resetForm(){
    loginForm.email = ''
    loginForm.password = ''
  }

  function resetErrors(){
    for(var member in errors){
      delete errors[member]
    }
  }

  async function logOut(){
    await ClientService.attemptLogOut()
      .then(response => {
        console.log(response)
        removeFromLocalStorage('Bearer Token')
        router.push({ name: 'login' })
      })
      .catch(error => {
        console.log(error)
      })
  }

  function removeFromLocalStorage(key){
    localStorage.removeItem(key)
  }

  return {
    loginForm,
    passwordVisibility,
    errors,
    sending,
    userToken,
    login,
    resetForm,
    logOut
  }
})