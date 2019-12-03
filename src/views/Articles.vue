<template>
  <div class="articles">
    <PortalHeader :title="title" />
    <ArticleList />
  </div>
</template>

<script>
import PortalHeader from '@/components/PortalHeader.vue';
import ArticleList from '@/components/ArticleList.vue';

export default {
  name: 'articles',
  components: {
    PortalHeader,
    ArticleList,
  },
  data() {
    return {
      title: 'Lista članaka',
    };
  },
};
</script>

<style>
</style>
