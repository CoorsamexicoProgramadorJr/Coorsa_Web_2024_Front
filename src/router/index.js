import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import StartView from '@/views/StartView.vue'
import ConocenosView from '@/views/ConocenosView.vue'
import ServiciosView from '@/views/ServiciosView.vue'
import TalentoView from '@/views/TalentoView.vue'
import BlogView from '@/views/BlogView.vue'
import ContactoView from '@/views/ContactoView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'start',
          component: StartView
        },
        {
          path: 'conocenos',
          name: 'conocenos',
          component: ConocenosView
        },
        {
          path: 'servicios',
          name: 'servicios',
          component: ServiciosView
        },
        {
          path: 'talento',
          name: 'talento',
          component: TalentoView
        },
        {
          path: 'blog',
          name: 'blog',
          component: BlogView
        },
        {
          path: 'contacto/:vacancyId?',
          name: 'contacto',
          component: ContactoView,
        },
        {
          path: 'login',
          name: 'login',
          component: LoginView
        },
      ]
    },
    {
      path: '/panel-principal',
      name: 'panel principal',
      component: () => import('@/views/PrincipalPanelView.vue'),
      beforeEnter: () => {
        if(localStorage.length == 0) return '/login'
      },
      children: [
        {
          path: '',
          name: 'Bienvenida',
          component: () => import('@/views/Administration/WelcomeView.vue')
        },
        {
          path: 'vacantes',
          name: 'Vacantes',
          component: () => import('@/views/Administration/VacanciesView.vue')
        },
        {
          path: 'categorias',
          name: 'Categorias',
          component: () => import('@/views/Administration/CategoriesView.vue')
        },
        {
          path: 'consultas',
          name: 'Consultas',
          component: () => import('@/views/Administration/ConsultsView.vue')
        },
        {
          path: 'postulaciones',
          name: 'Postulaciones',
          component: () => import('@/views/Administration/ApplicationsView.vue')
        },
        {
          path: 'directivos',
          name: 'Directivos',
          component: () => import('@/views/Administration/DirectivesView.vue')
        }
      ]
    }
  ]
})
export default router
