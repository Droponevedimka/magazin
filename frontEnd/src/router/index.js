import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../components/navigation/main/index.vue'


const routes = [
    {
      path: '/',
      name: 'Main',
      component: MainPage
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router