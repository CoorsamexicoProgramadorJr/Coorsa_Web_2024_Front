import { defineStore } from "pinia"
import { ref, reactive, watch } from "vue"
import ClientService from "@/services/ClientService"
import { useAlertNotificationStore } from "../alertNotification"

export const useDirectiveStore = defineStore('directive', () => {
  const notificationStore = useAlertNotificationStore()
  const directives = ref([])

  const newDirectiveModal = reactive({
    active: false,
    changeStatus: function() {this.active = !this.active},
  })

  const newDirectiveForm = reactive({
    data: {
      name: '',
      position: '',
      image: {}
    },
    form: new FormData(),
    errors: {},
    resetData: function() {
      this.data.name = ''
      this.data.position = ''
      this.data.image = {}
    },
    setFormData: function(){
      this.form.append('name', this.data.name)
      this.form.append('position', this.data.position)
      this.form.append('image', this.data.image)
      // const formKeys = ref(Object.keys(this.data))
      // const formValues = ref(Object.values(this.data))
  
      // for(let i = 0; i < formKeys.value.length; i++) this.form.append(formKeys.value[i], formValues.value[i])
    },
    resetForm: function(){
      this.form.delete('name')
      this.form.delete('position')
      this.form.delete('image')
    },
    resetErrors: function() {
      Object.keys(this.errors).forEach((key) => delete this.errors[key])
    }
  })

  const imageUrl = ref('')

  async function getAllDirectives(){
    await ClientService.getDirectives()
    .then((response) => directives.value = response.data.data)
    .catch(error => console.log(error))
  }

  async function registerDirective(){
    if(Object.keys(newDirectiveForm.errors).length != 0) newDirectiveForm.resetErrors()

      newDirectiveForm.setFormData()

    await ClientService.postDirective(newDirectiveForm.form)
      .then(response => {
        console.log(response)

        notificationStore.alertType = 'success'
        notificationStore.alertMsg = 'Directivo creado exitosamente!'
    
        newDirectiveForm.resetErrors()
        newDirectiveForm.resetData()
        newDirectiveForm.resetForm()
        imageUrl.value = ''

        notificationStore.manageNotificationAlert()
        getAllDirectives()
        newDirectiveModal.changeStatus()
      })
      .catch(error => {
        console.log(error)
        if(error.status == 400) Object.assign(newDirectiveForm.errors, error.response.data.errors)
        else{
          notificationStore.alertType = 'error'
          notificationStore.alertMsg = 'Ha ocurrido un error inesperado.'
          notificationStore.manageNotificationAlert
        }
      })
      .finally(() => {
        if(notificationStore.showAlert) setTimeout(() => notificationStore.manageNotificationAlert(), 2000)
      })
  }

  const manageImage = (event) => {
    newDirectiveForm.data.image = event.target.files[0]
    imageUrl.value = URL.createObjectURL(newDirectiveForm.data.image)
  }

  // Details
  const directive = reactive({})
  const details = reactive({
    active: false,  // ? Replaces the showDetails variable
    changeStatus: function(){this.active = !this.active} // ? Replaces the manageDetails arrow function
  })

  function selectDirective(directiveData){
    Object.assign(directive, directiveData)
    details.changeStatus()
  }

  // Edit forms
  const infoFormModal = reactive({
    active: false,
    changeStatus: function(){this.active = !this.active}
  })

  const infoForm = reactive({
    data: {
      'name': '',
      'position': '',
    },
    errors: {},
    resetData: function() {
      this.data.name = ''
      this.data.position = ''
    },
    resetErrors: function() {
      Object.keys(this.errors).forEach((key) =>delete this.errors[key])
    }
  })

  watch(infoFormModal, () => {
    if(infoFormModal.active){
      infoForm.data.name = directive.name
      infoForm.data.position = directive.position
    }
  }, { deep: true })

  async function editDirectiveInfo(){
    if(Object.keys(infoForm.errors).length != 0) infoForm.resetErrors()

    await ClientService.putDirective(infoForm.data, directive.id)
      .then(response => {
        Object.assign(directive, response.data.data)

        notificationStore.alertType = 'success'
        notificationStore.alertMsg = 'Información de directivo actualizada.'
        notificationStore.manageNotificationAlert()

        infoFormModal.changeStatus()
        getAllDirectives()
      })
      .catch(error => {
        console.log(error)
        if(error.status != 400){
          notificationStore.alertType = 'error'
          notificationStore.alertMsg = 'Ha ocurrido un error inesperado.'
          notificationStore.manageNotificationAlert()
        }else if(error.status == 400) {
          Object.assign(infoForm.errors, error.response.data.errors)
        }
      })
      .finally(() => {
        if(notificationStore.showAlert) setTimeout(() => notificationStore.manageNotificationAlert(), 2000)
      })
  }

  const newImageFormModal = reactive({
    active: false,
    changeStatus: function(){this.active = !this.active}
  })

  const imageForm = reactive({
    data: new FormData(),
    errors: {},
    resetData: function() {this.data.delete('image')},
    resetErrors: function() {
      Object.keys(this.errors).forEach(key => delete this.errors[key])
    }
  })

  const setImageToForm = (event) => {
    imageForm.data.append('image', event.target.files[0])
    imageUrl.value = URL.createObjectURL(imageForm.data.get('image'))
  }

  async function updateDirectiveImage(){
    if(Object.keys(imageForm.errors).length != 0)  imageForm.resetErrors()

    await ClientService.postNewDirectiveImage(imageForm.data, directive.id)
      .then(response => {
        directive.image = response.data.data.image
        notificationStore.alertType = 'success'
        notificationStore.alertMsg = 'Imagen del directivo actualizada'
        notificationStore.manageNotificationAlert()

        imageForm.resetData()
        imageUrl.value = ''
        getAllDirectives()
        newImageFormModal.changeStatus()
      })
      .catch(error => {
        console.log(error)
        if(error.status == 400){
          Object.assign(imageForm.errors, error.response.data.errors)
        }else{
          notificationStore.alertType = 'error'
          notificationStore.alertMsg = 'Ha ocurrido un error inesperado.'
          notificationStore.manageNotificationAlert()
        }
      })
      .finally(() => {
        if(notificationStore.showAlert) setTimeout(() => notificationStore.manageNotificationAlert(), 2000)
      })
  }

  async function deleteDirective(){
    await ClientService.deleteDirective(directive.id)
      .then(response => {
        notificationStore.alertType = 'success'
        notificationStore.alertMsg = 'Directivo desactivado correctamente'
        notificationStore.manageNotificationAlert()
        
        getAllDirectives()
        details.changeStatus()
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        if(notificationStore.showAlert) setTimeout(() => notificationStore.manageNotificationAlert(), 2000)
      })
  }

  async function activateDirective(){
    await ClientService.postActivateDirective(directive.id)
      .then(response => {
        notificationStore.alertType = 'success'
        notificationStore.alertMsg = 'Directivo activado correctamente'
        notificationStore.manageNotificationAlert()

        getAllDirectives()
        details.changeStatus()
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        if(notificationStore.showAlert) setTimeout(() => notificationStore.manageNotificationAlert(), 2000)
      })
  }

  return {
    directives,
    newDirectiveModal,
    newDirectiveForm,
    imageUrl,
    directive,
    details,
    infoFormModal,
    infoForm,
    newImageFormModal,
    imageForm,
    getAllDirectives,
    registerDirective,
    manageImage,
    selectDirective,
    editDirectiveInfo,
    setImageToForm,
    updateDirectiveImage,
    deleteDirective,
    activateDirective,
  }
})