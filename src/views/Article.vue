<template>
  <div class="article">
    <PortalHeader title="Vue News"/>
    <ArticleDetail/>
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
};
</script>
