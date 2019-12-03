<template>
  <div class="articles"
       ref="articlesInput">
    <!-- <input ref="articlesInput"/> -->
    <ArticlesList :articles="articles" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ArticlesList from '@/components/ArticlesList.vue';

export default {
  name: 'Articles',
  components: {
    ArticlesList,
  },
  data() {
    return {
      title: 'Vue News',
    };
  },
  computed: {
    ...mapGetters([
      'articles',
    ]),
  },
  methods: {
    ...mapActions([
      'loadArticles',
    ]),
  },
  beforeCreate() {
    /* console.log('=> beforeCreate Hook');
    console.log('this.title', this.title); */
  },
  created() {
    /* console.log('=> created Hook');
    console.log('this.title', this.title);
    console.log('this.$refs.articlesInput', this.$refs.articlesInput); */
    this.loadArticles();
  },
  beforeMount() {
    /* console.log('=> beforeMount Hook');
    console.log('this.$refs.articlesInput', this.$refs.articlesInput); */
  },
  mounted() {
    /* console.log('=> mounted Hook');
    console.log('this.$refs.articlesInput', this.$refs.articlesInput); */
  },
};
</script>
