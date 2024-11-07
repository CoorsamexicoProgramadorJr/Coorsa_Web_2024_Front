import { ref, reactive, watch } from "vue"
import { useRouter } from "vue-router"
import { defineStore } from "pinia"
import ClientService from "@/services/ClientService"
import { resetErrors, resetForm } from "@/components/helpers"

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
  const type = ref('password')

  watch(passwordVisibility, () => {
    (passwordVisibility.value) ? type.value = 'text' : type.value = 'password'
    
    document.getElementById('password').type = type.value
  })

  async function login(){
    resetErrors(errors)
    sending.value = true
    await ClientService.attempLogin(loginForm)
      .then((response) => {
        console.log(response)
        userToken.value = response.data.access_token
        saveToLocalStorage('Bearer Token', userToken.value)
        saveToLocalStorage('User_id', response.data.user.id)
        resetForm(loginForm)
        router.push('/panel-principal')
      })
      .catch(error => {
        console.log(error)
        if(error.status == 400){
          Object.assign(errors, error.response.data.errors)
        }else if(error.status == 404){
          Object.assign(errors, error.response.data)
        }else{
          alert('Ha ocurrido un error inesperado. Por favor intenta de nuevo mas tarde.')
        }
      })
      .finally(() => {
        sending.value = false
        console.log(userToken.value)
        userToken.value = ''
      })
  }

  function saveToLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
  }

  async function logOut(){
    await ClientService.attemptLogOut()
      .then(response => {
        console.log(response)
        removeFromLocalStorage('Bearer Token')
        removeFromLocalStorage('User_id')
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
    login,
    logOut
  }
})