<template>
  <div>
    <PortalHeader :title="title"/>
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import PortalHeader from '@/components/PortalHeader.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'Base',
  data() {
    return {
      title: 'Vue news',
    };
  },
  components: {
    PortalHeader,
    Navigation,
  },
};
</script>
