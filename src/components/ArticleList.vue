<template>
  <div class="articlesList">
    <CategoryFilter :categories="categories"
                    @change="setFilterCategory"/>
    <ArticleItemHigh v-for="article in filteredArticles"
                 :key="article.id"
                 :item="article" />
  </div>
</template>

<script>
import { map, uniq, filter } from 'lodash';
import { mapGetters } from 'vuex';
// import ArticleItem from './ArticleItem.vue';
import ArticleItemHigh from './ArticleItemHigh.vue';
import CategoryFilter from '@/components/CategoryFilter.vue';

const defaultCategory = 'all';

export default {
  name: 'ArticlesList',
  components: {
    ArticleItemHigh,
    CategoryFilter,
  },
  data() {
    return {
      filterCategory: defaultCategory,
    };
  },
  computed: {
    ...mapGetters([
      'articles',
    ]),
    categories() {
      const categories = map(this.articles, article => article.category);
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
  beforeUpdate() {
    // console.log('=> beforeUpdate hook!', this.filterCategory);
  },
  updated() {
    // console.log('=> updated hook!', this.filterCategory);
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
