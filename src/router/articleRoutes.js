export default [
  {
    path: 'articles',
    name: 'articles',
    component: () => import(/* webpackChunkName: "articles" */ '@/views/Articles'),
    meta: {
      authRequired: true,
    },
  },
  {
    path: 'article/:id',
    name: 'article',
    component: () => import(/* webpackChunkName: "article" */ '@/views/Article.vue'),
  },
];
