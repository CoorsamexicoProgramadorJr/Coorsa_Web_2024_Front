import './assets/base.css'
import "@fancyapps/ui/dist/carousel/carousel.css"
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
