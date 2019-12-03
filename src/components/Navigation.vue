<template>
  <div class="navigation">
    <router-link class="navigation-item"
                 tag="div"
                 v-for="item in items"
                 :key="item.title"
                 :to="item.to">
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      items: [
        {
          title: 'Home',
          to: '/',
        },
        {
          title: 'Articles',
          to: '/articles',
        },
        {
          title: 'Contact',
          to: '/contact',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.navigation {
  display: flow-root;
  margin-bottom: 12px;
}

.navigation-item {
  padding: 12px 0;
  float: left;
  width: (100 / 3) * 1%;
  text-align: center;
  background-color: whitesmoke;
  cursor: pointer;

  &.router-link-exact-active {
    background-color: lightsalmon;
  }
}
</style>
