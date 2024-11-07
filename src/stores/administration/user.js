import { reactive, onBeforeMount } from "vue"
import { defineStore } from "pinia"
import ClientService from "@/services/ClientService"

export const useUserStore = defineStore('user', () => {
  const user = reactive({})
  const userId = localStorage.getItem('User_id')

  onBeforeMount(() => {
    getUserInfo()
  })

  async function getUserInfo(){
    await ClientService.getUser(userId)
      .then((response) => {
        Object.assign(user, response.data.data)
      })
      .catch(error => console.log(error))
  }

  return {
    user,
    getUserInfo
  }
})