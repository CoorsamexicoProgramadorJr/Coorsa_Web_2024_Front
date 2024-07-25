import './assets/base.css'
import "@fancyapps/ui/dist/carousel/carousel.css"
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
