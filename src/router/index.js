import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ConocenosView from '@/views/ConocenosView.vue'
import ServiciosView from '@/views/ServiciosView.vue'
import TalentoView from '@/views/TalentoView.vue'
import BlogView from '@/views/BlogView.vue'
import ContactoView from '@/views/ContactoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/conocenos',
      name: 'conocenos',
      component: ConocenosView
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: ServiciosView
    },
    {
      path: '/talento',
      name: 'talento',
      component: TalentoView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/contacto/:vacancyId?',
      name: 'contacto',
      component: ContactoView,
    }
  ]
})

export default router
