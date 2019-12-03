<template>
  <div class="articlesList">
    <div class="categories">
      <div class="category"
           v-for="(category, index) in categories"
           :key="index"
           @click="setFilterCategory(category)">
        {{category}}
      </div>
    </div>
    <ArticleItem v-for="article in filteredArticles"
                 :key="article.id"
                 :item="article" />
  </div>
</template>

<script>
import { map, uniq, filter } from 'lodash';
import ArticleItem from './ArticleItem.vue';
import articlesMock from '@/utility/articlesMock';

const defaultCategory = 'all';

export default {
  name: 'ArticlesList',
  components: {
    ArticleItem,
  },
  data() {
    return {
      articles: articlesMock,
      filterCategory: defaultCategory,
    };
  },
  computed: {
    categories() {
      const categories = map(this.articles, article => article.category);
      categories.unshift(defaultCategory);
      return uniq(categories);
    },
    filteredArticles() {
      if (this.filterCategory !== defaultCategory) {
        return filter(this.articles, { category: this.filterCategory });
      }

      return this.articles;
    },
  },
  methods: {
    setFilterCategory(category) {
      this.filterCategory = category;
    },
  },
};
</script>

<style lang="scss">
.articlesList {
  padding: 12px;

  .categories {
    display: flow-root;
    margin-bottom: 12px;
  }

  .category {
    float: left;
    width: (100 / 3) * 1%;
    text-align: center;
    background-color: whitesmoke;
    cursor: pointer;
  }
}
</style>
