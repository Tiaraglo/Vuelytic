import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import store from '../store'
import Toastify from 'toastify-js'

const routes = [
  { path: '/login', name: 'Login', component: Login },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      Toastify({
        text: 'You have to login first',
        duration: 3000,
        gravity: 'top',
        position: 'right',
        backgroundColor: '#ff5f6d',
        stopOnFocus: true,
        close: true
      }).showToast()
      next({ name: 'Login' })
    } else {
      next()
    }
  } else if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
