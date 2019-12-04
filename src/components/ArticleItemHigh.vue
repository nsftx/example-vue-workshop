<template>
  <a class="articleItem"
     :href="getLink(item.id)">
    <img class="thumb"
         :src="item.thumb"
         v-show="hasThumb">
    <div class="title">{{item.title}}</div>
  </a>
</template>

<script>
import ArticleItem from './ArticleItem.vue';

export default {
  name: 'ArticleItemHigh',
  extends: ArticleItem,
};
</script>

<style lang="scss">
  .articleItem {
    background-color: lightcoral;
    height: 180px;
    color: white;
  }
</style>
