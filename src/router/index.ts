import { createRouter, createWebHashHistory } from 'vue-router';

import NProgress from '@/utils/progress';

import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to: any, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
