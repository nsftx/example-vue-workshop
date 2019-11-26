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
  props: {
    articles: Array,
  },
};
</script>

<style lang="scss">
.articlesList {
  padding: 12px;
}
</style>
