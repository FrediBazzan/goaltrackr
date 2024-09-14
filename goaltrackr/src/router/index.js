import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Savings from '../views/savings.vue'
import Goals from '../views/goals.vue'
import Account from '../views/account.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/savings',
      name: 'savings',
      component: Savings
    },
    {
      path: '/goals',
      name: 'goals',
      component: Goals
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
  ]
})

export default router
