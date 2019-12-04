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
import { map } from 'lodash';
import { translatable } from '../mixins';

export default {
  name: 'Navigation',
  mixins: [
    translatable,
  ],
  data() {
    return {
      itemData: [
        {
          titleKey: 'homePageLabel',
          to: '/',
        },
        {
          titleKey: 'articlesLabel',
          to: '/articles',
        },
        {
          titleKey: 'contactLabel',
          to: '/contact',
        },
      ],
    };
  },
  computed: {
    items() {
      return map(this.itemData, item => ({
        title: this.translations[item.titleKey],
        to: item.to,
      }));
    },
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
