import type { RouteRecordRaw } from 'vue-router';

import LayoutPage from '@/layout/LayoutPage.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: LayoutPage,
    redirect: '/about',
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/options',
    name: 'options',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/OptionsApi.vue'),
  },
  {
    path: '/composition',
    name: 'composition',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CompositionApi.vue'),
  },
];

export default routes;
