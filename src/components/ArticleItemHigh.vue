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

<style lang="scss" scoped>
  .articleItem {
    background-color: lightcoral;
    color: white;

    .thumb {
      width: 160px;
      height: 160px;
    }

    .title {
      font-size: 28px;
    }
  }
</style>
