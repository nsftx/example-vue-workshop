<template>
  <div class="articles"
       ref="articleContainer">
    <ArticleList />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ArticleList from '@/components/ArticleList.vue';

export default {
  name: 'articles',
  components: {
    ArticleList,
  },
  data() {
    return {
      title: 'Lista članaka',
    };
  },
  methods: {
    ...mapActions([
      'loadArticles',
    ]),
  },
  created() {
    this.loadArticles();
  },
  mounted() {},
};
</script>

<style>
</style>
