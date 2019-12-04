<template>
  <div>
    <PortalHeader>
      <template v-slot:mainTitle>
        <h1>{{ title }}</h1>
      </template>
      <template v-slot:subTitle>
        <span>Covering all the bases</span>
      </template>
    </PortalHeader>
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
      title: 'Better than Best Vue.js Portal',
    };
  },
  components: {
    PortalHeader,
    Navigation,
  },
};
</script>
