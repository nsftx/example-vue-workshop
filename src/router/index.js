import Vue from 'vue';
import VueRouter from 'vue-router';
import articleRoutes from './articleRoutes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "base" */ '@/layouts/Base'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
      },
      ...articleRoutes,
    ],
    /* children: [], // prebaciti header u base layout komponentu koja će biti parent ovim rutama
    meta: {
      authRequired: true,
      title: '', // skontati još neki primjer ovoga
    }, */
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
