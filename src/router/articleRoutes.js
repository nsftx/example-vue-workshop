export default [
  {
    path: 'articles',
    name: 'articles',
    component: () => import(/* webpackChunkName: "articles" */ '@/views/Articles'),
    meta: {
      authRequired: true,
      title: 'Vue articles',
    },
  },
  {
    path: 'article/:id',
    name: 'article',
    component: () => import(/* webpackChunkName: "article" */ '@/views/Article.vue'),
    meta: {
      authRequired: true,
      title: 'Vue articles',
    },
  },
];
