import Vue from 'vue';
import VueRouter from 'vue-router';
import Articles from '../views/Articles.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "base" */ '@/layouts/Base.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'articles',
        name: 'articles',
        component: Articles,
        meta: {
          authRequired: true,
          title: 'Vue news',
        },
      },
      {
        path: 'article/:id',
        name: 'article',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "article" */ '../views/Article.vue'),
        meta: {
          authRequired: true,
          title: 'Vue article',
        },
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '@/views/Contact.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
