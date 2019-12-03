<template>
  <div class="article">
    <PortalHeader :title="title" />
    <ArticleDetail />
  </div>
</template>

<script>
import PortalHeader from '@/components/PortalHeader.vue';
import ArticleDetail from '@/components/ArticleDetail.vue';

export default {
  name: 'Article',
  components: {
    PortalHeader,
    ArticleDetail,
  },
  data() {
    return {
      title: 'Detalj članka',
    };
  },
};
</script>

<style>
</style>
