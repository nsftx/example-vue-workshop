<template>
  <div class="articlesList">
    <ArticleItem v-for="article in articles"
                 :key="article.id"
                 :item="article" />
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue';

export default {
  name: 'ArticlesList',
  components: {
    ArticleItem,
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'The Most Important Feature in Vue',
          author: 'Michael Thiessen',
          date: '2019-11-15',
          thumb: 'images/avatar1.jpeg',
        },
        {
          id: 2,
          title: 'Production-ready Vue SSR in 5 Simple Steps',
          author: 'Oleg Pisklov',
          date: '2019-11-20',
          thumb: 'images/avatar2.jpeg',
        },
        {
          id: 3,
          title: 'CSS Modules in Vue.js',
          author: 'Frida Nyvall',
          date: '2019-11-21',
          thumb: 'images/avatar3.jpeg',
        },
        {
          id: 4,
          title: 'Suspense – new feature in Vue 3',
          author: 'Filip Rakowski',
          date: '2019-11-22',
          thumb: 'images/avatar4.jpeg',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.articlesList {
  padding: 12px;
}
</style>
