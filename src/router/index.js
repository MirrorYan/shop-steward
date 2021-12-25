import { createWebHistory, createRouter } from "vue-router";
import store from '@/store';

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
    path: '/sales',
    name: 'Sales',
    component: () => import('@/views/Sales.vue'),
    meta: {
      title: '售货单'
    }
  },
  {
    path: '/returned',
    name: 'Returned',
    component: () => import('@/views/Returned.vue'),
    mata: {
      title: '退货单'
    }
  },
  {
    path: '/login',
    name: 'Login',
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

// 全局前置导航守卫
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('token') && to.name !== 'Login')
    next({ name: 'Login' });
  else next();
});

export default router;
