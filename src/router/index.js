import Vue from 'vue';
import VueRouter from 'vue-router';
import Articles from '../views/Articles.vue';

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
      {
        path: '/articles',
        name: 'articles',
        component: Articles,
      },
    ],
    /* children: [], // prebaciti header u base layout komponentu koja će biti parent ovim rutama
    meta: {
      authRequired: true,
      title: '', // skontati još neki primjer ovoga
    }, */
  },
  {
    path: '/article/:id',
    name: 'article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "article" */ '@/views/Article.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
