import { ref, reactive, watch } from "vue"
import { useRouter } from "vue-router"
import { defineStore } from "pinia"
import ClientService from "@/services/ClientService"

export const useLoginStore = defineStore('login', () => {
  const router = useRouter()
  const loginForm = reactive({
    data: {
      email: '',
      password: ''
    },
    errors: {},
    resetData: function(){
      Object.keys(this.data).forEach(key => this.data[key] = '')
    },
    resetErrors: function(){
      Object.keys(this.errors).forEach(key => delete this.errors[key])
    }
  })
  const passwordVisibility = ref(false)
  const sending = ref(false)
  const userToken = ref('')
  const type = ref('password')

  watch(passwordVisibility, () => {
    (passwordVisibility.value) ? type.value = 'text' : type.value = 'password'
    
    document.getElementById('password').type = type.value
  })

  async function login(){
    loginForm.resetErrors()

    sending.value = true
    console.log(loginForm.data)
    await ClientService.attempLogin(loginForm.data)
      .then((response) => {
        console.log(response)
        userToken.value = response.data.access_token
        saveToLocalStorage('Bearer Token', userToken.value)
        saveToLocalStorage('User_id', response.data.user.id)
        loginForm.resetData()
        router.push('/panel-principal')
      })
      .catch(error => {
        console.log(error)
        if(error.status == 400){
          Object.assign(loginForm.errors, error.response.data.errors)
        }else if(error.status == 404){
          Object.assign(loginForm.errors, error.response.data)
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

  const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

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

  const removeFromLocalStorage = key => localStorage.removeItem(key);

  return {
    loginForm,
    passwordVisibility,
    sending,
    userToken,
    type,
    login,
    logOut
  }
})