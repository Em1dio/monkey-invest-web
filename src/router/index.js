import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import VueCookies from 'vue-cookies';
import './../plugins/axios';
import Home from '@/views/Home.vue';
import Layout from '@/components/index.vue';

Vue.use(VueRouter);
Vue.use(VueCookies);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { guest: true },
  },
  {
    path: '/stocks',
    component: Layout,
    redirect: '/stocks/create/:id',
    children: [
      {
        path: '/create',
        name: 'dgdgd',
        component: Dashboard,
        meta: { requiresAuth: true },
      },
      {
        path: '/analytics',
        name: 'Analytics',
        component: () => import('@/views/analytics'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
      },
      {
        path: '/analytics',
        name: 'Analytics',
        component: () => import('@/views/analytics'),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    next();
  } else {
    if (to.matched.some((record) => record.meta.requiresAuth))
      if (Vue.$cookies.isKey('token')) {
        next();
      } else {
        console.log('it requires auth ');
        next({ name: 'Home' });
      }
  }
});

export default router;
