import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Login from './Login.vue'
import About from './About.vue'
import Content from './Content.vue'
import SignUp from './SignUp.vue'
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
      component: About,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/content',
      name: 'content',
      component: Content,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
  ],
})
