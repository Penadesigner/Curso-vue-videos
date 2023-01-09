import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Videos from '../views/VideoView.vue'
import About from '../views/AboutView.vue'
import Contato from '../views/ContatoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/videos',
    name: 'videos',
    component: Videos
  }
  ,
  {
    path: '/contato',
    name: 'contato',
    component: Contato
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
