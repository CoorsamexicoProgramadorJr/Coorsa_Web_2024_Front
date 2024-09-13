import { reactive, ref } from "vue"
import { defineStore } from "pinia"

export const useContactStore = defineStore('contact', () => {
  const contactForm = reactive({
    name: '',
    phone: '',
    email: '',
    service: '',
    state: '',
    message: '' 
  })

  const phoneInput = reactive({
    lada: '',
    number: ''
  })

  const errors = ref([])

  function submitContactForm(){
    contactForm.phone = phoneInput.lada + ' ' + phoneInput.number
    // Validate that the fields are not empty
    if(Object.values(contactForm).includes('')){
      errors.value['message'] = 'Todos los campos son obligatorios'
    }

    console.log(errors.value)
  }

  return {
    contactForm,
    phoneInput,
    submitContactForm
  }
})