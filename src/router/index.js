import { createWebHistory, createRouter } from "vue-router";

// 路由懒加载:
// component: () => import('@/views/Login.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/purchase',
    name: 'Purchase',
    component: () => import('@/views/Purchase.vue'),
    meta: {
      title: '进货单'
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "locin" */ '../views/Login.vue'),
    meta: {
      title: '登录'
    }
  }
]

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
