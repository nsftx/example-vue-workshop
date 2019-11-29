<template>
  <div>
    <PortalHeader :title="title" />
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import PortalHeader from '@/components/PortalHeader.vue';

export default {
  name: 'Base',
  components: {
    Navigation,
    PortalHeader,
  },
  data() {
    return {
      title: 'Vue News',
    };
  },
};
</script>
