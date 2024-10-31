import { ref } from "vue"
import { defineStore } from "pinia"

export const useAlertNotificationStore = defineStore('alertNotification', () => {
  const showAlert = ref(false)
  const alertMsg = ref('')
  const alertType = ref('success')

  function manageNotificationAlert(){
    showAlert.value = !showAlert.value
  }

  return {
    showAlert,
    alertMsg,
    alertType,
    manageNotificationAlert,
  }
})