<template>
  <div class="home">
    <PortalHeader title="Vue News"/>
    <ArticlesList/>
  </div>
</template>

<script>
import PortalHeader from '@/components/PortalHeader.vue';
import ArticlesList from '@/components/ArticlesList.vue';

export default {
  name: 'HomePage',
  components: {
    PortalHeader,
    ArticlesList,
  },
};
</script>
