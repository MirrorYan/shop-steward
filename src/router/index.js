import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "locin" */ '../views/Login.vue'),
    
  }
]

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
