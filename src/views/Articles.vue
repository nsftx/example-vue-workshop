<template>
  <div class="articles">
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
};
</script>
