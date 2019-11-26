<template>
  <div class="articleDetail"
       v-if="article">
    <div class="title">{{article.title}}</div>
    <div class="text"
         v-html="article.text"></div>
    <div class="date">{{article.date}}</div>
  </div>
</template>

<script>
import { find } from 'lodash';
import articlesMock from '@/utility/articlesMock';

export default {
  name: 'ArticleDetail',
  data() {
    return {
    };
  },
  computed: {
    article() {
      return find(articlesMock, { id: this.$route.params.id });
    },
  },
};
</script>

<style lang="scss">
.articleDetail {
  margin: 12px;
  padding: 12px;
  background-color: #fff;
  position: relative;

  .title {
    font-size: 26px;
  }
}
</style>
