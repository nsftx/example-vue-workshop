<template>
  <div class="articlesList">
    <div class="categories">
      <div class="category"
           v-for="category in categories"
           :key="category"
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
import { uniq, map, filter } from 'lodash';
import ArticleItem from '@/components/ArticleItem.vue';

const defaultCategory = 'all';

export default {
  name: 'ArticlesList',
  components: {
    ArticleItem,
  },
  props: {
    articles: Array,
  },
  data() {
    return {
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
    setFilterCategory(filterCategory) {
      this.filterCategory = filterCategory;
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
