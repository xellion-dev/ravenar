import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import login from './login.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
  ],
})
