<template>
  <div class="articles">
    <!-- <input ref="articlesInput"/> -->
    <PortalHeader :title="title" />
    <ArticlesList :articles="articles" />
  </div>
</template>

<script>
import PortalHeader from '@/components/PortalHeader.vue';
import ArticlesList from '@/components/ArticlesList.vue';
import articlesMock from '@/utility/articlesMock';

export default {
  name: 'Articles',
  components: {
    PortalHeader,
    ArticlesList,
  },
  data() {
    return {
      title: 'Vue News',
      articles: articlesMock,
    };
  },
  beforeCreate() {
    console.log('=> beforeCreate Hook');
    console.log('this.title', this.title);
  },
  created() {
    console.log('=> created Hook');
    console.log('this.title', this.title);
    console.log('this.$refs.articlesInput', this.$refs.articlesInput);
  },
  beforeMount() {
    console.log('=> beforeMount Hook');
    console.log('this.$refs.articlesInput', this.$refs.articlesInput);
  },
  mounted() {
    console.log('=> mounted Hook');
    console.log('this.$refs.articlesInput', this.$refs.articlesInput);
  },
};
</script>
